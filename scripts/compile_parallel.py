import os
import json
import re
from concurrent.futures import ThreadPoolExecutor

base_dir = r"G:\My Drive\80-Shared\Team-Shared\Abeka_Videos\Abeka Video"
g5_dir = os.path.join(base_dir, "Grade 5")
g3_dir = os.path.join(base_dir, "Grade 3")

output_js_path = r"C:\Users\DT.HANG\Downloads\ABK\src\data\lessonsData.js"

def format_day_name(folder_name):
    match = re.search(r'(\d+)', folder_name)
    if match:
        num = int(match.group(1))
        return f"Ngày {num:03d}"
    return folder_name

def parse_seconds(time_str):
    if not time_str:
        return 0
    try:
        parts = str(time_str).strip().split(':')
        if len(parts) == 2:
            return int(parts[0]) * 60 + int(parts[1])
        elif len(parts) == 3:
            return int(parts[0]) * 3600 + int(parts[1]) * 60 + int(parts[2])
    except Exception:
        pass
    return 0

def normalize_timestamp_map(raw_map, subj_clean, day_num):
    if not raw_map or not isinstance(raw_map, list):
        return []
    norm = []
    for item in raw_map:
        if not isinstance(item, dict):
            continue
        time_range = item.get("time_range") or item.get("time") or ""
        start_sec = item.get("start_seconds")
        if start_sec is None:
            if "-" in time_range:
                start_sec = parse_seconds(time_range.split("-")[0].strip())
            elif ":" in time_range:
                start_sec = parse_seconds(time_range.strip())
            else:
                start_sec = 0

        end_sec = item.get("end_seconds")
        if end_sec is None:
            if "-" in time_range:
                end_sec = parse_seconds(time_range.split("-")[1].strip())
            else:
                end_sec = start_sec + 60

        title = item.get("teacher_activity") or item.get("title") or item.get("act") or f"Mở đầu bài giảng {subj_clean}"
        desc = item.get("core_concept") or item.get("desc") or item.get("conc") or f"Nội dung trọng tâm môn {subj_clean} Bài {day_num:03d}."
        book_ref = item.get("book_reference") or item.get("bookRef") or item.get("ref") or f"{subj_clean} Bài {day_num:03d}"

        norm.append({
            "startTime": start_sec,
            "endTime": end_sec,
            "title": title,
            "desc": desc,
            "bookRef": book_ref
        })
    return norm

def normalize_quiz_data(raw_quiz):
    if not raw_quiz or not isinstance(raw_quiz, list):
        return []
    norm = []
    for idx, q in enumerate(raw_quiz):
        if not isinstance(q, dict):
            continue
        qid = q.get("id") or q.get("qNum") or f"q{idx+1}"
        question = q.get("question") or q.get("qText") or ""
        options = q.get("options") or q.get("opts") or []
        correct = q.get("correct") or q.get("ans") or q.get("correct_answer") or "A"
        explanation = q.get("explanation") or q.get("exp") or ""
        textbook_ref = q.get("textbook_page_reference") or q.get("bookRef") or ""

        norm.append({
            "id": str(qid),
            "question": question,
            "options": options,
            "correct": str(correct).strip().upper(),
            "explanation": explanation,
            "textbook_page_reference": textbook_ref
        })
    return norm

def process_subject_task(args):
    subj_path, grade, day_str, day_num, subj_clean, legacy_key = args
    book_data = {}
    ubd_data = {}
    interactive_data = {}
    whisper_segs = []
    whisper_quizzes = []

    if os.path.exists(subj_path) and os.path.isdir(subj_path):
        try:
            for fname in os.listdir(subj_path):
                if fname.endswith('.json'):
                    fpath = os.path.join(subj_path, fname)
                    try:
                        with open(fpath, 'r', encoding='utf-8') as f:
                            content = json.load(f)
                        if fname == 'book_and_timestamp.json':
                            book_data = content
                        elif fname == 'ubd_analysis.json':
                            ubd_data = content
                        elif fname == 'interactive_learning.json':
                            interactive_data = content
                        else:
                            if isinstance(content, dict):
                                if 'segments' in content:
                                    whisper_segs = content['segments']
                                if 'quizzes' in content:
                                    whisper_quizzes = content['quizzes']
                    except Exception:
                        pass
        except Exception:
            pass

    book_id = book_data.get("book_identification") or book_data.get("bookIdentification") or ubd_data.get("meta") or {}
    raw_ts = book_data.get("timestamp_map") or book_data.get("timestampMap") or ubd_data.get("stage3_learning_plan", {}).get("timestamp_mapping") or []
    ts_map = normalize_timestamp_map(raw_ts, subj_clean, day_num)

    raw_quiz = interactive_data.get("quiz") or interactive_data.get("quizData") or ubd_data.get("formative_quiz") or []
    quiz_data = normalize_quiz_data(raw_quiz)

    flashcards = interactive_data.get("flashcards", [])
    slides = interactive_data.get("slides", [])

    teacher = book_id.get("teacher") or book_data.get("teacher") or "Miss Emma Spaugh (Abeka Academy)"
    book_title = book_id.get("primary_textbook") or book_id.get("textbook") or book_data.get("bookTitle") or f"{subj_clean} Work-text"
    book_pages = book_id.get("textbook_pages") or book_data.get("bookPages") or f"Lesson {day_num}"
    manual_ref = book_id.get("supplementary_materials") or book_id.get("supplementary") or book_data.get("manualRef") or f"{grade} Video Manual"

    # Whisper Fallback
    if not ts_map and whisper_segs:
        ts_map = []
        for seg in whisper_segs[:30]:
            ts_map.append({
                "startTime": int(seg.get("start", 0)),
                "endTime": int(seg.get("end", 0)),
                "title": f"Phân đoạn {seg.get('id', 0) + 1}",
                "desc": seg.get("text", "").strip(),
                "bookRef": f"{subj_clean} Bài {day_num:03d}"
            })

    if not quiz_data and whisper_quizzes:
        quiz_data = normalize_quiz_data(whisper_quizzes)

    # Placeholders if still empty
    if not ts_map:
        ts_map = [{
            "startTime": 0,
            "endTime": 60,
            "title": f"Mở đầu bài giảng {subj_clean} ({day_str})",
            "desc": f"Giới thiệu nội dung trọng tâm bài học môn {subj_clean} bài {day_num:03d} & dặn dò bài tập.",
            "bookRef": f"{subj_clean} Bài {day_num:03d}"
        }]

    if not quiz_data:
        quiz_data = [{
            "id": "q1",
            "question": f"Bài học {subj_clean} {day_str} thuộc khối lớp mấy?",
            "options": ["A. Grade 5", "B. Grade 3", "C. Grade 1", "D. Grade 2"],
            "correct": "A" if grade == "Grade 5" else "B",
            "explanation": f"Chương trình tiêu chuẩn Abeka {grade}."
        }]

    if not flashcards:
        flashcards = [{
            "term": f"{subj_clean} Core Concept",
            "category": f"{grade} Concept",
            "definition": f"Khái niệm trọng tâm bài học môn {subj_clean} {day_str}.",
            "memoryTip": f"Ghi nhớ kiến thức chuẩn chương trình Abeka {grade}."
        }]

    if not slides:
        slides = [{
            "slideNumber": 1,
            "title": f"Khung Bài Học {subj_clean} ({day_str})",
            "tag": f"{grade} Overview",
            "bulletPoints": [
                f"Chủ đề trọng tâm {subj_clean} {day_str}",
                "Tích hợp hệ thống phân tích UbD & Timestamp Map",
                "Vẫn hỗ trợ xem Video bài giảng & tài liệu SGK"
            ],
            "keyTakeaway": f"Học tập tự giác và chủ động theo chương trình Abeka {grade}."
        }]

    lesson_obj = {
        "id": legacy_key,
        "grade": grade,
        "day": day_str,
        "subject": f"{subj_clean} (Bài {day_num:03d})",
        "teacher": teacher,
        "videoUrl": book_data.get("videoUrl", ""),
        "driveEmbedUrl": book_data.get("driveEmbedUrl", ""),
        "bookTitle": book_title,
        "bookPages": book_pages,
        "manualRef": manual_ref,
        "bookIdentification": book_id,
        "timestampMap": ts_map,
        "ubdReport": ubd_data,
        "flashcards": flashcards,
        "slides": slides,
        "quizData": quiz_data
    }
    return legacy_key, lesson_obj

def main():
    all_lessons = {}
    tasks = []
    g5_subjects = ["Arithmetic 5", "History 5", "Bible 5", "Language 5", "Reading 5", "Science-Health 5", "Spelling 5", "Writing 5"]
    g3_subjects = ["Arithmetic 3", "History 3", "Bible 3", "Language 3", "Reading 3", "Science-Health 3", "Spelling 3", "Writing 3", "Seatwork 3"]

    print("--- Collecting Tasks for Grade 5 & Grade 3 ---", flush=True)
    if os.path.exists(g5_dir):
        day_folders = sorted(os.listdir(g5_dir))
        for day_folder in day_folders:
            day_path = os.path.join(g5_dir, day_folder)
            if not os.path.isdir(day_path):
                continue
            day_str = format_day_name(day_folder)
            day_num_match = re.search(r'(\d+)', day_str)
            day_num = int(day_num_match.group(1)) if day_num_match else 1

            sub_items = [s for s in os.listdir(day_path) if os.path.isdir(os.path.join(day_path, s))]
            if not sub_items:
                sub_items = g5_subjects

            for subj in sub_items:
                subj_clean = subj.strip()
                if subj_clean in ['test', 'desktop.ini'] or subj_clean.endswith('.gdoc'):
                    continue
                key_slug = f"g5-d{day_num:03d}-{subj_clean.lower().replace(' ', '-')}"
                if day_num == 1 and "arithmetic" in subj_clean.lower():
                    legacy_key = "arithmetic-5"
                else:
                    legacy_key = key_slug

                subj_path = os.path.join(day_path, subj)
                tasks.append((subj_path, "Grade 5", day_str, day_num, subj_clean, legacy_key))

    if os.path.exists(g3_dir):
        day_folders = sorted(os.listdir(g3_dir))
        for day_folder in day_folders:
            day_path = os.path.join(g3_dir, day_folder)
            if not os.path.isdir(day_path):
                continue
            day_str = format_day_name(day_folder)
            day_num_match = re.search(r'(\d+)', day_str)
            day_num = int(day_num_match.group(1)) if day_num_match else 1

            sub_items = [s for s in os.listdir(day_path) if os.path.isdir(os.path.join(day_path, s))]
            if not sub_items:
                sub_items = g3_subjects

            for subj in sub_items:
                subj_clean = subj.strip()
                if subj_clean in ['test', 'desktop.ini'] or subj_clean.endswith('.gdoc'):
                    continue
                key_slug = f"g3-d{day_num:03d}-{subj_clean.lower().replace(' ', '-')}"
                subj_path = os.path.join(day_path, subj)
                tasks.append((subj_path, "Grade 3", day_str, day_num, subj_clean, key_slug))

    print(f"Total subject tasks collected: {len(tasks)}. Executing in parallel...", flush=True)

    with ThreadPoolExecutor(max_workers=32) as executor:
        results = executor.map(process_subject_task, tasks)
        for key, obj in results:
            all_lessons[key] = obj

    print(f"Successfully processed {len(all_lessons)} lessons!", flush=True)

    # Print statistics for Day 1
    for k in ['arithmetic-5', 'g5-d001-spelling-5', 'g5-d001-reading-5', 'g5-d001-science-health-5']:
        if k in all_lessons:
            item = all_lessons[k]
            print(f"Key: {k:25s} | Subj: {item['subject']:22s} | TS: {len(item['timestampMap']):2d} | Quiz: {len(item['quizData']):2d}", flush=True)

    js_content = f"export const LESSONS_DATA = {json.dumps(all_lessons, ensure_ascii=False, indent=2)};\n"

    with open(output_js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"Successfully compiled dataset to {output_js_path}!", flush=True)

if __name__ == '__main__':
    main()

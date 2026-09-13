import os
import json
import re

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

        title = item.get("teacher_activity") or item.get("title") or item.get("act") or ""
        desc = item.get("core_concept") or item.get("desc") or item.get("conc") or ""
        book_ref = item.get("book_reference") or item.get("bookRef") or item.get("ref") or ""

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
        question = q.get("question") or q.get("qText") or q.get("q") or ""
        options = q.get("options") or q.get("opts") or q.get("choices") or []
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

def extract_fallback_flashcards(ubd_data):
    if not ubd_data or not isinstance(ubd_data, dict):
        return []
    cards = []
    stage1 = ubd_data.get("stage1_desired_results", {})
    taxonomy = stage1.get("skill_taxonomy") or ubd_data.get("skill_taxonomy") or []
    for item in taxonomy:
        if isinstance(item, dict):
            cards.append({
                "term": item.get("level_name") or item.get("levelName") or "Skill Level",
                "category": "Skill Taxonomy",
                "definition": item.get("competency_desc") or item.get("desc") or "",
                "memoryTip": item.get("lesson_illustration") or item.get("illustration") or ""
            })
    takeaways = ubd_data.get("key_takeaways", [])
    for item in takeaways:
        if isinstance(item, dict):
            cards.append({
                "term": item.get("title") or "Key Takeaway",
                "category": "Key Takeaway",
                "definition": item.get("content") or item.get("desc") or item.get("description") or "",
                "memoryTip": "Trọng tâm bài học UbD"
            })
    return cards

def extract_fallback_slides(ubd_data, subj_clean, day_num, grade):
    if not ubd_data or not isinstance(ubd_data, dict):
        return []
    slides = []
    meta = ubd_data.get("meta", {})
    stage1 = ubd_data.get("stage1_desired_results", {})
    taxonomy = stage1.get("skill_taxonomy") or ubd_data.get("skill_taxonomy") or []
    takeaways = ubd_data.get("key_takeaways", [])
    pitfalls = ubd_data.get("pitfalls", [])
    
    slides.append({
        "slideNumber": 1,
        "title": f"Tổng Quan Bài Học {subj_clean} (Bài {day_num:03d})",
        "tag": f"{grade} Overview",
        "bulletPoints": [
            f"Giáo viên: {meta.get('teacher', 'Abeka Academy Teacher')}",
            f"Sách giáo khoa: {meta.get('textbook', f'{subj_clean} Work-text')}",
            f"Tài liệu hướng dẫn: {meta.get('supplementary', 'Video Manual')}",
            f"Thời lượng bài giảng: {meta.get('duration', 'Theo Abeka Video')}"
        ],
        "keyTakeaway": f"Dụng cụ cần thiết: {meta.get('supplies', 'Sách bài tập và bút chì')}"
    })
    
    for idx, item in enumerate(taxonomy):
        if isinstance(item, dict):
            slides.append({
                "slideNumber": len(slides) + 1,
                "title": item.get("level_name") or f"Tầng bậc nhận thức {idx+1}",
                "tag": "Skill Taxonomy",
                "bulletPoints": [
                    item.get("competency_desc") or ""
                ],
                "keyTakeaway": item.get("lesson_illustration") or ""
            })

    if takeaways:
        bullets = []
        for t in takeaways:
            if isinstance(t, dict):
                title = t.get("title") or "Key Point"
                content = t.get("content") or t.get("desc") or ""
                bullets.append(f"{title}: {content}")
        if bullets:
            slides.append({
                "slideNumber": len(slides) + 1,
                "title": "Trọng Tâm Kiến Thức (Key Takeaways)",
                "tag": "Core Knowledge",
                "bulletPoints": bullets,
                "keyTakeaway": "Học sinh ghi nhớ và áp dụng vào bài tập"
            })

    return slides

def safe_load_json(file_path):
    if not os.path.exists(file_path):
        return {}
    try:
        with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
            return json.load(f)
    except Exception as e:
        print(f"[WARN] Initial json.load failed for {file_path}: {e}. Attempting auto-repair...")
        try:
            with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
                text = f.read()
            pos_esc = text.find('\\"')
            if pos_esc != -1:
                part_before = text[:pos_esc]
                part_after = text[pos_esc:]
                part_after_clean = part_after.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                full_text = part_before + part_after_clean
                repaired_data = json.loads(full_text)
                print(f"[SUCCESS] Auto-repaired JSON for {file_path}!")
                try:
                    with open(file_path, 'w', encoding='utf-8') as f_out:
                        json.dump(repaired_data, f_out, ensure_ascii=False, indent=2)
                except Exception:
                    pass
                return repaired_data
        except Exception as e2:
            print(f"[ERROR] Auto-repair failed for {file_path}: {e2}")
    return {}

def process_subject_folder(subj_path, grade, day_str, day_num, subj_clean, legacy_key):
    book_data = {}
    ubd_data = {}
    interactive_data = {}

    if os.path.exists(subj_path) and os.path.isdir(subj_path):
        b_path = os.path.join(subj_path, 'book_and_timestamp.json')
        book_data = safe_load_json(b_path)

        u_path = os.path.join(subj_path, 'ubd_analysis.json')
        ubd_data = safe_load_json(u_path)

        i_path = os.path.join(subj_path, 'interactive_learning.json')
        interactive_data = safe_load_json(i_path)

    book_id = book_data.get("book_identification") or book_data.get("bookIdentification") or ubd_data.get("meta") or {}
    raw_ts = book_data.get("timestamp_map") or book_data.get("timestampMap") or ubd_data.get("stage3_learning_plan", {}).get("timestamp_mapping") or []
    ts_map = normalize_timestamp_map(raw_ts, subj_clean, day_num)

    raw_quiz = interactive_data.get("quiz") or interactive_data.get("quizData") or ubd_data.get("formative_quiz") or []
    quiz_data = normalize_quiz_data(raw_quiz)

    flashcards = interactive_data.get("flashcards", [])
    if not flashcards and ubd_data:
        flashcards = extract_fallback_flashcards(ubd_data)

    slides = interactive_data.get("slides", [])
    if not slides and ubd_data:
        slides = extract_fallback_slides(ubd_data, subj_clean, day_num, grade)

    has_any_json = bool(book_data or ubd_data or interactive_data)
    teacher = book_id.get("teacher") or book_data.get("teacher") or ("Abeka Academy Teacher" if has_any_json else "")
    book_title = book_id.get("primary_textbook") or book_id.get("textbook") or book_data.get("bookTitle") or (f"{subj_clean} Work-text" if has_any_json else "")
    book_pages = book_id.get("textbook_pages") or book_data.get("bookPages") or (f"Lesson {day_num}" if has_any_json else "")
    manual_ref = book_id.get("supplementary_materials") or book_id.get("supplementary") or book_data.get("manualRef") or (f"{grade} Video Manual" if has_any_json else "")

    return {
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

def extract_day_num(name):
    m = re.search(r'(\d+)', name)
    return int(m.group(1)) if m else 999

def main():
    if not os.path.exists(g5_dir) and not os.path.exists(g3_dir):
        print(f"[NOTICE] Drive directories not found on this machine. Preserving existing {output_js_path}.")
        return

    all_lessons = {}
    g5_subjects = ["Arithmetic 5", "History 5", "Bible 5", "Language 5", "Reading 5", "Science-Health 5", "Spelling 5", "Writing 5"]
    g3_subjects = ["Arithmetic 3", "History 3", "Bible 3", "Language 3", "Reading 3", "Science-Health 3", "Spelling 3", "Writing 3", "Seatwork 3"]

    print("--- Processing Grade 5 ---")
    if os.path.exists(g5_dir):
        raw_folders = [d for d in os.listdir(g5_dir) if 'Ngày' in d or 'Day' in d]
        day_folders = sorted(raw_folders, key=extract_day_num)
        for day_folder in day_folders:
            day_path = os.path.join(g5_dir, day_folder)
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
                legacy_key = "arithmetic-5" if (day_num == 1 and "arithmetic" in subj_clean.lower()) else key_slug
                subj_path = os.path.join(day_path, subj)
                all_lessons[legacy_key] = process_subject_folder(subj_path, "Grade 5", day_str, day_num, subj_clean, legacy_key)

    print("--- Processing Grade 3 ---")
    if os.path.exists(g3_dir):
        raw_folders = [d for d in os.listdir(g3_dir) if 'Ngày' in d or 'Day' in d]
        day_folders = sorted(raw_folders, key=extract_day_num)
        for day_folder in day_folders:
            day_path = os.path.join(g3_dir, day_folder)
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
                all_lessons[key_slug] = process_subject_folder(subj_path, "Grade 3", day_str, day_num, subj_clean, key_slug)

    print(f"Total compiled lessons: {len(all_lessons)}")

    # Print statistics for Grade 3 Day 1 Arithmetic 3 & Grade 5 Day 1, 2, 3
    for k in ['arithmetic-5', 'g3-d001-arithmetic-3', 'g5-d001-spelling-5', 'g5-d002-spelling-5', 'g5-d003-arithmetic-5']:
        if k in all_lessons:
            item = all_lessons[k]
            print(f"Key: {k:25s} | Subj: {item['subject']:22s} | TS: {len(item['timestampMap']):2d} | Quiz: {len(item['quizData']):2d} | Flash: {len(item['flashcards']):2d} | Slides: {len(item['slides']):2d}")

    import time
    ts_now = time.time()
    js_content = f"// Build timestamp: {ts_now}\nexport const LESSONS_DATA = {json.dumps(all_lessons, ensure_ascii=False, indent=2)};\n"

    with open(output_js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"Successfully compiled dataset to {output_js_path}!")

if __name__ == '__main__':
    main()

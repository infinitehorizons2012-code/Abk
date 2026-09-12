import os
import json
import re

base_dir = r"G:\My Drive\80-Shared\Team-Shared\Abeka_Videos\Abeka Video"
g5_dir = os.path.join(base_dir, "Grade 5")
g3_dir = os.path.join(base_dir, "Grade 3")

def parse_seconds(time_str):
    if not time_str:
        return 0
    try:
        parts = str(time_str).split(':')
        if len(parts) == 2:
            return int(parts[0]) * 60 + int(parts[1])
        elif len(parts) == 3:
            return int(parts[0]) * 3600 + int(parts[1]) * 60 + int(parts[2])
    except Exception:
        pass
    return 0

def normalize_timestamp_map(raw_map):
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

        title = item.get("teacher_activity") or item.get("title") or item.get("act") or "Nội dung bài giảng"
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
        question = q.get("question") or q.get("qText") or ""
        options = q.get("options") or q.get("opts") or []
        correct = q.get("correct") or q.get("ans") or q.get("correct_answer") or "A"
        explanation = q.get("explanation") or q.get("exp") or ""
        textbook_ref = q.get("textbook_page_reference") or q.get("bookRef") or ""

        norm.append({
            "id": qid,
            "question": question,
            "options": options,
            "correct": str(correct).strip().upper(),
            "explanation": explanation,
            "textbook_page_reference": textbook_ref
        })
    return norm

def load_subject_folder(subj_path, grade, day_str, day_num, subj_clean):
    book_json = os.path.join(subj_path, "book_and_timestamp.json")
    ubd_json = os.path.join(subj_path, "ubd_analysis.json")
    interactive_json = os.path.join(subj_path, "interactive_learning.json")
    
    book_data = {}
    ubd_data = {}
    interactive_data = {}

    if os.path.exists(book_json):
        try:
            with open(book_json, 'r', encoding='utf-8') as f:
                book_data = json.load(f)
        except Exception:
            pass

    if os.path.exists(ubd_json):
        try:
            with open(ubd_json, 'r', encoding='utf-8') as f:
                ubd_data = json.load(f)
        except Exception:
            pass

    if os.path.exists(interactive_json):
        try:
            with open(interactive_json, 'r', encoding='utf-8') as f:
                interactive_data = json.load(f)
        except Exception:
            pass

    book_id = book_data.get("book_identification") or book_data.get("bookIdentification") or ubd_data.get("meta") or {}
    raw_ts = book_data.get("timestamp_map") or book_data.get("timestampMap") or ubd_data.get("stage3_learning_plan", {}).get("timestamp_mapping") or []
    ts_map = normalize_timestamp_map(raw_ts)

    raw_quiz = interactive_data.get("quiz") or interactive_data.get("quizData") or ubd_data.get("formative_quiz") or []
    quiz_data = normalize_quiz_data(raw_quiz)

    flashcards = interactive_data.get("flashcards", [])
    slides = interactive_data.get("slides", [])

    teacher = book_id.get("teacher") or book_data.get("teacher") or "Abeka Academy Teacher"
    book_title = book_id.get("primary_textbook") or book_id.get("textbook") or book_data.get("bookTitle") or f"{subj_clean} Work-text"
    book_pages = book_id.get("textbook_pages") or book_data.get("bookPages") or f"Lesson {day_num}"
    manual_ref = book_id.get("supplementary_materials") or book_id.get("supplementary") or book_data.get("manualRef") or f"{grade} Video Manual"

    # Also search for fallback video JSON (whisper transcripts)
    if not ts_map:
        for fname in os.listdir(subj_path):
            if fname.endswith('.json') and fname not in ['book_and_timestamp.json', 'ubd_analysis.json', 'interactive_learning.json']:
                try:
                    with open(os.path.join(subj_path, fname), 'r', encoding='utf-8') as f:
                        vdata = json.load(f)
                        segs = vdata.get("segments", [])
                        if segs:
                            ts_map = []
                            for seg in segs[:30]:
                                ts_map.append({
                                    "startTime": int(seg.get("start", 0)),
                                    "endTime": int(seg.get("end", 0)),
                                    "title": f"Phân đoạn {seg.get('id', 0) + 1}",
                                    "desc": seg.get("text", "").strip(),
                                    "bookRef": f"{subj_clean} Bài {day_num:03d}"
                                })
                        if not quiz_data and vdata.get("quizzes"):
                            quiz_data = normalize_quiz_data(vdata.get("quizzes"))
                except Exception:
                    pass

    return {
        "teacher": teacher,
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

# Test Grade 5 Day 1
print("Testing Grade 5 Day 1 subjects parsing:")
d1 = os.path.join(g5_dir, "Ngày 001")
for s in os.listdir(d1):
    sp = os.path.join(d1, s)
    if os.path.isdir(sp):
        res = load_subject_folder(sp, "Grade 5", "Ngày 001", 1, s)
        print(f"Subj: {s:18s} | TS: {len(res['timestampMap']):2d} | Quiz: {len(res['quizData']):2d} | Flash: {len(res['flashcards']):2d} | Slides: {len(res['slides']):2d} | Has UbD: {bool(res['ubdReport'])}")

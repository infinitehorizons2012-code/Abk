import os
import json
import re

base_dir = r"G:\My Drive\80-Shared\Team-Shared\Abeka_Videos\Abeka Video"
g5_dir = os.path.join(base_dir, "Grade 5")
g3_dir = os.path.join(base_dir, "Grade 3")

output_js_path = r"C:\Users\DT.HANG\Downloads\ABK\src\data\lessonsData.js"

all_lessons = {}

def format_day_name(folder_name):
    match = re.search(r'(\d+)', folder_name)
    if match:
        num = int(match.group(1))
        return f"Ngày {num:03d}"
    return folder_name

# Standard Subjects
g5_subjects = ["Arithmetic 5", "History 5", "Bible 5", "Language 5", "Reading 5", "Science-Health 5", "Spelling 5", "Writing 5"]
g3_subjects = ["Arithmetic 3", "History 3", "Bible 3", "Language 3", "Reading 3", "Science-Health 3", "Spelling 3", "Writing 3", "Seatwork 3"]

# ----------------------------------------------------
# 1. PROCESS GRADE 5 (170 Days)
# ----------------------------------------------------
print("--- Processing Grade 5 ---")
if os.path.exists(g5_dir):
    day_folders = sorted(os.listdir(g5_dir))
    for day_folder in day_folders:
        day_path = os.path.join(g5_dir, day_folder)
        if not os.path.isdir(day_path):
            continue
        
        day_str = format_day_name(day_folder)
        day_num_match = re.search(r'(\d+)', day_str)
        day_num = int(day_num_match.group(1)) if day_num_match else 1

        # Check existing subdirectories
        sub_items = os.listdir(day_path)
        subject_folders = [s for s in sub_items if os.path.isdir(os.path.join(day_path, s))]
        if not subject_folders:
            subject_folders = g5_subjects

        for subj in subject_folders:
            subj_clean = subj.strip()
            key_slug = f"g5-d{day_num:03d}-{subj_clean.lower().replace(' ', '-')}"
            if day_num == 1 and "arithmetic" in subj_clean.lower():
                legacy_key = "arithmetic-5"
            else:
                legacy_key = key_slug

            subj_path = os.path.join(day_path, subj)
            book_json = os.path.join(subj_path, "book_and_timestamp.json")
            ubd_json = os.path.join(subj_path, "ubd_analysis.json")
            interactive_json = os.path.join(subj_path, "interactive_learning.json")

            if os.path.exists(book_json) and os.path.exists(ubd_json) and os.path.exists(interactive_json):
                try:
                    with open(book_json, 'r', encoding='utf-8') as f:
                        book_data = json.load(f)
                    with open(ubd_json, 'r', encoding='utf-8') as f:
                        ubd_data = json.load(f)
                    with open(interactive_json, 'r', encoding='utf-8') as f:
                        interactive_data = json.load(f)
                    
                    all_lessons[legacy_key] = {
                        "id": legacy_key,
                        "grade": "Grade 5",
                        "day": day_str,
                        "subject": f"{subj_clean} (Bài {day_num:03d})",
                        "teacher": book_data.get("bookIdentification", {}).get("teacher", "Miss Emma Spaugh (Abeka Academy)"),
                        "videoUrl": book_data.get("videoUrl", ""),
                        "driveEmbedUrl": book_data.get("driveEmbedUrl", ""),
                        "bookTitle": book_data.get("bookTitle", f"{subj_clean} Work-text"),
                        "bookPages": book_data.get("bookPages", f"Lesson {day_num}"),
                        "manualRef": book_data.get("manualRef", "Grade 5 Video Manual"),
                        "bookIdentification": book_data.get("bookIdentification", {}),
                        "timestampMap": book_data.get("timestampMap", []),
                        "ubdReport": ubd_data.get("stage1_desired_results", {}),
                        "flashcards": interactive_data.get("flashcards", []),
                        "slides": interactive_data.get("slides", []),
                        "quizData": interactive_data.get("quizData", [])
                    }
                    continue
                except Exception:
                    pass

            # Placeholder entry for G5
            all_lessons[legacy_key] = {
                "id": legacy_key,
                "grade": "Grade 5",
                "day": day_str,
                "subject": f"{subj_clean} (Bài {day_num:03d})",
                "teacher": "Miss Emma Spaugh (Abeka Academy)",
                "videoUrl": "",
                "driveEmbedUrl": "",
                "bookTitle": f"{subj_clean} Work-text (Abeka Grade 5)",
                "bookPages": f"Bài học {day_num:03d}",
                "manualRef": "Grade 5 Video Manual",
                "bookIdentification": {
                    "teacher": "Miss Emma Spaugh (Abeka Academy)",
                    "videoFile": f"Grade 5 - {day_num:03d} - {subj_clean}.mp4",
                    "primary_textbook": f"{subj_clean} Work-text (Abeka)",
                    "textbook_pages": f"Lesson {day_num}",
                    "required_supplies": "Sách bài tập, bút chì, giấy nháp làm bài."
                },
                "timestampMap": [
                    {
                        "startTime": 0, "endTime": 60, "title": f"Mở đầu bài giảng {subj_clean} (Ngày {day_num:03d})",
                        "desc": "Giới thiệu nội dung trọng tâm bài học & dặn dò bài tập.", "bookRef": f"{subj_clean} Bài {day_num:03d}"
                    }
                ],
                "flashcards": [
                    {
                        "term": f"{subj_clean} Core Concept",
                        "category": "Grade 5 Concept",
                        "definition": f"Khái niệm trọng tâm bài học môn {subj_clean} Ngày {day_num:03d}.",
                        "memoryTip": "Ghi nhớ kiến thức chuẩn chương trình Abeka Grade 5."
                    }
                ],
                "slides": [
                    {
                        "slideNumber": 1,
                        "title": f"Khung Bài Học {subj_clean} (Ngày {day_num:03d})",
                        "tag": "Grade 5 Overview",
                        "bulletPoints": [
                            f"Chủ đề trọng tâm {subj_clean} Ngày {day_num:03d}",
                            "Tích hợp hệ thống phân tích UbD & Timestamp Map",
                            "Vẫn hỗ trợ xem Video bài giảng & tài liệu SGK"
                        ],
                        "keyTakeaway": "Học tập tự giác và chủ động theo chương trình Abeka Grade 5."
                    }
                ],
                "quizData": [
                    {
                        "id": "q1",
                        "question": f"Bài học {subj_clean} Ngày {day_num:03d} thuộc khối lớp mấy?",
                        "options": ["A. Grade 5", "B. Grade 3", "C. Grade 1", "D. Grade 2"],
                        "correct": "A",
                        "explanation": "Chương trình tiêu chuẩn Abeka Grade 5."
                    }
                ]
            }

# ----------------------------------------------------
# 2. PROCESS GRADE 3 (170 Days)
# ----------------------------------------------------
print("--- Processing Grade 3 ---")
if os.path.exists(g3_dir):
    day_folders = sorted(os.listdir(g3_dir))
    for day_folder in day_folders:
        day_path = os.path.join(g3_dir, day_folder)
        if not os.path.isdir(day_path):
            continue
        
        day_str = format_day_name(day_folder)
        day_num_match = re.search(r'(\d+)', day_str)
        day_num = int(day_num_match.group(1)) if day_num_match else 1

        sub_items = os.listdir(day_path)
        subject_folders = [s for s in sub_items if os.path.isdir(os.path.join(day_path, s))]
        if not subject_folders:
            subject_folders = g3_subjects

        for subj in subject_folders:
            subj_clean = subj.strip()
            key_slug = f"g3-d{day_num:03d}-{subj_clean.lower().replace(' ', '-')}"

            all_lessons[key_slug] = {
                "id": key_slug,
                "grade": "Grade 3",
                "day": day_str,
                "subject": f"{subj_clean} (Bài {day_num:03d})",
                "teacher": "Abeka Academy Teacher",
                "videoUrl": "",
                "driveEmbedUrl": "",
                "bookTitle": f"{subj_clean} Work-text (Abeka Grade 3)",
                "bookPages": f"Bài học {day_num:03d}",
                "manualRef": "Grade 3 Video Manual",
                "bookIdentification": {
                    "teacher": "Abeka Academy Teacher",
                    "videoFile": f"Grade 3 - {day_num:03d} - {subj_clean}.mp4",
                    "primary_textbook": f"{subj_clean} Work-text (Abeka Grade 3)",
                    "textbook_pages": f"Lesson {day_num}",
                    "required_supplies": "Sách bài tập Grade 3, bút chì, nháp."
                },
                "timestampMap": [
                    {
                        "startTime": 0, "endTime": 60, "title": f"Mở đầu bài giảng {subj_clean} (Ngày {day_num:03d})",
                        "desc": "Giới thiệu nội dung trọng tâm bài học & dặn dò bài tập.", "bookRef": f"Grade 3 {subj_clean}"
                    }
                ],
                "flashcards": [
                    {
                        "term": f"{subj_clean} Core Concept",
                        "category": "Grade 3 Concept",
                        "definition": f"Khái niệm trọng tâm môn {subj_clean} Bài {day_num:03d}.",
                        "memoryTip": "Ghi nhớ kiến thức chuẩn chương trình Abeka Grade 3."
                    }
                ],
                "slides": [
                    {
                        "slideNumber": 1,
                        "title": f"Trọng Tâm Bài Học {subj_clean} (Ngày {day_num:03d})",
                        "tag": "Grade 3 Overview",
                        "bulletPoints": [
                            f"Bài giảng môn {subj_clean} Lớp 3 Ngày {day_num:03d}",
                            "Khung học tập UbD tích hợp Video & SGK Abeka",
                            "Chương trình tiểu học Abeka Academy"
                        ],
                        "keyTakeaway": f"Nắm vững kiến thức môn {subj_clean} theo lộ trình Abeka Grade 3."
                    }
                ],
                "quizData": [
                    {
                        "id": "q1",
                        "question": f"Bài học {subj_clean} (Ngày {day_num:03d}) thuộc khối lớp mấy?",
                        "options": ["A. Grade 3", "B. Grade 5", "C. Grade 1", "D. Grade 2"],
                        "correct": "A",
                        "explanation": "Chương trình tiêu chuẩn Abeka Grade 3."
                    }
                ]
            }

print(f"Total compiled lessons across Grade 3 & Grade 5: {len(all_lessons)}")

js_content = f"export const LESSONS_DATA = {json.dumps(all_lessons, ensure_ascii=False, indent=2)};\n"

with open(output_js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully compiled dataset to {output_js_path}!")

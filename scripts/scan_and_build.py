import os
import json
import glob

base_dir = r"G:\My Drive\80-Shared\Team-Shared\Abeka_Videos\Abeka Video"

grades_to_scan = {
    "Grade 5": os.path.join(base_dir, "Grade 5"),
    "Grade 3": os.path.join(base_dir, "Grade 3")
}

def scan_grade(grade_name, grade_path):
    print(f"--- Scanning {grade_name} at {grade_path} ---")
    if not os.path.exists(grade_path):
        print(f"Error: Path does not exist: {grade_path}")
        return {}
    
    day_folders = sorted(os.listdir(grade_path))
    found_json_count = 0
    total_days = 0

    for day_folder in day_folders:
        full_day_path = os.path.join(grade_path, day_folder)
        if os.path.isdir(full_day_path):
            total_days += 1
            # Check for json files inside this day folder or subfolders
            json_files = glob.glob(os.path.join(full_day_path, "**", "*.json"), recursive=True)
            if json_files:
                found_json_count += len(json_files)
                print(f"[{grade_name}] {day_folder}: Found {len(json_files)} JSON files -> {json_files}")

    print(f"Summary {grade_name}: Total Days: {total_days}, Days/Subfolders with JSON: {found_json_count}")

if __name__ == "__main__":
    for name, path in grades_to_scan.items():
        scan_grade(name, path)

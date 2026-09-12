import os
import json
import glob

g3_day1_files = glob.glob(r"G:\My Drive\80-Shared\Team-Shared\Abeka_Videos\Abeka Video\Grade 3\Ng* 001\**\*.json", recursive=True)
print(f"Found {len(g3_day1_files)} files in Grade 3 Day 1")
for f in g3_day1_files:
    print("File:", f)
    try:
        with open(f, 'r', encoding='utf-8') as fh:
            data = json.load(fh)
            print("Keys:", list(data.keys()))
            if isinstance(data, dict):
                for k, v in data.items():
                    if isinstance(v, dict):
                        print(f"  {k} keys:", list(v.keys()))
                    elif isinstance(v, list):
                        print(f"  {k} len:", len(v))
    except Exception as e:
        print("Error reading:", e)

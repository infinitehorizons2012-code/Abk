import arithmeticSubtitles from './arithmeticSubtitles.json';

export const LESSONS_DATA = {
  "arithmetic-5": {
    id: "arithmetic-5",
    grade: "Grade 5",
    day: "Ngày 001",
    subject: "Arithmetic 5 (Toán Học)",
    teacher: "Miss Emma Spaugh (Abeka Academy)",
    videoUrl: "https://lh3.googleusercontent.com/d/16JlibrmSh3BZFmM3bVVm6DiGabaHgv_o",
    driveEmbedUrl: "https://drive.google.com/file/d/16JlibrmSh3BZFmM3bVVm6DiGabaHgv_o/preview",
    driveVideoPath: "G:\\My Drive\\80-Shared\\Team-Shared\\Abeka_Videos\\Abeka Video\\Grade 5\\Ngày 001\\Arithmetic 5\\Grade 5 - 001 - Arithmetic 5.mp4",
    bookTitle: "Arithmetic 5 (Work-text) (Ấn bản 4/5, Abeka - AR)",
    bookPages: "Lesson 1, Trang 1–2 (Place Value through Hundred Billions, Roman Numerals)",
    manualRef: "Grade 5 Video Manual (Tr. T6, Tr. 2)",
    
    timestampMap: [
      {
        startTime: 0,
        endTime: 60,
        title: "🌟 Chào mừng môn Toán Lớp 5 & Dụng cụ học tập",
        desc: "Miss Emma Spaugh chào mừng học sinh. Yêu cầu chuẩn bị sẵn bút chì và tờ giấy nháp.",
        bookRef: "Arithmetic 5 tr. 1; Video Manual tr. 2",
        topic: "Welcome & Preparation"
      },
      {
        startTime: 60,
        endTime: 180,
        title: "📖 Khám phá cuốn sách bài tập Arithmetic 5",
        desc: "Hướng dẫn cấu trúc sách Work-text, vị trí phần Handbook phía sau sách và cách kẹp giấy nháp ở đầu trang.",
        bookRef: "Arithmetic 5 tr. 1 (Introduction & Handbook)",
        topic: "Workbook Layout"
      },
      {
        startTime: 180,
        endTime: 420,
        title: "⚡ Khởi động: Luyện tính nhẩm (Mental Math)",
        desc: "Thực hành phản xạ tính nhẩm chuỗi phép tính: 16 - 6 + 3 + 4 = 17. Quy tắc rèn phản xạ 'Equals!'. Ôn bảng nhân 2.",
        bookRef: "Video Manual Appendix B (Facts Sheets)",
        topic: "Mental Math & Speed Drills"
      },
      {
        startTime: 420,
        endTime: 900,
        title: "🔢 Lý thuyết chính: Bảng Giá Trị Vị Trí (Place Value)",
        desc: "Học 4 Lớp Số (Periods): Ones, Thousands, Millions, Billions. Phân biệt Place (Vị trí) và Value (Giá trị). Nắm đến Hundred Billions.",
        bookRef: "Arithmetic 5 tr. 1 (Place Value Chart)",
        topic: "Place Value through Hundred Billions"
      },
      {
        startTime: 900,
        endTime: 1400,
        title: "🏛️ Chữ Số La Mã Cơ Bản (Roman Numerals)",
        desc: "Học 7 ký tự chữ số La Mã: I (1), V (5), X (10), L (50), C (100), D (500), M (1000). Quy tắc cộng và trừ vạch số.",
        bookRef: "Arithmetic 5 tr. 2 (Roman Numerals Rule)",
        topic: "Roman Numerals"
      },
      {
        startTime: 1400,
        endTime: 2174,
        title: "📝 Thực hành bài tập & Dặn dò về nhà",
        desc: "Hướng dẫn làm bài tập phần Classroom Practice tr. 1-2. Hướng dẫn chuẩn bị cho Speed Test 1.",
        bookRef: "Arithmetic 5 tr. 2 (Classroom Practice 1-6)",
        topic: "Guided Practice & Homework"
      }
    ],

    subtitles: arithmeticSubtitles,

    quizData: [
      {
        id: 1,
        question: "In the Place Value system through Hundred Billions, how many digits are contained in each full 'period' separated by commas?",
        options: ["A. 2 digits", "B. 3 digits", "C. 4 digits", "D. 5 digits"],
        correct: "B",
        explanation: "Each period (Ones, Thousands, Millions, Billions) in the standard Place Value Chart contains exactly 3 digits: ones, tens, and hundreds position (Arithmetic 5 Work-text, Page 1)."
      },
      {
        id: 2,
        question: "What is the difference between the 'Place' and the 'Value' of the digit 7 in the number 47,820?",
        options: [
          "A. Place is Thousands; Value is 7,000",
          "B. Place is 7,000; Value is Thousands",
          "C. Place is Hundreds; Value is 700",
          "D. Place is Ten-Thousands; Value is 70,000"
        ],
        correct: "A",
        explanation: "'Place' refers to the positional name (Thousands place), whereas 'Value' refers to the numerical worth of the digit in that place (7 x 1,000 = 7,000) (Arithmetic 5 Page 1)."
      },
      {
        id: 3,
        question: "Which fundamental Roman numeral letter represents the quantity 50?",
        options: ["A. V", "B. X", "C. L", "D. C"],
        correct: "C",
        explanation: "According to the Roman Numeral table on Page 2 of Arithmetic 5: I=1, V=5, X=10, L=50, C=100, D=500, M=1000."
      },
      {
        id: 4,
        question: "When writing Roman Numerals, if a letter of smaller value precedes a letter of larger value (e.g., IX), what arithmetic rule applies?",
        options: [
          "A. Add the values together",
          "B. Subtract the smaller value from the larger value",
          "C. Multiply the two values",
          "D. Divide the larger value by the smaller value"
        ],
        correct: "B",
        explanation: "Subtractive Principle: A smaller symbol placed before a larger symbol means subtraction (e.g., IX = 10 - 1 = 9) (Arithmetic 5 Page 2)."
      },
      {
        id: 5,
        question: "What is the correct Roman numeral representation for the number 44?",
        options: ["A. XXXXIIII", "B. XLIV", "C. LXIV", "D. VL"],
        correct: "B",
        explanation: "40 is written as XL (50 - 10), and 4 is written as IV (5 - 1). Combining them gives XLIV (Arithmetic 5 Page 2)."
      }
    ],

    flashcards: [
      {
        term: "Period (Lớp số)",
        definition: "Mỗi nhóm 3 chữ số được phân tách bằng dấu phẩy trong hệ thập phân (Ones, Thousands, Millions, Billions).",
        bookRef: "Arithmetic 5 tr. 1",
        memoryTip: "Nhớ 3 chữ số: Hàng đơn vị, hàng chục, hàng trăm tạo thành 1 Period!"
      },
      {
        term: "Place vs. Value",
        definition: "Place là tên vị trí (vd: Thousands place). Value là giá trị thực tế của chữ số đó (vd: 7,000).",
        bookRef: "Arithmetic 5 tr. 1",
        memoryTip: "Place = Địa chỉ | Value = Số tiền trong địa chỉ đó!"
      },
      {
        term: "Roman Numerals: L, C, D, M",
        definition: "L = 50, C = 100 (Century), D = 500, M = 1000 (Millennium).",
        bookRef: "Arithmetic 5 tr. 2",
        memoryTip: "C đại diện cho Century (100 năm), M đại diện cho Millennium (1000 năm)!"
      },
      {
        term: "Mental Math Reflex Rule",
        definition: "Chỉ bật dậy phát biểu sau khi cô giáo hô chữ 'Equals!'.",
        bookRef: "Video Manual App. B",
        memoryTip: "Nghe hết phép tính -> Đợi 'Equals!' -> Bật dậy trả lời!"
      }
    ],

    slides: [
      {
        title: "Slide 1: Tổng Quan Bài Học Arithmetic 5 - Lesson 1",
        content: "• Khám phá Bảng Giá Trị Vị Trí mở rộng đến Hàng Trăm Tỷ (Hundred Billions).\n• Nắm vững 4 Lớp Số (Periods) & Kỹ năng phân tích Place vs. Value.\n• Thành thạo 7 Chữ số La Mã cơ bản (I, V, X, L, C, D, M) và quy tắc viết số.",
        tag: "NotebookLM Summary Card 1"
      },
      {
        title: "Slide 2: Cấu Trúc Bảng Place Value (Hệ Thống Số Thập Phân)",
        content: "• 4 Periods: Billions | Millions | Thousands | Ones.\n• Mỗi Period gồm 3 cột: Hundreds - Tens - Ones.\n• Ví dụ số: 345,678,901,234 -> 345 Hundred Billions!",
        tag: "NotebookLM Summary Card 2"
      },
      {
        title: "Slide 3: Bí Quyết Chữ Số La Mã (Roman Numerals Secrets)",
        content: "• Ký tự chuẩn: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.\n• Cộng thêm: Viết bên phải (VI = 5 + 1 = 6).\n• Trừ bớt: Viết bên trái (IV = 5 - 1 = 4). Không lặp lại 1 chữ cái quá 3 lần!",
        tag: "NotebookLM Summary Card 3"
      }
    ],

    ubdReportMd: `
# BÁO CÁO PHÂN TÍCH THIẾT KẾ SƯ PHẠM (UbD) - ARITHMETIC 5 (LESSON 1)

## 1. GIAI ĐOẠN 1: Xác Định Kết Quả Mong Muốn (Desired Results & CLOs)
- **Skill Taxonomy (Cây Kỹ Năng)**:
  - *Foundation*: Nhớ 7 chữ số La Mã cơ bản (I, V, X, L, C, D, M) và 4 lớp số (Periods).
  - *Core*: Phân biệt Place (Vị trí) và Value (Giá trị); đặt tính cộng nhiều chữ số có nhớ.
  - *Applied*: Đọc và viết các số lớn đến Hàng Trăm Tỷ; giải bài toán có lời văn (Story Problems).
  - *Meta-cognitive*: Thử lại phép tính cộng bằng phép thử ngược; kẹp sẵn giấy nháp để tự rà soát.
- **CLOs (Chuẩn Đầu Ra)**:
  1. Người học đọc và phân tích đúng tên Place và giá trị Value của bất kỳ chữ số nào trong phạm vi 100 tỷ (Arithmetic 5 tr. 1).
  2. Người học chuyển đổi chính xác giữa số Ả Rập và số La Mã trong phạm vi 1-1,000 (Arithmetic 5 tr. 2).
  3. Người học thực hiện phản xạ tính nhẩm (Mental Math) chính xác trong vòng 3 giây theo hiệu lệnh.

## 2. GIAI ĐOẠN 3: Lập Kế Hoạch Học Tập (Just-In-Time Content)
- *Place Value Chart (tr. 1)*: Công cụ JIT giúp học sinh định hình cấu trúc 4 Period khi đọc số lớn (Video 08:00 - 12:00).
- *Roman Numeral Rules (tr. 2)*: Công cụ JIT cung cấp nguyên tắc cộng/trừ vạch số để học sinh tự đổi XLIV = 44 (Video 15:00 - 20:00).

## 3. CÁC BẪY CÓ THỂ GẶP PHẢI (Pitfalls / Traps)
1. **Lẫn lộn Place và Value**:
   - *Tình huống*: Hỏi "Value of 7 in 47,820".
   - *Lỗi*: Trả lời "Thousands" (đó là Place).
   - *Giải pháp*: Nhớ quy tắc "Place = Tên địa chỉ, Value = Con số cụ thể (7,000)".
2. **Viết lặp lại chữ số La Mã quá 3 lần**:
   - *Tình huống*: Viết số 40.
   - *Lỗi*: Viết XXXX.
   - *Giải pháp*: Áp dụng quy tắc trừ: XL (50 - 10 = 40).

## 4. NỘI DUNG CỐT LÕI CẦN NẮM (Key Takeaways)
1. Mỗi Period gồm 3 vị trí (Hundreds, Tens, Ones) cách nhau bằng dấu phẩy.
2. Roman Numerals: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.
3. Kẹp sẵn giấy nháp ở trang 1 để rèn thói quen tính toán cẩn thận.
`
  },

  "science-health-5": {
    id: "science-health-5",
    grade: "Grade 5",
    day: "Ngày 001",
    subject: "Science-Health 5 (Khoa Học)",
    teacher: "Abeka Academy Science Teacher",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    driveVideoPath: "G:\\My Drive\\80-Shared\\Team-Shared\\Abeka_Videos\\Abeka Video\\Grade 5\\Ngày 001\\Science-Health 5\\Grade 5 - 001 - Science-Health 5.mp4",
    bookTitle: "Investigating God's World (5th Edition, Abeka)",
    bookPages: "Chapter 1: Exploring Mammals (Pages 1–5)",
    manualRef: "Grade 5 Science Video Manual (Lesson 1)",
    
    timestampMap: [
      {
        startTime: 0,
        endTime: 120,
        title: "🌱 Giới thiệu môn Khoa Học Lớp 5 & Sách Investigating God's World",
        desc: "Khám phá thế giới sinh vật do Chúa tạo ra và các quy tắc nghiên cứu khoa học.",
        bookRef: "Investigating God's World tr. 1",
        topic: "Introduction to Mammals"
      },
      {
        startTime: 120,
        endTime: 600,
        title: "🦁 Đặc điểm chung của Động vật có vú (Mammals)",
        desc: "Phân tích 5 đặc điểm cốt lõi: Xương sống (Vertebrates), Ấm nóng (Warm-blooded), Có lông vũ/lông mao (Hair/Fur), Nuôi con bằng sữa (Mammary glands), Thở bằng phổi.",
        bookRef: "Investigating God's World tr. 2-3",
        topic: "Mammal Characteristics"
      },
      {
        startTime: 600,
        endTime: 1200,
        title: "🧬 Phân loại Lông động vật (Guard hair vs. Underhair)",
        desc: "Phân biệt lông bảo vệ bề mặt và lớp lông mịn giữ nhiệt bên trong.",
        bookRef: "Investigating God's World tr. 4",
        topic: "Hair & Temperature Regulation"
      }
    ],

    subtitles: [
      { start: 5.00, end: 10.00, en: "Welcome to Grade 5 Science! Today we explore Investigating God's World.", vi: "Chào mừng các em đến với môn Khoa Học lớp 5!" },
      { start: 120.00, end: 125.00, en: "All mammals are warm-blooded vertebrates designed with hair or fur.", vi: "Tất cả động vật có vú đều là động vật có xương sống hằng nhiệt có lông mao." }
    ],

    quizData: [
      {
        id: 1,
        question: "Which of the following is a universal characteristic of all mammals?",
        options: ["A. Cold-blooded metabolism", "B. Vertebrates with hair or fur", "C. Laying hard-shelled eggs", "D. Breathing through gills"],
        correct: "B",
        explanation: "All mammals are warm-blooded vertebrates that possess hair or fur and produce milk for their young (Investigating God's World, Page 2)."
      },
      {
        id: 2,
        question: "What is the primary function of a mammal's 'underhair' layer?",
        options: ["A. Camouflage from predators", "B. Providing warmth and thermal insulation", "C. Sensing environmental physical contact", "D. Repelling water droplets"],
        correct: "B",
        explanation: "Underhair provides soft, dense thermal insulation to trap body heat, while guard hair protects against moisture and abrasion (Page 4)."
      }
    ],

    flashcards: [
      {
        term: "Vertebrate (Động vật có xương sống)",
        definition: "Động vật có xương sống lưng bảo vệ tủy sống.",
        bookRef: "Science 5 tr. 2",
        memoryTip: "Vertebrate = Vertebrae (Đốt sống)!"
      },
      {
        term: "Warm-blooded (Hằng nhiệt)",
        definition: "Khả năng tự điều hòa và duy trì thân nhiệt ổn định không phụ thuộc vào môi trường.",
        bookRef: "Science 5 tr. 3",
        memoryTip: "Warm-blooded = Thân nhiệt luôn ổn định!"
      }
    ],

    slides: [
      {
        title: "Slide 1: Khám Phá Động Vật Có Vú (Mammals)",
        content: "• Động vật có xương sống (Vertebrates).\n• Thân nhiệt hằng định (Warm-blooded).\n• Lớp vỏ bảo vệ bằng lông mao (Hair/Fur).",
        tag: "Science Card 1"
      }
    ],

    ubdReportMd: `
# BÁO CÁO PHÂN TÍCH UBD - SCIENCE-HEALTH 5 (LESSON 1)

## 1. GIAI ĐOẠN 1: Xác Định Kết Quả Mong Muốn
- **CLOs**:
  1. Người học liệt kê được 5 đặc điểm chung của động vật có vú (Investigating God's World tr. 2).
  2. Phân biệt được chức năng giữa Guard hair và Underhair (tr. 4).
`
  }
};

import React from 'react';
import { 
  FileText, Target, BookOpen, AlertTriangle, Key, Award, Code, CheckCircle, 
  Lightbulb, Zap, ShieldAlert, CheckSquare, Image as ImageIcon, HelpCircle, 
  Compass, Layers, Table, Sparkles
} from 'lucide-react';

export default function UbDReportViewer({ lesson }) {
  // Full unabridged UbD Data structure for Arithmetic 5
  const ubdData = lesson.ubdFullData || {
    lessonTitle: "Arithmetic 5 - Lesson 1: Place Value through Hundred Billions & Roman Numerals",
    metadata: {
      subject: lesson.subject || "Arithmetic 5 (Toán Học Lớp 5)",
      teacher: lesson.teacher || "Miss Emma Spaugh (Abeka Academy)",
      book: lesson.bookTitle || "Arithmetic 5 (Work-text) (Ấn bản 4/5, Abeka - AR)",
      pages: lesson.bookPages || "Lesson 1, Trang 1–2",
      manual: lesson.manualRef || "Grade 5 Video Manual (Tr. T6, Tr. 2)",
      duration: "36 phút 14 giây (Grade 5 - 001 - Arithmetic 5.mp4)"
    },

    bigIdeas: [
      {
        idea: "Hệ Thống Giá Trị Vị Trí Theo Chu Kỳ (Periodic Place Value System)",
        desc: "Mọi số tự nhiên trong hệ thập phân đều được cấu trúc bởi các Lớp Số (Periods) gồm 3 vị trí (Hundreds, Tens, Ones). Việc nắm vững tên Lớp Số giúp con người đọc và biểu diễn những con số vô cùng lớn lên tới hàng trăm tỷ một cách tự nhiên và chính xác."
      },
      {
        idea: "Hai Chiều Biểu Diễn Số Học (Additive/Subtractive vs. Positional Value)",
        desc: "Trong khi hệ số Ả Rập dựa trên vị trí chữ số để xác định giá trị (Positional Value), hệ chữ số La Mã dựa trên nguyên tắc cộng tích lũy và trừ vạch số (Additive & Subtractive Principle) không phụ thuộc vị trí lớp."
      }
    ],

    essentialQuestions: [
      "Tại sao cùng là chữ số 7 nhưng trong 47,820 nó mang giá trị 7,000 còn trong 732,000,014 nó lại mang giá trị 700,000,000?",
      "Quy tắc 'Bù chữ số 0 giữ chỗ (Placeholder Zeros)' giúp bảo vệ cấu trúc các Lớp Số như thế nào khi chuyển từ dạng đọc chữ sang dạng số tiêu chuẩn?",
      "Làm thế nào để hệ thống chữ số La Mã biểu diễn số 44 là XLIV thay vì lặp lại XXXXIIII, và quy tắc này ngăn ngừa nhầm lẫn ra sao?"
    ],

    stage1: {
      taxonomy: [
        {
          level: "1. Foundation (Kỹ Năng Nền Tảng)",
          items: [
            "Thuộc lòng 7 ký tự chữ số La Mã cơ bản: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.",
            "Ghi nhớ thứ tự 4 Lớp Số (Periods) từ phải sang trái: Ones Period, Thousands Period, Millions Period, Billions Period.",
            "Nắm vững quy tắc đặt dấu phẩy (comma) tách nhóm mỗi 3 chữ số kể từ hàng đơn vị."
          ]
        },
        {
          level: "2. Core (Kỹ Năng Cốt Lõi)",
          items: [
            "Phân biệt chính xác tuyệt đối giữa Tên Vị Trí (Place) và Giá Trị Thực Tế (Value) của bất kỳ chữ số nào.",
            "Thực hiện thuật toán cộng nhiều chữ số có nhớ, xử lý chính xác phần mang sang (carrying).",
            "Chuyển đổi linh hoạt hai chiều giữa số Ả Rập và số La Mã phạm vi 1-1,000."
          ]
        },
        {
          level: "3. Applied (Kỹ Năng Ứng Dụng Thực Tế)",
          items: [
            "Đọc và biểu diễn thành thạo các dạng số lớn hàng trăm tỷ ở 3 định dạng: Standard Form, Word Form, và Expanded Form.",
            "Tự phân tích và giải các bài toán có lời văn (Story Problems) thực tế (kỳ nghỉ biển Sophia, dàn hợp xướng 153 thành viên) trên giấy nháp."
          ]
        },
        {
          level: "4. Meta-cognitive (Siêu Nhận Thức & Tự Kiểm Toán)",
          items: [
            "Rèn thói quen tự giác kẹp sẵn tờ giấy nháp ở đầu trang sách ngay khi bắt đầu giờ học.",
            "Ứng dụng Tính chất giao hoán (Commutative Property) để tự kiểm toán kết quả bằng kỹ thuật 'Cộng ngược từ dưới lên'.",
            "Tự rà soát lỗi sai vi phạm quy tắc 'Không lặp quá 3 lần' trong số La Mã."
          ]
        }
      ],
      clos: [
        "CLO 1: Phân tích và xác định chính xác 100% tên Place và giá trị Value của bất kỳ chữ số nào trong phạm vi 100 tỷ (Arithmetic 5 tr. 1).",
        "CLO 2: Chuyển đổi hai chiều mượt mà giữa số Ả Rập và số La Mã phạm vi 1 - 1,000 bám sát quy tắc vạch số (Arithmetic 5 tr. 2).",
        "CLO 3: Thực hiện tính nhẩm phản xạ (Mental Math) chính xác trong vòng 3 giây sau hiệu lệnh 'Equals!' của giáo viên."
      ]
    },

    stage3JitTools: [
      {
        title: "Ẩn dụ \"Họ của nhóm số\" (Family Last Name Analogy)",
        timestamp: "12:00 - 15:00",
        quote: "\"Mỗi lớp số (Period) giống như một gia đình có họ riêng. Lớp đơn vị không cần xướng họ, nhưng lớp sau đó có họ là Thousand, kế tiếp là Million, và lớn nhất hôm nay là Billion\".",
        desc: "Khi học sinh bối rối trước những dãy số dài 10-12 chữ số, cô Emma cung cấp công cụ tư duy trực quan: Khi nghe thấy một 'họ', học sinh đặt một dấu phẩy ngay lập tức. Công cụ này giải phóng tải nhận thức, giúp học sinh viết số hàng chục tỷ dễ dàng như viết một số có 3 chữ số."
      },
      {
        title: "Kỹ thuật \"Bù số 0 giữ chỗ\" (Placeholder Zeros Rule)",
        timestamp: "16:00 - 18:00",
        quote: "\"Ngoại trừ lớp ngoài cùng bên trái, mọi lớp số phải có đúng 3 vị trí. Nếu chỉ nghe thấy 'four million', ta phải lấp đầy bằng hai số 0 ở trước (004)\".",
        desc: "Khi gặp đề bài đọc 'six billion, four million...', giáo viên dừng lại đúng lúc để hỏi Aubrey: 'Tại sao không thể viết ngay số 4 sau dấu phẩy của số 6?'. Giáo viên trang bị ngay quy tắc này giúp học sinh không bao giờ thiếu chữ số 0 giữ chỗ."
      },
      {
        title: "Kỹ thuật \"Cộng ngược để kiểm toán\" (Check by Adding Up)",
        timestamp: "27:00 - 29:00",
        quote: "\"Kẻ hai đường ngang phía trên phép tính và cộng ngược từ dưới lên để đối chiếu kết quả Sum\".",
        desc: "Để rèn luyện tính độc lập và chính xác, cô Emma yêu cầu học sinh kẻ hai đường ngang phía trên phép tính và cộng ngược từ dưới lên. Đây là ứng dụng thực tế vừa đúng lúc của tính chất giao hoán (Commutative Property), giúp học sinh tự phát hiện sai sót trước khi nộp bài."
      },
      {
        title: "Quy tắc phản xạ \"Đợi tiếng hô Equals!\" (Mental Math Stand-up Rule)",
        timestamp: "05:00 - 07:00",
        quote: "\"Học sinh tuyệt đối không bật dậy khi giáo viên chưa đọc xong phép tính. Chỉ khi tiếng 'Equals!' vang lên, ai đứng dậy nhanh nhất mới giành quyền trả lời\".",
        desc: "Công cụ quản lý lớp học và rèn luyện sự tập trung chú ý lắng nghe trọn vẹn phép tính dài (vd: 16 - 6 + 3 + 4) trước khi tính toán phản xạ."
      }
    ],

    pitfalls: [
      {
        situation: "Hỏi giá trị của chữ số 7 trong số 47,820.",
        commonError: "Học sinh trả lời 'Thousands' (trả lời nhầm tên vị trí Place).",
        solution: "Khắc phục bằng công thức ghi nhớ: Place = Tên địa chỉ (Thousands place) | Value = Giá trị tiền mặt cụ thể (7 x 1,000 = 7,000)."
      },
      {
        situation: "Viết số 40 hoặc số 90 bằng chữ số La Mã.",
        commonError: "Viết lặp lại chữ số quá 3 lần: XXXX hoặc VIIII.",
        solution: "Khắc phục: Tuyệt đối không lặp lại 1 chữ cái quá 3 lần. Áp dụng quy tắc trừ khi chữ số nhỏ hơn đứng trước: XL (50 - 10 = 40) và XC (100 - 10 = 90)."
      },
      {
        situation: "Viết số có chữ số 0 giữ chỗ như 'Five million, six thousand'.",
        commonError: "Viết thiếu số 0 giữ chỗ: 5,6,000 hoặc 5,600.",
        solution: "Khắc phục: Áp dụng quy tắc Placeholder Zeros: Mỗi lớp số ở giữa bắt buộc phải có đủ 3 vị trí -> 5,006,000."
      },
      {
        situation: "Đặt tính phép cộng nhiều chữ số không thẳng hàng.",
        commonError: "Viết lệch cột giữa hàng đơn vị và hàng chục dẫn tới cộng nhầm giá trị vị trí.",
        solution: "Khắc phục: Dùng giấy nháp kẻ ô hoặc căn chỉnh thẳng cột từ hàng đơn vị bên phải nhất sang trái."
      }
    ],

    keyTakeaways: [
      "1. Mỗi Period (Lớp số) gồm đúng 3 vị trí (Hundreds, Tens, Ones) được phân tách bằng dấu phẩy từ phải sang trái.",
      "2. 7 chữ số La Mã cốt tủy: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.",
      "3. Luôn kẹp sẵn một tờ giấy nháp ở trang 1 để giải toán có lời văn và kiểm toán kết quả bằng phép cộng ngược từ dưới lên.",
      "4. Quy tắc số La Mã: Nhỏ đứng sau thì CỘNG (VI = 6), Nhỏ đứng trước thì TRỪ (IV = 4). Tuyệt đối không lặp 1 ký tự quá 3 lần!"
    ],

    bloomAssessment: {
      taskContext: "Đóng vai một Nhà Kiểm Toán Số Học (Number Auditor) kiểm tra hồ sơ tài chính ngân hàng và khắc phục các mã số La Mã bị ghi sai.",
      levels: [
        { 
          level: "1. Remember (Nhớ)", 
          task: "Liệt kê 7 chữ số La Mã cơ bản và giá trị tương ứng của chúng.", 
          solution: "I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000 (Trích Arithmetic 5 tr. 2).",
          rubric: "Nhớ đúng 7/7 ký tự đạt 100% điểm."
        },
        { 
          level: "2. Understand (Hiểu)", 
          task: "Giải thích tại sao số 47,820 có Place là Thousands nhưng Value lại là 7,000.", 
          solution: "Vì chữ số 7 nằm ở hàng nghìn (Place = Thousands place), nên giá trị thực tế của nó đại diện cho 7 nhóm 1,000, tức 7 x 1,000 = 7,000 (Value) (Trích Arithmetic 5 tr. 1).",
          rubric: "Phân biệt rõ bản chất Tên Vị Trí và Giá Trị Số Tính Toán."
        },
        { 
          level: "3. Apply (Vận dụng)", 
          task: "Chuyển đổi số 444 sang chữ số La Mã bám sát quy tắc vạch số.", 
          solution: "Tách từng hàng: 400 = CD (500-100), 40 = XL (50-10), 4 = IV (5-1) => Kết quả ghép lại là CDXLIV.",
          rubric: "Đúng cả 3 thành phần tách hàng và áp dụng chuẩn quy tắc trừ."
        },
        { 
          level: "4. Analyze (Phân tích)", 
          task: "Phân tích số 345,678,901,234 thành các Lớp Số (Periods) và ghi rõ giá trị từng Lớp.", 
          solution: "Có 4 Periods từ phải sang trái: Ones Period (234), Thousands Period (901), Millions Period (678), Billions Period (345).",
          rubric: "Phân tích chính xác 4 Lớp Số và đặt dấu phẩy đúng vị trí."
        },
        { 
          level: "5. Evaluate (Đánh giá / Kiểm toán)", 
          task: "Phát hiện lỗi sai trong mã số La Mã 'XXXXIIII' và sửa lại theo tiêu chuẩn hệ thống.", 
          solution: "Lỗi vi phạm: Ký tự X và I bị lặp lại quá 3 lần liên tiếp. Sửa lại: 40 là XL, 4 là IV => Mã chuẩn là XLIV (44).",
          rubric: "Chỉ ra đúng điều luật lặp quá 3 lần và đưa ra mã sửa đổi đúng 100%."
        },
        { 
          level: "6. Create (Sáng tạo)", 
          task: "Tự sáng tác 1 bài toán có lời văn (Story Problem) liên quan đến Place Value và trình bày lời giải kiểm toán trên giấy nháp.", 
          solution: "Ví dụ: Sophia đi du lịch Vịnh Mexico bơi ở biển 17 lần và hồ bơi 15 lần. Lập phép tính: 17 + 15 = 32 lần bơi. Kiểm toán: 15 + 17 = 32 (Cộng ngược).",
          rubric: "Bao gồm kịch bản thực tế (3đ), phép tính nháp có nhãn đơn vị (4đ), phép cộng ngược kiểm toán (3đ)."
        }
      ]
    }
  };

  return (
    <div style={{ maxWidth: '1150px', margin: '0 auto', fontFamily: 'Inter, system-ui, sans-serif', color: '#1e293b' }}>
      
      {/* HEADER BANNER */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
        borderRadius: '24px',
        padding: '30px 28px',
        color: '#ffffff',
        boxShadow: '0 12px 30px rgba(30, 27, 75, 0.25)',
        marginBottom: '24px',
        border: '1.5px solid #4338ca',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(8px)',
          padding: '6px 16px',
          borderRadius: '50px',
          fontSize: '0.85rem',
          fontWeight: '700',
          color: '#a5f3fc',
          marginBottom: '14px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <Sparkles size={16} color="#38bdf8" /> BÁO CÁO PHÂN TÍCH CHUYÊN SÂU NGUYÊN VĂN 100% (UBD 7 GIAI ĐOẠN)
        </div>

        <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#ffffff', marginBottom: '10px', lineHeight: '1.3' }}>
          Arithmetic 5 (Lesson 1): Place Value through Hundred Billions & Roman Numerals
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', maxWidth: '900px', lineHeight: '1.6', marginBottom: '20px' }}>
          Phân tích thiết kế sư phạm ngược (Understanding by Design) bóc tách toàn bộ 100% dữ liệu nguyên văn từ video bài giảng 36 phút, sách giáo khoa Arithmetic 5 (Abeka) và Video Manual, đầy đủ biểu đồ minh họa visual, bài tập Bloom 6 cấp độ và các công cụ sư phạm JIT.
        </p>

        {/* Metadata Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
          background: 'rgba(255, 255, 255, 0.08)',
          padding: '16px',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.12)',
          fontSize: '0.88rem'
        }}>
          <div><strong style={{ color: '#93c5fd' }}>📘 Môn Học:</strong> {ubdData.metadata.subject}</div>
          <div><strong style={{ color: '#93c5fd' }}>👩‍🏫 Giáo Viên:</strong> {ubdData.metadata.teacher}</div>
          <div><strong style={{ color: '#93c5fd' }}>📖 Sách Giáo Khoa:</strong> {ubdData.metadata.book}</div>
          <div><strong style={{ color: '#93c5fd' }}>📑 Phạm Vi Sách:</strong> {ubdData.metadata.pages}</div>
          <div><strong style={{ color: '#93c5fd' }}>📋 Hướng Dẫn:</strong> {ubdData.metadata.manual}</div>
          <div><strong style={{ color: '#93c5fd' }}>⏱️ Thời Lượng:</strong> {ubdData.metadata.duration}</div>
        </div>
      </div>

      {/* BIG IDEAS & ESSENTIAL QUESTIONS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px',
        marginBottom: '24px'
      }}>
        {/* Big Ideas Card */}
        <div style={{ background: '#ffffff', borderRadius: '20px', padding: '24px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#1e1b4b', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Lightbulb color="#6366f1" size={22} /> Ý Tưởng Cốt Lõi (Big Ideas)
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {ubdData.bigIdeas.map((item, idx) => (
              <div key={idx} style={{ background: '#f8fafc', padding: '14px 16px', borderRadius: '14px', borderLeft: '4px solid #6366f1' }}>
                <div style={{ fontWeight: '800', color: '#312e81', fontSize: '0.92rem', marginBottom: '4px' }}>{item.idea}</div>
                <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Questions Card */}
        <div style={{ background: '#ffffff', borderRadius: '20px', padding: '24px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#0c4a6e', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <HelpCircle color="#0284c7" size={22} /> Câu Hỏi Gợi Mở Lớn (Essential Questions)
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {ubdData.essentialQuestions.map((q, idx) => (
              <div key={idx} style={{ background: '#f0f9ff', padding: '14px 16px', borderRadius: '14px', border: '1px solid #bae6fd', color: '#0369a1', fontSize: '0.9rem', fontWeight: '600', lineHeight: '1.6' }}>
                ❓ EQ #{idx + 1}: {q}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 1. GIAI ĐOẠN 1: DESIRED RESULTS & CLOS */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#4338ca', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <Target color="#4f46e5" size={26} /> 1. GIAI ĐOẠN 1: Xác Định Kết Quả Mong Muốn (Desired Results & CLOs)
        </h3>

        <h4 style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '800', marginBottom: '12px' }}>🌳 A. Skill Taxonomy (Cây Kỹ Năng 4 Tầng):</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '22px' }}>
          {ubdData.stage1.taxonomy.map((tax, idx) => (
            <div key={idx} style={{ background: '#f8fafc', padding: '16px', borderRadius: '16px', border: '1.5px solid #e2e8f0' }}>
              <div style={{ fontWeight: '800', color: '#3730a3', fontSize: '0.95rem', marginBottom: '8px' }}>{tax.level}</div>
              <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: '1.6' }}>
                {tax.items.map((item, iIdx) => (
                  <li key={iIdx} style={{ marginBottom: '6px' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h4 style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '800', marginBottom: '12px' }}>🎯 B. Chuẩn Đầu Ra (CLOs - Course Learning Outcomes):</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {ubdData.stage1.clos.map((clo, idx) => (
            <div key={idx} style={{ background: '#eef2ff', padding: '14px 18px', borderRadius: '14px', border: '1px solid #c7d2fe', color: '#312e81', fontSize: '0.93rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle size={20} color="#4f46e5" /> {clo}
            </div>
          ))}
        </div>
      </div>

      {/* VISUAL DIAGRAMS & INFOGRAPHICS SECTION */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#0d9488', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <ImageIcon color="#0d9488" size={26} /> SƠ ĐỒ TRỰC QUAN HỌC LIỆU & INFOGRAPHICS (VISUAL DIAGRAMS)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '20px' }}>
          
          {/* Infographic 1: Place Value Chart */}
          <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '18px', border: '1.5px solid #bbf7d0' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#166534', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              📊 1. Biểu Đồ Bảng Giá Trị Vị Trí (Place Value Chart)
            </h4>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #86efac', marginBottom: '12px', background: '#fff' }}>
              <img 
                src="/images/place_value_chart.jpg" 
                alt="Place Value Chart Diagram" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {/* Interactive HTML Visual Table Fallback / Supplementary */}
            <div style={{ background: '#ffffff', borderRadius: '12px', padding: '14px', border: '1px solid #cbd5e1', overflowX: 'auto' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#475569', marginBottom: '8px', textAlign: 'center' }}>
                BẢNG 4 LỚP SỐ (PERIODS) ĐẾN HÀNG TRĂM TỶ (ARITHMETIC 5 TR. 1)
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', textAlign: 'center' }}>
                <thead>
                  <tr style={{ background: '#0f172a', color: '#fff' }}>
                    <th style={{ padding: '8px', border: '1px solid #334155' }}>BILLIONS PERIOD</th>
                    <th style={{ padding: '8px', border: '1px solid #334155' }}>MILLIONS PERIOD</th>
                    <th style={{ padding: '8px', border: '1px solid #334155' }}>THOUSANDS PERIOD</th>
                    <th style={{ padding: '8px', border: '1px solid #334155' }}>ONES PERIOD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: '#f8fafc', color: '#0f172a', fontWeight: '700' }}>
                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Hundred | Ten | Billions</td>
                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Hundred | Ten | Millions</td>
                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Hundred | Ten | Thousands</td>
                    <td style={{ padding: '8px', border: '1px solid #cbd5e1' }}>Hundreds | Tens | Ones</td>
                  </tr>
                  <tr style={{ background: '#e0f2fe', color: '#0369a1', fontWeight: '800', fontSize: '0.9rem' }}>
                    <td style={{ padding: '8px', border: '1px solid #93c5fd' }}>3 4 5 ,</td>
                    <td style={{ padding: '8px', border: '1px solid #93c5fd' }}>6 7 8 ,</td>
                    <td style={{ padding: '8px', border: '1px solid #93c5fd' }}>9 0 1 ,</td>
                    <td style={{ padding: '8px', border: '1px solid #93c5fd' }}>2 3 4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Infographic 2: Roman Numerals Chart */}
          <div style={{ background: '#fff7ed', padding: '20px', borderRadius: '18px', border: '1.5px solid #fed7aa' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#9a3412', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🏛️ 2. Biểu Đồ Chữ Số La Mã Cơ Bản & Quy Tắc Vạch Số
            </h4>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #fdba74', marginBottom: '12px', background: '#fff' }}>
              <img 
                src="/images/roman_numerals_chart.jpg" 
                alt="Roman Numerals Chart Diagram" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {/* Interactive HTML Roman Table */}
            <div style={{ background: '#ffffff', borderRadius: '12px', padding: '14px', border: '1px solid #cbd5e1' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#475569', marginBottom: '8px', textAlign: 'center' }}>
                7 KÝ TỰ CỐT TỦY & QUY TẮC GHÉP SỐ (ARITHMETIC 5 TR. 2)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textIndent: 0, textAlign: 'center', marginBottom: '10px' }}>
                {[
                  { r: 'I', v: '1' }, { r: 'V', v: '5' }, { r: 'X', v: '10' }, 
                  { r: 'L', v: '50' }, { r: 'C', v: '100' }, { r: 'D', v: '500' }, { r: 'M', v: '1000' }
                ].map((item, i) => (
                  <div key={i} style={{ background: '#fff3ed', padding: '6px 2px', borderRadius: '8px', border: '1px solid #ffedd5' }}>
                    <div style={{ fontWeight: '900', color: '#c2410c', fontSize: '0.95rem' }}>{item.r}</div>
                    <div style={{ fontSize: '0.78rem', color: '#9a3412', fontWeight: '700' }}>{item.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#7c2d12', background: '#ffedd5', padding: '8px 12px', borderRadius: '8px', fontWeight: '600' }}>
                ⚡ <strong>Quy tắc trừ:</strong> IV = 4 (5-1) | XL = 40 (50-10) | CD = 400 (500-100)<br/>
                ⚡ <strong>Không lặp lại:</strong> Tuyệt đối không viết 1 ký tự quá 3 lần!
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. GIAI ĐOẠN 3: LEARNING PLAN & JIT TOOLS */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#0891b2', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <BookOpen color="#0891b2" size={26} /> 2. GIAI ĐOẠN 3: Lập Kế Hoạch Học Tập & Công Cụ Sư Phạm Vừa Đúng Lúc (JIT Tools)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {ubdData.stage3JitTools.map((tool, idx) => (
            <div key={idx} style={{ background: '#f0fdf4', padding: '20px', borderRadius: '18px', border: '1.5px solid #bbf7d0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontWeight: '800', color: '#166534', fontSize: '1.1rem' }}>
                  • {tool.title}
                </span>
                <span style={{ background: '#dcfce7', color: '#15803d', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '800', border: '1px solid #86efac' }}>
                  ⏱️ Mốc Video: {tool.timestamp}
                </span>
              </div>

              <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: '14px', borderLeft: '5px solid #22c55e', fontStyle: 'italic', color: '#15803d', fontSize: '0.98rem', marginBottom: '12px', fontWeight: '600', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                {tool.quote}
              </div>

              <div style={{ fontSize: '0.95rem', color: '#334155', lineHeight: '1.8' }}>
                {tool.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CÁC BẪY CÓ THỂ GẶP PHẢI (PITFALLS & TRAPS) */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#dc2626', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <ShieldAlert color="#dc2626" size={26} /> 3. CÁC BẪY SƯ PHẠM CÓ THỂ GẶP PHẢI (Pitfalls, Misconceptions & Traps)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {ubdData.pitfalls.map((pit, idx) => (
            <div key={idx} style={{ background: '#fff1f2', padding: '18px', borderRadius: '16px', border: '1.5px solid #fecdd3' }}>
              <div style={{ fontWeight: '800', color: '#9f1239', marginBottom: '8px', fontSize: '0.95rem' }}>📌 Tình huống #{idx + 1}: {pit.situation}</div>
              <div style={{ fontSize: '0.9rem', color: '#be123c', background: '#ffe4e6', padding: '10px 14px', borderRadius: '10px', marginBottom: '8px', fontWeight: '700' }}>❌ Lỗi thường gặp: {pit.commonError}</div>
              <div style={{ fontSize: '0.9rem', color: '#065f46', background: '#d1fae5', padding: '10px 14px', borderRadius: '10px', fontWeight: '700' }}>✅ Giải pháp khắc phục: {pit.solution}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. NỘI DUNG CỐT LÕI CẦN NẮM (KEY TAKEAWAYS) */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#d97706', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <Key color="#d97706" size={26} /> 4. NỘI DUNG CỐT LÕI CẦN NẮM (Key Takeaways & Golden Rules)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {ubdData.keyTakeaways.map((take, idx) => (
            <div key={idx} style={{ background: '#fffbeb', padding: '14px 18px', borderRadius: '14px', border: '1.5px solid #fef3c7', color: '#92400e', fontWeight: '700', fontSize: '0.98rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Lightbulb size={20} color="#d97706" /> {take}
            </div>
          ))}
        </div>
      </div>

      {/* 5. GIAI ĐOẠN 2: BLOOM'S TAXONOMY ASSESSMENT (6 LEVELS) */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#7c3aed', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <Award color="#7c3aed" size={26} /> 5. GIAI ĐOẠN 2: BÀI ASSESSMENT THEO BLOOM'S TAXONOMY (6 CẤP ĐỘ)
        </h3>

        <div style={{ background: '#f5f3ff', padding: '16px 20px', borderRadius: '14px', border: '1px solid #ddd6fe', marginBottom: '18px', color: '#5b21b6', fontWeight: '700', fontSize: '0.98rem' }}>
          🎭 <strong>Kịch bản thực tế (Task Context):</strong> {ubdData.bloomAssessment.taskContext}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {ubdData.bloomAssessment.levels.map((lvl, idx) => (
            <div key={idx} style={{ background: '#ffffff', padding: '18px', borderRadius: '16px', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              <div style={{ fontWeight: '800', color: '#6d28d9', fontSize: '1.05rem', marginBottom: '6px' }}>{lvl.level}</div>
              <div style={{ fontSize: '0.95rem', color: '#1e293b', marginBottom: '8px', fontWeight: '600' }}>📝 Bài tập: {lvl.task}</div>
              <div style={{ fontSize: '0.92rem', color: '#047857', background: '#ecfdf5', padding: '10px 14px', borderRadius: '10px', fontWeight: '700', marginBottom: '6px' }}>💡 Đáp án / Lời giải chi tiết: {lvl.solution}</div>
              {lvl.rubric && (
                <div style={{ fontSize: '0.85rem', color: '#6b7280', fontStyle: 'italic' }}>📊 Rubric chấm điểm: {lvl.rubric}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 6. WEB JSON PAYLOAD */}
      <div className="card" style={{ background: '#ffffff', padding: '24px', borderRadius: '16px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Code color="#059669" /> 6. ĐỊNH DẠNG DỮ LIỆU JSON CHO WEBSITE (WEB JSON PAYLOAD)
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '12px' }}>
          Chuỗi JSON nạp Quiz chuẩn xác được xuất liền 1 dòng duy nhất để load trực tiếp lên giao diện học tập:
        </p>

        <div style={{ background: '#0f172a', color: '#38bdf8', padding: '16px', borderRadius: '12px', fontFamily: 'monospace', fontSize: '0.8rem', wordBreak: 'break-all', lineHeight: '1.6' }}>
          {JSON.stringify({ quiz: lesson.quizData })}
        </div>
      </div>
    </div>
  );
}

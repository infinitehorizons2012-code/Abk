import React from 'react';
import { FileText, Target, BookOpen, AlertTriangle, Key, Award, Code, CheckCircle, Lightbulb, Compass, Zap, ShieldAlert } from 'lucide-react';

export default function UbDReportViewer({ lesson }) {
  const ubdData = lesson.ubdFullData || {
    stage1: {
      taxonomy: [
        { level: "Foundation (Nền Tảng)", items: "Nhận diện 7 chữ số La Mã (I, V, X, L, C, D, M); Thuộc lòng 4 lớp số (Periods: Ones, Thousands, Millions, Billions); Quy tắc đặt dấu phẩy cách 3 chữ số." },
        { level: "Core (Cốt Lõi)", items: "Phân biệt chính xác tên vị trí (Place) và giá trị thực tế (Value); Thực hiện thuật toán cộng nhiều chữ số có nhớ và mượn; Chuyển đổi hai chiều số Ả Rập và La Mã." },
        { level: "Applied (Ứng Dụng Thực Tế)", items: "Đọc và viết các số lớn đến Hàng Trăm Tỷ trong đời sống; Tự giải các bài toán đố có lời văn (Story Problems) trên giấy nháp." },
        { level: "Meta-cognitive (Siêu Nhận Thức)", items: "Kẹp sẵn giấy nháp ở đầu trang sách; Áp dụng kỹ thuật 'Cộng ngược từ dưới lên' để tự kiểm toán kết quả; Rà soát lỗi lặp quá 3 chữ số La Mã." }
      ],
      clos: [
        "CLO 1: Phân tích và xác định chính xác Place và Value của bất kỳ chữ số nào trong phạm vi 100 tỷ (Arithmetic 5 tr. 1).",
        "CLO 2: Chuyển đổi hai chiều mượt mà giữa số Ả Rập và số La Mã phạm vi 1 - 1,000 bám sát quy tắc vạch số (Arithmetic 5 tr. 2).",
        "CLO 3: Thực hiện tính nhẩm phản xạ (Mental Math) chính xác trong vòng 3 giây sau hiệu lệnh 'Equals!'."
      ]
    },
    stage3JitTools: [
      {
        title: "Ẩn dụ \"Họ của nhóm số\" (Family Last Name Analogy)",
        timestamp: "12:00 - 15:00",
        quote: "\"Mỗi lớp số (Period) giống như một gia đình có họ riêng. Lớp đơn vị không cần xướng họ, nhưng lớp sau đó có họ là Thousand, kế tiếp là Million, và lớn nhất hôm nay là Billion\".",
        desc: "Khi học sinh bối rối trước những dãy số dài 10-12 chữ số, cô Emma cung cấp công cụ tư duy trực quan này. Mỗi khi nghe thấy một \"họ\", học sinh đặt một dấu phẩy ngay lập tức. Công cụ này giải phóng tải nhận thức, giúp học sinh viết số hàng chục tỷ dễ dàng như viết một số có 3 chữ số."
      },
      {
        title: "Kỹ thuật \"Bù số 0 giữ chỗ\" (Placeholder Zeros Rule)",
        timestamp: "16:00 - 18:00",
        quote: "\"Ngoại trừ lớp ngoài cùng bên trái, mọi lớp số phải có đúng 3 vị trí. Nếu chỉ nghe thấy 'four', ta phải lấp đầy bằng hai số 0 ở trước (004)\".",
        desc: "Khi gặp đề bài đọc \"six billion, four million...\", giáo viên dừng lại đúng lúc để hỏi Aubrey: \"Tại sao không thể viết ngay số 4 sau dấu phẩy của số 6?\". Giáo viên trang bị ngay quy tắc này giúp học sinh không bao giờ thiếu chữ số 0 giữ chỗ."
      },
      {
        title: "Kỹ thuật \"Cộng ngược để kiểm toán\" (Check by Adding Up)",
        timestamp: "27:00 - 29:00",
        quote: "\"Kẻ hai đường ngang phía trên phép tính và cộng ngược từ dưới lên\".",
        desc: "Để rèn luyện tính độc lập và chính xác, cô Emma yêu cầu học sinh kẻ hai đường ngang phía trên phép tính và cộng ngược từ dưới lên. Đây là ứng dụng thực tế vừa đúng lúc của tính chất giao hoán (Commutative Property), giúp học sinh tự phát hiện sai sót trước khi nộp bài."
      }
    ],
    pitfalls: [
      {
        situation: "Hỏi giá trị của chữ số 7 trong số 47,820.",
        commonError: "Học sinh trả lời 'Thousands' (trả lời nhầm tên vị trí Place).",
        solution: "Khắc phục bằng công thức ghi nhớ: Place = Tên địa chỉ (Thousands place) | Value = Giá trị tiền mặt cụ thể (7,000)."
      },
      {
        situation: "Viết số 40 hoặc số 90 bằng chữ số La Mã.",
        commonError: "Viết lặp lại chữ số quá 3 lần: XXXX hoặc VIIII.",
        solution: "Khắc phục: Tuyệt đối không lặp lại 1 chữ cái quá 3 lần. Áp dụng quy tắc trừ khi chữ số nhỏ hơn đứng trước: XL (50 - 10 = 40) và XC (100 - 10 = 90)."
      },
      {
        situation: "Viết số có chữ số 0 giữ chỗ như 'Five million, six thousand'.",
        commonError: "Viết thiếu số 0: 5,6,000 hoặc 5,600.",
        solution: "Khắc phục: Áp dụng quy tắc Placeholder Zeros: Mỗi lớp số ở giữa bắt buộc phải có đủ 3 vị trí -> 5,006,000."
      }
    ],
    keyTakeaways: [
      "Mỗi Period (Lớp số) gồm đúng 3 vị trí (Hundreds, Tens, Ones) được phân tách bằng dấu phẩy.",
      "7 chữ số La Mã cốt tủy: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.",
      "Luôn kẹp sẵn giấy nháp ở trang 1 để giải toán có lời văn và kiểm toán kết quả bằng phép cộng ngược."
    ],
    bloomAssessment: {
      taskContext: "Đóng vai một Nhà Kiểm Toán Số Học (Number Auditor) kiểm tra hồ sơ ngân hàng và khắc phục các mã số La Mã bị ghi sai.",
      levels: [
        { level: "1. Remember (Nhớ)", task: "Liệt kê 7 chữ số La Mã cơ bản và giá trị tương ứng.", solution: "I=1, V=5, X=10, L=50, C=100, D=500, M=1000." },
        { level: "2. Understand (Hiểu)", task: "Giải thích tại sao số 47,820 có Place là Thousands nhưng Value là 7,000.", solution: "Vì chữ số 7 nằm ở hàng nghìn (Place = Thousands), nên giá trị thực tế của nó là 7 x 1,000 = 7,000 (Value)." },
        { level: "3. Apply (Vận dụng)", task: "Chuyển đổi số 444 sang chữ số La Mã.", solution: "400 = CD, 40 = XL, 4 = IV => CDXLIV." },
        { level: "4. Analyze (Phân tích)", task: "Phân tích xem số 345,678,901,234 có mấy Period và đọc tên từng Period.", solution: "Có 4 Periods: Ones (234), Thousands (901), Millions (678), Billions (345)." },
        { level: "5. Evaluate (Đánh giá)", task: "Phát hiện lỗi sai trong cách viết mã số La Mã 'XXXXIIII' và sửa lại.", solution: "Lỗi sai: Lặp lại X và I quá 3 lần. Sửa lại chuẩn: XLIV (44)." },
        { level: "6. Create (Sáng tạo)", task: "Tự sáng tác 1 bài toán có lời văn (Story Problem) liên quan đến Place Value và viết lời giải trên giấy nháp.", solution: "Rubric: Đặt kịch bản thực tế (2đ), Xác định số học chính xác (4đ), Tính toán và thử lại bằng phép cộng ngược (4đ)." }
      ]
    }
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header Banner */}
      <div className="card" style={{ marginBottom: '20px', background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', border: '1px solid #10b981' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#065f46', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileText color="#059669" size={24} />
          Báo Cáo Phân Tích Thiết Kế Sư Phạm Ngược (UbD 7 Giai Đoạn Đầy Đủ)
        </h2>
        <p style={{ fontSize: '0.88rem', color: '#047857', marginTop: '4px' }}>
          Báo cáo phân tích chuyên sâu đầy đủ trọn vẹn bám sát tiến trình video bài giảng và sách giáo khoa Abeka.
        </p>

        {/* Lesson Metadata Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '16px', background: '#ffffff', padding: '14px', borderRadius: '12px', border: '1px solid #a7f3d0', fontSize: '0.88rem' }}>
          <div><strong>📘 Môn học:</strong> {lesson.subject}</div>
          <div><strong>👩‍🏫 Giáo viên:</strong> {lesson.teacher}</div>
          <div><strong>📖 Sách giáo khoa:</strong> {lesson.bookTitle}</div>
          <div><strong>📑 Phạm vi:</strong> {lesson.bookPages}</div>
        </div>
      </div>

      {/* 1. GIAI ĐOẠN 1: DESIRED RESULTS & CLOS */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#4f46e5', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Target color="#4f46e5" /> 1. GIAI ĐOẠN 1: Xác Định Kết Quả Mong Muốn (Desired Results & CLOs)
        </h3>

        <h4 style={{ fontSize: '1rem', color: '#1e293b', marginBottom: '10px' }}>🌳 A. Skill Taxonomy (Cây Kỹ Năng):</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '10px', marginBottom: '16px' }}>
          {ubdData.stage1.taxonomy.map((tax, idx) => (
            <div key={idx} style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1.5px solid #e2e8f0' }}>
              <div style={{ fontWeight: '800', color: '#4338ca', fontSize: '0.88rem', marginBottom: '4px' }}>{tax.level}</div>
              <div style={{ fontSize: '0.85rem', color: '#475569' }}>{tax.items}</div>
            </div>
          ))}
        </div>

        <h4 style={{ fontSize: '1rem', color: '#1e293b', marginBottom: '8px' }}>🎯 B. Chuẩn Đầu Ra (CLOs):</h4>
        <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {ubdData.stage1.clos.map((clo, idx) => (
            <li key={idx} style={{ background: '#eef2ff', padding: '10px 14px', borderRadius: '8px', color: '#312e81', fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={16} color="#4f46e5" /> {clo}
            </li>
          ))}
        </ul>
      </div>

      {/* 2. GIAI ĐOẠN 3: JUST-IN-TIME LEARNING CONTENT & PEDAGOGICAL TOOLS */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#0891b2', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <BookOpen color="#0891b2" /> 2. GIAI ĐOẠN 3: Lập Kế Hoạch Học Tập & Công Cụ Sư Phạm Vừa Đúng Lúc
        </h3>

        <h4 style={{ fontSize: '1rem', color: '#0e7490', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Zap size={18} color="#0891b2" /> Phân Tích Công Cụ Sư Phạm Vừa Đúng Lúc (Just-In-Time Pedagogical Tools):
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {ubdData.stage3JitTools.map((tool, idx) => (
            <div key={idx} style={{ background: '#f0fdf4', padding: '16px', borderRadius: '14px', border: '1.5px solid #bbf7d0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: '800', color: '#166534', fontSize: '1rem' }}>
                  • {tool.title}
                </span>
                <span style={{ background: '#dcfce7', color: '#15803d', padding: '4px 10px', borderRadius: '14px', fontSize: '0.8rem', fontWeight: '800' }}>
                  ⏱️ [{tool.timestamp}]
                </span>
              </div>

              <div style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '10px', borderLeft: '4px solid #22c55e', fontStyle: 'italic', color: '#15803d', fontSize: '0.9rem', marginBottom: '8px', fontWeight: '600' }}>
                {tool.quote}
              </div>

              <div style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.7' }}>
                {tool.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CÁC BẪY CÓ THỂ GẶP PHẢI (PITFALLS / TRAPS) */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#dc2626', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <ShieldAlert color="#dc2626" /> 3. CÁC BẪY CÓ THỂ GẶP PHẢI (Pitfalls / Common Traps)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
          {ubdData.pitfalls.map((pit, idx) => (
            <div key={idx} style={{ background: '#fff1f2', padding: '14px', borderRadius: '12px', border: '1.5px solid #fecdd3' }}>
              <div style={{ fontWeight: '800', color: '#9f1239', marginBottom: '6px', fontSize: '0.9rem' }}>📌 Tình huống #{idx + 1}: {pit.situation}</div>
              <div style={{ fontSize: '0.85rem', color: '#be123c', background: '#ffe4e6', padding: '6px 10px', borderRadius: '6px', marginBottom: '6px', fontWeight: '700' }}>❌ Lỗi thường gặp: {pit.commonError}</div>
              <div style={{ fontSize: '0.85rem', color: '#065f46', background: '#d1fae5', padding: '6px 10px', borderRadius: '6px', fontWeight: '700' }}>✅ Giải pháp: {pit.solution}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. NỘI DUNG CỐT LÕI CẦN NẮM (KEY TAKEAWAYS) */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#d97706', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Key color="#d97706" /> 4. NỘI DUNG CỐT LÕI CẦN NẮM (Key Takeaways)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {ubdData.keyTakeaways.map((take, idx) => (
            <div key={idx} style={{ background: '#fffbeb', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #fef3c7', color: '#92400e', fontWeight: '700', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lightbulb size={16} color="#d97706" /> {take}
            </div>
          ))}
        </div>
      </div>

      {/* 5. GIAI ĐOẠN 2: BLOOM'S TAXONOMY ASSESSMENT */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#7c3aed', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Award color="#7c3aed" /> 5. GIAI ĐOẠN 2: Đánh Giá Theo Thang Nhận Thức Bloom (6 Levels)
        </h3>

        <div style={{ background: '#f5f3ff', padding: '12px', borderRadius: '10px', border: '1px solid #ddd6fe', marginBottom: '12px', color: '#5b21b6', fontWeight: '700', fontSize: '0.88rem' }}>
          🎭 Kịch bản thực tế (Task Context): {ubdData.bloomAssessment.taskContext}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {ubdData.bloomAssessment.levels.map((lvl, idx) => (
            <div key={idx} style={{ background: '#ffffff', padding: '12px', borderRadius: '10px', border: '1.5px solid #e2e8f0' }}>
              <div style={{ fontWeight: '800', color: '#6d28d9', fontSize: '0.92rem', marginBottom: '4px' }}>{lvl.level}</div>
              <div style={{ fontSize: '0.88rem', color: '#1e293b', marginBottom: '6px', fontWeight: '600' }}>📝 Bài tập: {lvl.task}</div>
              <div style={{ fontSize: '0.85rem', color: '#047857', background: '#ecfdf5', padding: '6px 10px', borderRadius: '6px', fontWeight: '700' }}>💡 Hướng dẫn / Đáp án: {lvl.solution}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. WEB JSON PAYLOAD */}
      <div className="card" style={{ background: '#ffffff', padding: '24px', borderRadius: '16px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Code color="#059669" /> 6. Chuỗi Web JSON Payload (Single-Line Web Data)
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

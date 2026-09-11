import React from 'react';
import { 
  FileText, Target, BookOpen, ShieldAlert, Key, Award, Code, CheckCircle, 
  HelpCircle
} from 'lucide-react';

export default function UbDReportViewer({ lesson }) {
  return (
    <div style={{ maxWidth: '1150px', margin: '0 auto', fontFamily: 'Inter, system-ui, sans-serif', color: '#1e293b', lineHeight: '1.75' }}>
      
      {/* DOCUMENT HEADER */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
        borderRadius: '24px',
        padding: '32px 28px',
        color: '#ffffff',
        boxShadow: '0 12px 30px rgba(30, 27, 75, 0.25)',
        marginBottom: '24px',
        border: '1.5px solid #4338ca'
      }}>
        <div style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', color: '#818cf8', letterSpacing: '1px', marginBottom: '8px' }}>
          Thiết Kế Sư Phạm Ngược (UbD) & Thang Nhận Thức Bloom
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#ffffff', marginBottom: '8px', lineHeight: '1.3' }}>
          BÁO CÁO PHÂN TÍCH SƯ PHẠM TOÁN HỌC LỚP 5 (ARITHMETIC 5)
        </h1>
        <div style={{ fontSize: '1rem', color: '#cbd5e1', fontWeight: '600', marginBottom: '20px' }}>
          Chủ đề: Hệ Thống Giá Trị Vị Trí (Place Value through Hundred Billions), Chữ Số La Mã & Phép Cộng Cơ Bản
        </div>

        {/* Metadata Grid */}
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
          <div><strong style={{ color: '#93c5fd' }}>📘 Môn học:</strong> Arithmetic 5 (Bài 001)</div>
          <div><strong style={{ color: '#93c5fd' }}>👩‍🏫 Giáo viên:</strong> Miss Emma Spaugh</div>
          <div><strong style={{ color: '#93c5fd' }}>📖 Học liệu SGK:</strong> Arithmetic 5 Work-text (tr. 1–2)</div>
          <div><strong style={{ color: '#93c5fd' }}>📋 Tài liệu kèm theo:</strong> Video Manual (tr. 2, T6), Facts Sheets</div>
          <div><strong style={{ color: '#93c5fd' }}>⏱️ Thời lượng video:</strong> 36 phút 14 giây</div>
          <div><strong style={{ color: '#93c5fd' }}>✏️ Quy định học tập:</strong> Bút chì, giấy nháp kẹp đầu sách</div>
        </div>
      </div>

      {/* 1. GIAI ĐOẠN 1: DESIRED RESULTS & CLOS */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#4338ca', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <Target color="#4f46e5" size={24} /> 1. GIAI ĐOẠN 1: Xác Định Kết Quả Mong Muốn (Desired Results & CLOs)
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '20px' }}>
          Mô hình Thiết kế ngược (Understanding by Design - UbD) bắt đầu bằng việc xác định rõ những mục tiêu học tập bền vững mà người học cần làm chủ, xây dựng cấu trúc kỹ năng từ tầng bậc tiếp thu cơ sở lên tầng bậc siêu nhận thức.
        </p>

        <h3 style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '800', marginBottom: '14px' }}>
          A. Cây Kỹ Năng 4 Tầng Bậc (Skill Taxonomy)
        </h3>

        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#312e81', color: '#ffffff' }}>
                <th style={{ padding: '12px 14px', border: '1px solid #4338ca', width: '22%' }}>Tầng Bậc Kỹ Năng</th>
                <th style={{ padding: '12px 14px', border: '1px solid #4338ca', width: '42%' }}>Mô Tả Năng Lực Cần Đạt</th>
                <th style={{ padding: '12px 14px', border: '1px solid #4338ca', width: '36%' }}>Minh Họa Cụ Thể (Gắn Liền Bài Học)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f8fafc' }}>
                <td style={{ padding: '14px', border: '1px solid #e2e8f0', fontWeight: '800', color: '#4338ca' }}>
                  1. Kỹ năng Nền tảng<br/><span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 'normal' }}>(Foundation Skills)</span>
                </td>
                <td style={{ padding: '14px', border: '1px solid #e2e8f0' }}>
                  • Nhận diện 10 chữ số cơ sở (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) cấu thành hệ thập phân (Base-10 System).<br/>
                  • Thuộc lòng 7 chữ cái La Mã cơ bản (I, V, X, L, C, D, M) và giá trị số tương ứng.<br/>
                  • Phản xạ tính nhẩm nhanh các chuỗi phép tính cộng trừ cơ bản trong phạm vi 20 (Mental Math Drills).
                </td>
                <td style={{ padding: '14px', border: '1px solid #e2e8f0', color: '#334155' }}>
                  • Đọc ngay: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.<br/>
                  • Tính nhẩm chính xác khi nghe: 16 - 6 + 3 + 4 = 17 ngay khi giáo viên hô "equals" [06:00].
                </td>
              </tr>
              <tr style={{ background: '#ffffff' }}>
                <td style={{ padding: '14px', border: '1px solid #e2e8f0', fontWeight: '800', color: '#0284c7' }}>
                  2. Kỹ năng Cốt lõi<br/><span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 'normal' }}>(Core Skills)</span>
                </td>
                <td style={{ padding: '14px', border: '1px solid #e2e8f0' }}>
                  • Phân biệt chính xác giữa Tên hàng vị trí (Place) và Giá trị của chữ số (Value).<br/>
                  • Nắm vững cấu trúc 4 lớp số (Periods): Ones, Thousands, Millions, Billions và quy tắc phân tách bằng dấu phẩy.<br/>
                  • Đọc và chuyển đổi linh hoạt số tự nhiên qua 3 dạng: Standard Form, Word Form, và Expanded Form.<br/>
                  • Áp dụng thành thạo nguyên tắc cộng (additive) và nguyên tắc trừ (subtractive) của số La Mã.
                </td>
                <td style={{ padding: '14px', border: '1px solid #e2e8f0', color: '#334155' }}>
                  • Trong số 76,584,325,789, chữ số 5 nằm ở hàng Hundred Millions và có giá trị là 500,000,000.<br/>
                  • Viết 4,090,081 dưới dạng khai triển: 4,000,000 + 90,000 + 80 + 1 (bỏ qua các hàng chứa chữ số 0).<br/>
                  • Chuyển đổi 24 thành số La Mã: XXIV (vận dụng IV = 5 - 1).
                </td>
              </tr>
              <tr style={{ background: '#f8fafc' }}>
                <td style={{ padding: '14px', border: '1px solid #e2e8f0', fontWeight: '800', color: '#059669' }}>
                  3. Kỹ năng Ứng dụng<br/><span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 'normal' }}>(Applied Skills)</span>
                </td>
                <td style={{ padding: '14px', border: '1px solid #e2e8f0' }}>
                  • Thực hiện thuật toán cộng nhiều chữ số có nhớ (carrying/regrouping) theo chiều từ phải sang trái (ngược với chiều đọc văn bản).<br/>
                  • Áp dụng tính chất giao hoán (Commutative Property of Addition) để thực hiện kỹ thuật kiểm toán ngược (adding upwards) kiểm tra kết quả.<br/>
                  • Đọc hiểu, mô hình hóa và giải toán có lời văn (Story Problems) trên giấy nháp với đầy đủ danh số đơn vị.
                </td>
                <td style={{ padding: '14px', border: '1px solid #e2e8f0', color: '#334155' }}>
                  • Thực hiện phép tính cộng nhiều số hạng (Addends) để tìm tổng (Sum): Addend + Addend = Sum.<br/>
                  • Bài toán kỳ nghỉ Vịnh Mexico của Sophia: bơi ở biển 17 lần, hồ bơi 15 lần → Lập phép tính nháp: 17 + 15 = 32 times (kèm nhãn đơn vị "times") [33:00 - 34:00].
                </td>
              </tr>
              <tr style={{ background: '#ffffff' }}>
                <td style={{ padding: '14px', border: '1px solid #e2e8f0', fontWeight: '800', color: '#7c3aed' }}>
                  4. Kỹ năng Siêu nhận thức<br/><span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 'normal' }}>(Meta-cognitive Skills)</span>
                </td>
                <td style={{ padding: '14px', border: '1px solid #e2e8f0' }}>
                  • Nhận biết và chủ động phòng tránh các điểm mù tư duy (đặc biệt là bẫy bỏ quên chữ số 0 giữ chỗ - placeholder zeros trong các lớp số khuyết).<br/>
                  • Thiết lập thói quen kiểm tra kép (Double-check routine): luôn cộng ngược từ dưới lên trên để xác nhận tổng trước khi ghi vào bài thi.<br/>
                  • Đánh giá tính hợp lý của kết quả số học trong các tình huống thực tiễn.
                </td>
                <td style={{ padding: '14px', border: '1px solid #e2e8f0', color: '#334155' }}>
                  • Khi viết số "6 billion, 4 million, 581 thousand, 18", học sinh tự rà soát: lớp triệu phải có 3 chữ số (004), lớp đơn vị phải có 3 chữ số (018) → Tự sửa thành 6,004,581,018 thay vì viết sai 6,4,581,18.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '800', marginBottom: '14px' }}>
          B. Chuẩn Đầu Ra Cốt Lõi (Course Learning Outcomes - CLOs)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            "CLO 1: Xác định chính xác 100% tên hàng vị trí (Place) và tính toán giá trị thực tế (Value) của bất kỳ chữ số nào trong hệ thống số tự nhiên mở rộng lên đến lớp Trăm Tỷ (Hundred Billions - SGK trang 1).",
            "CLO 2: Chuyển đổi hai chiều thành thạo giữa ba dạng biểu diễn số: Standard Form (đặt dấu phẩy đúng chu kỳ 3 chữ số), Word Form (dùng dấu gạch nối chính xác cho số ghép từ 21-99), và Expanded Form (xử lý đúng các vị trí có chữ số 0).",
            "CLO 3: Mã hóa và giải mã số tự nhiên với hệ thống chữ số La Mã (I, V, X, L, C, D, M) tuân thủ nghiêm ngặt quy tắc cộng, trừ vị trí và nguyên tắc không lặp lại quá 3 lần một ký tự (SGK trang 2).",
            "CLO 4: Vận dụng thuật toán phép cộng nhiều chữ số có nhớ theo đúng chiều từ phải sang trái, tự kiểm tra tính chính xác bằng phương pháp cộng ngược (Commutative Property), và giải hoàn chỉnh bài toán đố có lời văn trên giấy nháp có kèm danh số chỉ đơn vị."
          ].map((clo, idx) => (
            <div key={idx} style={{ background: '#eef2ff', padding: '14px 18px', borderRadius: '14px', border: '1px solid #c7d2fe', color: '#312e81', fontSize: '0.93rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle size={20} color="#4f46e5" /> {clo}
            </div>
          ))}
        </div>
      </div>

      {/* 2. GIAI ĐOẠN 3: LEARNING PLAN & JIT TOOLS */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#0891b2', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <BookOpen color="#0891b2" size={24} /> 2. GIAI ĐOẠN 3: Lập Kế Hoạch Học Tập (Just-In-Time Learning Content)
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '20px' }}>
          Trong mô hình UbD, nội dung học tập và hoạt động giảng dạy của giáo viên được thiết kế như những "công cụ vừa đúng lúc" (Just-in-time Tools) nhằm trực tiếp trang bị năng lực giúp học sinh hoàn thành các chuẩn đầu ra.
        </p>

        <h3 style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '800', marginBottom: '14px' }}>
          A. Bảng Đối Chiếu Tiến Trình Sư Phạm Video - SGK (Timestamp Mapping)
        </h3>

        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#0e7490', color: '#ffffff' }}>
                <th style={{ padding: '10px 12px', border: '1px solid #155e75', width: '15%' }}>Mốc Thời Gian</th>
                <th style={{ padding: '10px 12px', border: '1px solid #155e75', width: '40%' }}>Hoạt Động Giảng Dạy Của Giáo Viên</th>
                <th style={{ padding: '10px 12px', border: '1px solid #155e75', width: '25%' }}>Kiến Thức / Khái Niệm Trọng Tâm</th>
                <th style={{ padding: '10px 12px', border: '1px solid #155e75', width: '20%' }}>Liên Kết SGK & Ghi Chú</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: "00:00 - 03:00", act: "Giới thiệu môn học, tạo động lực, hướng dẫn thiết lập dụng cụ học tập (bút chì, giấy nháp).", conc: "Quy định học tập môn Toán; sổ tay tra cứu (Handbook).", ref: "Arithmetic 5 tr. 1; Video Manual tr. 2, T6. Học sinh kẹp giấy nháp vào đầu sách." },
                { time: "03:00 - 08:00", act: "Khởi động tính nhẩm (Mental Math Drills); rà soát bảng nhân chia 2–3 bằng thẻ flashcards.", conc: "Phản xạ tính nhẩm chuỗi phép tính; quy tắc \"đợi từ equals mới bật dậy\".", ref: "Video Manual Appendix B (Arithmetic Facts Sheets). Khởi động bộ nhớ làm việc." },
                { time: "08:00 - 12:00", act: "Giảng dạy lý thuyết trọng tâm: Hệ thập phân Base 10, cấu trúc 4 lớp số (Periods) từ Ones đến Hundred Billions.", conc: "Hệ cơ số 10; Khái niệm Period; Tên gọi các hàng; Ẩn dụ \"Họ của nhóm số\" (Last name).", ref: "Arithmetic 5 tr. 1 (Khung bảng Place Value Chart). Nền tảng đặt dấu phẩy." },
                { time: "12:00 - 16:00", act: "Hướng dẫn 3 dạng biểu diễn số (Standard, Word, Expanded Form). Luyện viết số lớn trên bảng.", conc: "Standard Form; Word Form (không dùng từ \"and\"); Dấu phẩy ngăn cách các Period.", ref: "Arithmetic 5 tr. 1, Mục 1 (Classwork). Bài toán thực tế viết số 76 tỷ 584 triệu..." },
                { time: "16:00 - 20:00", act: "Xử lý chữ số 0 giữ chỗ (Placeholder Zeros) và bài tập chuyển đổi Expanded Form.", conc: "Quy tắc bù số 0 để đủ 3 chữ số mỗi Period; Dạng khai triển không viết số 0.", ref: "Arithmetic 5 tr. 1, Mục 2 & 3. Viết số có lớp khuyết (vd: 4,090,081)." },
                { time: "20:00 - 24:00", act: "Luyện tập đối chiếu Place vs. Value; xác định giá trị chữ số in màu; thực hành đọc số lớn.", conc: "Phân biệt Place (tên hàng) và Value (giá trị số); Đọc số chuẩn ngôn ngữ toán học.", ref: "Arithmetic 5 tr. 1, Mục 1, 2, 3. Thầy trò cùng giải bài tập trên bảng." },
                { time: "24:00 - 27:00", act: "Chuyển giao sang phép tính cộng: Khái niệm số hạng (Addends) và tổng (Sum); chiều tính toán.", conc: "Thuật ngữ Addend, Sum; Chiều cộng từ phải sang trái; Kỹ thuật nhớ (Carrying).", ref: "Arithmetic 5 tr. 2 (Phần Addition). Nhấn mạnh toán học tính ngược chiều đọc sách." },
                { time: "27:00 - 33:00", act: "Luyện tập giải phép cộng nhiều chữ số; áp dụng tính chất giao hoán để cộng kiểm tra ngược.", conc: "Commutative Property (1+4 = 4+1); Kỹ thuật \"Add upwards\" để check work.", ref: "Arithmetic 5 tr. 2, Bài tập phần Review. Tự rà soát sai sót bằng bút chì." },
                { time: "33:00 - 37:00", act: "Hướng dẫn giải toán có lời văn (Story Problem) Sophia đi bơi; kết thúc bài học và giao nhiệm vụ.", conc: "Mô hình hóa bài toán thực tế; Trình bày trên giấy nháp; Ghi đơn vị danh số.", ref: "Arithmetic 5 tr. 2, Story Problems. Sophia bơi 17 lần biển + 15 lần hồ = 32 lần." }
              ].map((row, idx) => (
                <tr key={idx} style={{ background: idx % 2 === 0 ? '#f8fafc' : '#ffffff' }}>
                  <td style={{ padding: '10px 12px', border: '1px solid #cbd5e1', fontWeight: '800', color: '#0891b2' }}>{row.time}</td>
                  <td style={{ padding: '10px 12px', border: '1px solid #cbd5e1' }}>{row.act}</td>
                  <td style={{ padding: '10px 12px', border: '1px solid #cbd5e1', fontWeight: '600' }}>{row.conc}</td>
                  <td style={{ padding: '10px 12px', border: '1px solid #cbd5e1', color: '#475569', fontSize: '0.84rem' }}>{row.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '800', marginBottom: '14px' }}>
          B. Phân Tích Công Cụ Sư Phạm Vừa Đúng Lúc (Just-In-Time Pedagogical Tools)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            {
              title: "Ẩn dụ \"Họ của nhóm số\" (Family Last Name Analogy) [12:00 - 15:00]",
              desc: "Khi học sinh bối rối trước những dãy số dài 10-12 chữ số, cô Emma cung cấp công cụ tư duy trực quan: \"Mỗi lớp số (Period) giống như một gia đình có họ riêng. Lớp đơn vị không cần xướng họ, nhưng lớp sau đó có họ là Thousand, kế tiếp là Million, và lớn nhất hôm nay là Billion\". Mỗi khi nghe thấy một \"họ\", học sinh đặt một dấu phẩy ngay lập tức. Công cụ này giải phóng tải nhận thức, giúp học sinh viết số hàng chục tỷ dễ dàng như viết một số có 3 chữ số."
            },
            {
              title: "Kỹ thuật \"Bù số 0 giữ chỗ\" (Placeholder Zeros Rule) [16:00 - 18:00]",
              desc: "Khi gặp đề bài đọc \"six billion, four million...\", giáo viên dừng lại đúng lúc để hỏi Aubrey: \"Tại sao không thể viết ngay số 4 sau dấu phẩy của số 6?\". Giáo viên trang bị ngay quy tắc: \"Ngoại trừ lớp ngoài cùng bên trái, mọi lớp số phải có đúng 3 vị trí. Nếu chỉ nghe thấy 'four', ta phải lấp đầy bằng hai số 0 ở trước (004)\"."
            },
            {
              title: "Kỹ thuật \"Cộng ngược để kiểm toán\" (Check by Adding Up) [27:00 - 29:00]",
              desc: "Để rèn luyện tính độc lập và chính xác, cô Emma yêu cầu học sinh kẻ hai đường ngang phía trên phép tính và cộng ngược từ dưới lên. Đây là ứng dụng thực tế vừa đúng lúc của tính chất giao hoán (Commutative Property), giúp học sinh tự phát hiện sai sót trước khi nộp bài."
            }
          ].map((tool, idx) => (
            <div key={idx} style={{ background: '#ecfeff', padding: '18px 20px', borderRadius: '16px', border: '1.5px solid #a5f3fc' }}>
              <div style={{ fontWeight: '800', color: '#0e7490', fontSize: '1rem', marginBottom: '8px' }}>
                • {tool.title}
              </div>
              <div style={{ fontSize: '0.94rem', color: '#164e63', lineHeight: '1.7' }}>
                {tool.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CÁC BẪY CÓ THỂ GẶP PHẢI */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#dc2626', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <ShieldAlert color="#dc2626" size={24} /> 3. CÁC BẪY CÓ THỂ GẶP PHẢI (Pitfalls / Traps)
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '20px' }}>
          Dưới đây là 4 cạm bẫy tư duy và lỗi sai điển hình mà học sinh lớp 5 thường xuyên mắc phải trong bài học đầu tiên này, kèm theo giải pháp sư phạm chuẩn mực:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {[
            {
              name: "Bẫy 1: Bỏ Quên Chữ Số 0 Giữ Chỗ (The Placeholder Zero Trap)",
              sit: "Học sinh chuyển đổi số từ dạng lời đọc hoặc dạng khai triển sang dạng tiêu chuẩn khi có các hàng khuyết giá trị, ví dụ: \"Six billion, four million, five hundred eighty-one thousand, eighteen\".",
              err: "Học sinh ghép cơ học các con số xuất hiện trong lời đọc mà không để ý các hàng bị khuyết, dẫn đến các đáp án sai như 6,4,581,18 hoặc 6,400,581,18 (sai lệch hàng triệu lần về mặt giá trị).",
              sol: "Áp dụng quy tắc \"Khung 3 Ô Nhịp\": Kẻ sẵn 3 ô trống cho mỗi lớp số sau lớp đầu tiên: 6 , [ _ _ 4 ] , [ 5 8 1 ] , [ _ 1 8 ]. Yêu cầu học sinh điền các chữ số 0 vào những vị trí trống trước khi xóa khung: 6,004,581,018."
            },
            {
              name: "Bẫy 2: Nhầm Lẫn Giữa Tên Hàng Vị Trí (Place) và Giá Trị Của Chữ Số (Value)",
              sit: "Đề bài yêu cầu: \"Find the value of the underlined digit 5 in 584,325,789\" hoặc \"Name the place of the underlined digit\".",
              err: "Khi hỏi giá trị (Value), học sinh lại trả lời bằng từ ngữ: \"Hundred Millions\"; ngược lại khi hỏi tên hàng (Place), học sinh lại viết con số 500,000,000.",
              sol: "Khắc sâu câu thần chú phân định:\n• Place (Vị trí/Tên hàng): Hỏi về tên gọi của ngôi nhà chữ số đang ở (luôn là chữ viết, kết thúc bằng chữ 's' hoặc 'place', ví dụ: Ten Thousands place).\n• Value (Giá trị): Hỏi về số lượng thực tế con số đó đại diện (luôn là số, gồm chính chữ số đó kèm theo các số 0 ở sau, ví dụ: 50,000)."
            },
            {
              name: "Bẫy 3: Vi Phạm Quy Tắc Trừ và Lặp Lại Quá Giới Hạn Trong Số La Mã",
              sit: "Học sinh chuyển đổi các số như 4, 9, 40, 49, 90 sang số La Mã (SGK trang 2).",
              err: "Viết số 4 thành IIII, số 40 thành XXXX (vi phạm quy tắc không lặp lại quá 3 lần). Hoặc học sinh viết số 49 thành IL (nghĩ rằng 50 - 1 = 49).",
              sol: "Dạy rõ nguyên tắc trừ phân cấp:\n1. Ký tự chỉ được lặp tối đa 3 lần: 4 phải viết là IV (5 - 1), 40 phải viết là XL (50 - 10).\n2. Quy tắc trừ đúng bậc: Ký tự I chỉ được trừ cho V và X; X chỉ được trừ cho L và C; C chỉ được trừ cho D và M. Do đó, 49 phải tách theo cấu tạo thập phân: 49 = 40 + 9 = XL + IX = XLIX (không được viết IL)."
            },
            {
              name: "Bẫy 4: Thói Quen Cộng Từ Trái Sang Phải và Quên Số Nhớ (Carrying Blindspot)",
              sit: "Thực hiện phép cộng nhiều chữ số, ví dụ: 75 + 78 hoặc 37 + 44 [34:00 - 35:00].",
              err: "Học sinh bị ảnh hưởng bởi thói quen đọc chữ (từ trái sang phải) nên cộng hàng chục trước, khi cộng hàng đơn vị vượt quá 10 thì viết đè hoặc quên cộng số nhớ vào hàng chục; hoặc cộng xong quên kiểm tra lại.",
              sol: "Giáo viên nhấn mạnh: \"Toán học luôn đi ngược chiều với đọc sách: Bắt đầu từ hàng nhỏ nhất (Ones) từ phải sang trái\". Khi tổng hàng ≥ 10, ghi ngay số nhớ lên đầu cột tiếp theo bằng bút chì và luôn thực hiện kiểm tra ngược (adding upwards)."
            }
          ].map((pit, idx) => (
            <div key={idx} style={{ background: '#fff1f2', padding: '20px', borderRadius: '18px', border: '1.5px solid #fecdd3' }}>
              <div style={{ fontWeight: '800', color: '#9f1239', fontSize: '1.02rem', marginBottom: '10px' }}>
                📌 {pit.name}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#881337', marginBottom: '6px' }}>
                <strong>Tình huống:</strong> {pit.sit}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#be123c', background: '#ffe4e6', padding: '10px 14px', borderRadius: '10px', marginBottom: '8px', fontWeight: '600' }}>
                ❌ <strong>Lỗi thường gặp:</strong> {pit.err}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#065f46', background: '#d1fae5', padding: '10px 14px', borderRadius: '10px', fontWeight: '600', whiteSpace: 'pre-line' }}>
                ✅ <strong>Giải pháp khắc phục:</strong> {pit.sol}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. NỘI DUNG CỐT LÕI CẦN NẮM */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#d97706', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <Key color="#d97706" size={24} /> 4. NỘI DUNG CỐT LÕI CẦN NẮM (Key Takeaways)
        </h2>
        <div style={{ fontWeight: '700', color: '#78350f', fontSize: '1.05rem', marginBottom: '16px' }}>
          Ba Trụ Cột Tri Thức Bắt Buộc Ghi Nhớ Của Bài Học 001
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            {
              num: "1",
              title: "Cấu Trúc Hệ Thập Phân & Chu Kỳ Dấu Phẩy",
              desc: "Hệ thống số tự nhiên cơ số 10 được chia thành các lớp (Periods) gồm Ones, Thousands, Millions, Billions. Mỗi lớp chứa đúng 3 hàng (Ones, Tens, Hundreds). Dấu phẩy được đặt để phân cách giữa các lớp, tính từ phải sang trái cứ mỗi 3 chữ số. Khi một lớp trung gian không có giá trị ở một hàng nào đó, bắt buộc phải dùng chữ số 0 làm nhiệm vụ giữ chỗ (placeholder)."
            },
            {
              num: "2",
              title: "Hệ Thống Số La Mã & Nguyên Tắc Vị Trí",
              desc: "Nắm vững giá trị của 7 chữ cái cơ bản: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. Chữ số nhỏ hơn đứng sau chữ số lớn hơn thì cộng vào; chữ số nhỏ hơn đứng trước chữ số lớn hơn thì trừ đi. Tuyệt đối không lặp lại bất kỳ chữ số nào quá ba lần liên tiếp."
            },
            {
              num: "3",
              title: "Thuật Ngữ Phép Cộng & Kỹ Thuật Tự Kiểm Toán",
              desc: "Các số hạng trong phép cộng được gọi là Addends, kết quả là Sum (đánh vần là S-U-M). Cộng luôn bắt đầu từ hàng đơn vị (phải sang trái). Áp dụng tính chất giao hoán (Commutative Property) để tự kiểm tra kết quả bằng cách cộng ngược từ dưới lên trên. Trong các bài toán có lời văn, lời giải bắt buộc phải có danh số chỉ đơn vị đo lường cụ thể."
            }
          ].map((item, idx) => (
            <div key={idx} style={{ background: '#fffbeb', padding: '16px 20px', borderRadius: '16px', border: '1.5px solid #fef3c7' }}>
              <div style={{ fontWeight: '800', color: '#92400e', fontSize: '1rem', marginBottom: '6px' }}>
                {item.num}. {item.title}
              </div>
              <div style={{ fontSize: '0.93rem', color: '#78350f', lineHeight: '1.7' }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. BÀI QUIZ (FORMATIVE ASSESSMENT) */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#4338ca', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <HelpCircle color="#4338ca" size={24} /> 5. BÀI QUIZ (Kiểm Tra Nhanh - Formative Assessment)
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '20px' }}>
          Bộ câu hỏi trắc nghiệm đánh giá nhanh được thiết kế bằng Tiếng Anh Học Thuật (Academic English) nhằm kiểm tra trực tiếp mức độ lĩnh hội các khái niệm trong SGK Arithmetic 5 trang 1–2:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            {
              qNum: "Question 1",
              qText: "Which of the following correctly describes the four numerical periods in the base-10 place value system taught in Lesson 1, ordered from right to left (smallest to largest)?",
              opts: ["A. Billions, Millions, Thousands, Ones", "B. Ones, Thousands, Millions, Billions", "C. Units, Hundreds, Thousands, Millions", "D. Ones, Tens, Hundreds, Thousands"],
              ans: "B",
              exp: "According to Arithmetic 5 (page 1, Place Value Chart), whole numbers are organized into groups of three digits called periods, starting from the right with the Ones Period, followed by the Thousands Period, Millions Period, and Billions Period. Option A lists them in reverse order (left to right), while D lists individual place names rather than period names."
            },
            {
              qNum: "Question 2",
              qText: "In the numeral 76,584,325,789, what is the specific place (tên hàng) and value (giá trị) of the digit 5 in the millions period?",
              opts: ["A. Place: Hundred Millions; Value: 500,000,000", "B. Place: Ten Millions; Value: 50,000,000", "C. Place: Hundred Thousands; Value: 500,000", "D. Place: Ten Billions; Value: 50,000,000,000"],
              ans: "A",
              exp: "In the numeral 76,584,325,789, the millions period contains the digits 584. Within this period, 5 is in the hundreds position (Hundred Millions), 8 is in the tens position (Ten Millions), and 4 is in the ones position (One Millions). Its actual numerical value is 500,000,000 (Arithmetic 5, p. 1)."
            },
            {
              qNum: "Question 3",
              qText: "When converting the verbal phrase \"six billion, four million, five hundred eighty-one thousand, eighteen\" into standard form, which numeral is mathematically correct?",
              opts: ["A. 6,4,581,18", "B. 6,040,581,018", "C. 6,004,581,018", "D. 6,400,581,180"],
              ans: "C",
              exp: "In the base-10 period system, each period following the leading period must contain exactly three digits. The millions period has only 4 million, requiring two leading placeholder zeros (004). The thousands period has 581. The ones period has 18, requiring one leading placeholder zero (018). The complete correct standard form is 6,004,581,018 (Arithmetic 5, p. 1, Section 3)."
            },
            {
              qNum: "Question 4",
              qText: "Which of the following represents the correct expanded form of the number 4,090,081?",
              opts: ["A. 4,000,000 + 900,000 + 80 + 1", "B. 4,000,000 + 90,000 + 80 + 1", "C. 4,000,000 + 9,000 + 800 + 1", "D. 40,000,000 + 90,000 + 80 + 1"],
              ans: "B",
              exp: "Expanded form shows the sum of each non-zero digit multiplied by its place value. In 4,090,081, the digit 4 is in the One Millions place (4,000,000), 9 is in the Ten Thousands place (90,000), 8 is in the Tens place (80), and 1 is in the Ones place (1). Places containing zeros are omitted (Arithmetic 5, p. 1, Section 2)."
            },
            {
              qNum: "Question 5",
              qText: "According to the fundamental rules of Roman numerals reviewed on page 2, what is the Arabic numerical equivalent of the Roman numeral XXIV, and which rule governs the numeral IV?",
              opts: ["A. 26; Additive rule (5 + 1)", "B. 24; Subtractive rule where I before V means 5 - 1", "C. 24; Repetition rule where I is repeated four times", "D. 19; Subtractive rule where X is subtracted from V"],
              ans: "B",
              exp: "In Roman numerals, X represents 10, V represents 5, and I represents 1. When a smaller numeral precedes a larger numeral, it is subtracted (subtractive rule): IV = 5 - 1 = 4. Adding this to XX (10 + 10 = 20) yields 24. Furthermore, Roman numerals cannot repeat the same letter more than three times consecutively, preventing 24 from being written as XXIIII (Arithmetic 5, p. 2)."
            },
            {
              qNum: "Question 6",
              qText: "In an addition equation, what are the formal mathematical terms for the numbers being combined and the resulting total, and how can the commutative property be used to verify the answer?",
              opts: ["A. Factors and Product; verified by dividing the product by an addend", "B. Minuend and Subtrahend; verified by adding the difference", "C. Addends and Sum; verified by adding the numbers in reverse order (bottom to top)", "D. Numerator and Denominator; verified by cross-multiplication"],
              ans: "C",
              exp: "On page 2 of Arithmetic 5, Miss Emma explains that the numbers being combined are called addends (spelled A-D-D-E-N-D), and the total is called the sum (spelled S-U-M). The commutative property states that changing the order of addends does not affect the sum (e.g., 1 + 4 = 4 + 1 = 5). Students check their work by drawing a line at the top and adding up (bottom to top)."
            }
          ].map((q, idx) => (
            <div key={idx} style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1.5px solid #e2e8f0' }}>
              <div style={{ fontWeight: '800', color: '#312e81', fontSize: '1.02rem', marginBottom: '8px' }}>
                {q.qNum}: {q.qText}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px', marginBottom: '12px' }}>
                {q.opts.map((opt, oIdx) => (
                  <div key={oIdx} style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#334155' }}>
                    {opt}
                  </div>
                ))}
              </div>
              <div style={{ background: '#dcfce7', color: '#15803d', padding: '8px 14px', borderRadius: '10px', fontSize: '0.88rem', fontWeight: '800', marginBottom: '8px' }}>
                [Correct Answer]: {q.ans}
              </div>
              <div style={{ background: '#ffffff', padding: '12px 14px', borderRadius: '10px', borderLeft: '4px solid #16a34a', fontSize: '0.88rem', color: '#334155', lineHeight: '1.6' }}>
                <strong>[Detailed Pedagogical Explanation]:</strong> {q.exp}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. GIAI ĐOẠN 2: BLOOM'S TAXONOMY ASSESSMENT */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#7c3aed', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <Award color="#7c3aed" size={24} /> 6. GIAI ĐOẠN 2: BÀI ASSESSMENT THEO BLOOM'S TAXONOMY
        </h2>

        <div style={{ background: '#f5f3ff', padding: '18px 20px', borderRadius: '16px', border: '1px solid #ddd6fe', marginBottom: '22px' }}>
          <div style={{ fontWeight: '800', color: '#5b21b6', fontSize: '1.05rem', marginBottom: '6px' }}>
            🎭 Kịch Bản Thực Tế (Task Context): Chuyên Viên Kiểm Toán Số Liệu Kho Bạc Quốc Gia
          </div>
          <div style={{ fontSize: '0.93rem', color: '#4c1d95', lineHeight: '1.7' }}>
            <strong>Bối cảnh:</strong> Học sinh đóng vai trò là Chuyên viên Kiểm toán Số liệu (Treasury Data Auditor) tại Cơ quan Quản trị Tài chính & Ngân sách Quốc gia. Nhiệm vụ của bạn là rà soát các báo cáo tài chính hàng tỷ đô la, giải mã các văn bản lưu trữ cổ dùng chữ số La Mã, phát hiện các sai sót do thiếu chữ số 0 trong hệ thống kế toán điện tử, và thiết kế các bài toán thẩm định ngân sách thực tế.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            {
              lvl: "Cấp độ 1: Remember (Nhớ)",
              sub: "Truy xuất thuật ngữ và bảng mã cơ sở",
              task: "Liệt kê chính xác tên 4 lớp số (Periods) theo thứ tự từ bé đến lớn và nêu giá trị thập phân tương ứng của 7 chữ cái La Mã: I, V, X, L, C, D, M.",
              sol: "1. 4 lớp số: Ones Period → Thousands Period → Millions Period → Billions Period.\n2. Giá trị số La Mã: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.",
              why: "Kiểm tra khả năng ghi nhớ dài hạn (retrieval practice) các đơn vị kiến thức sự thật nền tảng trong SGK Arithmetic 5 tr. 1–2, điều kiện tiên quyết để giải quyết các bài toán phức tạp hơn."
            },
            {
              lvl: "Cấp độ 2: Understand (Hiểu)",
              sub: "Giải thích bản chất Place vs. Value",
              task: "Trong bản báo cáo ngân sách xuất hiện số tiền $584,325,789. Hãy giải thích cho một thực tập sinh mới hiểu sự khác biệt giữa câu hỏi: \"Chữ số 5 nằm ở hàng nào (Place)?\" và \"Chữ số 5 có giá trị (Value) là bao nhiêu?\".",
              sol: "- Place (Tên hàng): Là tên gọi vị trí cột trong bảng hệ thập phân. Ở đây chữ số 5 nằm ở hàng Hundred Millions (Trăm Triệu).\n- Value (Giá trị): Là số lượng tiền tệ thực tế mà chữ số 5 đại diện khi đứng ở hàng đó, bằng chữ số nhân với trọng số hàng: 5 x 100,000,000 = $500,000,000 (Năm trăm triệu đô la).",
              why: "Đo lường khả năng diễn giải (interpreting) và phân biệt bản chất trừu tượng của vị trí chữ số với giá trị số lượng cụ thể, tránh việc học sinh học vẹt công thức."
            },
            {
              lvl: "Cấp độ 3: Apply (Vận dụng)",
              sub: "Chuyển đổi đa định dạng và thuật toán kiểm toán",
              task: "Kho bạc ghi nhận khoản phân bổ kinh phí quốc gia đọc là: \"Bốn mươi tỷ, bảy trăm linh hai triệu, năm mươi nghìn, chín trăm linh sáu đô la\". Hãy:\na. Viết số tiền trên dưới dạng số tiêu chuẩn (Standard Form) có dấu phẩy ngăn cách.\nb. Viết dưới dạng khai triển (Expanded Form).\nc. Chuyển đổi mã kiểm toán cổ LXIV sang số Ả Rập.",
              sol: "a. Standard Form: $40,702,050,906 (chú ý số 0 ở hàng Hundred Billions không có, lớp triệu có 702, lớp nghìn có 050, lớp đơn vị có 906).\nb. Expanded Form: 40,000,000,000 + 700,000,000 + 2,000,000 + 50,000 + 900 + 6.\nc. Mã LXIV = L (50) + X (10) + IV (5 - 1 = 4) = 64.",
              why: "Đánh giá năng lực vận dụng quy tắc bù số 0 giữ chỗ trong tình huống thực tế và kỹ năng thực thi thuật toán giải mã số La Mã theo đúng quy chuẩn SGK."
            },
            {
              lvl: "Cấp độ 4: Analyze (Phân tích)",
              sub: "Kiểm toán lỗi hệ thống (Bug Detection)",
              task: "Hệ thống máy tính nhập liệu báo cáo: Tổng chi phí xây cầu là \"Bảy tỷ, tám triệu, mười lăm nghìn, sáu đô la\" và phần mềm xuất ra con số: $7,8,15,6. Hãy phân tích lỗi sai của phần mềm, tính toán mức độ chênh lệch tiền tệ giữa con số sai và con số đúng thực tế.",
              sol: "- Phân tích nguyên nhân: Phần mềm đã vi phạm nguyên tắc \"Mỗi lớp số sau lớp đầu tiên phải có đúng 3 chữ số\". Phần mềm đã bỏ qua các chữ số 0 giữ chỗ (Placeholder Zeros) ở hàng trăm triệu, chục triệu (008), hàng trăm nghìn (015), và hàng trăm, hàng chục của lớp đơn vị (006).\n- Con số chuẩn xác: $7,008,015,006 (7 tỷ 8 triệu 15 nghìn 6 đô la).\n- Hậu quả sai lệch: Con số 7,8,15,6 không phải là một số hợp lệ trong hệ thập phân; nếu người đọc hiểu nhầm là 78,156 đô la thì ngân sách bị tính thiếu hơn $7,007,936,850, gây thất thoát nghiêm trọng trong công tác kiểm toán.",
              why: "Rèn luyện năng lực tư duy phản biện, mổ xẻ nguyên nhân sai lầm mang tính hệ thống và nhận thức sâu sắc về tầm quan trọng của chữ số 0 trong toán học tài chính."
            },
            {
              lvl: "Cấp độ 5: Evaluate (Đánh giá)",
              sub: "Thẩm định độ tin cậy của quy trình tính toán",
              task: "Hai kế toán viên A và B cùng tính tổng một danh sách 4 khoản thu ngân sách: $14,235 + $8,760 + $32,190 + $5,415.\n- Kế toán A tính từ trên xuống dưới ra kết quả: $60,600.\n- Kế toán B không tính lại từ trên xuống mà cộng ngược từ dưới lên trên và cũng ra $60,600.\nHãy đánh giá: Tại sao quy trình của Kế toán B là phương pháp kiểm toán chuẩn mực được cô Emma dạy trong bài học? Nếu Kế toán A chỉ cộng lại một lần nữa từ trên xuống thì có đạt chuẩn kiểm toán hay không? Tại sao?",
              sol: "- Kế toán B đã áp dụng Tính chất giao hoán (Commutative Property of Addition): thay đổi thứ tự cộng không làm thay đổi tổng. Khi cộng ngược từ dưới lên (Adding Upwards), não bộ được tiếp nhận các cặp số theo thứ tự mới (vd: 5 + 0 + 0 + 5 thay vì 5 + 0 + 0 + 5; 1 + 9 + 6 + 3 thay vì 3 + 6 + 9 + 1), giúp loại bỏ \"vết hằn tư duy\" hoặc ảo giác tính toán sai lặp lại.\n- Nếu Kế toán A chỉ cộng lại từ trên xuống, mắt và não bộ có xu hướng lặp lại chính xác chuỗi suy nghĩ vừa thực hiện, khiến các lỗi nhẩm sai ban đầu dễ bị bỏ sót. Do đó, phương pháp của Kế toán B là chuẩn mực sư phạm và kiểm toán bắt buộc.",
              why: "Đòi hỏi học sinh phải đưa ra lập luận đánh giá dựa trên tiêu chuẩn toán học vững chắc, thấu hiểu giá trị của kỹ thuật kiểm tra độc lập."
            },
            {
              lvl: "Cấp độ 6: Create (Sáng tạo)",
              sub: "Thiết kế đề toán thực tế & Bộ tiêu chí thẩm định (Rubric)",
              task: "Hãy tự biên soạn một bài toán đố thực tế (Story Problem) liên quan đến hoạt động quyên góp ngân sách cứu trợ thiên tai của trường học. Đề bài phải thỏa mãn các tiêu chí:\n1. Chứa ít nhất 3 số hạng (Addends) có giá trị từ hàng nghìn đến hàng triệu.\n2. Có ít nhất một số hạng chứa chữ số 0 giữ chỗ cần chú ý.\n3. Yêu cầu người giải phải trình bày bài làm trên giấy nháp, kẻ dòng kiểm tra ngược và ghi rõ danh số đơn vị.",
              sol: "Đề bài mẫu: Để hỗ trợ người dân vùng bão lũ, Trường Tiểu học Ban Mai phát động 3 đợt quyên góp: Đợt 1 thu được $1,050,400; Đợt 2 thu được $820,050; Đợt 3 thu được $2,109,550. Hỏi tổng số tiền nhà trường đã quyên góp được là bao nhiêu?\n\nBài giải nháp:\n    1,050,400\n+   820,050\n+  2,109,550\n-------------\n=  3,980,000 (dollars)\nKiểm tra ngược (Add upwards): 2,109,550 + 820,050 + 1,050,400 = 3,980,000 (Chính xác).\nĐáp số: $3,980,000.\n\nRubric Chấm Điểm Bài Tập Sáng Tạo (Thang 10 Điểm):\n• Tiêu chí 1: Tính chân thực & Cấu trúc ngữ cảnh (3 điểm): Ngữ cảnh thực tế hợp lý, lời văn mạch lạc, nêu rõ câu hỏi trọng tâm.\n• Tiêu chí 2: Yêu cầu số học & Chữ số 0 giữ chỗ (3 điểm): Chứa đủ 3 số hạng quy mô lớn, có các hàng chứa số 0 giữ chỗ nhằm kiểm tra năng lực đặt tính thẳng cột.\n• Tiêu chí 3: Kỹ thuật kiểm toán ngược & Trình trình bày nháp (4 điểm): Thể hiện rõ thuật toán cộng từ phải sang trái có nhớ, có bước kiểm tra ngược (check work), và ghi đầy đủ danh số đơn vị (dollars/lần).",
              why: "Tạo điều kiện cho học sinh tự tích hợp và mô hình hóa tri thức học được vào một sản phẩm hoàn chỉnh."
            }
          ].map((lvl, idx) => (
            <div key={idx} style={{ background: '#ffffff', padding: '20px', borderRadius: '18px', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              <div style={{ fontWeight: '800', color: '#6d28d9', fontSize: '1.05rem', marginBottom: '2px' }}>
                {lvl.lvl}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: '700', marginBottom: '10px' }}>
                {lvl.sub}
              </div>
              <div style={{ fontSize: '0.94rem', color: '#1e293b', marginBottom: '10px', fontWeight: '600', whiteSpace: 'pre-line' }}>
                📝 <strong>Nhiệm vụ:</strong> {lvl.task}
              </div>
              <div style={{ fontSize: '0.92rem', color: '#047857', background: '#ecfdf5', padding: '12px 16px', borderRadius: '12px', fontWeight: '600', whiteSpace: 'pre-line', marginBottom: '10px' }}>
                💡 <strong>[Đáp án / Hướng dẫn giải]:</strong><br/>{lvl.sol}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#475569', background: '#f8fafc', padding: '10px 14px', borderRadius: '10px', fontStyle: 'italic' }}>
                🎓 <strong>[Lý do sư phạm]:</strong> {lvl.why}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. WEB JSON PAYLOAD */}
      <div style={{ background: '#0f172a', color: '#38bdf8', padding: '26px', borderRadius: '20px', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#38bdf8', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <Code color="#38bdf8" size={24} /> 7. ĐỊNH DẠNG DỮ LIỆU JSON CHO WEBSITE (WEB JSON PAYLOAD)
        </h2>
        <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '14px' }}>
          Toàn bộ 6 câu hỏi trắc nghiệm khách quan (Mục 5) được chuẩn hóa sang định dạng JSON tiếng Anh học thuật trên đúng 1 dòng duy nhất, sẵn sàng tích hợp trực tiếp vào hệ thống Quản lý Học tập (LMS):
        </p>

        <div style={{ background: '#1e293b', color: '#e2e8f0', padding: '18px', borderRadius: '14px', fontFamily: 'monospace', fontSize: '0.8rem', wordBreak: 'break-all', lineHeight: '1.6', border: '1px solid #334155' }}>
          {JSON.stringify({ quiz: [
            { question: "Which of the following correctly describes the four numerical periods in the base-10 place value system taught in Lesson 1, ordered from right to left (smallest to largest)?", options: ["A. Billions, Millions, Thousands, Ones", "B. Ones, Thousands, Millions, Billions", "C. Units, Hundreds, Thousands, Millions", "D. Ones, Tens, Hundreds, Thousands"], correct: "B", explanation: "According to Arithmetic 5 (page 1, Place Value Chart), whole numbers are organized into groups of three digits called periods, starting from the right with the Ones Period, followed by the Thousands Period, Millions Period, and Billions Period." },
            { question: "In the numeral 76,584,325,789, what is the specific place (tên hàng) and value (giá trị) of the digit 5 in the millions period?", options: ["A. Place: Hundred Millions; Value: 500,000,000", "B. Place: Ten Millions; Value: 50,000,000", "C. Place: Hundred Thousands; Value: 500,000", "D. Place: Ten Billions; Value: 50,000,000,000"], correct: "A", explanation: "In 76,584,325,789, the millions period consists of 584 (5 in hundred millions, 8 in ten millions, 4 in one millions). Therefore, the digit 5 occupies the Hundred Millions place and has a numerical value of 500,000,000 (Arithmetic 5, p. 1)." },
            { question: "When converting the verbal phrase 'six billion, four million, five hundred eighty-one thousand, eighteen' into standard form, which numeral is mathematically correct?", options: ["A. 6,4,581,18", "B. 6,040,581,018", "C. 6,004,581,018", "D. 6,400,581,180"], correct: "C", explanation: "In the base-10 period system, each period following the initial period must contain exactly three digit places. The millions period has 4 million (written as 004), and the ones period has 18 (written as 018). Omitting placeholder zeros leads to an incorrect number. The correct standard form is 6,004,581,018 (Arithmetic 5, p. 1, Section 3)." },
            { question: "Which of the following represents the correct expanded form of the number 4,090,081?", options: ["A. 4,000,000 + 900,000 + 80 + 1", "B. 4,000,000 + 90,000 + 80 + 1", "C. 4,000,000 + 9,000 + 800 + 1", "D. 40,000,000 + 90,000 + 80 + 1"], correct: "B", explanation: "Expanded form expresses a number as the sum of the values of its digits. In 4,090,081, 4 has a value of 4,000,000; 9 is in the ten thousands place (90,000); 8 is in the tens place (80); and 1 is in the ones place (1). Places containing zero do not need to be written as separate addends (Arithmetic 5, p. 1, Section 2)." },
            { question: "According to the fundamental rules of Roman numerals reviewed on page 2, what is the Arabic numerical equivalent of the Roman numeral XXIV, and which rule governs the numeral IV?", options: ["A. 26; Additive rule (5 + 1)", "B. 24; Subtractive rule where I before V means 5 - 1", "C. 24; Repetition rule where I is repeated four times", "D. 19; Subtractive rule where X is subtracted from V"], correct: "B", explanation: "In Roman numerals, X = 10, V = 5, and I = 1. X + X = 20. When a smaller numeral (I) precedes a larger numeral (V), it is subtracted: 5 - 1 = 4. Adding these gives 20 + 4 = 24. A numeral can never be repeated more than three times consecutively (Arithmetic 5, p. 2)." },
            { question: "In an addition equation, what are the formal mathematical terms for the numbers being combined and the resulting total, and how can the commutative property be used to verify the answer?", options: ["A. Factors and Product; verified by dividing the product by an addend", "B. Minuend and Subtrahend; verified by adding the difference", "C. Addends and Sum; verified by adding the numbers in reverse order (bottom to top)", "D. Numerator and Denominator; verified by cross-multiplication"], correct: "C", explanation: "In Arithmetic 5 (page 2), the numbers combined in addition are called 'addends' (spelled A-D-D-E-N-D), and the total is the 'sum' (S-U-M). By the commutative property of addition, changing the order of addends does not change the sum; hence, students check work by adding up (bottom to top)." }
          ]})}
        </div>
      </div>

    </div>
  );
}

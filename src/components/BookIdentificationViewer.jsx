import React from 'react';
import { BookOpen, User, Film, Bookmark, Info, Target, FileText, CheckCircle2, ListChecks, ArrowRight } from 'lucide-react';

export default function BookIdentificationViewer({ lesson }) {
  const bookInfo = lesson.bookIdentification || {
    teacher: "Miss Emma Spaugh (Abeka Academy)",
    videoFile: "Grade 5 - 001 - Arithmetic 5.mp4 (36 phút 14 giây)",
    mainBook: "Arithmetic 5 (Work-text) (Ấn bản 4/5, Abeka - AR)",
    supplements: "Arithmetic Facts Sheets (Appendix B); Quizzes & Tests",
    videoManual: "Grade 5 Video Manual (tr. T6, tr. 2)",
    keyHighlights: "Bảng chữ số La Mã cơ bản (I, V, X, L, C, D, M)",
    lessonLocation: "Lesson 1, trang 1–2 (Place Value through Hundred Billions, Roman Numerals, Review)",
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header Banner */}
      <div className="card" style={{ marginBottom: '20px', background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', border: '1px solid #0284c7' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#0369a1', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BookOpen color="#0284c7" size={26} />
          Báo Cáo Nhận Diện Sách & Hướng Dẫn Thực Hành (Book Identification & Guide)
        </h2>
        <p style={{ fontSize: '0.88rem', color: '#075985', marginTop: '4px' }}>
          Chi tiết nhận diện từng trang sách giáo khoa, mục bài tập trên lớp và nhiệm vụ tự học sau video.
        </p>
      </div>

      {/* Summary Info Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px', marginBottom: '24px' }}>
        <div className="card" style={{ padding: '16px', borderLeft: '4px solid #4f46e5' }}>
          <div style={{ fontWeight: '800', color: '#4338ca', fontSize: '0.85rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <User size={16} /> Giáo Viên Phụ Trách
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1e293b' }}>{bookInfo.teacher}</div>
        </div>

        <div className="card" style={{ padding: '16px', borderLeft: '4px solid #0891b2' }}>
          <div style={{ fontWeight: '800', color: '#0e7490', fontSize: '0.85rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Film size={16} /> Video Bài Giảng
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1e293b' }}>{bookInfo.videoFile}</div>
        </div>

        <div className="card" style={{ padding: '16px', borderLeft: '4px solid #16a34a' }}>
          <div style={{ fontWeight: '800', color: '#15803d', fontSize: '0.85rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={16} /> Sách Giáo Khoa Chính
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1e293b' }}>{bookInfo.mainBook}</div>
        </div>
      </div>

      {/* SECTION I: NHẬN DIỆN SÁCH GIÁO KHOA & NGUỒN HỌC LIỆU ĐỐI CHIẾU */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.25rem', color: '#166534', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', borderBottom: '2px dashed #bbf7d0', paddingBottom: '8px' }}>
          <BookOpen color="#16a34a" /> I. Nhận Diện Sách Giáo Khoa & Nguồn Học Liệu Đối Chiếu
        </h3>

        {/* Arithmetic 5 (Trang 1) */}
        <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '14px', border: '1.5px solid #e2e8f0', marginBottom: '16px' }}>
          <h4 style={{ fontSize: '1.05rem', color: '#1e293b', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            📘 Arithmetic 5 (Trang 1):
          </h4>
          <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.92rem', color: '#334155' }}>
            <li style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '8px', borderLeft: '3px solid #4f46e5' }}>
              <strong>Khung kiến thức Place Value:</strong> Bảng phân loại 4 lớp số lớn gồm: <strong>Ones Period</strong> (Ones, Tens, Hundreds), <strong>Thousands Period</strong> (One Thousands, Ten Thousands, Hundred Thousands), <strong>Millions Period</strong> (One Millions, Ten Millions, Hundred Millions), và <strong>Billions Period</strong> (One Billions, Ten Billions, Hundred Billions). Quy tắc sử dụng dấu phẩy (commas) để phân tách các lớp (cứ 3 chữ số từ phải sang trái).
            </li>
            <li style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '8px', borderLeft: '3px solid #0891b2' }}>
              <strong>Bài tập thực hành 1 (Classwork):</strong> Xác định tên hàng (place value) của chữ số in màu xanh.
            </li>
            <li style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '8px', borderLeft: '3px solid #16a34a' }}>
              <strong>Bài tập thực hành 2:</strong> Xác định giá trị thực tế (value) của chữ số được khoanh tròn.
            </li>
            <li style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '8px', borderLeft: '3px solid #d97706' }}>
              <strong>Bài tập thực hành 3:</strong> Luyện đọc các số tự nhiên có nhiều chữ số to, rõ ràng và đúng chuẩn ngôn ngữ.
            </li>
          </ul>
        </div>

        {/* Arithmetic 5 (Trang 2) */}
        <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '14px', border: '1.5px solid #e2e8f0', marginBottom: '16px' }}>
          <h4 style={{ fontSize: '1.05rem', color: '#1e293b', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            📘 Arithmetic 5 (Trang 2):
          </h4>
          <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.92rem', color: '#334155' }}>
            <li style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '8px', borderLeft: '3px solid #9333ea' }}>
              <strong>Mục Roman Numerals:</strong> Bảng quy ước 7 chữ số La Mã cơ bản: <strong>I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000</strong>. Quy tắc viết số La Mã (cộng giá trị khi chữ số nhỏ hơn đứng sau; trừ giá trị khi chữ số nhỏ hơn đứng trước).
            </li>
            <li style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '8px', borderLeft: '3px solid #e11d48' }}>
              <strong>Mục Review:</strong> Các bài toán cộng trừ nhiều chữ số có nhớ và mượn; Bài toán đố có lời văn (Story problems) yêu cầu giải trên giấy nháp (notebook paper).
            </li>
          </ul>
        </div>

        {/* Speed Drills & Mental Math */}
        <div style={{ background: '#fffbeb', padding: '16px', borderRadius: '14px', border: '1.5px solid #fef3c7' }}>
          <h4 style={{ fontSize: '1rem', color: '#92400e', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            ⚡ Speed Drills & Mental Math (Video Manual tr. 2 & Appendix B):
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#b45309', lineHeight: '1.6' }}>
            Hoạt động khởi động tính nhẩm nhanh và kiểm tra bảng cửu chương nhân chia (Tables 2–3) chuẩn bị cho Speed Drill L2 ngày hôm sau.
          </p>
        </div>
      </div>

      {/* SECTION II: HƯỚNG DẪN THỰC HÀNH & NHIỆM VỤ TỰ HỌC */}
      <div className="card" style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0' }}>
        <h3 style={{ fontSize: '1.25rem', color: '#166534', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', borderBottom: '2px dashed #a7f3d0', paddingBottom: '8px' }}>
          <ListChecks color="#16a34a" /> II. Hướng Dẫn Thực Hành & Nhiệm Vụ Tự Học
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: '12px', border: '1px solid #86efac', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <CheckCircle2 color="#16a34a" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#14532d', fontSize: '0.98rem' }}>Bài tập trên lớp:</strong>
              <p style={{ color: '#15803d', fontSize: '0.92rem', marginTop: '2px' }}>
                Cùng làm các bài tập 1, 2, 3 trang 1 và phần Roman Numerals trang 2 với video.
              </p>
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: '12px', border: '1px solid #86efac', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <ArrowRight color="#16a34a" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#14532d', fontSize: '0.98rem' }}>Nhiệm vụ tự học sau video:</strong>
              <p style={{ color: '#15803d', fontSize: '0.92rem', marginTop: '2px' }}>
                Hoàn thành toàn bộ các bài tập chưa làm xong trên trang 1 và trang 2; kiểm tra bảng cửu chương 2–3 chuẩn bị cho Speed Drill Lesson 2.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

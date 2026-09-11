import React from 'react';
import { BookOpen, User, Film, Bookmark, Info, CheckCircle, FileText, Compass, Target } from 'lucide-react';

export default function BookIdentificationViewer({ lesson }) {
  const bookInfo = lesson.bookIdentification || {
    teacher: "Miss Emma Spaugh (Abeka Academy)",
    videoFile: "Grade 5 - 001 - Arithmetic 5.mp4 (36 phút 14 giây)",
    mainBook: "Arithmetic 5 (Work-text) (Ấn bản 4/5, Abeka - AR)",
    supplements: "Arithmetic Facts Sheets (Appendix B); Quizzes & Tests",
    videoManual: "Grade 5 Video Manual (tr. T6, tr. 2)",
    keyHighlights: "Bảng chữ số La Mã cơ bản (I, V, X, L, C, D, M)",
    lessonLocation: "Lesson 1, trang 1–2 (Place Value through Hundred Billions, Roman Numerals, Review)",
    pedagogicalContext: "Mở rộng hệ thống số học lên đến hàng Trăm Tỷ (Hundred Billions). Nắm vững 4 lớp số (Periods: Ones, Thousands, Millions, Billions), phân biệt Place (Vị trí) và Value (Giá trị), quy tắc viết số La Mã (không lặp quá 3 lần, quy tắc cộng/trừ), thuật toán cộng nhiều chữ số có nhớ và kỹ năng giải toán có lời văn (Story Problems) trên giấy nháp."
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header Banner */}
      <div className="card" style={{ marginBottom: '20px', background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', border: '1px solid #0284c7' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#0369a1', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BookOpen color="#0284c7" size={26} />
          Báo Cáo Nhận Diện Sách & Học Liệu (Book Identification)
        </h2>
        <p style={{ fontSize: '0.88rem', color: '#075985', marginTop: '4px' }}>
          Đối chiếu đầy đủ thông tin sách giáo khoa, vở bài tập, giáo trình Video Manual và bối cảnh sư phạm bài học Abeka Lớp 5.
        </p>
      </div>

      {/* Info Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div className="card" style={{ borderLeft: '4px solid #4f46e5' }}>
          <div style={{ fontWeight: '800', color: '#4338ca', fontSize: '0.92rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <User size={18} /> Giáo Viên Phụ Trách
          </div>
          <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b' }}>
            {bookInfo.teacher}
          </div>
        </div>

        <div className="card" style={{ borderLeft: '4px solid #0891b2' }}>
          <div style={{ fontWeight: '800', color: '#0e7490', fontSize: '0.92rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Film size={18} /> Video Bài Giảng Trực Quan
          </div>
          <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b' }}>
            {bookInfo.videoFile}
          </div>
        </div>

        <div className="card" style={{ borderLeft: '4px solid #16a34a' }}>
          <div style={{ fontWeight: '800', color: '#15803d', fontSize: '0.92rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={18} /> Sách Giáo Khoa Chính
          </div>
          <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b' }}>
            {bookInfo.mainBook}
          </div>
        </div>

        <div className="card" style={{ borderLeft: '4px solid #d97706' }}>
          <div style={{ fontWeight: '800', color: '#b45309', fontSize: '0.92rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Bookmark size={18} /> Vở Bài Tập & Tài Liệu Đi Kèm
          </div>
          <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b' }}>
            {bookInfo.supplements}
          </div>
        </div>

        <div className="card" style={{ borderLeft: '4px solid #9333ea' }}>
          <div style={{ fontWeight: '800', color: '#7e22ce', fontSize: '0.92rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FileText size={18} /> Sổ Tay Hướng Dẫn Chuẩn (Video Manual)
          </div>
          <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b' }}>
            {bookInfo.videoManual}
          </div>
        </div>

        <div className="card" style={{ borderLeft: '4px solid #e11d48' }}>
          <div style={{ fontWeight: '800', color: '#be123c', fontSize: '0.92rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Target size={18} /> Trọng Tâm Ghi Nhớ
          </div>
          <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b' }}>
            {bookInfo.keyHighlights}
          </div>
        </div>
      </div>

      {/* Lesson Position Card */}
      <div className="card" style={{ marginBottom: '20px', background: '#f8fafc', border: '1.5px solid #e2e8f0' }}>
        <h3 style={{ fontSize: '1.1rem', color: '#1e293b', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Compass color="#4f46e5" /> Vị Trí Bài Học & Phân Đoạn Nền Tảng
        </h3>
        <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#4338ca' }}>
          {bookInfo.lessonLocation}
        </div>
      </div>

      {/* Pedagogical Context Card */}
      <div className="card" style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0' }}>
        <h3 style={{ fontSize: '1.1rem', color: '#166534', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Info color="#16a34a" /> Tóm Lược Bối Cảnh Sư Phạm (Pedagogical Context)
        </h3>
        <div style={{ fontSize: '0.98rem', color: '#15803d', lineHeight: '1.8' }}>
          {bookInfo.pedagogicalContext}
        </div>
      </div>
    </div>
  );
}

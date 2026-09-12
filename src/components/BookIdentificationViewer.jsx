import React from 'react';
import { BookOpen, User, Film, ListChecks, CheckCircle2, AlertCircle } from 'lucide-react';

export default function BookIdentificationViewer({ lesson }) {
  const bookInfo = lesson.bookIdentification || {};
  const teacher = lesson.teacher || bookInfo.teacher || "";
  const mainBook = lesson.bookTitle || bookInfo.primary_textbook || "";
  const bookPages = lesson.bookPages || bookInfo.textbook_pages || "";
  const manualRef = lesson.manualRef || bookInfo.supplementary_materials || "";
  const requiredSupplies = bookInfo.required_supplies || "Sách bài tập, bút chì, giấy nháp làm bài.";

  const hasBookData = Boolean(teacher || mainBook || Object.keys(bookInfo).length > 0);

  if (!hasBookData) {
    return (
      <div style={{ maxWidth: '1000px', margin: '30px auto', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '44px 32px',
          border: '2px dashed #cbd5e1',
          boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
          textAlign: 'center'
        }}>
          <div style={{ background: '#fef3c7', color: '#d97706', width: '64px', height: '64px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <AlertCircle size={36} />
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '900', color: '#1e293b', marginBottom: '8px' }}>
            Thông Tin Nhận Diện Sách Cho {lesson.subject} ({lesson.day}) Đang Được Cập Nhật
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '650px', margin: '0 auto 20px', lineHeight: '1.7' }}>
            Bài học này chưa được nạp file <code>book_and_timestamp.json</code> từ Gemini Spark. Hệ thống không tự ý điền thông tin giả để đảm bảo tính chính xác 100%.
          </p>
          <div style={{ background: '#f8fafc', padding: '14px 20px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'inline-block', fontSize: '0.88rem', color: '#475569', fontWeight: '700' }}>
            💡 Khi bạn chạy Gemini Spark phân tích xong bài học {lesson.day}, thông tin sách giáo khoa và học liệu đối chiếu sẽ tự động nạp lên đây.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', fontFamily: 'Nunito, Quicksand, sans-serif' }}>
      {/* Summary Info Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div className="card" style={{ padding: '18px', borderLeft: '4px solid #4f46e5', background: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ fontWeight: '800', color: '#4338ca', fontSize: '0.88rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <User size={16} /> Giáo Viên Phụ Trách
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1e293b' }}>{teacher}</div>
        </div>

        <div className="card" style={{ padding: '18px', borderLeft: '4px solid #0891b2', background: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ fontWeight: '800', color: '#0e7490', fontSize: '0.88rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Film size={16} /> Video & Bài Giảng
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1e293b' }}>{lesson.subject} ({lesson.day})</div>
        </div>

        <div className="card" style={{ padding: '18px', borderLeft: '4px solid #16a34a', background: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ fontWeight: '800', color: '#15803d', fontSize: '0.88rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={16} /> Sách Giáo Khoa Chính
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1e293b' }}>{mainBook}</div>
        </div>
      </div>

      {/* SECTION I: NHẬN DIỆN SÁCH GIÁO KHOA & NGUỒN HỌC LIỆU */}
      <div className="card" style={{ marginBottom: '24px', background: '#ffffff', borderRadius: '20px', padding: '24px', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
        <h3 style={{ fontSize: '1.25rem', color: '#166534', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', borderBottom: '2px dashed #bbf7d0', paddingBottom: '8px' }}>
          <BookOpen color="#16a34a" /> I. Nhận Diện Sách Giáo Khoa & Học Liệu Đối Chiếu
        </h3>

        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1.5px solid #e2e8f0', marginBottom: '16px' }}>
          <h4 style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: '800', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📘 {mainBook}
          </h4>
          <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem', color: '#334155' }}>
            <li style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '10px', borderLeft: '4px solid #4f46e5' }}>
              <strong>Mục bài học:</strong> {bookPages}
            </li>
            <li style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '10px', borderLeft: '4px solid #0891b2' }}>
              <strong>Tài liệu hướng dẫn:</strong> {manualRef}
            </li>
            <li style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '10px', borderLeft: '4px solid #16a34a' }}>
              <strong>Dụng cụ học tập cần thiết:</strong> {requiredSupplies}
            </li>
          </ul>
        </div>
      </div>

      {/* SECTION II: HƯỚNG DẪN THỰC HÀNH & NHIỆM VỤ TỰ HỌC */}
      <div className="card" style={{ background: '#f0fdf4', borderRadius: '20px', padding: '24px', border: '1.5px solid #bbf7d0' }}>
        <h3 style={{ fontSize: '1.25rem', color: '#166534', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', borderBottom: '2px dashed #a7f3d0', paddingBottom: '8px' }}>
          <ListChecks color="#16a34a" /> II. Hướng Dẫn Thực Hành & Nhiệm Vụ Tự Học
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '14px', border: '1px solid #86efac', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <CheckCircle2 color="#16a34a" size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#14532d', fontSize: '1rem' }}>Bài tập trên lớp:</strong>
              <p style={{ color: '#15803d', fontSize: '0.95rem', marginTop: '4px' }}>
                Theo dõi video bài giảng và hoàn thành bài tập {bookPages} trong sách {mainBook}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

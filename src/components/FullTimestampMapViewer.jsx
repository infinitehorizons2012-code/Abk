import React from 'react';
import { Map, Clock, BookOpen, PlayCircle, CheckCircle2, FileSpreadsheet, AlertCircle } from 'lucide-react';

export default function FullTimestampMapViewer({ lesson, onSelectTimestamp }) {
  const mapData = lesson.timestampMap || [];

  if (mapData.length === 0) {
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
            Bảng Timestamp Map Cho {lesson.subject} ({lesson.day}) Đang Được Cập Nhật
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '650px', margin: '0 auto 20px', lineHeight: '1.7' }}>
            Bài học này chưa được nạp file <code>book_and_timestamp.json</code> từ Gemini Spark. Hệ thống không tạo dữ liệu giả để đảm bảo tính chính xác 100%.
          </p>
          <div style={{ background: '#f8fafc', padding: '14px 20px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'inline-block', fontSize: '0.88rem', color: '#475569', fontWeight: '700' }}>
            💡 Khi bạn chạy Gemini Spark phân tích xong bài học {lesson.day}, mốc thời gian sẽ tự động hiển thị đầy đủ tại đây.
          </div>
        </div>
      </div>
    );
  }

  const formatTimePill = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

      {/* Timeline Table Card */}
      <div className="card">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#475569', fontWeight: '800' }}>
                <th style={{ padding: '12px 16px', width: '150px' }}>⏱️ Mốc Thời Gian</th>
                <th style={{ padding: '12px 16px', width: '220px' }}>📌 Nội Dung Bài Học</th>
                <th style={{ padding: '12px 16px' }}>📝 Chi Tiết Diễn Biến Lời Giảng</th>
                <th style={{ padding: '12px 16px', width: '240px' }}>📖 Trích Dẫn Trang Sách</th>
                <th style={{ padding: '12px 16px', width: '100px', textAlign: 'center' }}>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {mapData.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9', background: idx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                  <td style={{ padding: '14px 16px', fontWeight: '800', color: '#4f46e5', whiteSpace: 'nowrap' }}>
                    <span style={{ background: '#eef2ff', padding: '6px 12px', borderRadius: '16px', border: '1px solid #c7d2fe', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} />
                      {formatTimePill(item.startTime)} - {formatTimePill(item.endTime)}
                    </span>
                  </td>

                  <td style={{ padding: '14px 16px', fontWeight: '800', color: '#1e293b' }}>
                    {item.title}
                  </td>

                  <td style={{ padding: '14px 16px', color: '#475569', lineHeight: '1.6' }}>
                    {item.desc}
                  </td>

                  <td style={{ padding: '14px 16px', color: '#0369a1', fontWeight: '700' }}>
                    <span style={{ background: '#e0f2fe', padding: '4px 10px', borderRadius: '8px', border: '1px solid #bae6fd', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <BookOpen size={13} />
                      {item.bookRef}
                    </span>
                  </td>

                  <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                    <button
                      onClick={() => onSelectTimestamp(item.startTime)}
                      style={{
                        background: '#4f46e5',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <PlayCircle size={14} /> Xem
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

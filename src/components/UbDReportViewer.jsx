import React from 'react';
import { FileText, Award, Layers, AlertTriangle, CheckSquare } from 'lucide-react';

export default function UbDReportViewer({ lesson }) {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div className="card" style={{ marginBottom: '24px', background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', border: '1px solid #10b981' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#065f46', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileText color="#059669" />
          Báo Cáo Phân Tích Thiết Kế Sư Phạm Ngược (UbD Analysis Report)
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#047857', marginTop: '4px' }}>
          Báo cáo phân tích chuyên sâu 7 giai đoạn bám sát chuẩn sư phạm Abeka và đối chiếu trực tiếp với trang sách giáo khoa.
        </p>
      </div>

      <div className="ubd-doc-container">
        {/* Document Header */}
        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', fontSize: '0.9rem' }}>
            <div><strong>Môn học:</strong> {lesson.subject}</div>
            <div><strong>Giáo viên:</strong> {lesson.teacher}</div>
            <div><strong>Sách giáo khoa:</strong> {lesson.bookTitle}</div>
            <div><strong>Phạm vi bài học:</strong> {lesson.bookPages}</div>
          </div>
        </div>

        {/* Markdown Content */}
        <div style={{ whiteSpace: 'pre-line', fontSize: '1rem', color: '#334155' }}>
          {lesson.ubdReportMd}
        </div>
      </div>
    </div>
  );
}

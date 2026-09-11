import React from 'react';
import { BookOpen, PlayCircle, Bookmark, CheckCircle } from 'lucide-react';

export default function TimestampBookMap({ lesson, currentTime, onSelectTimestamp }) {
  const formatTimePill = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="card timestamp-sidebar">
      <div style={{ borderBottom: '2px dashed #e2e8f0', paddingBottom: '12px' }}>
        <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#1e1b4b' }}>
          <BookOpen size={20} color="#4f46e5" />
          Đối Chiếu Video & Trang Sách
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
          Bấm mốc thời gian để nhảy trực tiếp tới video và tra cứu trang sách tương ứng.
        </p>
      </div>

      <div className="timestamp-list">
        {lesson.timestampMap.map((item, idx) => {
          const isActive = currentTime >= item.startTime && currentTime <= item.endTime;
          return (
            <div
              key={idx}
              className={`timestamp-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectTimestamp(item.startTime)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="time-badge">
                  <PlayCircle size={14} />
                  {formatTimePill(item.startTime)} - {formatTimePill(item.endTime)}
                </span>
                {isActive && <CheckCircle size={16} color="#10b981" />}
              </div>

              <div style={{ fontWeight: '800', fontSize: '0.98rem', color: '#1e293b' }}>
                {item.title}
              </div>

              <div style={{ fontSize: '0.88rem', color: '#475569', background: '#ffffff', padding: '8px 10px', borderRadius: '8px', borderLeft: '3px solid #6366f1' }}>
                {item.desc}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                <span className="book-tag">
                  <Bookmark size={12} />
                  {item.bookRef}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

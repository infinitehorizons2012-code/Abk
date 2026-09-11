import React from 'react';
import { ExternalLink, Info, Tv } from 'lucide-react';

export default function VideoPlayer({ lesson }) {
  const driveEmbedUrl = lesson.driveEmbedUrl || "https://drive.google.com/file/d/16JlibrmSh3BZFmM3bVVm6DiGabaHgv_o/preview";
  const driveLinkUrl = "https://drive.google.com/file/d/16JlibrmSh3BZFmM3bVVm6DiGabaHgv_o/view?usp=sharing";

  return (
    <div className="card video-card" style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
      {/* Embedded Google Drive Video Container */}
      <div className="video-wrapper" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
        <iframe
          title="Google Drive Abeka Video Player"
          src={driveEmbedUrl}
          className="video-element"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>

      {/* Clean Footer Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', background: '#f8fafc', padding: '12px 18px', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '16px' }}>
        <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Tv size={18} color="#4f46e5" />
          <span>Bài giảng: <strong>{lesson.subject} ({lesson.day})</strong></span>
        </div>

        <a
          href={driveLinkUrl}
          target="_blank"
          rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: '#2563eb', fontWeight: '700', textDecoration: 'none' }}
        >
          <ExternalLink size={14} /> Mở Trực Tiếp Trên Google Drive
        </a>
      </div>
    </div>
  );
}

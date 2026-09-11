import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, ExternalLink, Clock, Tv, Film, Info } from 'lucide-react';

export default function VideoPlayer({ lesson, activeTimestamp, onTimeUpdate }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState(null);
  const [playerMode, setPlayerMode] = useState('iframe'); // Default to Google Drive Embed for guaranteed playback

  const driveEmbedUrl = lesson.driveEmbedUrl || "https://drive.google.com/file/d/16JlibrmSh3BZFmM3bVVm6DiGabaHgv_o/preview";

  // Sync video time when external timestamp is selected
  useEffect(() => {
    if (activeTimestamp !== null && videoRef.current && playerMode === 'html5') {
      videoRef.current.currentTime = activeTimestamp;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [activeTimestamp, playerMode]);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    setCurrentTime(time);
    if (onTimeUpdate) onTimeUpdate(time);

    // Subtitle search
    if (lesson.subtitles) {
      const match = lesson.subtitles.find(
        (sub) => time >= sub.start && time <= sub.end
      );
      setCurrentSubtitle(match || null);
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="card video-card">
      {/* Mode Switch Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#eef2ff', padding: '10px 16px', borderRadius: '12px', border: '1px solid #c7d2fe' }}>
        <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#3730a3', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Tv size={16} />
          Trình phát video Bài giảng Abeka
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setPlayerMode('iframe')}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: '800',
              border: 'none',
              background: playerMode === 'iframe' ? '#4f46e5' : '#ffffff',
              color: playerMode === 'iframe' ? '#ffffff' : '#475569',
              boxShadow: playerMode === 'iframe' ? '0 2px 6px rgba(79, 70, 229, 0.3)' : 'none',
              cursor: 'pointer'
            }}
          >
            📺 Google Drive Player (Trực Tiếp)
          </button>

          <button
            onClick={() => setPlayerMode('html5')}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: '800',
              border: 'none',
              background: playerMode === 'html5' ? '#4f46e5' : '#ffffff',
              color: playerMode === 'html5' ? '#ffffff' : '#475569',
              boxShadow: playerMode === 'html5' ? '0 2px 6px rgba(79, 70, 229, 0.3)' : 'none',
              cursor: 'pointer'
            }}
          >
            ⚡ HTML5 Stream Player
          </button>
        </div>
      </div>

      <div className="video-wrapper">
        {playerMode === 'iframe' ? (
          <iframe
            title="Google Drive Abeka Video Player"
            src={driveEmbedUrl}
            className="video-element"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            ref={videoRef}
            className="video-element"
            src={lesson.videoUrl}
            controls
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
            onEnded={() => setIsPlaying(false)}
          />
        )}
      </div>

      {/* Subtitle Display */}
      <div className="subtitle-box">
        {currentSubtitle ? (
          <>
            <div className="sub-en">🗣️ {currentSubtitle.en}</div>
            <div className="sub-vi">🇻🇳 {currentSubtitle.vi}</div>
          </>
        ) : (
          <div style={{ color: '#94a3b8', fontStyle: 'italic', textAlign: 'center' }}>
            💬 Phụ đề lời giảng bài học môn {lesson.subject} (Bấm mốc thời gian bên phải để xem phụ đề)...
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', background: '#f8fafc', padding: '12px 18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ fontSize: '0.85rem', color: '#475569', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Info size={16} color="#4f46e5" />
          <span>Video: <strong>Grade 5 - 001 - Arithmetic 5.mp4</strong></span>
        </div>

        <a
          href="https://drive.google.com/file/d/16JlibrmSh3BZFmM3bVVm6DiGabaHgv_o/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#2563eb', fontWeight: '700' }}
        >
          <ExternalLink size={14} /> Mở Trực Tiếp Trên Google Drive
        </a>
      </div>
    </div>
  );
}

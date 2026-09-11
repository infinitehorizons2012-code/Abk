import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, ExternalLink, Clock, Tv, Film, Info, ChevronLeft, ChevronRight } from 'lucide-react';

export default function VideoPlayer({ lesson, activeTimestamp, onTimeUpdate }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [playerMode, setPlayerMode] = useState('iframe'); // Default to Google Drive Embed for guaranteed playback

  const driveEmbedUrl = lesson.driveEmbedUrl || "https://drive.google.com/file/d/16JlibrmSh3BZFmM3bVVm6DiGabaHgv_o/preview";

  const subtitles = lesson.subtitles || [];

  // When external timestamp stop is selected from sidebar
  useEffect(() => {
    if (activeTimestamp !== null) {
      if (playerMode === 'html5' && videoRef.current) {
        videoRef.current.currentTime = activeTimestamp;
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }

      // Find subtitle matching selected timestamp
      if (subtitles.length > 0) {
        const foundIdx = subtitles.findIndex(
          (sub) => sub.start >= activeTimestamp || (activeTimestamp >= sub.start && activeTimestamp <= sub.end)
        );
        if (foundIdx !== -1) {
          setCurrentSubtitleIndex(foundIdx);
        }
      }
    }
  }, [activeTimestamp, playerMode, subtitles]);

  // Video time update handler in HTML5 mode
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    setCurrentTime(time);
    if (onTimeUpdate) onTimeUpdate(time);

    // Sync subtitle
    if (subtitles.length > 0) {
      const matchIdx = subtitles.findIndex(
        (sub) => time >= sub.start && time <= sub.end
      );
      if (matchIdx !== -1) {
        setCurrentSubtitleIndex(matchIdx);
      }
    }
  };

  const handleNextSubtitle = () => {
    if (currentSubtitleIndex < subtitles.length - 1) {
      const nextIdx = currentSubtitleIndex + 1;
      setCurrentSubtitleIndex(nextIdx);
      if (playerMode === 'html5' && videoRef.current && subtitles[nextIdx]) {
        videoRef.current.currentTime = subtitles[nextIdx].start;
      }
    }
  };

  const handlePrevSubtitle = () => {
    if (currentSubtitleIndex > 0) {
      const prevIdx = currentSubtitleIndex - 1;
      setCurrentSubtitleIndex(prevIdx);
      if (playerMode === 'html5' && videoRef.current && subtitles[prevIdx]) {
        videoRef.current.currentTime = subtitles[prevIdx].start;
      }
    }
  };

  const currentSub = subtitles[currentSubtitleIndex] || subtitles[0];

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="card video-card">
      {/* Player Mode Selector Header */}
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
            📺 Google Drive Player (Mặc Định)
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

      {/* Interactive Subtitle & Transcript Control Box */}
      <div className="subtitle-box" style={{ background: '#0f172a', padding: '16px 20px', borderRadius: '16px', border: '1px solid #1e293b' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', borderBottom: '1px dashed #334155', paddingBottom: '6px' }}>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '700' }}>
            💬 Lời Giảng & Phụ Đề Chi Tiết ({currentSubtitleIndex + 1} / {subtitles.length})
          </span>
          <span style={{ fontSize: '0.78rem', color: '#fbbf24', background: 'rgba(251, 191, 36, 0.15)', padding: '2px 8px', borderRadius: '10px', fontWeight: '700' }}>
            ⏱️ {formatTime(currentSub?.start || 0)}
          </span>
        </div>

        {currentSub ? (
          <div>
            <div className="sub-en" style={{ fontSize: '1.05rem', color: '#fbbf24', fontWeight: '700', marginBottom: '4px' }}>
              🗣️ {currentSub.en}
            </div>
            <div className="sub-vi" style={{ fontSize: '0.95rem', color: '#e2e8f0' }}>
              🇻🇳 {currentSub.vi}
            </div>
          </div>
        ) : (
          <div style={{ color: '#94a3b8', fontStyle: 'italic', textAlign: 'center' }}>
            💬 Chọn mốc thời gian để xem phụ đề tương ứng...
          </div>
        )}

        {/* Subtitle Navigation Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', paddingTop: '8px', borderTop: '1px solid #1e293b' }}>
          <button
            onClick={handlePrevSubtitle}
            disabled={currentSubtitleIndex === 0}
            style={{
              background: '#1e293b',
              color: '#e2e8f0',
              border: 'none',
              borderRadius: '8px',
              padding: '4px 12px',
              fontSize: '0.8rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              cursor: currentSubtitleIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: currentSubtitleIndex === 0 ? 0.5 : 1
            }}
          >
            <ChevronLeft size={14} /> Lời Giảng Trước
          </button>

          <button
            onClick={handleNextSubtitle}
            disabled={currentSubtitleIndex === subtitles.length - 1}
            style={{
              background: '#1e293b',
              color: '#e2e8f0',
              border: 'none',
              borderRadius: '8px',
              padding: '4px 12px',
              fontSize: '0.8rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              cursor: currentSubtitleIndex === subtitles.length - 1 ? 'not-allowed' : 'pointer',
              opacity: currentSubtitleIndex === subtitles.length - 1 ? 0.5 : 1
            }}
          >
            Lời Giảng Tiếp theo <ChevronRight size={14} />
          </button>
        </div>
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

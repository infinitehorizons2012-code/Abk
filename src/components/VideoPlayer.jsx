import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, BookOpen, Clock, Volume2, Maximize } from 'lucide-react';

export default function VideoPlayer({ lesson, activeTimestamp, onTimeUpdate }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState(null);

  // Sync video time when external timestamp is selected
  useEffect(() => {
    if (activeTimestamp !== null && videoRef.current) {
      videoRef.current.currentTime = activeTimestamp;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [activeTimestamp]);

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

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="card video-card">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video-element"
          src={lesson.videoUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
          onEnded={() => setIsPlaying(false)}
        />
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
            💬 Phụ đề bài giảng sẽ hiển thị đồng bộ theo video tại đây...
          </div>
        )}
      </div>

      {/* Video Control Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', padding: '12px 18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <button onClick={togglePlay} className="btn-primary" style={{ padding: '8px 16px' }}>
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          {isPlaying ? 'Tạm Dừng' : 'Phát Video'}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: '700', color: '#475569' }}>
          <Clock size={16} />
          <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration || 2174)}</span>
        </div>

        <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>
          📁 Drive: <code style={{ background: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Grade 5 - 001.mp4</code>
        </div>
      </div>
    </div>
  );
}

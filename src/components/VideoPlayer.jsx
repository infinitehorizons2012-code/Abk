import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, ExternalLink, Clock, Tv, Film } from 'lucide-react';

export default function VideoPlayer({ lesson, activeTimestamp, onTimeUpdate }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState(null);
  const [playerMode, setPlayerMode] = useState('html5'); // 'html5' or 'iframe'

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
        {playerMode === 'html5' ? (
          <video
            ref={videoRef}
            className="video-element"
            src={lesson.videoUrl}
            controls
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
            onEnded={() => setIsPlaying(false)}
            onError={() => setPlayerMode('iframe')}
          />
        ) : (
          <iframe
            title="Google Drive Video Player"
            src={lesson.driveEmbedUrl || "https://drive.google.com/file/d/16JlibrmSh3BZFmM3bVVm6DiGabaHgv_o/preview"}
            className="video-element"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
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
            💬 Phụ đề bài giảng sẽ hiển thị đồng bộ theo video tại đây...
          </div>
        )}
      </div>

      {/* Video Control & Player Mode Selector */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', background: '#f8fafc', padding: '12px 18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => setPlayerMode(playerMode === 'html5' ? 'iframe' : 'html5')}
            className="btn-primary"
            style={{ padding: '6px 14px', fontSize: '0.85rem', background: playerMode === 'html5' ? '#4f46e5' : '#0891b2' }}
          >
            {playerMode === 'html5' ? <Film size={16} /> : <Tv size={16} />}
            {playerMode === 'html5' ? 'HTML5 Player' : 'Google Drive Embed Player'}
          </button>
        </div>

        {playerMode === 'html5' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: '700', color: '#475569' }}>
            <Clock size={16} />
            <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration || 2174)}</span>
          </div>
        )}

        <a
          href="https://drive.google.com/file/d/16JlibrmSh3BZFmM3bVVm6DiGabaHgv_o/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#2563eb', fontWeight: '700' }}
        >
          <ExternalLink size={14} /> Mở Video Google Drive
        </a>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

const MINI_CARD_THEMES = [
  { bg: '#f0f9ff', border: '#bae6fd', titleColor: '#0369a1', descColor: '#075985', emoji: '🗼' },
  { bg: '#f0fdf4', border: '#bbf7d0', titleColor: '#15803d', descColor: '#166534', emoji: '🐼' },
  { bg: '#fefce8', border: '#fef08a', titleColor: '#a16207', descColor: '#854d0e', emoji: '🐘' },
  { bg: '#faf5ff', border: '#e9d5ff', titleColor: '#6b21a8', descColor: '#581c87', emoji: '🧱' },
  { bg: '#fff1f2', border: '#fecdd3', titleColor: '#9f1239', descColor: '#881337', emoji: '🎭' },
  { bg: '#f0fdfa', border: '#99f6e4', titleColor: '#0f766e', descColor: '#115e59', emoji: '📐' },
];

const EMOJI_CYCLE = ['🧭', '📚', '💡', '🌍', '🎯', '🚀', '🔬', '🧩', '🧮', '✨'];

export default function SlideDeckViewer({ lesson }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = lesson.slides || [];
  const totalSlides = slides.length;

  // Sync index when lesson changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [lesson]);

  const handleNext = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Keyboard navigation (Left, Right, Space)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalSlides]);

  if (totalSlides === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', background: '#ffffff', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
        Chưa có Slide Deck cho bài học này.
      </div>
    );
  }

  const slide = slides[currentIndex] || {};
  const mainEmoji = EMOJI_CYCLE[currentIndex % EMOJI_CYCLE.length];

  // Parse items/bullet points into structured objects for mini cards
  const rawPoints = slide.bulletPoints || (slide.content ? slide.content.split('\n').filter(Boolean) : []);
  const itemsList = rawPoints.map((pointStr) => {
    let title = pointStr;
    let desc = '';

    if (pointStr.includes(':')) {
      const parts = pointStr.split(':');
      title = parts[0].trim();
      desc = parts.slice(1).join(':').trim();
    } else if (pointStr.includes('-')) {
      const parts = pointStr.split('-');
      title = parts[0].trim();
      desc = parts.slice(1).join('-').trim();
    }

    return { title, desc };
  });

  return (
    <div style={{ maxWidth: '1050px', margin: '0 auto', fontFamily: 'Nunito, Quicksand, sans-serif' }}>
      {/* Main Slide Card Container */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '3.5px solid #38bdf8',
          padding: '32px 36px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)',
          minHeight: '450px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginBottom: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div>
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <span
              style={{
                background: '#e0f2fe',
                color: '#0284c7',
                padding: '6px 18px',
                borderRadius: '20px',
                fontSize: '0.88rem',
                fontWeight: '800',
              }}
            >
              {slide.tag || slide.category || 'Nhân vật đồng hành'} • Slide {currentIndex + 1}
            </span>
            <span style={{ fontSize: '0.95rem', color: '#475569', fontWeight: '800' }}>
              Slide {currentIndex + 1} / {totalSlides}
            </span>
          </div>

          {/* Title & Subtitle Block */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '2.8rem', marginBottom: '8px' }}>{mainEmoji}</div>
            <h2 style={{ fontSize: '1.85rem', fontWeight: '900', color: '#1e3a8a', marginBottom: '6px', lineHeight: '1.3', letterSpacing: '-0.01em' }}>
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p style={{ fontSize: '1.1rem', color: '#059669', fontWeight: '800', marginBottom: '8px' }}>
                {slide.subtitle}
              </p>
            )}
            {(slide.keyTakeaway || slide.quote) && (
              <p style={{ fontStyle: 'italic', color: '#334155', fontSize: '1.05rem', fontWeight: '600', marginTop: '6px' }}>
                "{slide.keyTakeaway || slide.quote}"
              </p>
            )}
          </div>

          {/* Mini Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '14px',
              marginBottom: '24px',
            }}
          >
            {itemsList.map((item, idx) => {
              const theme = MINI_CARD_THEMES[idx % MINI_CARD_THEMES.length];
              return (
                <div
                  key={idx}
                  style={{
                    background: theme.bg,
                    border: `1.5px solid ${theme.border}`,
                    borderRadius: '18px',
                    padding: '16px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>{theme.emoji}</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '800', color: theme.titleColor, marginBottom: '4px', lineHeight: '1.3' }}>
                    {item.title}
                  </div>
                  {item.desc && (
                    <div style={{ fontSize: '0.9rem', color: theme.descColor, fontWeight: '600', lineHeight: '1.4' }}>
                      {item.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Row inside Slide */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '14px', borderTop: '1px solid #f1f5f9' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={15} color="#94a3b8" /> {lesson.subject || 'Abeka Series'} • {lesson.grade || 'Grade 5'}
          </span>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: '700' }}>
            Phím mũi tên ⬅️ ➡️ hoặc Phím cách để chuyển slide
          </span>
        </div>
      </div>

      {/* Bottom Dark Navigation Dock */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: '24px',
          padding: '14px 28px',
          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.25)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Navigation Buttons */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 22px',
              borderRadius: '30px',
              background: '#ffffff',
              color: currentIndex === 0 ? '#cbd5e1' : '#0f172a',
              fontWeight: '800',
              fontSize: '0.95rem',
              border: 'none',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.2s ease',
            }}
          >
            <ArrowLeft size={16} /> Trước
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === totalSlides - 1}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 22px',
              borderRadius: '30px',
              background: '#ffffff',
              color: currentIndex === totalSlides - 1 ? '#cbd5e1' : '#0f172a',
              fontWeight: '800',
              fontSize: '0.95rem',
              border: 'none',
              cursor: currentIndex === totalSlides - 1 ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.2s ease',
            }}
          >
            Tiếp <ArrowRight size={16} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: idx === currentIndex ? '28px' : '8px',
                height: '8px',
                borderRadius: '10px',
                background: idx === currentIndex ? '#06b6d4' : '#334155',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        {/* Slide Counter Badge */}
        <div style={{ color: '#ffffff', fontWeight: '800', fontSize: '1.05rem' }}>
          {currentIndex + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
}

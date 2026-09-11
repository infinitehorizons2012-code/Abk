import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Presentation, Sparkles } from 'lucide-react';

export default function SlideDeckViewer({ lesson }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = lesson.slides || [];

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  if (slides.length === 0) {
    return <div className="card">Chưa có slide bài giảng.</div>;
  }

  const slide = slides[currentSlideIndex];

  return (
    <div style={{ maxWidth: '950px', margin: '0 auto' }}>
      <div className="card" style={{ marginBottom: '24px', background: 'linear-gradient(135deg, #fae8ff 0%, #f0abfc 100%)', border: '1px solid #d946ef' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#701a75', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Presentation color="#a21caf" />
          NotebookLM Style Slide Deck (Trình Chiếu Tóm Tắt)
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#86198f', marginTop: '4px' }}>
          Xem các thẻ slide tóm tắt được trích xuất trực tiếp từ kho tri thức NotebookLM RAG.
        </p>
      </div>

      <div className="slide-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fae8ff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: '700' }}>
            {slide.tag || 'NotebookLM Slide'}
          </span>
          <span style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: '600' }}>
            Slide {currentSlideIndex + 1} / {slides.length}
          </span>
        </div>

        <div style={{ margin: '30px 0' }}>
          <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '16px' }}>
            {slide.title}
          </h3>
          <div style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
            {slide.content}
          </div>
        </div>

        {/* Slide Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
          <button
            className="btn-primary"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', opacity: currentSlideIndex === 0 ? 0.5 : 1 }}
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
          >
            <ChevronLeft size={18} /> Slide Trước
          </button>

          <button
            className="btn-primary"
            style={{ opacity: currentSlideIndex === slides.length - 1 ? 0.5 : 1 }}
            onClick={handleNext}
            disabled={currentSlideIndex === slides.length - 1}
          >
            Slide Tiếp Theo <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Presentation, Globe, Layout } from 'lucide-react';

export default function SlideDeckViewer({ lesson }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState(lesson.slidesHtmlUrl ? 'iframe' : 'react');
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

  const slide = slides[currentSlideIndex] || { title: 'Slide', content: '' };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>


      {viewMode === 'iframe' && lesson.slidesHtmlUrl ? (
        <div style={{ width: '100%', height: '850px', borderRadius: '24px', overflow: 'hidden', border: '2px solid #d946ef', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', background: '#ffffff' }}>
          <iframe 
            src={lesson.slidesHtmlUrl} 
            title="Slide Deck HTML Standalone" 
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      ) : (
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
      )}
    </div>
  );
}

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
      <div className="card" style={{ marginBottom: '24px', background: 'linear-gradient(135deg, #fae8ff 0%, #f0abfc 100%)', border: '1px solid #d946ef' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', color: '#701a75', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Presentation color="#a21caf" />
              NotebookLM Style Slide Deck (Trình Chiếu Tóm Tắt)
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#86198f', marginTop: '4px' }}>
              Xem các thẻ slide tóm tắt được trích xuất trực tiếp từ kho tri thức NotebookLM RAG.
            </p>
          </div>

          {lesson.slidesHtmlUrl && (
            <div style={{ display: 'flex', gap: '8px', background: '#ffffff', padding: '4px', borderRadius: '12px', border: '1px solid #f0abfc' }}>
              <button
                onClick={() => setViewMode('iframe')}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  background: viewMode === 'iframe' ? '#a21caf' : 'transparent',
                  color: viewMode === 'iframe' ? '#ffffff' : '#701a75',
                  fontWeight: '800',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Globe size={16} /> Trang HTML Gốc
              </button>
              <button
                onClick={() => setViewMode('react')}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  background: viewMode === 'react' ? '#a21caf' : 'transparent',
                  color: viewMode === 'react' ? '#ffffff' : '#701a75',
                  fontWeight: '800',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Layout size={16} /> Dạng Slide React
              </button>
            </div>
          )}
        </div>
      </div>

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

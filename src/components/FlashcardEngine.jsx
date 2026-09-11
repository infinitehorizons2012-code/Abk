import React, { useState } from 'react';
import { Sparkles, Bookmark, RotateCw, Layout, Globe } from 'lucide-react';

export default function FlashcardEngine({ lesson }) {
  const [flippedCards, setFlippedCards] = useState({});
  const [viewMode, setViewMode] = useState(lesson.flashcardsHtmlUrl ? 'iframe' : 'react');

  const handleFlip = (idx) => {
    setFlippedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div className="card" style={{ marginBottom: '24px', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', border: '1px solid #f59e0b' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', color: '#92400e', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles color="#d97706" />
              Thẻ Ghi Nhớ Khái Niệm (Concept Flashcards)
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#b45309', marginTop: '4px' }}>
              Bấm vào thẻ để lật xem định nghĩa, trang sách trích dẫn và mẹo ghi nhớ thông minh!
            </p>
          </div>

          {lesson.flashcardsHtmlUrl && (
            <div style={{ display: 'flex', gap: '8px', background: '#ffffff', padding: '4px', borderRadius: '12px', border: '1px solid #fcd34d' }}>
              <button
                onClick={() => setViewMode('iframe')}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  background: viewMode === 'iframe' ? '#d97706' : 'transparent',
                  color: viewMode === 'iframe' ? '#ffffff' : '#92400e',
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
                  background: viewMode === 'react' ? '#d97706' : 'transparent',
                  color: viewMode === 'react' ? '#ffffff' : '#92400e',
                  fontWeight: '800',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Layout size={16} /> Dạng Thẻ React
              </button>
            </div>
          )}
        </div>
      </div>

      {viewMode === 'iframe' && lesson.flashcardsHtmlUrl ? (
        <div style={{ width: '100%', height: '850px', borderRadius: '24px', overflow: 'hidden', border: '2px solid #f59e0b', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', background: '#ffffff' }}>
          <iframe 
            src={lesson.flashcardsHtmlUrl} 
            title="Flashcards HTML Standalone" 
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      ) : (
        <div className="flashcard-grid">
          {lesson.flashcards.map((card, idx) => {
            const isFlipped = !!flippedCards[idx];
            return (
              <div
                key={idx}
                className={`flashcard-container ${isFlipped ? 'flipped' : ''}`}
                onClick={() => handleFlip(idx)}
              >
                <div className="flashcard-inner">
                  {/* Front Side */}
                  <div className="flashcard-front">
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#6366f1', background: '#e0e7ff', padding: '4px 10px', borderRadius: '12px', marginBottom: '12px' }}>
                      Khái niệm #{idx + 1}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', color: '#1e293b', textAlign: 'center', marginBottom: '12px' }}>
                      {card.term}
                    </h3>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <RotateCw size={14} /> Bấm để lật thẻ
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flashcard-back">
                    <div style={{ fontSize: '0.95rem', color: '#1e293b', fontWeight: '600', marginBottom: '10px' }}>
                      {card.definition}
                    </div>

                    {card.memoryTip && (
                      <div style={{ fontSize: '0.85rem', color: '#047857', background: '#d1fae5', padding: '6px 10px', borderRadius: '8px', marginBottom: '8px', fontWeight: '700' }}>
                        💡 Mẹo: {card.memoryTip}
                      </div>
                    )}

                    <div style={{ fontSize: '0.8rem', color: '#4338ca', display: 'flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                      <Bookmark size={12} /> {card.bookRef}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

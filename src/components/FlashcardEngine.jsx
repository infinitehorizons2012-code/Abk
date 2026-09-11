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

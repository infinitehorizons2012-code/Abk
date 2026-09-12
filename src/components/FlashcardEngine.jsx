import React, { useState, useEffect } from 'react';
import { RotateCw, ArrowLeft, ArrowRight, Shuffle, AlertCircle } from 'lucide-react';

const THEMES = [
  {
    name: 'green',
    border: '#4ade80',
    bgLight: '#f0fdf4',
    tagBg: '#dcfce7',
    tagText: '#15803d',
    highlightBg: '#e6f4ea',
    highlightBorder: '#bbf7d0',
    highlightText: '#166534',
    emoji: '📜',
  },
  {
    name: 'blue',
    border: '#38bdf8',
    bgLight: '#f0f9ff',
    tagBg: '#e0f2fe',
    tagText: '#0369a1',
    highlightBg: '#e0f2fe',
    highlightBorder: '#bae6fd',
    highlightText: '#075985',
    emoji: '🌍',
  },
  {
    name: 'yellow',
    border: '#facc15',
    bgLight: '#fefce8',
    tagBg: '#fef9c3',
    tagText: '#a16207',
    highlightBg: '#fef9c3',
    highlightBorder: '#fef08a',
    highlightText: '#854d0e',
    emoji: '🗺️',
  },
  {
    name: 'purple',
    border: '#c084fc',
    bgLight: '#faf5ff',
    tagBg: '#f3e8ff',
    tagText: '#6b21a8',
    highlightBg: '#f3e8ff',
    highlightBorder: '#e9d5ff',
    highlightText: '#581c87',
    emoji: '🧮',
  },
  {
    name: 'rose',
    border: '#fb7185',
    bgLight: '#fff1f2',
    tagBg: '#ffe4e6',
    tagText: '#9f1239',
    highlightBg: '#ffe4e6',
    highlightBorder: '#fecdd3',
    highlightText: '#881337',
    emoji: '💡',
  },
];

export default function FlashcardEngine({ lesson }) {
  const rawCards = lesson.flashcards || [];
  const [cardsList, setCardsList] = useState(rawCards);
  const [mode, setMode] = useState('flip'); // 'flip' | 'list'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Sync cards when lesson changes
  useEffect(() => {
    setCardsList(lesson.flashcards || []);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [lesson]);

  const totalCards = cardsList.length;
  const currentCard = cardsList[currentIndex] || {};

  const getTheme = (index) => THEMES[index % THEMES.length];

  const handleNextCard = () => {
    if (currentIndex < totalCards - 1) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cardsList].sort(() => Math.random() - 0.5);
    setCardsList(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const themeCurrent = getTheme(currentIndex);

  if (totalCards === 0) {
    return (
      <div style={{ maxWidth: '1000px', margin: '30px auto', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '44px 32px',
          border: '2px dashed #cbd5e1',
          boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
          textAlign: 'center'
        }}>
          <div style={{ background: '#fef3c7', color: '#d97706', width: '64px', height: '64px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <AlertCircle size={36} />
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '900', color: '#1e293b', marginBottom: '8px' }}>
            Bộ Thẻ Ghi Nhớ (Flashcards) Cho {lesson.subject} ({lesson.day}) Đang Được Cập Nhật
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '650px', margin: '0 auto 20px', lineHeight: '1.7' }}>
            Bài học này chưa được nạp file <code>interactive_learning.json</code> từ Gemini Spark. Hệ thống không tạo dữ liệu giả để đảm bảo tính chính xác 100%.
          </p>
          <div style={{ background: '#f8fafc', padding: '14px 20px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'inline-block', fontSize: '0.88rem', color: '#475569', fontWeight: '700' }}>
            💡 Khi bạn chạy Gemini Spark tạo xong file flashcards cho {lesson.day}, bộ thẻ sẽ tự động nạp lên đây.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1050px', margin: '0 auto', fontFamily: 'Nunito, Quicksand, sans-serif' }}>
      {/* Mode Switcher Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
        <button
          onClick={() => setMode('flip')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 28px',
            borderRadius: '30px',
            fontSize: '0.98rem',
            fontWeight: '800',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            background: mode === 'flip' ? 'linear-gradient(135deg, #00b4d8 0%, #06b6d4 100%)' : '#ffffff',
            color: mode === 'flip' ? '#ffffff' : '#334155',
            boxShadow: mode === 'flip' ? '0 4px 14px rgba(6, 182, 212, 0.35)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
            border: mode === 'flip' ? 'none' : '1.5px solid #e2e8f0',
          }}
        >
          <span>🃏</span> Lật thẻ tương tác
        </button>

        <button
          onClick={() => setMode('list')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 28px',
            borderRadius: '30px',
            fontSize: '0.98rem',
            fontWeight: '800',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            background: mode === 'list' ? 'linear-gradient(135deg, #00b4d8 0%, #06b6d4 100%)' : '#ffffff',
            color: mode === 'list' ? '#ffffff' : '#334155',
            boxShadow: mode === 'list' ? '0 4px 14px rgba(6, 182, 212, 0.35)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
            border: mode === 'list' ? 'none' : '1.5px solid #e2e8f0',
          }}
        >
          <span>📋</span> Xem toàn bộ danh sách
        </button>
      </div>

      {totalCards === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', background: '#ffffff', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
          Chưa có thẻ ghi nhớ cho bài học này.
        </div>
      ) : mode === 'flip' ? (
        /* MODE 1: INTERACTIVE CARD FLIP */
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Progress bar */}
          <div style={{ background: '#e2e8f0', height: '10px', borderRadius: '10px', overflow: 'hidden', marginBottom: '16px' }}>
            <div
              style={{
                width: `${((currentIndex + 1) / totalCards) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)',
                borderRadius: '10px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>

          {/* Counter Text */}
          <div style={{ textAlign: 'center', fontWeight: '800', fontSize: '1.05rem', color: '#475569', marginBottom: '20px' }}>
            Thẻ {currentIndex + 1} / {totalCards} ({currentCard.category || 'Key Definition'})
          </div>

          {/* 3D Flip Card Container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
              perspective: '1200px',
              height: '390px',
              cursor: 'pointer',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transition: 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)',
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front Side */}
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  background: '#ffffff',
                  borderRadius: '24px',
                  border: `3px solid ${themeCurrent.border}`,
                  padding: '32px 36px',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      background: themeCurrent.tagBg,
                      color: themeCurrent.tagText,
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.88rem',
                      fontWeight: '800',
                    }}
                  >
                    {currentCard.category || 'Key Definition'}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: '700' }}>
                    💡 Nhấn để xem đáp án
                  </span>
                </div>

                {/* Center Content */}
                <div style={{ textAlign: 'center', margin: 'auto 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{themeCurrent.emoji}</div>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#1e3a8a', marginBottom: '8px', lineHeight: '1.3' }}>
                    {currentCard.term || currentCard.question}
                  </h2>
                  {currentCard.viTerm && (
                    <p style={{ fontSize: '1.1rem', color: '#64748b', fontWeight: '600' }}>
                      {currentCard.viTerm}
                    </p>
                  )}
                </div>

                {/* Bottom Footer Caption */}
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#94a3b8', fontWeight: '700' }}>
                  Mặt trước • Câu hỏi / Thuật ngữ
                </div>
              </div>

              {/* Back Side */}
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  background: '#ffffff',
                  borderRadius: '24px',
                  border: `3px solid ${themeCurrent.border}`,
                  padding: '32px 36px',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      background: themeCurrent.tagBg,
                      color: themeCurrent.tagText,
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.88rem',
                      fontWeight: '800',
                    }}
                  >
                    {currentCard.category || 'Key Definition'}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: '700' }}>
                    💡 Nhấn để quay lại mặt trước
                  </span>
                </div>

                {/* Center Content */}
                <div style={{ textAlign: 'left', margin: 'auto 0' }}>
                  <div style={{ fontSize: '1.15rem', color: '#1e293b', fontWeight: '700', lineHeight: '1.6', marginBottom: '16px' }}>
                    {currentCard.definition || currentCard.answer}
                  </div>

                  {(currentCard.memoryTip || currentCard.viTranslation) && (
                    <div
                      style={{
                        background: themeCurrent.highlightBg,
                        border: `1.5px solid ${themeCurrent.highlightBorder}`,
                        color: themeCurrent.highlightText,
                        padding: '14px 18px',
                        borderRadius: '16px',
                        fontSize: '0.96rem',
                        fontWeight: '700',
                        lineHeight: '1.5',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                      }}
                    >
                      <span>👉</span>
                      <span>{currentCard.viTranslation || currentCard.memoryTip}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Footer Caption */}
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#94a3b8', fontWeight: '700' }}>
                  Mặt sau • Đáp án / Định nghĩa
                </div>
              </div>
            </div>
          </div>

          {/* Controls Bar Below Card */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={handlePrevCard}
                disabled={currentIndex === 0}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  color: currentIndex === 0 ? '#cbd5e1' : '#2563eb',
                  fontWeight: '800',
                  fontSize: '0.95rem',
                  cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease',
                }}
              >
                <ArrowLeft size={18} /> Thẻ trước
              </button>

              <button
                onClick={() => setIsFlipped(!isFlipped)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 36px',
                  borderRadius: '30px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  fontWeight: '900',
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: '0 6px 18px rgba(16, 185, 129, 0.4)',
                  transition: 'transform 0.15s ease',
                }}
              >
                <RotateCw size={20} /> Lật thẻ
              </button>

              <button
                onClick={handleNextCard}
                disabled={currentIndex === totalCards - 1}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  color: currentIndex === totalCards - 1 ? '#cbd5e1' : '#2563eb',
                  fontWeight: '800',
                  fontSize: '0.95rem',
                  cursor: currentIndex === totalCards - 1 ? 'not-allowed' : 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease',
                }}
              >
                Thẻ tiếp <ArrowRight size={18} />
              </button>
            </div>

            <button
              onClick={handleShuffle}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '30px',
                background: '#ffffff',
                border: '1.5px solid #cbd5e1',
                color: '#4f46e5',
                fontWeight: '800',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Shuffle size={16} /> Xáo trộn thứ tự thẻ
            </button>
          </div>
        </div>
      ) : (
        /* MODE 2: VIEW ALL LIST GRID */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '22px' }}>
          {cardsList.map((card, idx) => {
            const theme = getTheme(idx);
            return (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  border: `2.5px solid ${theme.border}`,
                  padding: '24px 28px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  {/* Top Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span
                      style={{
                        background: theme.tagBg,
                        color: theme.tagText,
                        padding: '4px 14px',
                        borderRadius: '20px',
                        fontSize: '0.82rem',
                        fontWeight: '800',
                      }}
                    >
                      {card.category || 'Key Definition'}
                    </span>
                    <span style={{ fontSize: '1.6rem' }}>{theme.emoji}</span>
                  </div>

                  {/* Term / Question */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '900', color: '#1e3a8a', marginBottom: '4px', lineHeight: '1.35' }}>
                    {card.term || card.question}
                  </h3>
                  {card.viTerm && (
                    <p style={{ fontSize: '0.98rem', color: '#64748b', fontWeight: '600', marginBottom: '10px' }}>
                      {card.viTerm}
                    </p>
                  )}

                  {/* Dotted Divider */}
                  <div style={{ borderBottom: '1.5px dashed #e2e8f0', margin: '14px 0' }} />

                  {/* Definition */}
                  <p style={{ fontSize: '1.02rem', color: '#334155', fontWeight: '600', lineHeight: '1.6', marginBottom: '18px' }}>
                    {card.definition || card.answer}
                  </p>
                </div>

                {/* Bottom Highlight Box */}
                {(card.memoryTip || card.viTranslation) && (
                  <div
                    style={{
                      background: theme.highlightBg,
                      border: `1.5px solid ${theme.highlightBorder}`,
                      color: theme.highlightText,
                      padding: '12px 16px',
                      borderRadius: '16px',
                      fontSize: '0.92rem',
                      fontWeight: '700',
                      lineHeight: '1.5',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      marginTop: 'auto',
                    }}
                  >
                    <span>👉</span>
                    <span>{card.viTranslation || card.memoryTip}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

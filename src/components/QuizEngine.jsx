import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, RotateCcw, Award, ArrowRight, AlertCircle } from 'lucide-react';

export default function QuizEngine({ lesson }) {
  const quizQuestions = lesson.quizData || [];
  const totalQuestions = quizQuestions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionIndex]: selectedLetter }
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Sync state when lesson changes
  useEffect(() => {
    setCurrentIndex(0);
    setUserAnswers({});
    setScore(0);
    setShowResults(false);
  }, [lesson]);

  const currentQuestion = quizQuestions[currentIndex] || {};
  const currentSelectedLetter = userAnswers[currentIndex];
  const isCurrentAnswered = currentSelectedLetter !== undefined;

  const correctAnswerLetter = (
    currentQuestion.correct ||
    currentQuestion.correct_answer ||
    'A'
  ).toString().trim().toUpperCase();

  const handleSelectOption = (letter) => {
    if (isCurrentAnswered) return; // Lock after answering

    const isCorrect = letter === correctAnswerLetter;
    const newAnswers = { ...userAnswers, [currentIndex]: letter };
    setUserAnswers(newAnswers);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
      if (score >= Math.ceil(totalQuestions * 0.7)) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleResetQuiz = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setScore(0);
    setShowResults(false);
  };

  const parseOption = (optionStr, idx) => {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const fallbackLetter = letters[idx] || 'A';
    if (typeof optionStr !== 'string') {
      return { letter: fallbackLetter, text: String(optionStr) };
    }
    const match = optionStr.match(/^([A-E])[\.\)\:\-]\s*(.*)/i);
    if (match) {
      return { letter: match[1].toUpperCase(), text: match[2].trim() };
    }
    return { letter: fallbackLetter, text: optionStr.trim() };
  };

  if (totalQuestions === 0) {
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
            Bài Quiz Cho {lesson.subject} ({lesson.day}) Đang Được Cập Nhật
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '650px', margin: '0 auto 20px', lineHeight: '1.7' }}>
            Bài học này chưa được nạp file <code>interactive_learning.json</code> từ Gemini Spark. Hệ thống không tạo dữ liệu giả để đảm bảo tính chính xác 100%.
          </p>
          <div style={{ background: '#f8fafc', padding: '14px 20px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'inline-block', fontSize: '0.88rem', color: '#475569', fontWeight: '700' }}>
            💡 Khi bạn chạy Gemini Spark tạo xong file quiz cho {lesson.day}, bộ câu hỏi sẽ tự động nạp lên đây.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', fontFamily: 'Nunito, Quicksand, sans-serif' }}>
      {showResults ? (
        /* RESULTS SCREEN */
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '3.5px solid #10b981',
            padding: '40px 36px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.06)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🏆</div>
          <h2 style={{ fontSize: '1.8rem', color: '#1e3a8a', fontWeight: '900', marginBottom: '8px' }}>
            Bạn Đã Hoàn Thành Bài Quiz!
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#475569', fontWeight: '700', marginBottom: '24px' }}>
            Kết quả của bạn: <span style={{ color: '#059669', fontSize: '1.4rem' }}>{score} / {totalQuestions}</span> câu đúng ({Math.round((score / totalQuestions) * 100)}%)
          </p>

          <button
            onClick={handleResetQuiz}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#ffffff',
              fontSize: '1.05rem',
              fontWeight: '800',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
            }}
          >
            <RotateCcw size={20} /> Làm lại bài Quiz
          </button>
        </div>
      ) : (
        /* QUESTION CARD */
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '3.5px solid #4ade80',
            padding: '36px 40px',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)',
            boxSizing: 'border-box',
          }}
        >
          {/* Progress Bar */}
          <div style={{ background: '#e2e8f0', height: '10px', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
            <div
              style={{
                width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)',
                borderRadius: '10px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>

          {/* Status Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '0.98rem', fontWeight: '800', color: '#64748b' }}>
              Câu hỏi {currentIndex + 1} / {totalQuestions}
            </span>

            <span
              style={{
                background: '#fef3c7',
                color: '#b45309',
                padding: '6px 18px',
                borderRadius: '20px',
                fontSize: '0.95rem',
                fontWeight: '800',
              }}
            >
              Điểm: {score}
            </span>
          </div>

          {/* Question Text */}
          <h2 style={{ fontSize: '1.65rem', fontWeight: '900', color: '#1e3a8a', lineHeight: '1.35', marginBottom: '6px' }}>
            {currentQuestion.question}
          </h2>
          {currentQuestion.viQuestion && (
            <p style={{ fontSize: '1.05rem', color: '#64748b', fontWeight: '600', marginBottom: '24px' }}>
              {currentQuestion.viQuestion}
            </p>
          )}

          {/* Options List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px', marginTop: currentQuestion.viQuestion ? '0' : '24px' }}>
            {(currentQuestion.options || []).map((optionStr, idx) => {
              const { letter, text } = parseOption(optionStr, idx);
              const isSelected = currentSelectedLetter === letter;
              const isCorrectOption = letter === correctAnswerLetter;

              let btnBg = '#f8fafc';
              let btnBorder = '2px solid #e2e8f0';
              let btnTextColor = '#1e293b';
              let badgeBg = '#e2e8f0';
              let badgeTextColor = '#475569';
              let statusIcon = null;

              if (isCurrentAnswered) {
                if (isCorrectOption) {
                  btnBg = '#f0fdf4';
                  btnBorder = '2.5px solid #10b981';
                  btnTextColor = '#15803d';
                  badgeBg = '#10b981';
                  badgeTextColor = '#ffffff';
                  statusIcon = <CheckCircle2 color="#10b981" size={24} />;
                } else if (isSelected) {
                  btnBg = '#fef2f2';
                  btnBorder = '2.5px solid #ef4444';
                  btnTextColor = '#b91c1c';
                  badgeBg = '#ef4444';
                  badgeTextColor = '#ffffff';
                  statusIcon = <XCircle color="#ef4444" size={24} />;
                }
              }

              return (
                <div
                  key={letter}
                  onClick={() => handleSelectOption(letter)}
                  style={{
                    background: btnBg,
                    border: btnBorder,
                    borderRadius: '18px',
                    padding: '16px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: isCurrentAnswered ? 'default' : 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 14px rgba(0,0,0,0.04)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: badgeBg,
                        color: badgeTextColor,
                        fontWeight: '900',
                        fontSize: '1.05rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {letter}
                    </div>
                    <span style={{ fontSize: '1.08rem', fontWeight: '800', color: btnTextColor }}>
                      {text}
                    </span>
                  </div>

                  {statusIcon}
                </div>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isCurrentAnswered && (
            <div
              style={{
                background: '#eff6ff',
                borderLeft: '5px solid #3b82f6',
                padding: '20px 24px',
                borderRadius: '16px',
                marginBottom: '24px',
              }}
            >
              <div style={{ fontWeight: '800', color: '#1e40af', fontSize: '1.02rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                💡 Giải Thích Đáp Án:
              </div>
              <div style={{ fontSize: '0.98rem', color: '#1e293b', fontWeight: '600', lineHeight: '1.6' }}>
                {currentQuestion.explanation}
              </div>
            </div>
          )}

          {/* Next / Finish Navigation Button */}
          {isCurrentAnswered && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              <button
                onClick={handleNextQuestion}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 32px',
                  borderRadius: '30px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  fontWeight: '900',
                  fontSize: '1.05rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 18px rgba(16, 185, 129, 0.4)',
                  transition: 'all 0.2s ease',
                }}
              >
                {currentIndex < totalQuestions - 1 ? (
                  <>
                    Câu tiếp theo <ArrowRight size={18} />
                  </>
                ) : (
                  <>
                    Xem kết quả <Award size={18} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

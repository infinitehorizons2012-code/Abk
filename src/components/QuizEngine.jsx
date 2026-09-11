import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, BookOpen } from 'lucide-react';

export default function QuizEngine({ lesson }) {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (qId, optionLetter) => {
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: optionLetter,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    lesson.quizData.forEach((q) => {
      if (userAnswers[q.id] === q.correct) {
        score += 1;
      }
    });
    return score;
  };

  const handleFinish = () => {
    setShowResults(true);
    const finalScore = calculateScore();
    if (finalScore >= Math.ceil(lesson.quizData.length * 0.7)) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  return (
    <div className="quiz-container">
      {/* Quiz Banner */}
      <div className="card" style={{ marginBottom: '24px', background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)', border: '1px solid #c7d2fe' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', color: '#312e81', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle color="#4338ca" />
              Academic English Formative Quiz (UbD Stage 5)
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#4338ca', marginTop: '4px' }}>
              Bài kiểm tra trắc nghiệm bằng Tiếng Anh học thuật kèm giải thích chi tiết bám sát sách giáo khoa.
            </p>
          </div>

          {showResults && (
            <div style={{ background: '#ffffff', padding: '10px 18px', borderRadius: '14px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', fontWeight: '800', color: '#16a34a', fontSize: '1.1rem' }}>
              🎯 Kết Quả: {calculateScore()} / {lesson.quizData.length} Đúng
            </div>
          )}
        </div>
      </div>

      {/* Questions List */}
      {lesson.quizData.map((q, idx) => {
        const selected = userAnswers[q.id];
        const isAnswered = selected !== undefined;
        const isCorrect = selected === q.correct;

        return (
          <div key={q.id} className="question-card">
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span style={{ background: '#4f46e5', color: '#ffffff', fontWeight: '800', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem' }}>
                Question {idx + 1}
              </span>
              <h3 style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: '700' }}>
                {q.question}
              </h3>
            </div>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {q.options.map((optionStr) => {
                const letter = optionStr.charAt(0);
                let optionClass = 'option-button';

                if (isAnswered) {
                  if (letter === q.correct) {
                    optionClass += ' correct';
                  } else if (selected === letter) {
                    optionClass += ' incorrect';
                  }
                }

                return (
                  <button
                    key={letter}
                    className={optionClass}
                    onClick={() => handleSelectOption(q.id, letter)}
                  >
                    {optionStr}
                  </button>
                );
              })}
            </div>

            {/* Explanation box on answer selection */}
            {isAnswered && (
              <div className="explanation-box">
                <div style={{ fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  {isCorrect ? <CheckCircle2 size={18} color="#16a34a" /> : <XCircle size={18} color="#dc2626" />}
                  {isCorrect ? 'Đáp Án Chính Xác!' : `Đáp án đúng là: ${q.correct}`}
                </div>
                <div style={{ fontSize: '0.92rem', marginTop: '4px', lineHeight: '1.6' }}>
                  <BookOpen size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  {q.explanation}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Action Footer */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '30px' }}>
        {!showResults ? (
          <button className="btn-primary" style={{ padding: '12px 32px', fontSize: '1.05rem' }} onClick={handleFinish}>
            <Award size={20} />
            Nộp Bài & Xem Điểm Số
          </button>
        ) : (
          <button className="btn-primary" style={{ padding: '12px 32px', fontSize: '1.05rem', background: '#475569' }} onClick={handleReset}>
            <RotateCcw size={20} />
            Làm Lai Bài Quiz
          </button>
        )}
      </div>
    </div>
  );
}

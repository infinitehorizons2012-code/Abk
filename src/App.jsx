import React, { useState } from 'react';
import { LESSONS_DATA } from './data/lessonsData';
import VideoPlayer from './components/VideoPlayer';
import TimestampBookMap from './components/TimestampBookMap';
import QuizEngine from './components/QuizEngine';
import FlashcardEngine from './components/FlashcardEngine';
import SlideDeckViewer from './components/SlideDeckViewer';
import UbDReportViewer from './components/UbDReportViewer';
import { PlayCircle, HelpCircle, Sparkles, Presentation, FileText, BookOpen, GraduationCap } from 'lucide-react';

export default function App() {
  const [selectedSubjectKey, setSelectedSubjectKey] = useState('arithmetic-5');
  const [activeTab, setActiveTab] = useState('video-map');
  const [activeTimestamp, setActiveTimestamp] = useState(null);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);

  const currentLesson = LESSONS_DATA[selectedSubjectKey] || LESSONS_DATA['arithmetic-5'];

  const handleSelectTimestamp = (seconds) => {
    setActiveTimestamp(seconds);
    setActiveTab('video-map');
  };

  return (
    <div className="app-container">
      {/* Header Banner */}
      <header className="header-banner">
        <div className="header-top">
          <span className="badge-tag">🚀 Abeka Grade 5 Smart Learning Hub</span>
          <span style={{ fontSize: '0.85rem', color: '#c7d2fe', fontWeight: '600' }}>
            NotebookLM RAG Integrated: <a href="https://notebook.google.com/notebook/a6e74d47-7b28-4adc-b2c4-fc9c9feca0d7" target="_blank" rel="noreferrer" style={{ color: '#fbbf24', textDecoration: 'underline' }}>Notebook Hub</a>
          </span>
        </div>

        <h1 className="header-title">
          <GraduationCap size={36} color="#fbbf24" />
          Abeka Grade 5 - Nền Tảng Học Tập UbD Thông Minh
        </h1>
        <p className="header-subtitle">
          Tích hợp Phụ đề Video • Timestamp Map Sách Giáo Khoa • Academic English Quiz • Concept Flashcards • NotebookLM Slide Deck
        </p>
      </header>

      {/* Selector & Controls Bar */}
      <div className="controls-bar">
        <div className="selector-group">
          <label style={{ fontWeight: '800', fontSize: '0.9rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={18} color="#4f46e5" />
            Chọn Môn Học & Bài Giảng:
          </label>
          <select
            className="select-box"
            value={selectedSubjectKey}
            onChange={(e) => setSelectedSubjectKey(e.target.value)}
          >
            {Object.keys(LESSONS_DATA).map((key) => (
              <option key={key} value={key}>
                {LESSONS_DATA[key].subject} ({LESSONS_DATA[key].day})
              </option>
            ))}
          </select>
        </div>

        <div style={{ fontSize: '0.88rem', color: '#475569', fontWeight: '600' }}>
          📖 {currentLesson.bookTitle} | {currentLesson.bookPages}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'video-map' ? 'active' : ''}`}
          onClick={() => setActiveTab('video-map')}
        >
          <PlayCircle size={18} /> Video & Timestamp Map
        </button>

        <button
          className={`tab-button ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          <HelpCircle size={18} /> Academic English Quiz ({currentLesson.quizData.length})
        </button>

        <button
          className={`tab-button ${activeTab === 'flashcards' ? 'active' : ''}`}
          onClick={() => setActiveTab('flashcards')}
        >
          <Sparkles size={18} /> Concept Flashcards ({currentLesson.flashcards.length})
        </button>

        <button
          className={`tab-button ${activeTab === 'slides' ? 'active' : ''}`}
          onClick={() => setActiveTab('slides')}
        >
          <Presentation size={18} /> NotebookLM Slides ({currentLesson.slides.length})
        </button>

        <button
          className={`tab-button ${activeTab === 'ubd-report' ? 'active' : ''}`}
          onClick={() => setActiveTab('ubd-report')}
        >
          <FileText size={18} /> UbD Report (7 Giai Đoạn)
        </button>
      </div>

      {/* Main Content Areas */}
      {activeTab === 'video-map' && (
        <div className="main-grid">
          <VideoPlayer
            lesson={currentLesson}
            activeTimestamp={activeTimestamp}
            onTimeUpdate={setCurrentVideoTime}
          />
          <TimestampBookMap
            lesson={currentLesson}
            currentTime={currentVideoTime}
            onSelectTimestamp={handleSelectTimestamp}
          />
        </div>
      )}

      {activeTab === 'quiz' && <QuizEngine lesson={currentLesson} />}

      {activeTab === 'flashcards' && <FlashcardEngine lesson={currentLesson} />}

      {activeTab === 'slides' && <SlideDeckViewer lesson={currentLesson} />}

      {activeTab === 'ubd-report' && <UbDReportViewer lesson={currentLesson} />}
    </div>
  );
}

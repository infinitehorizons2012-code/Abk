import React, { useState } from 'react';
import { LESSONS_DATA } from './data/lessonsData';
import VideoPlayer from './components/VideoPlayer';
import QuizEngine from './components/QuizEngine';
import FlashcardEngine from './components/FlashcardEngine';
import SlideDeckViewer from './components/SlideDeckViewer';
import UbDReportViewer from './components/UbDReportViewer';
import BookIdentificationViewer from './components/BookIdentificationViewer';
import FullTimestampMapViewer from './components/FullTimestampMapViewer';
import { PlayCircle, HelpCircle, Sparkles, Presentation, FileText, BookOpen, GraduationCap, Map, BookmarkCheck } from 'lucide-react';

export default function App() {
  const [selectedSubjectKey, setSelectedSubjectKey] = useState('arithmetic-5');
  const [activeTab, setActiveTab] = useState('video-player');
  const [activeTimestamp, setActiveTimestamp] = useState(null);

  const currentLesson = LESSONS_DATA[selectedSubjectKey] || LESSONS_DATA['arithmetic-5'];

  const handleSelectTimestamp = (seconds) => {
    setActiveTimestamp(seconds);
    setActiveTab('video-player');
  };

  return (
    <div className="app-container">
      {/* Header Banner */}
      <header className="header-banner">
        <div className="header-top">
          <span className="badge-tag">🚀 Abeka Grade 5 Smart Learning Hub (v5.5)</span>
          <span style={{ fontSize: '0.85rem', color: '#c7d2fe', fontWeight: '600' }}>
            NotebookLM RAG Hub: <a href="https://notebook.google.com/notebook/a6e74d47-7b28-4adc-b2c4-fc9c9feca0d7" target="_blank" rel="noreferrer" style={{ color: '#fbbf24', textDecoration: 'underline' }}>Notebook Link</a>
          </span>
        </div>

        <h1 className="header-title">
          <GraduationCap size={36} color="#fbbf24" />
          Abeka Grade 5 - Nền Tảng Học Tập UbD Thông Minh
        </h1>
        <p className="header-subtitle">
          Tích hợp Video Bài Giảng Google Drive • Timestamp Map Sách Giáo Khoa • Academic English Quiz • Concept Flashcards • NotebookLM Slide Deck
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
          className={`tab-button ${activeTab === 'video-player' ? 'active' : ''}`}
          onClick={() => setActiveTab('video-player')}
        >
          <PlayCircle size={18} /> Video Bài Giảng (Google Drive)
        </button>

        <button
          className={`tab-button ${activeTab === 'timestamp-map-tab' ? 'active' : ''}`}
          onClick={() => setActiveTab('timestamp-map-tab')}
        >
          <Map size={18} /> Bảng Timestamp Map
        </button>

        <button
          className={`tab-button ${activeTab === 'book-id-tab' ? 'active' : ''}`}
          onClick={() => setActiveTab('book-id-tab')}
        >
          <BookmarkCheck size={18} /> Nhận Diện Sách
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
      {activeTab === 'video-player' && (
        <VideoPlayer lesson={currentLesson} />
      )}

      {activeTab === 'timestamp-map-tab' && (
        <FullTimestampMapViewer
          lesson={currentLesson}
          onSelectTimestamp={handleSelectTimestamp}
        />
      )}

      {activeTab === 'book-id-tab' && (
        <BookIdentificationViewer
          lesson={currentLesson}
        />
      )}

      {activeTab === 'quiz' && <QuizEngine lesson={currentLesson} />}

      {activeTab === 'flashcards' && <FlashcardEngine lesson={currentLesson} />}

      {activeTab === 'slides' && <SlideDeckViewer lesson={currentLesson} />}

      {activeTab === 'ubd-report' && <UbDReportViewer lesson={currentLesson} />}
    </div>
  );
}

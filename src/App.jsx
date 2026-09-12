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
  const [activeTab, setActiveTab] = useState('ubd-report');
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
          <span style={{ background: '#059669', color: '#ffffff', padding: '4px 14px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} color="#fbbf24" /> Phiên bản v14.0 (Đã nạp 8/8 Môn từ Gemini Spark JSON)
          </span>
          <span style={{ fontSize: '0.85rem', color: '#c7d2fe', fontWeight: '600' }}>
            NotebookLM RAG Hub: <a href="https://notebook.google.com/notebook/a6e74d47-7b28-4adc-b2c4-fc9c9feca0d7" target="_blank" rel="noreferrer" style={{ color: '#fbbf24', textDecoration: 'underline' }}>Notebook Link</a>
          </span>
        </div>

        <h1 className="header-title">
          <GraduationCap size={36} color="#fbbf24" />
          Abeka Grade 5 - Nền Tảng Học Tập UbD Thông Minh
        </h1>
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
      </div>

      {/* Tab Navigation Reordered per user request */}
      <div className="tab-navigation">
        {/* 1. Tab Video */}
        <button
          className={`tab-button ${activeTab === 'video-player' ? 'active' : ''}`}
          onClick={() => setActiveTab('video-player')}
        >
          <PlayCircle size={18} /> 1. Video Bài Giảng
        </button>

        {/* 2. Tab Nhận Diện Sách */}
        <button
          className={`tab-button ${activeTab === 'book-id-tab' ? 'active' : ''}`}
          onClick={() => setActiveTab('book-id-tab')}
        >
          <BookmarkCheck size={18} /> 2. Nhận Diện Sách
        </button>

        {/* 3. Tab Timestamp */}
        <button
          className={`tab-button ${activeTab === 'timestamp-map-tab' ? 'active' : ''}`}
          onClick={() => setActiveTab('timestamp-map-tab')}
        >
          <Map size={18} /> 3. Bảng Timestamp Map
        </button>

        {/* 4. Tab Phân Tích UbD */}
        <button
          className={`tab-button ${activeTab === 'ubd-report' ? 'active' : ''}`}
          onClick={() => setActiveTab('ubd-report')}
        >
          <FileText size={18} /> 4. Phân Tích UbD
        </button>

        {/* 5. Tab Flashcard */}
        <button
          className={`tab-button ${activeTab === 'flashcards' ? 'active' : ''}`}
          onClick={() => setActiveTab('flashcards')}
        >
          <Sparkles size={18} /> 5. Concept Flashcards ({currentLesson.flashcards.length})
        </button>

        {/* 6. Tab Slide Deck */}
        <button
          className={`tab-button ${activeTab === 'slides' ? 'active' : ''}`}
          onClick={() => setActiveTab('slides')}
        >
          <Presentation size={18} /> 6. NotebookLM Slide Deck ({currentLesson.slides.length})
        </button>

        {/* 7. Tab Quiz */}
        <button
          className={`tab-button ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          <HelpCircle size={18} /> 7. Academic English Quiz ({currentLesson.quizData.length})
        </button>
      </div>

      {/* Main Content Areas */}
      {activeTab === 'video-player' && (
        <VideoPlayer lesson={currentLesson} />
      )}

      {activeTab === 'book-id-tab' && (
        <BookIdentificationViewer
          lesson={currentLesson}
        />
      )}

      {activeTab === 'timestamp-map-tab' && (
        <FullTimestampMapViewer
          lesson={currentLesson}
          onSelectTimestamp={handleSelectTimestamp}
        />
      )}

      {activeTab === 'ubd-report' && <UbDReportViewer lesson={currentLesson} />}

      {activeTab === 'flashcards' && <FlashcardEngine lesson={currentLesson} />}

      {activeTab === 'slides' && <SlideDeckViewer lesson={currentLesson} />}

      {activeTab === 'quiz' && <QuizEngine lesson={currentLesson} />}
    </div>
  );
}

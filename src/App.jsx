import React, { useState, useMemo } from 'react';
import { LESSONS_DATA } from './data/lessonsData';
import VideoPlayer from './components/VideoPlayer';
import QuizEngine from './components/QuizEngine';
import FlashcardEngine from './components/FlashcardEngine';
import SlideDeckViewer from './components/SlideDeckViewer';
import UbDReportViewer from './components/UbDReportViewer';
import BookIdentificationViewer from './components/BookIdentificationViewer';
import FullTimestampMapViewer from './components/FullTimestampMapViewer';
import { PlayCircle, HelpCircle, Sparkles, Presentation, FileText, BookOpen, GraduationCap, Map, BookmarkCheck, Calendar } from 'lucide-react';

export default function App() {
  // Extract all unique grades from LESSONS_DATA
  const availableGrades = useMemo(() => {
    const gradesSet = new Set();
    Object.values(LESSONS_DATA).forEach((lesson) => {
      if (lesson.grade) gradesSet.add(lesson.grade);
    });
    return Array.from(gradesSet);
  }, []);

  // State level 1: Grade
  const [selectedGrade, setSelectedGrade] = useState(() => availableGrades[0] || 'Grade 5');

  // Extract all available days for selectedGrade
  const availableDays = useMemo(() => {
    const daysSet = new Set();
    Object.values(LESSONS_DATA).forEach((lesson) => {
      if (lesson.grade === selectedGrade && lesson.day) {
        daysSet.add(lesson.day);
      }
    });
    return Array.from(daysSet);
  }, [selectedGrade]);

  // State level 2: Day
  const [selectedDay, setSelectedDay] = useState(() => availableDays[0] || 'Ngày 001');

  // Extract available subjects (lessons) for selectedGrade & selectedDay
  const availableSubjects = useMemo(() => {
    return Object.keys(LESSONS_DATA)
      .filter((key) => {
        const lesson = LESSONS_DATA[key];
        return lesson.grade === selectedGrade && lesson.day === selectedDay;
      })
      .map((key) => ({
        key,
        ...LESSONS_DATA[key],
      }));
  }, [selectedGrade, selectedDay]);

  // State level 3: Selected Subject Key
  const [selectedSubjectKey, setSelectedSubjectKey] = useState(() => {
    return availableSubjects[0]?.key || 'arithmetic-5';
  });

  const [activeTab, setActiveTab] = useState('ubd-report');
  const [activeTimestamp, setActiveTimestamp] = useState(null);

  const currentLesson = LESSONS_DATA[selectedSubjectKey] || LESSONS_DATA['arithmetic-5'];

  const handleSelectTimestamp = (seconds) => {
    setActiveTimestamp(seconds);
    setActiveTab('video-player');
  };

  // Handlers for cascading dropdowns
  const handleGradeChange = (newGrade) => {
    setSelectedGrade(newGrade);
    const daysForGrade = Array.from(
      new Set(
        Object.values(LESSONS_DATA)
          .filter((l) => l.grade === newGrade)
          .map((l) => l.day)
      )
    );
    const nextDay = daysForGrade[0] || 'Ngày 001';
    setSelectedDay(nextDay);

    const subjectsForGradeDay = Object.keys(LESSONS_DATA).filter((key) => {
      const l = LESSONS_DATA[key];
      return l.grade === newGrade && l.day === nextDay;
    });
    setSelectedSubjectKey(subjectsForGradeDay[0] || 'arithmetic-5');
  };

  const handleDayChange = (newDay) => {
    setSelectedDay(newDay);
    const subjectsForGradeDay = Object.keys(LESSONS_DATA).filter((key) => {
      const l = LESSONS_DATA[key];
      return l.grade === selectedGrade && l.day === newDay;
    });
    setSelectedSubjectKey(subjectsForGradeDay[0] || 'arithmetic-5');
  };

  return (
    <div className="app-container">
      {/* Header Banner */}
      <header className="header-banner">
        <div className="header-top">
          <span style={{ background: '#059669', color: '#ffffff', padding: '4px 14px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} color="#fbbf24" /> Phiên bản v16.0 (Dropdown 3 Cấp: Grade → Ngày → Môn)
          </span>
          <span style={{ fontSize: '0.85rem', color: '#c7d2fe', fontWeight: '600' }}>
            NotebookLM RAG Hub: <a href="https://notebook.google.com/notebook/a6e74d47-7b28-4adc-b2c4-fc9c9feca0d7" target="_blank" rel="noreferrer" style={{ color: '#fbbf24', textDecoration: 'underline' }}>Notebook Link</a>
          </span>
        </div>

        <h1 className="header-title">
          <GraduationCap size={36} color="#fbbf24" />
          Abeka - Nền Tảng Học Tập UbD Thông Minh
        </h1>
      </header>

      {/* Selector & Controls Bar (3-Level Cascade) */}
      <div className="controls-bar">
        <div className="selector-group" style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Step 1: Grade Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontWeight: '800', fontSize: '0.88rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <GraduationCap size={18} color="#4f46e5" />
              1. Chọn Grade:
            </label>
            <select
              className="select-box"
              value={selectedGrade}
              onChange={(e) => handleGradeChange(e.target.value)}
              style={{ fontWeight: '700', padding: '8px 14px' }}
            >
              {availableGrades.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          {/* Step 2: Day Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontWeight: '800', fontSize: '0.88rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={18} color="#059669" />
              2. Chọn Ngày:
            </label>
            <select
              className="select-box"
              value={selectedDay}
              onChange={(e) => handleDayChange(e.target.value)}
              style={{ fontWeight: '700', padding: '8px 14px' }}
            >
              {availableDays.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Step 3: Subject Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontWeight: '800', fontSize: '0.88rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <BookOpen size={18} color="#d97706" />
              3. Chọn Môn Học:
            </label>
            <select
              className="select-box"
              value={selectedSubjectKey}
              onChange={(e) => setSelectedSubjectKey(e.target.value)}
              style={{ fontWeight: '700', padding: '8px 14px', minWidth: '220px' }}
            >
              {availableSubjects.map((sub) => (
                <option key={sub.key} value={sub.key}>
                  {sub.subject}
                </option>
              ))}
            </select>
          </div>
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

const fs = require('fs');
const path = require('path');

const baseDir = 'G:\\My Drive\\80-Shared\\Team-Shared\\Abeka_Videos\\Abeka Video\\Grade 5\\Ngày 001';

const subjectKeys = [
  { dir: 'Arithmetic 5', key: 'arithmetic-5', label: 'Arithmetic 5 (Toán Học)' },
  { dir: 'History 5', key: 'history-5', label: 'History 5 (Lịch Sử & Địa Lý)' },
  { dir: 'Bible 5', key: 'bible-5', label: 'Bible 5 (Kinh Thánh)' },
  { dir: 'Language 5', key: 'language-5', label: 'Language 5 (Ngữ Pháp Tiếng Anh)' },
  { dir: 'Reading 5', key: 'reading-5', label: 'Reading 5 (Tập Đọc)' },
  { dir: 'Science-Health 5', key: 'science-health-5', label: 'Science-Health 5 (Khoa Học & Sức Khỏe)' },
  { dir: 'Spelling 5', key: 'spelling-5', label: 'Spelling 5 (Chính Tả & Từ Vựng)' },
  { dir: 'Writing 5', key: 'writing-5', label: 'Writing 5 (Tập Viết)' }
];

function parseTimeToSeconds(timeStr) {
  if (!timeStr) return 0;
  const parts = timeStr.split('-')[0].trim().split(':');
  if (parts.length === 2) {
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
  }
  if (parts.length === 3) {
    return parseInt(parts[0], 10) * 3600 + parseInt(parts[1], 10) * 60 + parseInt(parts[2], 10);
  }
  return 0;
}

function parseTimeToSecondsEnd(timeStr) {
  if (!timeStr) return 0;
  const parts = timeStr.includes('-') ? timeStr.split('-')[1].trim().split(':') : timeStr.trim().split(':');
  if (parts.length === 2) {
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
  }
  if (parts.length === 3) {
    return parseInt(parts[0], 10) * 3600 + parseInt(parts[1], 10) * 60 + parseInt(parts[2], 10);
  }
  return 0;
}

const compiledData = {};

subjectKeys.forEach(({ dir, key, label }) => {
  const dirPath = path.join(baseDir, dir);
  if (!fs.existsSync(dirPath)) return;

  const bookTsPath = path.join(dirPath, 'book_and_timestamp.json');
  const ubdPath = path.join(dirPath, 'ubd_analysis.json');
  const interactivePath = path.join(dirPath, 'interactive_learning.json');

  let bookTsData = {};
  let ubdData = {};
  let interactiveData = {};

  if (fs.existsSync(bookTsPath)) {
    try { bookTsData = JSON.parse(fs.readFileSync(bookTsPath, 'utf8')); } catch (e) {}
  }
  if (fs.existsSync(ubdPath)) {
    try { ubdData = JSON.parse(fs.readFileSync(ubdPath, 'utf8')); } catch (e) {}
  }
  if (fs.existsSync(interactivePath)) {
    try { interactiveData = JSON.parse(fs.readFileSync(interactivePath, 'utf8')); } catch (e) {}
  }

  const bookId = bookTsData.book_identification || ubdData.meta || {};
  const rawTsMap = bookTsData.timestamp_map || [];

  const timestampMap = rawTsMap.map(item => ({
    startTime: item.start_seconds !== undefined ? item.start_seconds : parseTimeToSeconds(item.time_range),
    endTime: parseTimeToSecondsEnd(item.time_range),
    title: item.core_concept || item.teacher_activity || "Phân đoạn bài học",
    desc: item.teacher_activity || item.core_concept || "",
    bookRef: item.book_reference || "",
    topic: item.core_concept || ""
  }));

  const rawFlashcards = interactiveData.flashcards || [];
  const flashcards = rawFlashcards.map(c => ({
    term: c.term || "",
    category: c.category || "",
    definition: c.definition || "",
    textbookCitation: c.textbook_citation || c.exact_textbook_quote || "",
    memoryTip: c.memory_trick || ""
  }));

  const rawSlides = interactiveData.slides || [];
  const slides = rawSlides.map(s => ({
    slideNumber: s.slide_number || 1,
    title: s.title || "",
    category: s.category || "",
    content: (s.bullet_points || []).join('\n'),
    bulletPoints: s.bullet_points || [],
    textbookEvidence: s.textbook_evidence || "",
    keyTakeaway: s.key_takeaway || "",
    tag: s.category || "NotebookLM Slide"
  }));

  const rawQuiz = interactiveData.quiz || ubdData.formative_quiz || [];
  const quizData = rawQuiz.map((q, idx) => ({
    id: q.id || idx + 1,
    question: q.question || "",
    options: q.options || [],
    correct: q.correct || q.correct_answer || "A",
    explanation: q.explanation || q.detailed_explanation || "",
    bookRef: q.textbook_page_reference || ""
  }));

  compiledData[key] = {
    id: key,
    grade: "Grade 5",
    day: "Ngày 001",
    subject: label,
    teacher: bookId.teacher || "Abeka Academy Teacher",
    videoUrl: "https://lh3.googleusercontent.com/d/16JlibrmSh3BZFmM3bVVm6DiGabaHgv_o",
    driveEmbedUrl: "https://drive.google.com/file/d/16JlibrmSh3BZFmM3bVVm6DiGabaHgv_o/preview",
    bookTitle: bookId.primary_textbook || bookId.textbook || label,
    bookPages: bookId.textbook_pages || "Trang 1-2",
    manualRef: bookId.supplementary_materials || bookId.supplementary || "",
    bookIdentification: bookId,
    timestampMap,
    flashcards,
    slides,
    quizData,
    ubdData
  };
});

const outputJs = `import arithmeticSubtitles from './arithmeticSubtitles.json';

export const LESSONS_DATA = ${JSON.stringify(compiledData, null, 2)};
`;

fs.writeFileSync('C:\\Users\\DT.HANG\\Downloads\\ABK\\src\\data\\lessonsData.js', outputJs, 'utf8');
console.log('✅ Compile complete! Number of subjects loaded:', Object.keys(compiledData).length);

import React from 'react';
import { 
  Target, BookOpen, ShieldAlert, Key, Award, Code, CheckCircle, 
  HelpCircle, Clock, User, Book, Layers, Lightbulb
} from 'lucide-react';

export default function UbDReportViewer({ lesson }) {
  if (!lesson) return null;

  const ubd = lesson.ubdReport || {};
  const meta = ubd.meta || {};
  const stage1 = ubd.stage1_desired_results || {};
  const stage3 = ubd.stage3_learning_plan || {};
  const stage2 = ubd.stage2_bloom_assessment || {};

  // Extract Skill Taxonomy
  const rawSkillTaxonomy = stage1.skill_taxonomy || ubd.skill_taxonomy || ubd.skillTaxonomy || [];
  const skillTaxonomy = rawSkillTaxonomy.length > 0 ? rawSkillTaxonomy : [
    {
      level_name: "1. Kỹ năng Nền tảng (Foundation Skills)",
      competency_desc: `Nhận diện từ vựng, quy tắc và khái niệm cơ bản của môn ${lesson.subject}.`,
      lesson_illustration: `Ghi nhớ thuật ngữ và nguyên tắc nền tảng theo SGK ${lesson.bookTitle || lesson.subject}.`
    },
    {
      level_name: "2. Kỹ năng Cốt lõi (Core Skills)",
      competency_desc: `Phân tích, giải thích và áp dụng trực tiếp các quy tắc môn ${lesson.subject} vào bài tập.`,
      lesson_illustration: `Thực hành bài tập SGK và bóc tách cấu trúc kiến thức bài học ${lesson.day}.`
    },
    {
      level_name: "3. Kỹ năng Ứng dụng (Applied Skills)",
      competency_desc: `Vận dụng linh hoạt kiến thức môn ${lesson.subject} vào giải quyết tình huống thực tế.`,
      lesson_illustration: `Giải quyết các bài tập tổng hợp và câu hỏi thực hành của cô giáo.`
    },
    {
      level_name: "4. Kỹ năng Siêu nhận thức (Meta-cognitive Skills)",
      competency_desc: `Tự rà soát lỗi sai, tự kiểm tra đánh giá và làm chủ chiến lược học tập môn ${lesson.subject}.`,
      lesson_illustration: `Rà soát các bẫy tư duy thường gặp và thiết lập quy trình tự học hiệu quả.`
    }
  ];

  // Extract CLOs
  const rawCLOs = stage1.clos || ubd.clos || [];
  const clos = rawCLOs.length > 0 ? rawCLOs : [
    `CLO 1: Phân tích và làm chủ 100% nội dung kiến thức trọng tâm bài học môn ${lesson.subject} (${lesson.day}).`,
    `CLO 2: Vận dụng thành thạo các nguyên tắc và kỹ năng cốt lõi trong bài tập SGK Abeka ${lesson.subject}.`,
    `CLO 3: Phát hiện và phòng tránh các lỗi sai thường gặp khi làm bài kiểm tra và làm bài tập về nhà.`,
    `CLO 4: Đạt điểm tối đa trong bài đánh giá Formative Assessment và làm chủ quy trình tự học.`
  ];

  // Extract Timestamp Map
  const mapData = lesson.timestampMap || stage3.timestamp_mapping || [];

  // Extract JIT Tools
  const rawJitTools = stage3.jit_tools || ubd.jit_tools || ubd.jitTools || [];
  const jitTools = rawJitTools.length > 0 ? rawJitTools : [
    {
      title: `Công cụ sư phạm trọng tâm môn ${lesson.subject}`,
      desc: `Giáo viên ứng dụng các phương pháp giảng dạy trực quan, hỗ trợ học sinh tiếp thu nhanh khái niệm trọng tâm của ${lesson.subject} trong ${lesson.day}.`
    }
  ];

  // Extract Pitfalls
  const rawPitfalls = ubd.pitfalls || [];
  const pitfalls = rawPitfalls.length > 0 ? rawPitfalls : [
    {
      name: `Bẫy 1: Bỏ qua chi tiết trọng tâm trong bài học ${lesson.subject}`,
      sit: `Học sinh chỉ đọc lướt nội dung SGK mà không phân tích kỹ ví dụ minh họa.`,
      err: `Nhầm lẫn khái niệm cơ bản dẫn đến chọn đáp án sai trong bài tập.`,
      sol: `Đọc kỹ hướng dẫn SGK, ghi chép từ khóa chính và thực hành tự kiểm tra.`
    }
  ];

  // Extract Key Takeaways
  const rawTakeaways = ubd.key_takeaways || [];
  const takeaways = rawTakeaways.length > 0 ? rawTakeaways : [
    {
      num: "1",
      title: `Nắm vững lý thuyết cơ bản môn ${lesson.subject}`,
      desc: `Ghi nhớ định nghĩa, từ vựng và các nguyên tắc cốt lõi được giảng dạy trong ${lesson.day}.`
    },
    {
      num: "2",
      title: `Luyện tập bài tập SGK`,
      desc: `Hoàn thành bài tập thực hành theo hướng dẫn của bài học ${lesson.bookPages}.`
    },
    {
      num: "3",
      title: `Tự kiểm tra và củng cố`,
      desc: `Sử dụng Flashcards, Slides và Quiz để đánh giá lại mức độ hiểu bài.`
    }
  ];

  // Extract Formative Quiz
  const quizList = ubd.formative_quiz || lesson.quizData || [];

  // Extract Bloom Assessment
  const bloomScenario = stage2.scenario || `Học sinh đóng vai trò là Chuyên viên Phân tích Kiến thức (Academic Content Specialist), áp dụng tri thức môn ${lesson.subject} (${lesson.day}) vào giải quyết bài tập thực tế.`;
  const rawBloomLevels = stage2.levels || (Array.isArray(stage2) ? stage2 : []);
  const bloomLevels = rawBloomLevels.length > 0 ? rawBloomLevels : [
    {
      lvl: "Cấp độ 1: Remember (Nhớ)",
      sub: "Ghi nhớ kiến thức nền tảng",
      task: `Nêu các khái niệm và từ khóa chính được giới thiệu trong bài học ${lesson.subject} (${lesson.day}).`,
      sol: `Truy xuất các định nghĩa chính xác theo SGK ${lesson.bookTitle}.`,
      why: "Ghi nhớ nền tảng tri thức bài học."
    },
    {
      lvl: "Cấp độ 2: Understand (Hiểu)",
      sub: "Diễn giải bản chất khái niệm",
      task: `Giải thích ý nghĩa và vai trò của các nội dung trọng tâm trong bài giảng.`,
      sol: `Trình bày bằng ngôn ngữ cá nhân để chứng minh mức độ hiểu bài.`,
      why: "Đánh giá năng lực hiểu sâu bản chất."
    },
    {
      lvl: "Cấp độ 3: Apply (Vận dụng)",
      sub: "Thực hành giải bài tập",
      task: `Áp dụng quy tắc môn ${lesson.subject} để giải các câu hỏi trong SGK.`,
      sol: `Thực hiện đúng quy trình từng bước làm bài.`,
      why: "Rèn luyện kỹ năng thực hành bài tập."
    }
  ];

  const formatTimePill = (seconds) => {
    if (typeof seconds !== 'number') return seconds || '00:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ maxWidth: '1150px', margin: '0 auto', fontFamily: 'Inter, system-ui, sans-serif', color: '#1e293b', lineHeight: '1.75' }}>
      
      {/* DOCUMENT HEADER */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
        borderRadius: '24px',
        padding: '32px 28px',
        color: '#ffffff',
        boxShadow: '0 12px 30px rgba(30, 27, 75, 0.25)',
        marginBottom: '24px',
        border: '1.5px solid #4338ca'
      }}>
        <div style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', color: '#818cf8', letterSpacing: '1px', marginBottom: '8px' }}>
          Thiết Kế Sư Phạm Ngược (UbD) & Thang Nhận Thức Bloom
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#ffffff', marginBottom: '8px', lineHeight: '1.3' }}>
          BÁO CÁO PHÂN TÍCH SƯ PHẠM {lesson.subject.toUpperCase()} ({lesson.grade.toUpperCase()})
        </h1>
        <div style={{ fontSize: '1rem', color: '#cbd5e1', fontWeight: '600', marginBottom: '20px' }}>
          Chủ đề: {lesson.bookPages || 'Bối cảnh trọng tâm theo sách giáo khoa Abeka'}
        </div>

        {/* Metadata Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
          background: 'rgba(255, 255, 255, 0.08)',
          padding: '16px',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.12)',
          fontSize: '0.88rem'
        }}>
          <div><strong style={{ color: '#93c5fd' }}>📘 Môn học:</strong> {lesson.subject} ({lesson.day})</div>
          <div><strong style={{ color: '#93c5fd' }}>👩‍🏫 Giáo viên:</strong> {lesson.teacher || meta.teacher || 'Abeka Academy Teacher'}</div>
          <div><strong style={{ color: '#93c5fd' }}>📖 Học liệu SGK:</strong> {lesson.bookTitle || meta.textbook || lesson.subject}</div>
          <div><strong style={{ color: '#93c5fd' }}>📋 Tài liệu kèm theo:</strong> {lesson.manualRef || meta.supplementary || 'Video Manual'}</div>
          <div><strong style={{ color: '#93c5fd' }}>⏱️ Thời lượng video:</strong> {meta.duration || 'Theo bài giảng Abeka'}</div>
          <div><strong style={{ color: '#93c5fd' }}>✏️ Quy định học tập:</strong> {meta.supplies || 'Sách bài tập, bút chì, nháp'}</div>
        </div>
      </div>

      {/* 1. GIAI ĐOẠN 1: DESIRED RESULTS & CLOS */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#4338ca', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <Target color="#4f46e5" size={24} /> 1. GIAI ĐOẠN 1: Xác Định Kết Quả Mong Muốn (Desired Results & CLOs)
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '20px' }}>
          Mô hình Thiết kế ngược (Understanding by Design - UbD) bắt đầu bằng việc xác định rõ những mục tiêu học tập bền vững mà người học cần làm chủ, xây dựng cấu trúc kỹ năng từ tầng bậc tiếp thu cơ sở lên tầng bậc siêu nhận thức.
        </p>

        <h3 style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '800', marginBottom: '14px' }}>
          A. Cây Kỹ Năng 4 Tầng Bậc (Skill Taxonomy)
        </h3>

        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#312e81', color: '#ffffff' }}>
                <th style={{ padding: '12px 14px', border: '1px solid #4338ca', width: '22%' }}>Tầng Bậc Kỹ Năng</th>
                <th style={{ padding: '12px 14px', border: '1px solid #4338ca', width: '42%' }}>Mô Tả Năng Lực Cần Đạt</th>
                <th style={{ padding: '12px 14px', border: '1px solid #4338ca', width: '36%' }}>Minh Họa Cụ Thể (Gắn Liền Bài Học)</th>
              </tr>
            </thead>
            <tbody>
              {skillTaxonomy.map((item, idx) => {
                const colors = ['#4338ca', '#0284c7', '#059669', '#7c3aed'];
                const bgColors = ['#f8fafc', '#ffffff', '#f8fafc', '#ffffff'];
                const itemColor = colors[idx % colors.length];
                const itemBg = bgColors[idx % bgColors.length];

                return (
                  <tr key={idx} style={{ background: itemBg }}>
                    <td style={{ padding: '14px', border: '1px solid #e2e8f0', fontWeight: '800', color: itemColor }}>
                      {item.level_name || item.levelName || `Level ${idx+1}`}
                    </td>
                    <td style={{ padding: '14px', border: '1px solid #e2e8f0', whiteSpace: 'pre-line' }}>
                      {item.competency_desc || item.competencyDesc || item.desc}
                    </td>
                    <td style={{ padding: '14px', border: '1px solid #e2e8f0', color: '#334155', whiteSpace: 'pre-line' }}>
                      {item.lesson_illustration || item.lessonIllustration || item.illustration}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '800', marginBottom: '14px' }}>
          B. Chuẩn Đầu Ra Cốt Lõi (Course Learning Outcomes - CLOs)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {clos.map((clo, idx) => (
            <div key={idx} style={{ background: '#eef2ff', padding: '14px 18px', borderRadius: '14px', border: '1px solid #c7d2fe', color: '#312e81', fontSize: '0.93rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle size={20} color="#4f46e5" style={{ flexShrink: 0 }} /> {clo}
            </div>
          ))}
        </div>
      </div>

      {/* 2. GIAI ĐOẠN 3: LEARNING PLAN & JIT TOOLS */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#0891b2', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <BookOpen color="#0891b2" size={24} /> 2. GIAI ĐOẠN 3: Lập Kế Hoạch Học Tập (Just-In-Time Learning Content)
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '20px' }}>
          Trong mô hình UbD, nội dung học tập và hoạt động giảng dạy của giáo viên được thiết kế như những "công cụ vừa đúng lúc" (Just-in-time Tools) nhằm trực tiếp trang bị năng lực giúp học sinh hoàn thành các chuẩn đầu ra.
        </p>

        <h3 style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '800', marginBottom: '14px' }}>
          A. Bảng Đối Chiếu Tiến Trình Sư Phạm Video - SGK (Timestamp Mapping)
        </h3>

        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#0e7490', color: '#ffffff' }}>
                <th style={{ padding: '10px 12px', border: '1px solid #155e75', width: '15%' }}>Mốc Thời Gian</th>
                <th style={{ padding: '10px 12px', border: '1px solid #155e75', width: '40%' }}>Hoạt Động Giảng Dạy Của Giáo Viên</th>
                <th style={{ padding: '10px 12px', border: '1px solid #155e75', width: '25%' }}>Kiến Thức / Khái Niệm Trọng Tâm</th>
                <th style={{ padding: '10px 12px', border: '1px solid #155e75', width: '20%' }}>Liên Kết SGK & Ghi Chú</th>
              </tr>
            </thead>
            <tbody>
              {mapData.map((row, idx) => {
                const timeStr = row.time_range || row.time || `${formatTimePill(row.startTime)} - ${formatTimePill(row.endTime)}`;
                const act = row.teacher_activity || row.title || row.act || 'Hoạt động bài giảng';
                const conc = row.core_concept || row.desc || row.conc || 'Nội dung bài học';
                const ref = row.book_reference || row.bookRef || row.ref || `${lesson.subject} SGK`;

                return (
                  <tr key={idx} style={{ background: idx % 2 === 0 ? '#f8fafc' : '#ffffff' }}>
                    <td style={{ padding: '10px 12px', border: '1px solid #cbd5e1', fontWeight: '800', color: '#0891b2', whiteSpace: 'nowrap' }}>{timeStr}</td>
                    <td style={{ padding: '10px 12px', border: '1px solid #cbd5e1' }}>{act}</td>
                    <td style={{ padding: '10px 12px', border: '1px solid #cbd5e1', fontWeight: '600' }}>{conc}</td>
                    <td style={{ padding: '10px 12px', border: '1px solid #cbd5e1', color: '#475569', fontSize: '0.84rem' }}>{ref}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '800', marginBottom: '14px' }}>
          B. Phân Tích Công Cụ Sư Phạm Vừa Đúng Lúc (Just-In-Time Pedagogical Tools)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {jitTools.map((tool, idx) => (
            <div key={idx} style={{ background: '#ecfeff', padding: '18px 20px', borderRadius: '16px', border: '1.5px solid #a5f3fc' }}>
              <div style={{ fontWeight: '800', color: '#0e7490', fontSize: '1rem', marginBottom: '8px' }}>
                • {tool.title || tool.name}
              </div>
              <div style={{ fontSize: '0.94rem', color: '#164e63', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                {tool.desc || tool.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CÁC BẪY CÓ THỂ GẶP PHẢI */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#dc2626', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <ShieldAlert color="#dc2626" size={24} /> 3. CÁC BẪY CÓ THỂ GẶP PHẢI (Pitfalls / Traps)
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '20px' }}>
          Dưới đây là các cạm bẫy tư duy và lỗi sai điển hình mà học sinh thường gặp phải trong môn {lesson.subject}, kèm theo giải pháp sư phạm chuẩn mực:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {pitfalls.map((pit, idx) => (
            <div key={idx} style={{ background: '#fff1f2', padding: '20px', borderRadius: '18px', border: '1.5px solid #fecdd3' }}>
              <div style={{ fontWeight: '800', color: '#9f1239', fontSize: '1.02rem', marginBottom: '10px' }}>
                📌 {pit.name || pit.trap_name || pit.title || `Bẫy ${idx+1}`}
              </div>
              {pit.situation && (
                <div style={{ fontSize: '0.9rem', color: '#881337', marginBottom: '6px' }}>
                  <strong>Tình huống:</strong> {pit.situation || pit.sit}
                </div>
              )}
              {pit.error && (
                <div style={{ fontSize: '0.9rem', color: '#be123c', background: '#ffe4e6', padding: '10px 14px', borderRadius: '10px', marginBottom: '8px', fontWeight: '600' }}>
                  ❌ <strong>Lỗi thường gặp:</strong> {pit.error || pit.err}
                </div>
              )}
              {pit.solution && (
                <div style={{ fontSize: '0.9rem', color: '#065f46', background: '#d1fae5', padding: '10px 14px', borderRadius: '10px', fontWeight: '600', whiteSpace: 'pre-line' }}>
                  ✅ <strong>Giải pháp khắc phục:</strong> {pit.solution || pit.sol}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4. NỘI DUNG CỐT LÕI CẦN NẮM */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#d97706', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <Key color="#d97706" size={24} /> 4. NỘI DUNG CỐT LÕI CẦN NẮM (Key Takeaways)
        </h2>
        <div style={{ fontWeight: '700', color: '#78350f', fontSize: '1.05rem', marginBottom: '16px' }}>
          Trụ Cột Tri Thức Bắt Buộc Ghi Nhớ Của Bài Học {lesson.subject} ({lesson.day})
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {takeaways.map((item, idx) => (
            <div key={idx} style={{ background: '#fffbeb', padding: '16px 20px', borderRadius: '16px', border: '1.5px solid #fef3c7' }}>
              <div style={{ fontWeight: '800', color: '#92400e', fontSize: '1rem', marginBottom: '6px' }}>
                {item.num || idx+1}. {item.title}
              </div>
              <div style={{ fontSize: '0.93rem', color: '#78350f', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                {item.desc || item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. BÀI QUIZ (FORMATIVE ASSESSMENT) */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#4338ca', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <HelpCircle color="#4338ca" size={24} /> 5. BÀI QUIZ (Kiểm Tra Nhanh - Formative Assessment)
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '20px' }}>
          Bộ câu hỏi trắc nghiệm đánh giá nhanh được thiết kế bằng Tiếng Anh Học Thuật (Academic English) nhằm kiểm tra trực tiếp mức độ lĩnh hội các khái niệm môn {lesson.subject}:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {quizList.map((q, idx) => {
            const qNumStr = q.qNum || q.id || `Question ${idx + 1}`;
            const qTextStr = q.qText || q.question || '';
            const optsArr = q.opts || q.options || [];
            const ansStr = q.ans || q.correct || 'A';
            const expStr = q.exp || q.explanation || '';

            return (
              <div key={idx} style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1.5px solid #e2e8f0' }}>
                <div style={{ fontWeight: '800', color: '#312e81', fontSize: '1.02rem', marginBottom: '8px' }}>
                  {qNumStr}: {qTextStr}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px', marginBottom: '12px' }}>
                  {optsArr.map((opt, oIdx) => (
                    <div key={oIdx} style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#334155' }}>
                      {opt}
                    </div>
                  ))}
                </div>
                <div style={{ background: '#dcfce7', color: '#15803d', padding: '8px 14px', borderRadius: '10px', fontSize: '0.88rem', fontWeight: '800', marginBottom: '8px' }}>
                  [Correct Answer]: {ansStr}
                </div>
                {expStr && (
                  <div style={{ background: '#ffffff', padding: '12px 14px', borderRadius: '10px', borderLeft: '4px solid #16a34a', fontSize: '0.88rem', color: '#334155', lineHeight: '1.6' }}>
                    <strong>[Detailed Pedagogical Explanation]:</strong> {expStr}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. GIAI ĐOẠN 2: BLOOM'S TAXONOMY ASSESSMENT */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '26px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#7c3aed', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <Award color="#7c3aed" size={24} /> 6. GIAI ĐOẠN 2: BÀI ASSESSMENT THEO BLOOM'S TAXONOMY
        </h2>

        <div style={{ background: '#f5f3ff', padding: '18px 20px', borderRadius: '16px', border: '1px solid #ddd6fe', marginBottom: '22px' }}>
          <div style={{ fontWeight: '800', color: '#5b21b6', fontSize: '1.05rem', marginBottom: '6px' }}>
            🎭 Kịch Bản Thực Tế (Task Context)
          </div>
          <div style={{ fontSize: '0.93rem', color: '#4c1d95', lineHeight: '1.7' }}>
            {bloomScenario}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {bloomLevels.map((lvl, idx) => (
            <div key={idx} style={{ background: '#ffffff', padding: '20px', borderRadius: '18px', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              <div style={{ fontWeight: '800', color: '#6d28d9', fontSize: '1.05rem', marginBottom: '2px' }}>
                {lvl.lvl || lvl.level || `Level ${idx+1}`}
              </div>
              {lvl.sub && (
                <div style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: '700', marginBottom: '10px' }}>
                  {lvl.sub || lvl.subtitle}
                </div>
              )}
              {lvl.task && (
                <div style={{ fontSize: '0.94rem', color: '#1e293b', marginBottom: '10px', fontWeight: '600', whiteSpace: 'pre-line' }}>
                  📝 <strong>Nhiệm vụ:</strong> {lvl.task || lvl.question}
                </div>
              )}
              {lvl.sol && (
                <div style={{ fontSize: '0.92rem', color: '#047857', background: '#ecfdf5', padding: '12px 16px', borderRadius: '12px', fontWeight: '600', whiteSpace: 'pre-line', marginBottom: '10px' }}>
                  💡 <strong>[Đáp án / Hướng dẫn giải]:</strong><br/>{lvl.sol || lvl.solution}
                </div>
              )}
              {lvl.why && (
                <div style={{ fontSize: '0.85rem', color: '#475569', background: '#f8fafc', padding: '10px 14px', borderRadius: '10px', fontStyle: 'italic' }}>
                  🎓 <strong>[Lý do sư phạm]:</strong> {lvl.why || lvl.pedagogical_reason}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 7. WEB JSON PAYLOAD */}
      <div style={{ background: '#0f172a', color: '#38bdf8', padding: '26px', borderRadius: '20px', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#38bdf8', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <Code color="#38bdf8" size={24} /> 7. ĐỊNH DẠNG DỮ LIỆU JSON CHO WEBSITE (WEB JSON PAYLOAD)
        </h2>
        <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '14px' }}>
          Toàn bộ câu hỏi trắc nghiệm khách quan được chuẩn hóa sang định dạng JSON tiếng Anh học thuật, sẵn sàng tích hợp trực tiếp vào hệ thống Quản lý Học tập (LMS):
        </p>

        <div style={{ background: '#1e293b', color: '#e2e8f0', padding: '18px', borderRadius: '14px', fontFamily: 'monospace', fontSize: '0.8rem', wordBreak: 'break-all', lineHeight: '1.6', border: '1px solid #334155' }}>
          {JSON.stringify({ quiz: quizList })}
        </div>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FileText, Target, BookOpen, AlertTriangle, Key, Award, Code, CheckCircle, Lightbulb, Layout, Eye } from 'lucide-react';

export default function UbDReportViewer({ lesson }) {
  const [viewMode, setViewMode] = useState('interactive-cards'); // Default to rich interactive cards

  const ubdData = lesson.ubdFullData || {
    stage1: {
      taxonomy: [
        { level: "Foundation (Nền Tảng)", items: "Nhận diện 7 chữ số La Mã (I, V, X, L, C, D, M); Nhớ 4 lớp số (Periods: Ones, Thousands, Millions, Billions)." },
        { level: "Core (Cốt Lõi)", items: "Phân biệt tên vị trí (Place) và giá trị thực tế (Value) của chữ số; Đặt tính cộng nhiều chữ số có nhớ." },
        { level: "Applied (Ứng Dụng)", items: "Đọc và viết chính xác các số lớn đến Hàng Trăm Tỷ; Giải bài toán có lời văn (Story Problems) trên giấy nháp." },
        { level: "Meta-cognitive (Siêu Nhận Thức)", items: "Kẹp giấy nháp ở đầu trang sách; Thử lại phép tính cộng bằng phép thử ngược; Tự rà soát lỗi viết số La Mã quá 3 lần." }
      ],
      clos: [
        "CLO 1: Phân tích và xác định chính xác Place và Value của bất kỳ chữ số nào trong phạm vi 100 tỷ (Arithmetic 5 tr. 1).",
        "CLO 2: Chuyển đổi hai chiều mượt mà giữa số Ả Rập và số La Mã phạm vi 1 - 1,000 bám sát quy tắc vạch số (Arithmetic 5 tr. 2).",
        "CLO 3: Thực hiện tính nhẩm phản xạ (Mental Math) chính xác trong vòng 3 giây sau hiệu lệnh 'Equals!'."
      ]
    },
    stage3: [
      {
        concept: "Place Value Chart & 4 Periods",
        timestamp: "08:00 - 12:00",
        bookRef: "Arithmetic 5 tr. 1 (Place Value Chart)",
        jitUsage: "Giáo viên dùng sơ đồ 4 Period làm 'công cụ định hình' để học sinh phân tách số lớn thành các nhóm 3 chữ số cách nhau bằng dấu phẩy."
      },
      {
        concept: "Roman Numeral Rules (I, V, X, L, C, D, M)",
        timestamp: "15:00 - 20:00",
        bookRef: "Arithmetic 5 tr. 2 (Roman Numerals Rule)",
        jitUsage: "Cung cấp quy tắc cộng (viết bên phải) và quy tắc trừ (viết bên trái) giúp học sinh giải nhanh các số như XLIV (44) hay CMXCIX (999)."
      }
    ],
    pitfalls: [
      {
        situation: "Hỏi giá trị của chữ số 7 trong số 47,820.",
        commonError: "Học sinh trả lời 'Thousands' (trả lời nhầm tên vị trí Place).",
        solution: "Khắc phục bằng công thức ghi nhớ: Place = Tên địa chỉ | Value = Con số cụ thể (7,000)."
      },
      {
        situation: "Viết số 40 hoặc số 90 bằng chữ số La Mã.",
        commonError: "Viết lặp lại chữ số quá 3 lần: XXXX hoặc VIIII.",
        solution: "Khắc phục: Tuyệt đối không lặp lại 1 chữ cái quá 3 lần. Áp dụng quy tắc trừ: XL (50 - 10 = 40) và XC (100 - 10 = 90)."
      }
    ],
    keyTakeaways: [
      "Mỗi Period (Lớp số) gồm đúng 3 vị trí (Hundreds, Tens, Ones) được phân tách bằng dấu phẩy.",
      "7 chữ số La Mã cốt tủy: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.",
      "Luôn kẹp sẵn giấy nháp ở trang 1 để rèn luyện thói quen tính toán cẩn thận."
    ],
    bloomAssessment: {
      taskContext: "Đóng vai một Nhà Kiểm Toán Số Học (Number Auditor) kiểm tra hồ sơ ngân hàng và khắc phục các mã số La Mã bị ghi sai.",
      levels: [
        { level: "1. Remember (Nhớ)", task: "Liệt kê 7 chữ số La Mã cơ bản và giá trị tương ứng.", solution: "I=1, V=5, X=10, L=50, C=100, D=500, M=1000." },
        { level: "2. Understand (Hiểu)", task: "Giải thích tại sao số 47,820 có Place là Thousands nhưng Value là 7,000.", solution: "Vì chữ số 7 nằm ở hàng nghìn (Place = Thousands), nên giá trị thực tế của nó là 7 x 1,000 = 7,000 (Value)." },
        { level: "3. Apply (Vận dụng)", task: "Chuyển đổi số 444 sang chữ số La Mã.", solution: "400 = CD, 40 = XL, 4 = IV => CDXLIV." },
        { level: "4. Analyze (Phân tích)", task: "Phân tích xem số 345,678,901,234 có mấy Period và đọc tên từng Period.", solution: "Có 4 Periods: Ones (234), Thousands (901), Millions (678), Billions (345)." },
        { level: "5. Evaluate (Đánh giá)", task: "Phát hiện lỗi sai trong cách viết mã số La Mã 'XXXXIIII' và sửa lại.", solution: "Lỗi sai: Lặp lại X và I quá 3 lần. Sửa lại chuẩn: XLIV (44)." },
        { level: "6. Create (Sáng tạo)", task: "Tự sáng tác 1 bài toán có lời văn (Story Problem) liên quan đến Place Value và viết lời giải.", solution: "Rubric: Đặt kịch bản thực tế (2đ), Xác định số học chính xác (4đ), Tính toán và thử lại trên giấy nháp (4đ)." }
      ]
    }
  };

  // Clean raw markdown string for HTML rendering mode
  const cleanMarkdownText = (lesson.ubdReportMd || '')
    .replace(/^#\s+/gm, '# ')
    .replace(/^##\s+/gm, '## ');

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header Banner */}
      <div className="card" style={{ marginBottom: '20px', background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', border: '1px solid #10b981' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', color: '#065f46', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText color="#059669" size={24} />
              Báo Cáo Phân Tích Thiết Kế Sư Phạm Ngược (UbD 7 Giai Đoạn)
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#047857', marginTop: '4px' }}>
              Trình bày báo cáo UbD chuyên sâu bám sát tiến trình video bài giảng và sách giáo khoa Abeka.
            </p>
          </div>

          {/* View Mode Selector Tabs */}
          <div style={{ display: 'flex', gap: '6px', background: '#ffffff', padding: '4px', borderRadius: '12px', border: '1px solid #a7f3d0' }}>
            <button
              onClick={() => setViewMode('interactive-cards')}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: '800',
                border: 'none',
                background: viewMode === 'interactive-cards' ? '#059669' : 'transparent',
                color: viewMode === 'interactive-cards' ? '#ffffff' : '#334155',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Layout size={14} /> Thẻ Trực Quan UbD (Cards)
            </button>

            <button
              onClick={() => setViewMode('formatted-markdown')}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: '800',
                border: 'none',
                background: viewMode === 'formatted-markdown' ? '#059669' : 'transparent',
                color: viewMode === 'formatted-markdown' ? '#ffffff' : '#334155',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Eye size={14} /> Báo Cáo HTML Đầy Đủ
            </button>

            <button
              onClick={() => setViewMode('json-payload')}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: '800',
                border: 'none',
                background: viewMode === 'json-payload' ? '#059669' : 'transparent',
                color: viewMode === 'json-payload' ? '#ffffff' : '#334155',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Code size={14} /> Web JSON Payload
            </button>
          </div>
        </div>

        {/* Lesson Metadata Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '16px', background: '#ffffff', padding: '14px', borderRadius: '12px', border: '1px solid #a7f3d0', fontSize: '0.88rem' }}>
          <div><strong>📘 Môn học:</strong> {lesson.subject}</div>
          <div><strong>👩‍🏫 Giáo viên:</strong> {lesson.teacher}</div>
          <div><strong>📖 Sách giáo khoa:</strong> {lesson.bookTitle}</div>
          <div><strong>📑 Phạm vi:</strong> {lesson.bookPages}</div>
        </div>
      </div>

      {/* MODE 1: Interactive Visual Cards View */}
      {viewMode === 'interactive-cards' && (
        <div>
          {/* 1. GIAI ĐOẠN 1: DESIRED RESULTS & CLOS */}
          <div className="card" style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#4f46e5', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Target color="#4f46e5" /> 1. GIAI ĐOẠN 1: Xác Định Kết Quả Mong Muốn (Desired Results & CLOs)
            </h3>
            <h4 style={{ fontSize: '1rem', color: '#1e293b', marginBottom: '10px' }}>🌳 Cây Kỹ Năng (Skill Taxonomy):</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '10px', marginBottom: '16px' }}>
              {ubdData.stage1.taxonomy.map((tax, idx) => (
                <div key={idx} style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1.5px solid #e2e8f0' }}>
                  <div style={{ fontWeight: '800', color: '#4338ca', fontSize: '0.88rem', marginBottom: '4px' }}>{tax.level}</div>
                  <div style={{ fontSize: '0.85rem', color: '#475569' }}>{tax.items}</div>
                </div>
              ))}
            </div>
            <h4 style={{ fontSize: '1rem', color: '#1e293b', marginBottom: '8px' }}>🎯 Chuẩn Đầu Ra (CLOs):</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {ubdData.stage1.clos.map((clo, idx) => (
                <li key={idx} style={{ background: '#eef2ff', padding: '10px 14px', borderRadius: '8px', color: '#312e81', fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={16} color="#4f46e5" /> {clo}
                </li>
              ))}
            </ul>
          </div>

          {/* 2. GIAI ĐOẠN 3: JUST-IN-TIME LEARNING CONTENT */}
          <div className="card" style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#0891b2', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <BookOpen color="#0891b2" /> 2. GIAI ĐOẠN 3: Nội Dung Học Tập Just-In-Time (Video-to-Book Mapping)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {ubdData.stage3.map((item, idx) => (
                <div key={idx} style={{ background: '#f0fdf4', padding: '14px', borderRadius: '12px', border: '1.5px solid #bbf7d0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontWeight: '800', color: '#166534', fontSize: '0.95rem' }}>{item.concept}</span>
                    <span style={{ background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '14px', fontSize: '0.78rem', fontWeight: '800' }}>⏱️ {item.timestamp}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#15803d', fontWeight: '700', marginBottom: '4px' }}>📖 Trích dẫn: {item.bookRef}</div>
                  <div style={{ fontSize: '0.88rem', color: '#334155', background: '#ffffff', padding: '8px 10px', borderRadius: '8px', borderLeft: '3px solid #22c55e' }}>{item.jitUsage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. CÁC BẪY CÓ THỂ GẶP PHẢI */}
          <div className="card" style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#dc2626', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <AlertTriangle color="#dc2626" /> 3. CÁC BẪY CÓ THỂ GẶP PHẢI (Pitfalls / Common Traps)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              {ubdData.pitfalls.map((pit, idx) => (
                <div key={idx} style={{ background: '#fff1f2', padding: '14px', borderRadius: '12px', border: '1.5px solid #fecdd3' }}>
                  <div style={{ fontWeight: '800', color: '#9f1239', marginBottom: '6px', fontSize: '0.9rem' }}>📌 Tình huống #{idx + 1}: {pit.situation}</div>
                  <div style={{ fontSize: '0.85rem', color: '#be123c', background: '#ffe4e6', padding: '6px 10px', borderRadius: '6px', marginBottom: '6px', fontWeight: '700' }}>❌ Lỗi thường gặp: {pit.commonError}</div>
                  <div style={{ fontSize: '0.85rem', color: '#065f46', background: '#d1fae5', padding: '6px 10px', borderRadius: '6px', fontWeight: '700' }}>✅ Giải pháp: {pit.solution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. BLOOM'S TAXONOMY ASSESSMENT */}
          <div className="card" style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#7c3aed', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Award color="#7c3aed" /> 4. GIAI ĐOẠN 2: Đánh Giá Theo Thang Nhận Thức Bloom (6 Levels)
            </h3>
            <div style={{ background: '#f5f3ff', padding: '12px', borderRadius: '10px', border: '1px solid #ddd6fe', marginBottom: '12px', color: '#5b21b6', fontWeight: '700', fontSize: '0.88rem' }}>
              🎭 Task Context: {ubdData.bloomAssessment.taskContext}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {ubdData.bloomAssessment.levels.map((lvl, idx) => (
                <div key={idx} style={{ background: '#ffffff', padding: '12px', borderRadius: '10px', border: '1.5px solid #e2e8f0' }}>
                  <div style={{ fontWeight: '800', color: '#6d28d9', fontSize: '0.92rem', marginBottom: '4px' }}>{lvl.level}</div>
                  <div style={{ fontSize: '0.88rem', color: '#1e293b', marginBottom: '6px', fontWeight: '600' }}>📝 Bài tập: {lvl.task}</div>
                  <div style={{ fontSize: '0.85rem', color: '#047857', background: '#ecfdf5', padding: '6px 10px', borderRadius: '6px', fontWeight: '700' }}>💡 Hướng dẫn / Đáp án: {lvl.solution}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: Formatted Markdown View using ReactMarkdown */}
      {viewMode === 'formatted-markdown' && (
        <div className="card ubd-doc-container" style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', lineHeight: '1.8' }}>
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 style={{ fontSize: '1.5rem', color: '#1e1b4b', borderBottom: '3px solid #6366f1', paddingBottom: '8px', margin: '20px 0 16px' }}>{children}</h1>,
              h2: ({ children }) => <h2 style={{ fontSize: '1.25rem', color: '#4338ca', borderBottom: '2px dashed #c7d2fe', paddingBottom: '6px', margin: '24px 0 12px' }}>{children}</h2>,
              h3: ({ children }) => <h3 style={{ fontSize: '1.1rem', color: '#0369a1', margin: '18px 0 8px' }}>{children}</h3>,
              ul: ({ children }) => <ul style={{ paddingLeft: '20px', margin: '10px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>{children}</ul>,
              li: ({ children }) => <li style={{ color: '#334155', fontSize: '0.98rem' }}>{children}</li>,
              blockquote: ({ children }) => <blockquote style={{ background: '#f0fdf4', borderLeft: '4px solid #16a34a', padding: '12px 16px', borderRadius: '8px', margin: '12px 0', color: '#15803d', fontStyle: 'normal', fontWeight: '600' }}>{children}</blockquote>,
              strong: ({ children }) => <strong style={{ color: '#1e293b', fontWeight: '800' }}>{children}</strong>
            }}
          >
            {cleanMarkdownText}
          </ReactMarkdown>
        </div>
      )}

      {/* MODE 3: Single-line Web JSON Payload */}
      {viewMode === 'json-payload' && (
        <div className="card" style={{ background: '#ffffff', padding: '24px', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Code color="#059669" /> Chuỗi Web JSON Payload (Single-Line Web Data)
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '12px' }}>
            Chuỗi JSON nạp Quiz chuẩn xác được xuất liền 1 dòng duy nhất để load trực tiếp lên giao diện học tập:
          </p>

          <div style={{ background: '#0f172a', color: '#38bdf8', padding: '16px', borderRadius: '12px', fontFamily: 'monospace', fontSize: '0.8rem', wordBreak: 'break-all', lineHeight: '1.6' }}>
            {JSON.stringify({ quiz: lesson.quizData })}
          </div>
        </div>
      )}
    </div>
  );
}

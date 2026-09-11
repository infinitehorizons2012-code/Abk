import fs from 'fs';
import path from 'path';

const jsonPath = 'G:/My Drive/80-Shared/Team-Shared/Abeka_Videos/Abeka Video/Grade 5/Ngày 001/Arithmetic 5/Grade 5 - 001 - Arithmetic 5.json';
const rawData = fs.readFileSync(jsonPath, 'utf8');
const parsed = JSON.parse(rawData);

// Map 848 segments into clean objects
const fullSubtitles = parsed.segments.map(seg => ({
  start: Math.round(seg.start * 100) / 100,
  end: Math.round(seg.end * 100) / 100,
  en: seg.text ? seg.text.trim() : "",
  vi: seg.vietnamese ? seg.vietnamese.trim() : ""
}));

console.log(`Extracted ${fullSubtitles.length} subtitle lines.`);

// Write to a dedicated JSON file src/data/arithmeticSubtitles.json
fs.writeFileSync(
  path.resolve('./src/data/arithmeticSubtitles.json'),
  JSON.stringify(fullSubtitles, null, 2),
  'utf8'
);

console.log('Saved src/data/arithmeticSubtitles.json successfully!');

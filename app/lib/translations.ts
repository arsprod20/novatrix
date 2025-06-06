import fs from 'fs';
import path from 'path';

export async function loadTranslations(lang: string, page: string) {
  const filePath = path.join(
    process.cwd(), 
    'public', 
    'locales', 
    lang, 
    `${page}.json`
  );

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error loading translations for ${page} (${lang}):`, error);
    return {};
  }
}
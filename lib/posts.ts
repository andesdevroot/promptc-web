import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Esta ruta busca la carpeta 'content/devlog' en la raíz de tu proyecto
const devlogDirectory = path.join(process.cwd(), 'content', 'devlog');

export function getSortedDevlogData() {
  if (!fs.existsSync(devlogDirectory)) {
    console.warn("Directorio no encontrado:", devlogDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(devlogDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(devlogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        date: matterResult.data.date || "",
        title: matterResult.data.title || "Sin título",
        excerpt: matterResult.data.excerpt || "",
        tags: matterResult.data.tags || [],
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getDevlogData(slug: string) {
  const fullPath = path.join(devlogDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Archivo no encontrado: ${fullPath}`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    date: matterResult.data.date || "",
    title: matterResult.data.title || "Sin título",
    excerpt: matterResult.data.excerpt || "",
    tags: matterResult.data.tags || [],
  };
}
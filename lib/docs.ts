import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const docsDirectory = path.join(process.cwd(), 'content', 'docs');

export function getDocsList() {
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(docsDirectory);
  const docsList = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(docsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || "Sin título",
        order: matterResult.data.order || 99, // Orden por defecto si no se especifica
      };
    });

  // Ordenar de menor a mayor basado en el campo 'order'
  return docsList.sort((a, b) => (a.order > b.order ? 1 : -1));
}

export async function getDocData(slug: string) {
  const fullPath = path.join(docsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Archivo de documentación no encontrado: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: matterResult.data.title || "Sin título",
    order: matterResult.data.order || 99,
  };
}
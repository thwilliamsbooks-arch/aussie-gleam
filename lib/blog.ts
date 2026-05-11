import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  targetKeyword: string;
  wordCount: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'));

  const posts: BlogPostMeta[] = files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const { data } = matter(raw);
    return {
      slug,
      title:           data.title           || '',
      date:            data.date             ? formatDate(data.date) : '',
      excerpt:         data.excerpt          || '',
      metaTitle:       data.metaTitle        || data.title || '',
      metaDescription: data.metaDescription  || data.excerpt || '',
      category:        data.category         || '',
      targetKeyword:   data.targetKeyword    || '',
      wordCount:       data.wordCount        || 0,
    };
  });

  // Newest first
  return posts.sort((a, b) => {
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();
    return db - da;
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title:           data.title           || '',
    date:            data.date             ? formatDate(data.date) : '',
    excerpt:         data.excerpt          || '',
    metaTitle:       data.metaTitle        || data.title || '',
    metaDescription: data.metaDescription  || data.excerpt || '',
    category:        data.category         || '',
    targetKeyword:   data.targetKeyword    || '',
    wordCount:       data.wordCount        || 0,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

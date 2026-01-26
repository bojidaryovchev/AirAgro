import { remark } from 'remark';
import html from 'remark-html';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html, { sanitize: false })
    .process(markdown);
  
  return result.toString();
}

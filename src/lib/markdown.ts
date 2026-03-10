import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true }) // Bridge remark → rehype
    .use(rehypeRaw) // Support raw HTML in markdown
    .use(rehypeSlug) // Add id attributes to headings
    .use(rehypeAutolinkHeadings, { behavior: "wrap" }) // Make headings linkable
    .use(rehypeStringify) // Serialize to HTML
    .process(markdown);

  return result.toString();
}

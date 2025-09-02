import { marked } from "marked";

export function convertMarkdownToHtml(markdown: string): string | Promise<string> {
  return marked(markdown);
}

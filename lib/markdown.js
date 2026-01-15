import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export default async function markdownToHtml(markdown) {
    const result = await remark().use(gfm).use(html, { sanitize: false }).process(markdown);
    return result.toString().replace(/user-content-/g, '');
}

import type {RequestHandler} from '@sveltejs/kit';

const BASE = 'https://cleancode.uk';

// Add or remove routes here as your site evolves
const routes = [
    '/',
    '/about',
    '/experience',
    '/contact',
    // '/contact/success', // usually excluded
];

const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

export const GET: RequestHandler = async () => {
    const urls = routes
        .map((path) => {
            const priority = path === '/' ? '1.0' : path === '/contact' ? '0.6' : '0.8';
            const changefreq = path === '/' ? 'weekly' : path === '/contact' ? 'monthly' : 'monthly';
            return `
      <url>
        <loc>${BASE}${path}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>`;
        })
        .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8'
        }
    });
};
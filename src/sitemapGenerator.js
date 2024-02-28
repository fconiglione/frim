const fs = require('fs');
const path = require('path');

const { create } = require('xmlbuilder2');

const routes = [
    '/',
    '/about',
    '/contact-us',
    '/privacy-policy',
    '/terms-of-use',
    '/legal',
    '/careers'
];

const generateSitemap = () => {
    const root = create({ version: '1.0' })
        .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

    routes.forEach(route => {
        root.ele('url').ele('loc').txt(`https://frim.io${route}`);
    });

    return root.end({ prettyPrint: true });
};

const sitemap = generateSitemap();

const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

fs.writeFileSync(sitemapPath, sitemap);

console.log('Sitemap generated and saved to public/sitemap.xml');
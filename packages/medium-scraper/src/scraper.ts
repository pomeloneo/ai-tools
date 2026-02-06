import puppeteer from 'puppeteer';
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';

export interface ScrapedArticle {
    title: string;
    content: string; // HTML content
    textContent: string;
    byline: string;
    excerpt: string;
    siteName: string;
    url: string;
}

export async function scrapeArticle(url: string): Promise<ScrapedArticle> {
    console.log(`Launching browser to scrape: ${url}`);
    const browser = await puppeteer.launch({
        headless: true, // Use standard headless mode
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        
        // Set a realistic User-Agent to avoid immediate blocking
        await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        
        // Medium specific: Set cookies or local storage if needed in future for bypassed content
        // For now, we rely on the free tier access or open articles
        
        console.log('Navigating to page...');
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        // Scroll to bottom to trigger lazy loading of images
        await page.evaluate(async () => {
            await new Promise<void>((resolve) => {
                let totalHeight = 0;
                const distance = 100;
                const timer = setInterval(() => {
                    const scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if (totalHeight >= scrollHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        });

        const content = await page.content();
        const dom = new JSDOM(content, { url });
        const reader = new Readability(dom.window.document);
        const article = reader.parse();

        if (!article) {
            throw new Error('Failed to parse article content with Readability');
        }

        return {
            title: article.title,
            content: article.content,
            textContent: article.textContent,
            byline: article.byline || 'Unknown Author',
            excerpt: article.excerpt || '',
            siteName: article.siteName || 'Medium',
            url: url
        };

    } finally {
        await browser.close();
    }
}

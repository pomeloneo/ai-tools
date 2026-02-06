import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio'; // Correct way to import cheerio v1.0.0-rc.12+ if used
import TurndownService from 'turndown';
import { ScrapedArticle } from './scraper';
import { sanitizeFileName } from './utils';
import { URL } from 'url';

export async function processArticle(article: ScrapedArticle, outputDir: string): Promise<string> {
    const safeTitle = sanitizeFileName(article.title);
    const articleDir = path.join(outputDir, safeTitle);
    const imagesDir = path.join(articleDir, 'images');

    await fs.ensureDir(imagesDir);

    const $ = cheerio.load(article.content);
    const downloadedImages = new Set<string>();

    const imgElements = $('img').toArray();
    
    console.log(`Found ${imgElements.length} images. Starting download...`);

    for (const element of imgElements) {
        const img = $(element);
        let src = img.attr('src');
        
        // Sometimes Medium puts the real image in data-src or other attributes, 
        // but Readability usually cleans this up. We check src primarily.
        
        if (!src) continue;

        // Clean up query parameters to get cleaner extension, or handle known extensions
        // Medium image URLs often look like: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xxxxx
        // We will try to download as is.
        
        try {
            const imageUrl = src;
            if (downloadedImages.has(imageUrl)) continue;
            downloadedImages.add(imageUrl);

            // Generate a filename
            // Use a hash or simply a counter if the URL is weird
            const urlObj = new URL(imageUrl);
            let ext = path.extname(urlObj.pathname);
            if (!ext || ext === '.') {
                // Try to guess or default to .jpg. Medium often serves webp or jpg
                if (imageUrl.includes('format:webp')) ext = '.webp';
                else if (imageUrl.includes('format:png')) ext = '.png';
                else ext = '.jpg';
            }
            
            const imageName = `img_${downloadedImages.size}${ext}`;
            const imagePath = path.join(imagesDir, imageName);

            await downloadImage(imageUrl, imagePath);

            // Update the src to relative path
            img.attr('src', `images/${imageName}`);
            // Remove srcset to prevent Notion/browsers from trying to load original URLs
            img.removeAttr('srcset');
            img.removeAttr('loading');
            img.removeAttr('style'); // Remove inline styles that might mess up layout

        } catch (error) {
            console.warn(`Failed to download image: ${src}`, error);
            // If download fails, keep the original src so it might still load from web
        }
    }

    const turndownService = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced'
    });

    // Custom rule for Medium code blocks (often pre/code structures are messy)
    // Readability usually gives us <pre><code>...</code></pre> which Turndown handles well.
    // We can add custom rules if we find specific issues later.

    const markdown = turndownService.turndown($.html());

    const frontMatter = `---
title: "${article.title.replace(/"/g, '\\"')}"
url: "${article.url}"
author: "${article.byline}"
date: "${new Date().toISOString()}"
---

`;

    const finalContent = `${frontMatter}# ${article.title}\n\n${markdown}`;
    const mdFilePath = path.join(articleDir, `${safeTitle}.md`);
    
    await fs.writeFile(mdFilePath, finalContent);
    console.log(`Saved Markdown to: ${mdFilePath}`);

    return articleDir;
}

async function downloadImage(url: string, dest: string): Promise<void> {
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
        timeout: 10000,
        headers: {
             'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    });

    const writer = fs.createWriteStream(dest);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

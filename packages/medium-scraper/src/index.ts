import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import path from 'path';
import fs from 'fs-extra';
import { scrapeArticle } from './scraper';
import { processArticle } from './converter';
import { zipDirectory } from './zipper';
import { sanitizeFileName } from './utils';

async function main() {
    const argv = await yargs(hideBin(process.argv))
        .option('url', {
            alias: 'u',
            type: 'string',
            description: 'URL of the Medium article to scrape',
            demandOption: true
        })
        .option('output', {
            alias: 'o',
            type: 'string',
            description: 'Output directory',
            default: './output'
        })
        .help()
        .argv;

    const url = argv.url as string;
    const outputBaseDir = path.resolve(argv.output as string);

    try {
        console.log(`Starting process for: ${url}`);
        
        // 1. Scrape
        const article = await scrapeArticle(url);
        console.log(`Scraped: ${article.title}`);

        // 2. Process (Download images, convert to Markdown)
        // We create a temporary processing directory inside output
        const safeTitle = sanitizeFileName(article.title);
        const articlePath = await processArticle(article, outputBaseDir);

        // 3. Zip
        const zipPath = path.join(outputBaseDir, `${safeTitle}.zip`);
        await zipDirectory(articlePath, zipPath);
        
        console.log(`\nSuccess! Article saved to: ${zipPath}`);
        console.log(`You can now import this ZIP file directly into Notion.`);

    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main();

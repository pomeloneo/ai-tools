import fs from 'fs-extra';
import archiver from 'archiver';
import path from 'path';

export async function zipDirectory(sourceDir: string, outPath: string): Promise<void> {
    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });
    const stream = fs.createWriteStream(outPath);

    return new Promise((resolve, reject) => {
        archive
            .directory(sourceDir, false) // false means contents of directory are at root of zip
            .on('error', err => reject(err))
            .pipe(stream);

        stream.on('close', () => resolve());
        archive.finalize();
    });
}

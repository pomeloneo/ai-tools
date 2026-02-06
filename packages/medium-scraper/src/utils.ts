export function sanitizeFileName(name: string): string {
    return name.replace(/[<>:"/\\|?*]+/g, '-').replace(/\s+/g, '_').substring(0, 100);
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

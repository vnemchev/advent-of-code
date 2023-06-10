function findValidWords(input: string): number {
    let validWordCount = 0;
    input.split('\n').forEach(r => {
        // - For second part:
        const orderedWords = r.split(' ').map(word => {
            return word
                .split('')
                .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
                .join('');
        });
        
        const orderedWordSet = new Set(orderedWords);
        if (orderedWordSet.size == orderedWords.length) validWordCount++;

        // - For first part:
        // const words = r.split(' ');
        // const wordSet = new Set(words);
        // if (wordSet.size == words.length) valid++;
    });
    return validWordCount;
}
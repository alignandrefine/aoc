export function hasDoubleCharacter(str: string): boolean {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) return true;
    }
    return false;
}

export function hasDoubleCharacterWithGap(str: string): boolean {
    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] === str[i + 2]) return true;
    }
    return false;
}

export function hasDoublePairs(pairs: string[]): boolean {
    for (let i = 0; i < pairs.length; i++) {
        for (let j = i + 2; j < pairs.length; j++) {
            if (pairs[i] === pairs[j]) {
                return true;
            }
        }
    }
    return false;
}
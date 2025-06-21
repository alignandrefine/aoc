export function countCharacterReduce(str: string, char: string): number {
    return str.split('').reduce((count, currentChar) => {
        return currentChar === char ? count + 1 : count;
    }, 0);
}
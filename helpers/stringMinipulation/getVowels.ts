export function getVowels(str: string): number {
    return (str.match(/[aeiou]/gi) || []).length;
}
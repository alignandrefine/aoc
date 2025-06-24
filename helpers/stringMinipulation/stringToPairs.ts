export function stringToPairs(input: string): string[] {
    const arr = input.split('');

    const pairs = []

    while (arr.length > 1) {
        pairs.push(arr.shift() + arr[0]);
    }
    return pairs;
}
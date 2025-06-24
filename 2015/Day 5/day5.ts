import {
    hasDoubleCharacterWithGap,
    hasDoublePairs
} from "../../helpers/stringMinipulation/hasDoubleCharacter";
import {day5Input} from "./day5Input";
import {stringToPairs} from "../../helpers/stringMinipulation/stringToPairs";

export function naughtyStrings(string: string): boolean {
    return string.includes('ab') || string.includes('cd') || string.includes('pq') || string.includes('xy');
}

export function naughtyOrNice(str: string): boolean {
    const array = stringToPairs(str);
    return (hasDoublePairs(array) && hasDoubleCharacterWithGap(str))
}

export function findOutWhosNaughtyAndNice(input: string): number {
    return input
        .split('\n')
        .filter(Boolean)
        .filter(naughtyOrNice)
        .length;
}

console.log(findOutWhosNaughtyAndNice(day5Input))
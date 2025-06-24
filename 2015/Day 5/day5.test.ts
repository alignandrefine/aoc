import {test, describe, expect} from "vitest";
import {findOutWhosNaughtyAndNice, naughtyOrNice, naughtyStrings} from "./day5";

describe('naughty strings', () => {
    const strings = [
        {input: 'aeiouaeiouaeiou', output: false},
        {input: 'abcdde', output: true},
        {input: 'aabbccdd', output: true},
        {input: 'aaccdd', output: true},
        {input: 'aaccpq', output: true},
        {input: 'aaccpxy', output: true},
    ]
    test.each(strings)(`$input returns $output`, ({input, output}) => {
        expect(naughtyStrings(input)).toStrictEqual(output);
    })
});

describe('naughty or nice', () => {
    const strings = [
        {input: 'qjhvhtzxzqqjkmpb', output: true},
        {input: 'xxyxx', output: true},
        {input: 'uurcxstgmygtbstg', output: false},
        {input: 'ieodomkazucvgmuy', output: false},
    ]
    test.each(strings)(`$input returns $output`, ({input, output}) => {
        expect(naughtyOrNice(input)).toStrictEqual(output);
    })
});

describe('nice list', () => {
    test(`we get the correct number of nice back`, () => {
        const input = 'qjhvhtzxzqqjkmpb\nxxyxx\nuurcxstgmygtbstg\nieodomkazucvgmuy'
        expect(findOutWhosNaughtyAndNice(input)).toStrictEqual(2);
    })
});



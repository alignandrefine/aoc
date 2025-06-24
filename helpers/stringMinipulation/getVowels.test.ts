import {test, describe, expect} from "vitest";
import {getVowels} from "./getVowels";

describe('get vowels', () => {
    const strings = [
        {input: 'aei', output: 3},
        {input: 'xazegov', output: 3},
        {input: 'aeiouaeiouaeiou', output: 15},
    ]
    test.each(strings)(`$input returns $output`, ({input, output}) => {
        expect(getVowels(input)).toStrictEqual(output);
    })
});


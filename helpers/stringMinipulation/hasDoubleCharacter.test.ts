import {describe, expect, test} from "vitest";
import {hasDoubleCharacter, hasDoubleCharacterWithGap, hasDoublePairs} from "./hasDoubleCharacter";

describe('has double characters', () => {
    const strings = [
        {input: 'abcdde', output: true},
        {input: 'aabbccdd', output: true},
        {input: 'jchzalrnumimnmhp', output: false},

    ]
    test.each(strings)(`$input returns $output`, ({input, output}) => {
        expect(hasDoubleCharacter(input)).toStrictEqual(output);
    })
});

describe('has double characters with gap', () => {
    const strings = [
        {input: 'xyx', output: true},
        {input: 'abcdefeghi', output: true},
        {input: 'aaa', output: true},
        {input: 'abca', output: false},

    ]
    test.each(strings)(`$input returns $output`, ({input, output}) => {
        expect(hasDoubleCharacterWithGap(input)).toStrictEqual(output);
    })
});

describe('has double pairs', () => {
    const strings = [
        {input: ['xy','yx', 'xy'], output: true},
        {input: ['aa', 'ab', 'bc', 'cd', 'de','ef', 'fg','ga','aa'], output: true},
        {input: ['aaa'], output: false},

    ]
    test.each(strings)(`$input returns $output`, ({input, output}) => {
        expect(hasDoublePairs(input)).toStrictEqual(output);
    })
});

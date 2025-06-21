import {test, describe, expect} from "vitest";
import {splitByCharacter} from "./splitByCharacter";

describe('split by character', () => {
    const wrappingPaperTestSizes = [
        {input: '2x3x4', output: ['2','3','4']},
        {input: '1x1x10', output: ['1','1','10']}
    ]
    test.each(wrappingPaperTestSizes)(`$input returns $output`, ({input, output}) => {
        expect(splitByCharacter(input, 'x')).toStrictEqual(output);
    })
});
import {test, describe, expect} from "vitest";
import { ribbonToOrder, wrappingPaperToOrder} from "./day2";

describe('wrapping paper to order', () => {
    const wrappingPaperTestSizes = [
        {input: '2x3x4', output: 58},
        {input: '1x1x10', output: 43},
        {input: '2x3x4\n1x1x10', output: 101}
    ]
    test.each(wrappingPaperTestSizes)(`$input returns $output`, ({input, output}) => {
        expect(wrappingPaperToOrder(input)).toStrictEqual(output);
    })
});

describe('ribbon to order', () => {
    const wrappingPaperTestSizes = [
        {input: '2x3x4', output: 34},
        {input: '1x1x10', output: 14},
        {input: '2x3x4\n1x1x10', output: 48}
    ]
    test.each(wrappingPaperTestSizes)(`$input returns $output`, ({input, output}) => {
        expect(ribbonToOrder(input)).toStrictEqual(output);
    })
});
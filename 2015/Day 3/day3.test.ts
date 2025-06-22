import {test, describe, expect} from "vitest";
import {houseCount} from "./day3";

describe('house count', () => {
    const directions = [
        {input: '>', output: 2},
        {input: '^v', output: 3},
        {input: '^>v<', output: 3},
        {input: '^v^v^v^v^v', output: 11}
    ]
    test.each(directions)(`$input returns $output`, ({input, output}) => {
        expect(houseCount(input)).toStrictEqual(output);
    })
});


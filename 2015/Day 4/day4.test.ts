import {test, describe, expect} from "vitest";
import {adventCoins} from "./day4";

describe('advent coins', () => {
    const secretKeys = [
        {input: 'abcdef', output: 609043},
        {input: 'pqrstuv', output: 1048970},
    ]
    test.each(secretKeys)(`$input returns $output`, ({input, output}) => {
        expect(adventCoins(input)).toStrictEqual(output);
    })
});


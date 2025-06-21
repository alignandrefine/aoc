import {describe, expect, test} from "vitest";
import {basementStop, floorFinder} from "./day1";

describe('floor finder', () => {
    const testCases = [
        {input: '(())', floor: 0},
        {input: '()()', floor: 0},
        {input: '(((', floor: 3},
        {input: '(()(()(', floor: 3},
        {input: '))(((((', floor: 3},
        {input: '())', floor: -1},
        {input: '))(', floor: -1},
        {input: ')))', floor: -3},
        {input: ')())())', floor: -3},
    ]
    test.each(testCases)(`$input returns $floor`, ({input, floor}) => {
        expect(floorFinder(input)).toBe(floor)
    })
});

describe('basement stop', () => {
    const testCases = [
        {input: '(())', stop: undefined},
        {input: '()()', stop: undefined},
        {input: '(((', stop: undefined},
        {input: '(()(()(', stop: undefined},
        {input: '))(((((', stop: 1},
        {input: '())', stop: 3},
        {input: '))(', stop: 1},
        {input: ')))', stop: 1},
        {input: ')())())', stop: 1},
        {input: ')', stop: 1},
        {input: '()())', stop: 5},
    ]
    test.each(testCases)(`$input returns $stop`, ({input, stop}) => {
        expect(basementStop(input)).toBe(stop)
    })
});
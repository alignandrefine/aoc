import {describe, expect, test} from "vitest";
import {stringToPairs} from "./stringToPairs";

describe('string to pairs', () => {
    const strings = [
        {input: 'ugknbfddgicrmopn', output: [
                'ug', 'gk', 'kn', 'nb',
                'bf', 'fd', 'dd', 'dg',
                'gi', 'ic', 'cr', 'rm',
                'mo', 'op', 'pn'
            ]},
        {input: 'aaa', output: [ 'aa', 'aa' ]},
        {input: 'jchzalrnumimnmhp', output: [
                'jc', 'ch', 'hz', 'za',
                'al', 'lr', 'rn', 'nu',
                'um', 'mi', 'im', 'mn',
                'nm', 'mh', 'hp'
            ]},
        {input: 'haegwjzuvuyypxyu', output: [
                'ha', 'ae', 'eg', 'gw',
                'wj', 'jz', 'zu', 'uv',
                'vu', 'uy', 'yy', 'yp',
                'px', 'xy', 'yu'
            ]},
        {input: 'dvszwmarrgswjxmb', output: [
                'dv', 'vs', 'sz', 'zw',
                'wm', 'ma', 'ar', 'rr',
                'rg', 'gs', 'sw', 'wj',
                'jx', 'xm', 'mb'
            ]},
    ]
    test.each(strings)(`$input returns $output`, ({input, output}) => {
        expect(stringToPairs(input)).toStrictEqual(output);
    })
});

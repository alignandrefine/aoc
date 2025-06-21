import { describe, it, expect } from 'vitest'
import {countCharacterReduce} from "./countCharacterReduce";

describe('countCharacterReduce', () => {
    it('counts occurrences of a specific character in a string', () => {
        expect(countCharacterReduce('(())', '(')).toBe(2)
        expect(countCharacterReduce('(())', ')')).toBe(2)
        expect(countCharacterReduce('(((', '(')).toBe(3)
        expect(countCharacterReduce('))(', ')')).toBe(2)
    })

    it('returns 0 when the character is not present', () => {
        expect(countCharacterReduce('(((', ')')).toBe(0)
        expect(countCharacterReduce('', '(')).toBe(0)
    })

    it('handles strings with mixed characters', () => {
        expect(countCharacterReduce('(a)b(c)', '(')).toBe(2)
        expect(countCharacterReduce('(a)b(c)', 'a')).toBe(1)
        expect(countCharacterReduce('(a)b(c)', 'z')).toBe(0)
    })
})

import {countCharacterReduce} from "../../helpers/stringMinipulation/countCharacterReduce";
import {day1Input} from "./day1Input";

export function floorFinder(input: string): number {
    return countCharacterReduce(input, '(') - countCharacterReduce(input, ')')
}

export function basementStop(input: string): number | undefined {
    const array = input.split('')
    let stop = 0
    let floor = 0
    while (stop < array.length) {
        if (array[stop] === '(') floor = floor + 1
        if (array[stop] === ')') floor = floor - 1
        stop++
        if (floor < 0) return stop
    }

    return undefined;
}

console.log(basementStop(day1Input));
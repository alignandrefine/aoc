import {splitByCharacter} from "../../helpers/stringMinipulation/splitByCharacter";
import {day2Input} from "./day2Input";

export function wrappingPaperToOrder(input: string): number {
    return input
        .split('\n')
        .filter(Boolean)
        .map(calculateWrappingPaperForProduct)
        .reduce((sum, val) => sum + val, 0);
}

function calculateWrappingPaperForProduct(input: string): number {
    const [l, w, h] = splitByCharacter(input, 'x').map(Number);
    const side1 = 2 * l * w;
    const side2 = 2 * w * h;
    const side3 = 2 * h * l;
    const slack = Math.min(side1, side2, side3) / 2;
    return side1 + side2 + side3 + slack;
}

export function ribbonToOrder(input: string): number {
    return input
        .split('\n')
        .filter(Boolean)
        .map(calculateRibbonForProduct)
        .reduce((sum, val) => sum + val, 0);
}

function calculateRibbonForProduct(input: string): number {
    const dimensions = splitByCharacter(input, 'x').map(Number);
    const [smallest1, smallest2] = dimensions.sort((a, b) => a - b);
    const wrap = 2 * (smallest1 + smallest2);
    const bow = dimensions.reduce((a, b) => a * b, 1);
    return wrap + bow;
}

console.log(ribbonToOrder(day2Input))
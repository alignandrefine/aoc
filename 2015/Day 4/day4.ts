import {day4Input} from "./day4Input";
import { createHash } from 'crypto';


export function adventCoins(secretKey: string): number | undefined {
    let index = 1;
    while (true) {
        const hash = createHash('md5').update(secretKey + index).digest('hex');
        if (hash.startsWith('000000')) {
            return index
        }
        index++;
    }
}

console.log(adventCoins(day4Input));
import {day3Input} from "./day3Input";

export function houseCount(directions: string): number {
    const array = directions.split('');

    let stops = new Set<string>();
    let santaPosition = [0, 0];
    let roboSantaPosition = [0, 0];
    stops.add('0,0');

    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case '^': Math.abs(i % 2) === 1 ? santaPosition[1] += 1 : roboSantaPosition[1] +=1; break;
            case '>': Math.abs(i % 2) === 1 ? santaPosition[0] += 1 : roboSantaPosition[0] +=1; break;
            case 'v': Math.abs(i % 2) === 1 ? santaPosition[1] -= 1 : roboSantaPosition[1] -=1; break;
            case '<': Math.abs(i % 2) === 1 ? santaPosition[0] -= 1 : roboSantaPosition[0] -=1; break;
        }

        const stop = Math.abs(i % 2) === 1 ? `${santaPosition[0]},${santaPosition[1]}` : `${roboSantaPosition[0]},${roboSantaPosition[1]}`;
        stops.add(stop);
    }

    return stops.size;
}

console.log(houseCount(day3Input));
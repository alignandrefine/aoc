import {day3Input} from "./day3Input";

export function houseCount(directions: string): number {
    const array = directions.split('');

    let stops = new Set<string>();
    let santaPosition = [0, 0];
    let roboSantaPosition = [0, 0];
    stops.add('0,0');

    for (let i = 0; i < array.length; i++) {
        const mover = i % 2 === 0 ? santaPosition : roboSantaPosition;
        switch (array[i]) {
            case '^': mover[1] +=1; break;
            case '>': mover[0] +=1; break;
            case 'v': mover[1] -=1; break;
            case '<': mover[0] -=1; break;
        }

        const stop = `${mover[0]},${mover[1]}`;
        stops.add(stop);
    }

    return stops.size;
}

console.log(houseCount(day3Input));
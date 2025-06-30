import {day6Input} from "./day6Input";

export function getCoordinates(instructions: string): number[][] {
    const match = instructions.match(/\d+,\d+/g);
    if (!match || match.length < 2) throw new Error("Invalid instruction");
    const [start, end] = match.map(coord => coord.split(',').map(Number));
    return [start, end];
}

export function getOperator(instructions: string): string {
    if (instructions.startsWith("turn on")) return "turn on";
    if (instructions.startsWith("turn off")) return "turn off";
    return "toggle";
}

export function operateLights(
    coordinates: number[][],
    operator: string,
    lights: number[][] = createBrightnessGrid()
): number[][] {
    const [start, end] = coordinates;

    for (let x = start[0]; x <= end[0]; x++) {
        for (let y = start[1]; y <= end[1]; y++) {
            switch (operator) {
                case "turn on":
                    lights[x][y] += 1;
                    break;
                case "turn off":
                    lights[x][y] = Math.max(0, lights[x][y] - 1);
                    break;
                case "toggle":
                    lights[x][y] += 2;
                    break;
            }
        }
    }

    return lights;
}

export function manageLights(instructions: string): number {
    const commands = instructions.trim().split('\n').filter(Boolean);
    let lights = createBrightnessGrid();

    for (const command of commands) {
        const coords = getCoordinates(command);
        const op = getOperator(command);
        lights = operateLights(coords, op, lights);
    }

    return totalBrightness(lights);
}

function createBrightnessGrid(): number[][] {
    return Array.from({ length: 1000 }, () => Array(1000).fill(0));
}

function totalBrightness(grid: number[][]): number {
    return grid.reduce((acc, row) => {
        return acc + row.reduce((sum, val) => sum + val, 0);
    }, 0);
}


console.log(manageLights(day6Input))
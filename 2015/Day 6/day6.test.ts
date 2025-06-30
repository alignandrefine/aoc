import {test, describe, expect} from "vitest";
import {getCoordinates, getOperator, manageLights, operateLights} from "./day6";

describe('get light coordinates', () => {
    const lightingInstructions = [
        {instructions: 'turn on 0,0 through 999,999', coordinates: [[0,0],[999,999]]},
        {instructions: 'toggle 0,0 through 999,0', coordinates: [[0,0], [999,0]]},
        {instructions: 'turn off 499,499 through 500,500', coordinates: [[499,499], [500,500]]},
    ]
    test.each(lightingInstructions)(`$instructions returns $coordinates`, ({instructions, coordinates}) => {
        expect(getCoordinates(instructions)).toStrictEqual(coordinates);
    })
});

describe('get light operation', () => {
    const lightingInstructions = [
        {instructions: 'turn on 0,0 through 999,999', operation: 'turn on'},
        {instructions: 'toggle 0,0 through 999,0', operation: 'toggle'},
        {instructions: 'turn off 499,499 through 500,500', operation: 'turn off'},
    ]
    test.each(lightingInstructions)(`$instructions returns $operation`, ({instructions, operation}) => {
        expect(getOperator(instructions)).toStrictEqual(operation);
    })
});

describe('manage lights', () => {
    const lightingInstructions = [
        {instructions: 'turn on 0,0 through 0,0', lights: 1},
        {instructions: 'toggle 0,0 through 999,999', lights: 2000000},
    ]
    test.each(lightingInstructions)(`$instructions returns $lights`, ({instructions, lights}) => {
        expect(manageLights(instructions)).toStrictEqual(lights);
    })
});


describe('lights', () => {
    const lightingInstructions = [
        {coordinates: [[0,0],[999,999]], operator:'turn on', lights: 1000000},
        {coordinates: [[0,0], [999,0]], operator:'toggle', lights: 1000},
        {coordinates: [[499,499], [500,500]], operator:'turn off', lights: 0},
    ]
    test.each(lightingInstructions)(`$coordinates returns $lights when the operation is $operator`, ({coordinates, operator, lights}) => {
        expect(operateLights(coordinates, operator, [])).toStrictEqual(lights);
    })
});




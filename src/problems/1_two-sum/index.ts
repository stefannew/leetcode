import { Problem } from '../../Problem';

type Input = { numbers: number[], target: number };
type Output = number[];

export default class TwoSum extends Problem<Input, Output> {
    constructor() {
        super(1, 'Two Sum', 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.');
    }

    // Bruteforce O(n^2)
    solve({ numbers, target }: Input): Output {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j += 1) {
                if (numbers[i] + numbers[j] === target) {
                    return [i, j];
                }
            }
        }

        return [-1, -1];
    }

    getTestCases(): { input: Input; expected: Output; }[] {
        return [
            { input: { numbers: [2,7,11,15], target: 9 }, expected: [0, 1] },
            { input: { numbers: [3, 2, 4], target: 6 }, expected: [1, 2] },
            { input: { numbers: [3, 3], target: 6 }, expected: [0, 1] }
        ]
    }
}
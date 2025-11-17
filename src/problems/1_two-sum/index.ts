import { Problem } from '../../Problem';

type Input = { numbers: number[], target: number };
type Output = number[];

export default class TwoSum extends Problem<Input, Output> {
    constructor() {
        super(1, 'Two Sum', 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.');
    }

    // Time Complexity: O(n^2)
    // Space Complexity: O(1)
    private bruteforceSolution({ numbers, target }: Input): Output {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j += 1) {
                if (numbers[i] + numbers[j] === target) {
                    return [i, j];
                }
            }
        }

        return [-1, -1];
    }

    // Time Complexity: O(2n)
    // Space Complexity: O(n)
    private optimizedSolution({ numbers, target }: Input): Output {
        const map = new Map();

        for (let i = 0; i < numbers.length; i++) {
            map.set(numbers[i], i);
        }

        for (let i = 0; i < numbers.length; i++) {
            const complement = target - numbers[i];
            const existing = map.get(complement);

            if (existing && existing !== i) {
                return [i, existing];
            }
        }

        return [-1, -1];
    }

    // Bruteforce
    // Time Complexity: O(n^2)
    // Space Complexity: O(1)
    solve(input: Input): Output {
        return this.optimizedSolution(input);
    }

    getTestCases(): { input: Input; expected: Output; }[] {
        return [
            { input: { numbers: [2,7,11,15], target: 9 }, expected: [0, 1] },
            { input: { numbers: [3, 2, 4], target: 6 }, expected: [1, 2] },
            { input: { numbers: [3, 3], target: 6 }, expected: [0, 1] }
        ]
    }
}
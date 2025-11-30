import { Problem } from '../../Problem';

type Input = string;
type Output = number;

export default class LongestSubstring extends Problem<Input, Output> {
    constructor() {
        super(3, 'Longest Substring Without Repeating Characters', 'Given a string s, find the length of the longest substring without duplicate characters.');
    }

    solve(input: string): number {
        let longest = 0;

        for (let i = 0; i < input.length; i++) {
            let length = 0;
            const seen: string[] = [];

            for (let j = i; j < input.length; j++) {
              if (seen.includes(input[j])) {
                  break;
              }

              seen.push(input[j]);
              length += 1;
            }

            longest = length > longest ? length : longest;
        }

        return longest;
    }

    getTestCases(): { input: Input; expected: Output; }[] {
        return [{
            input: 'abcabcbb',
            expected: 3
        }, {
            input: 'bbbbb',
            expected: 1
        }, {
            input: 'pwwkew',
            expected: 3
        }]
    }
}
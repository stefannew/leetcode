import { Problem } from '../../Problem';

type Input = {
    numbersOne: number[];
    numbersTwo: number[];
}

type Output = number;

export default class MedianTwoSortedArrays extends Problem<Input, Output> {
    constructor() {
        super(4, 'Median of Two Sorted Arrays', 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).');
    }

    solve(input: Input) {
        const array = input.numbersOne.concat(input.numbersTwo).sort((a, b) => a - b);
        const length = array.length;

        if (length % 2 === 0) {
            const lower = array[(length / 2) - 1];
            const higher = array[length / 2];

            return (lower + higher) / 2;
        } else {
            return array[Math.floor(length / 2)];
        }
    }

    getTestCases(): { input: Input; expected: Output; }[] {
        return [{
            input: {
                numbersOne: [1, 3],
                numbersTwo: [2]
            },
            expected: 2
        }, {
            input: {
                numbersOne: [1, 2],
                numbersTwo: [3, 4]
            },
            expected: 2.5
        }, {
            input: {
                numbersOne: [1,2,3,4,5],
                numbersTwo: [6,7,8,9,10,11,12,13,14,15,16,17]
            },
            expected: 9
        }]
    }

}

import { TestCase } from '../test/types';
import twoSum, { twoSumEfficient } from './index';

const testCases: Array<TestCase> = [{
	input: [
		[2, 7, 11, 15],
		9
	],
	output: [0, 1]
}, {
	input: [
		[3, 2, 4],
		6
	],
	output: [1, 2]
}, {
	input: [
		[3, 3],
		6
	],
	output: [0, 1]
}];

describe('Two Sum', function () {
	describe('Brute Force', () => {
		testCases.forEach((testCase, index) => {
			describe(`Case ${index}`, () => {
				it('should return the expected output', () => {
					expect(twoSum.apply(null, testCase.input)).toEqual(testCase.output);
				});
			});
		});
	});

	describe('More Efficient', () => {
		testCases.forEach((testCase, index) => {
			describe(`Case ${index}`, () => {
				it('should return the expected output', () => {
					expect(twoSumEfficient.apply(null, testCase.input).sort()).toEqual(testCase.output.sort());
				});
			});
		});
	});
});

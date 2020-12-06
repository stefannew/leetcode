import { __TEST__ } from './index';

const { diagonalSum } = __TEST__;

describe('1572. Matrix Diagonal Sum', () => {
	describe('diagonalSum', () => {
		it('should return the sum of the diagonals', () => {
			expect(diagonalSum([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9]
			])).toEqual(25);

			expect(diagonalSum([
				[5]
			])).toEqual(5);

			expect(diagonalSum([
				[1,1,1,1],
				[1,1,1,1],
				[1,1,1,1],
				[1,1,1,1]
			])).toEqual(8);
		});
	})
});
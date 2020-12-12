import { __TEST__ } from './index';

const { oddCells } = __TEST__;

describe('1252. Cells with Odd Values in a Matrix', () => {
	describe('oddCells', () => {
		it('should return the number of cells with odd values after the transformation', () => {
			// expect(oddCells(2, 2, [[1,1],[0,0]])).toEqual(0);
			expect(oddCells(2, 3, [[0,1],[1,1]])).toEqual(6);
		});
	});
});
import { __TEST__ } from './index';

const { flipAndInvertImage } = __TEST__;

describe('832. Flipping an Image', () => {
	describe('flip', () => {
		it('should reverse and invert the "image"', () => {
			expect(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])).toEqual([[1,0,0],[0,1,0],[1,1,1]]);
			expect(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])).toEqual([[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]);
		});
	});
});
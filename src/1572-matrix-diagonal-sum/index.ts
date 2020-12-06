const diagonalSum = (matrix: number[][]) => {
	let sum = 0;
	let i = 0;

	for (let y = 0; y < matrix.length; y++) {
		const left = matrix[y][i];
		const right = matrix[y][matrix.length - 1 - i];

		if (i === (matrix.length - 1) - i) {
			sum += left;
		} else {
			sum += left + right;
		}

		i++;
	}

	return sum;
}

export const __TEST__ = {
	diagonalSum
};
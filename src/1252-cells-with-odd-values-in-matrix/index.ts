const oddCells = (rows: number, cols: number, indices: number[][]) => {
	const matrix = Array.from(Array(rows), () => Array.from(Array(cols), () => 0));

	for (const [ri, ci] of indices) {
		for (let i = 0; i < cols; i++) {
			matrix[ri][i]++;
		}

		for (let i = 0; i < rows; i++) {
			matrix[i][ci]++;
		}
	}

	// @ts-ignore
	return [].concat.apply([], matrix).filter(x => x % 2 === 1).length;
}

export const __TEST__ = {
	oddCells
}
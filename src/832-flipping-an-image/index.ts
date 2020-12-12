const flipAndInvertImage = (array: number[][]): number[][] => {
	return array.reduce((acc: number[][], curr) => {
		acc.push(curr.reverse().map(x => x === 0 ? 1 : 0));
		return acc;
	}, [])
}

export const __TEST__ = {
	flipAndInvertImage
}
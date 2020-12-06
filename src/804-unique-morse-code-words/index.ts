const MORSE_CODE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

const wordsToMorseCode = (words: string[]) =>
	words.map(word =>
		word.split('').map((x, index) => {
			const i = word.charCodeAt(index) - 97;
			return MORSE_CODE[i]
		}).join('')
	);

const countUniqueWords = (array: string[]) =>
	new Set(array).size;

const uniqueMorseRepresentations = (words: string[]) => {
	return countUniqueWords(wordsToMorseCode(words));
}

export const __TEST__ = {
	wordsToMorseCode,
	countUniqueWords,
	uniqueMorseRepresentations
}
import { __TEST__ } from './index';

const { wordsToMorseCode, countUniqueWords, uniqueMorseRepresentations } = __TEST__;

describe('804. Unique Morse Code Words', () => {
	describe('wordsToMorseCode', () => {
		it('should transform a list of english words to a list of words in morse code', () => {
			expect(wordsToMorseCode(['gin', 'zen', 'gig', 'msg'])).toEqual([
				'--...-.',
				'--...-.',
				'--...--.',
				'--...--.'
			]);
		});
	});

	describe('countUniqueWords', () => {
		it('should count the number of unique strings in the array', () => {
			expect(countUniqueWords(['--...-.', '--...-.', '--...--.', '--...--.'])).toEqual(2);
		});
	});

	describe('uniqueMorseRepresentations', () => {
		it('should return the number of unique morse representations', () => {
			expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toEqual(2);
		});
	});
});
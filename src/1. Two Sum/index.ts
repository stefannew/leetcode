/**
 *  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 *  You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 *  You can return the answer in any order.
 *
 */

// Runtime complexity O(n^2) -- "Brute Force"
export default function twoSum(nums: number[], target: number): number[] {
	for (let i = 0; i < nums.length; i++) { // n
		for (let j = i + 1; j < nums.length; j++) { // n
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}

	return [-1, -1];
}

/**
 * The more efficient approach is to iterate through the array and adding the values to a map
 * For each item:
 * 	- we take the difference of the target and the current value: "complement"
 * 	- we look for the complement in the map
 * 	- if it exists, we have our pair
 * 	- if it doesn't, we add the current number to the map with the index as its value
 */


// Runtime Complexity O(n) -- We iterate the array once, and Map lookups are _practically speaking_ constant-time (O(1))
export function twoSumEfficient(nums: number[], target: number): number[] {
	const map: Map<number, number> = new Map(); // value -> index

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const complement = target - num;

		if (map.has(complement)) {
			return [i, map.get(complement)];
		}

		map.set(num, i);
	}

	return [-1, -1];
}

export default function PermutationsWithRep() {
	// with repetitions
	const getPermutations = (options: number[] | string[] | (string | number)[], length: number) => {
		const permutations = [];

		if (length === 1) {
			return options.map((option) => [option]);
		}

		const partialPermutations: any = getPermutations(options, length - 1);
		// [[1],[2],[3]]
		for (const option of options) {
			for (const existingPermutation of partialPermutations) {
				// O(n^r) n is the options, r is the length
				permutations.push([option].concat(existingPermutation));
			}
		}
		return permutations;
	};

	const digits = [1, 2, 3, 5];
	const resultLength = 3;

	console.log(getPermutations(digits, resultLength));

	return <div>open console</div>;
}

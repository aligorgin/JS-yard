export default function Permutations() {
	// without repetitions
	const getPermutations = (
		options:
			| number[]
			| string[]
			| (string | number)[]
			| { name: string; value: number; weight: number }[]
	) => {
		const permutations = [];
		console.log('fn start', options);

		if (options.length === 1) {
			return [options];
		}

		const partialPermutations: any = getPermutations(options.slice(1));
		console.log('after recursive step', partialPermutations);

		const firstOption = options[0];
		console.log('first option', firstOption);

		for (let i = 0; i < partialPermutations.length; i++) {
			const partialPermutation = partialPermutations[i];
			console.log('outer loop', partialPermutation);

			for (let j = 0; j <= partialPermutation.length; j++) {
				const permutationInFront = partialPermutation.slice(0, j);
				const permutationAfter = partialPermutation.slice(j);
				permutations.push(permutationInFront.concat([firstOption], permutationAfter)); // O(n!)
			}
		}

		return permutations;
	};

	const x = getPermutations([1, 3, 4, 5, 'dude']);
	console.log(x);

	return <div>open the console</div>;
}

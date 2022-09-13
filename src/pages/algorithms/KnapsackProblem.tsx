export default function KnapsackProblem() {
	// time complexity without memoization : O(2^n)
	// time complexity with memoization : O(n*C)

	const knapsackFn: any = (items: any, cap: number, itemIndex: number, memo: any) => {
		console.log('Running');
		if (memo[cap][itemIndex]) {
			//
			return memo[cap][itemIndex];
		} //
		if (cap === 0 || itemIndex < 0) {
			return { items: [], value: 0, weight: 0 };
		}
		if (cap < items[itemIndex].weight) {
			return knapsackFn(items, cap, itemIndex - 1, memo);
		}
		const sackWithItem: any = knapsackFn(items, cap - items[itemIndex].weight, itemIndex - 1, memo);
		const sackWithoutItem: any = knapsackFn(items, cap, itemIndex - 1, memo);

		const valueWithItem = sackWithItem.value + items[itemIndex].value;
		const valueWithoutItem = sackWithoutItem.value;

		let resultSack;

		if (valueWithItem > valueWithoutItem) {
			resultSack = {
				items: sackWithItem.items.concat(items[itemIndex]),
				value: sackWithItem.value + items[itemIndex].value,
				weight: sackWithItem.weight + items[itemIndex].weight
			};
		} else {
			resultSack = sackWithoutItem;
		}

		memo[cap][itemIndex] = resultSack;

		return resultSack;
	};

	const knapsack = (items: any, cap: number, index: number) => {
		const mem = Array(cap + 1).fill(Array(items.length).fill(undefined));
		return knapsackFn(items, cap, index, mem);
	};

	const items = [
		{ name: 'a', value: 3, weight: 3 },
		{ name: 'b', value: 6, weight: 8 },
		{ name: 'c', value: 10, weight: 3 }
	];

	const maxCap = 8;

	const sack = knapsack(items, maxCap, items.length - 1);
	console.log(sack);

	return <div>hey there, open consolo</div>;
}

export default function ComputeChange() {
	// time complexity without brute force = O(n)
	// time complexity with brute force = O(n^2)

	const computeChange = (coins: number[], amount: number) => {
		let remainingAmount = amount;

		const calculatedChange: any = {
			selectedCoins: {},
			numberOfCoins: 0
		};

		for (const coin of coins) {
			const count = Math.floor(remainingAmount / coin);
			calculatedChange[coin] = count;
			calculatedChange.numberOfCoins += count;
			remainingAmount = remainingAmount - coin * count;
		}

		return calculatedChange;
	};

	const computeChangeBruteForce = (coins: number[], amount: number) => {
		const results = [];

		for (let i = 0; i < coins.length; i++) {
			results.push(computeChange(coins.slice(i), amount));
		}

		let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER;
		let finalResult;

		for (const result of results) {
			if (result.numberOfCoins < smallestAmountOfCoins) {
				smallestAmountOfCoins = result.numberOfCoins;
				finalResult = result;
			}
		}

		return finalResult;
	};

	const availableCoins = [8, 6, 5, 1];
	const targetAmount = 11;

	const change = computeChangeBruteForce(availableCoins, targetAmount);
	console.log(change);

	return <div>open console</div>;
}

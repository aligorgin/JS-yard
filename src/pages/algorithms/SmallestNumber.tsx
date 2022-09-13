export default function SmallestNumber() {
	const getMin = (numbers: number[]) => {
		let currentMin = numbers[0];
		for (const num of numbers) {
			// O(n)
			if (num < currentMin) {
				currentMin = num;
			}
		}
		return currentMin;
	};

	console.log(`32,34,1,4,5 which number is lowest number ? ${getMin([32, 34, 1, 4, 5])}`);

	return <div>open the consolo</div>;
}

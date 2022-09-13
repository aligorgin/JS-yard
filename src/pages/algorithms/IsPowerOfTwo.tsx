export default function IsPowerOfTwo() {
	// const isPowerOfTwo = (num: number) => {
	//     if (num < 1) {
	//         return false;
	//     }
	//     let dividedNumber = num;
	//     while (dividedNumber !== 1) { // O(log n)
	//         if (dividedNumber % 2 !== 0) {
	//             return false;
	//         }
	//         dividedNumber = dividedNumber / 2;
	//     }
	//     return true;
	// }

	const isPowerOfTwo = (num: number) => {
		if (num < 1) {
			return false;
		}
		// bitwise operator
		return (num & (num - 1)) === 0; //O(1)
	};

	console.log(`is 20148 power of two ? ${isPowerOfTwo(20148)}`);

	return <div>open console</div>;
}

export default function BinarySearch() {
	const findElement = (sortedArr: any[], element: number | string) => {
		let startIndex = 0;
		let endIndex = sortedArr.length - 1;

		while (startIndex <= endIndex) {
			// O(log n)
			const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

			if (element === sortedArr[middleIndex]) {
				return middleIndex;
			}

			if (sortedArr[middleIndex] < element) {
				startIndex = middleIndex + 1;
			} else {
				endIndex = middleIndex - 1;
			}
		}
	};

	const arr = [2, 4, 5, 7, 13, 15, 17, 33, 77, 86, 100, 121];
	console.log(findElement(arr, 100));

	return <div>hey open console</div>;
}

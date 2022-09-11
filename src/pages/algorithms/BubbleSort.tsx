export default function BubbleSort() {
	const sort = (arr: number[] | string[] | (number | string)[]) => {
		const resultArray = [...arr];

		for (let outer = 0; outer < resultArray.length; outer++) {
			let outerEl = resultArray[outer];

			for (let inner = outer + 1; inner < resultArray.length; inner++) { //O(n^2)
				let innerEl = resultArray[inner];

				if (outerEl > innerEl) {
					resultArray[outer] = innerEl;
					resultArray[inner] = outerEl;

					outerEl = resultArray[outer];
					innerEl = resultArray[inner]
				}
			}
		}

		return resultArray;
	}

	const sortArr = sort([5, 2, 4, -1, 300, 421, 298, 4]);
	console.log(sortArr)

	return (
		<div>
			open console
		</div>
	)
}
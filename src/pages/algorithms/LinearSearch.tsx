export default function LinearSearch() {
	const findElement = (arr: any[], element: number | string | {}, comparatorFn?: any) => {
		let index = 0;

		for (const item of arr) {
			// O(n)
			if (typeof element === 'object' && element !== null && comparatorFn(element, item)) {
				return index;
			}

			if (item === element) {
				return index;
			}

			index++;
		}
	};

	const arr = [2, 4, 5, 7, 13, 15, 17, 33, 77, 86, 100, 121];
	console.log(findElement(arr, 7));

	const objects = [
		{ name: 'ali', age: 23 },
		{ name: 'kit', age: 27 }
	];

	console.log(
		findElement(objects, { name: 'kit', age: 27 }, (el: any, it: any) => {
			return el.name === it.name;
		})
	);

	return <div>open console</div>;
}

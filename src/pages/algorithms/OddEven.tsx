export default function OddEven() {
	const isEven = (n: number) => {
		return n % 2 === 0; // O(1)
	};
	console.log(`is 234 even ? ${isEven(234)}`);
	return <div>open the conoslooo</div>;
}

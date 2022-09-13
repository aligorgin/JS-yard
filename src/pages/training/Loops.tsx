export default function Loops() {
	const names = ['alex', 'jesi', 'pinkman', 'walter white', 'wiffy'];

	for (let name of names) {
		console.log(name);
	}
	names.forEach((name, index) => {
		console.log('each', index, name);
	});

	let i = 0;
	while (i < 10) {
		console.log(names[3]);
		i += 2;
	}

	return <div>open console</div>;
}

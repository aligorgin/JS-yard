import { useReducer, useState } from 'react';

export default function Basics() {
	const text = 'hey';
	const text2 = 'wasap';
	// console.log(`${text} ${text2}`)

	const a = 'hello';
	const b = 42;
	const c = { d: [true, false] };
	// console.log({a,b,c});

	const makeAdder = (x: number) => {
		return (y: number) => {
			return x + y;
		};
	};
	let add3 = makeAdder(3);
	let add7 = makeAdder(7);
	// console.log(add3(4));
	// console.log(add7(4));

	// The Module Pattern
	const makeWithdraw = (balance: number) =>
		((copyBalance) => {
			let balance = copyBalance;
			let doBadThings = () => {
				// console.log('i will do bad thing with ur money')
			};
			doBadThings();
			return {
				withdraw: (amount: number) => {
					if (balance >= amount) {
						balance -= amount;
						return balance;
					} else {
						return 'insufficeint money';
					}
				}
			};
		})(balance);
	// const firstAccount = makeWithdraw(100);
	// console.log(firstAccount.withdraw(80));
	// const secondAccount = makeWithdraw(70);
	// console.log(secondAccount.withdraw(90));

	//private counter
	const makeCounter = () => {
		let privateCounter = 0;
		const changeBy = (val: number) => {
			privateCounter += val;
		};
		return {
			increasment: () => {
				changeBy(1);
			},
			decreasment: () => {
				changeBy(-1);
			},
			value: () => {
				return privateCounter;
			}
		};
	};
	// let counter1 = makeCounter();
	// let counter2 = makeCounter();
	// counter1.increasment();
	// counter1.increasment();
	// counter2.decreasment()
	// counter2.decreasment()
	// counter2.decreasment()
	// counter2.increasment();
	// console.log(counter1.value())
	// console.log(counter2.value())

	// creating closures in loops
	// const showHelp = (help: string) => {
	//     document.getElementById('help').textContent = help;
	// }
	// const makeHelpCallback = (help) => {
	//     return () => {
	//         showHelp(help)
	//     }
	// }
	// const setupHelp = () => {
	//     let helpText = [
	//         {'id': 'email', 'help': 'your e-mail address'},
	//         {'id': 'name', 'help': 'your full name'},
	//         {'id': 'age', 'help': 'your age (you must be over 18)'},
	//     ];
	//     for (let i = 0; i < helpText.length; i++) {
	//         let item = helpText[i];
	//         document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
	//     }
	// }
	// setupHelp();

	// for (let i = 6; i < 363; i += 13) {
	//     console.log(`${i}-${i + 13}`)
	// }

	// PRIME
	// const isPrime = (element: number, index: number, array: number[]) => {
	//     let start = 2;
	//     while (start <= Math.sqrt(element)) {
	//         if (element % start++ < 1) {
	//             return false;
	//         }
	//     }
	//     return element > 1;
	// }
	// console.log([4, 3, 4, 5, 7, 11].find(isPrime));

	// when we using `let` ,it will be trapped inside of the loop, and can't be returned.
	// for (let i = 0; i < 10; i++) {
	//     console.log(i)
	// }

	// we need to declare variable in the scope of function instead of declared it in try bracket scope
	// and then we can return it
	// const name = () => {
	//     let thing;
	//     try {
	//         thing = getThing()
	//     } catch (e) {
	//         console.log(e)
	//     }
	//     return thing
	// }

	// flat array
	const concatArrays = () => {
		const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]];
		const flatter: any = (arg: any[]) => {
			return arg.reduce((acc, item) => {
				if (Array.isArray(item)) {
					return [...acc, ...flatter(item)];
				}
				return [...acc, item];
			}, []);
		};
		return flatter(arr);
	};

	// duplicate arrays
	const removeDuplicates = () => {
		const arr = [6, 8, 3, 9, 6, 5, 8, 2, 3, 9, 7, 7, 2, 1, 0, 8];
		const uniqueArr = arr.filter((elem, index) => arr.indexOf(elem) === index);
		const set = new Set(arr);
		// Array.from make it to like Array instead of object
		const uniqueArrWithSet = Array.from(set);

		return uniqueArrWithSet;
	};

	// promises
	// const promise1 = Promise.resolve('hello');
	// let promise2 = promise1.then((result) => {
	//         console.log(result)
	//     }, (error) => {
	//         console.log(error)
	//     }// this just handle error of promise 1 not the sibling one
	// ).then((result) => {
	//     // this one will trigger if the previous then method have a return statement
	//     console.log(result)
	// }).catch((error) => {
	//     // this will trigger if there was any error of these chain promises
	//     console.log(error)
	// })

	// promise
	const timeout = (duration: number = 0, shouldFail: boolean = false) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (shouldFail) {
					reject(`timeout rejected in ${duration}ms`);
				} else {
					resolve(`timeout resolved in ${duration}ms`);
				}
			}, duration);
		});
	};

	// async await
	const doAsync = (rejectPromise: boolean = false) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (rejectPromise) {
					reject('rejected');
				} else {
					resolve('resolved');
				}
			});
		});
	};

	const resolve = async () => {
		const result = await doAsync();
		// console.log(result) // should be resolved
	};
	const reject = async () => {
		try {
			const result = await doAsync(true);
			throw new Error('this should not run');
		} catch (error) {
			console.error(error); //should be rejected
		}
	};

	// resolve();
	// reject();

	// object.entries
	const objectEntries = () => {
		const object = {
			a: 'a value',
			b: 'b value',
			c: {
				d: true,
				e: {
					f: 'f value'
				}
			}
		};
		Object.entries(object).forEach(([key, value]) => {
			// console.log(key, value)
		});
		// return Object.values(object)
	};
	// console.log(objectEntries());

	// we have a number
	// we calculate 3 percentage of that
	// add the 3 percentage of that to initial value
	// loop this for 365 times
	// (100 * 3) / 100 = 3
	// (103 * 3 ) / 100 = 3.09
	// (106.3 * 3 ) / 100 = y
	const add3PercentageToValue = () => {
		let x = 100;
		let y = 0;
		for (let i = 1; i < 3; i++) {
			y = (x * 3) / 100;
			x = x + y;
		}
		// console.log(x, y)
	};
	add3PercentageToValue();

	let arr = [1, 2, 'b', 0, {}, '', NaN, 3, undefined, null, 5, '4'];
	let testTheFilterBoolean = arr.filter(Boolean); // [1, 2, "b", {}, 3, 5];
	const arrWithNumbers = arr.filter(Number);

	const arr2 = [3, 45, 32, 5, 6, 456, 345];
	// console.log(arr2.findIndex((el) => el > 13))
	// console.log(arr.concat(arr2))
	// console.log(arr2.fill(0, 3, 4))
	// console.log(arr2.fill(0, 4))
	// console.log(arr2.fill(0,))
	// console.log(arr.join())
	// console.log(arr2.join(''));

	const initialState = { count: 0 };

	const reducer = (state: { count: number }, action: { type: any }) => {
		switch (action.type) {
			case 'increment':
				return { count: state.count + 1 };
			case 'decrement':
				return { count: state.count - 1 };
			default:
				throw new Error(`Unsupported action type:${action.type}`);
		}
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const [show, setShow] = useState(false);

	const displayName = () => {
		setShow((prevState) => !prevState);
	};
	return (
		<div>
			<div>
				<button className="m-2 rounded-2xl bg-amber-200 p-4" onClick={displayName}>
					click me to show ur name{' '}
				</button>
				<span>{show ? 'ali ' : ''}</span>
			</div>
			open consolo and
			<div>
				count: {state.count}
				<button
					onClick={() => {
						dispatch({ type: 'decrement' });
					}}
				>
					-
				</button>
				<button
					onClick={() => {
						dispatch({ type: 'increment' });
					}}
				>
					+
				</button>
			</div>
		</div>
	);
	// js async time out example
	async function HW() {
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				console.log('hello');
				resolve();
			}, 1000);
		});
		console.log('world');
	}

	HW();
}

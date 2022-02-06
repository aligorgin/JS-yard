export default function Basics() {
    const text = 'hey';
    const text2 = 'wasap';
    // console.log(`${text} ${text2}`)

    const a = 'hello';
    const b = 42;
    const c = {d: [true, false]}
    // console.log({a,b,c});

    const makeAdder = (x: number) => {
        return (y: number) => {
            return x + y;
        }
    }
    let add3 = makeAdder(3);
    let add7 = makeAdder(7);
    // console.log(add3(4));
    // console.log(add7(4));

    // The Module Pattern
    const makeWithdraw = (balance: number) => ((copyBalance) => {
        let balance = copyBalance;
        let doBadThings = () => {
            console.log('i will do bad thing with ur money')
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
        }
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
        }
        return {
            increasment: () => {
                changeBy(1);
            },
            decreasment: () => {
                changeBy(-1)
            },
            value: () => {
                return privateCounter;
            }
        }
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
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }


    return (
        <div>
            open consolo
        </div>
    )
}
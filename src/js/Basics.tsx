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
            increasment: ()=>{
                changeBy(1);
            },
            decreasment:()=>{
                changeBy(-1)
            },
            value:()=>{
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

    return (
        <div>
            open consolo
        </div>
    )
}
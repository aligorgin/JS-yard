export default function Basics() {
    const text = 'hey';
    const text2 = 'wasap'
    console.log(`${text} ${text2}`);

    const a = 'hello';
    const b = 42;
    const c = {d: [true, false]}
    console.log({a, b, c})

    const makeAdder = (x: number) => {
        return (y: number) => {
            return x + y;
        }
    }
    let add3 = makeAdder(3);
    let add7 = makeAdder(7);
    console.log(add3(2));
    console.log(add7(7));

    return (
        <div>
            open consolo
        </div>
    )
}
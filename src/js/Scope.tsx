export default function Scope() {
    //global scope
    let food = 'apple pie';

    //Fc scope
    const store = () => {
        let food = 'not apple pie'
    }

    //block scope
    for (let food = 0; food < 10; food++) {
        console.log(food)
    }

    store();
    console.log(food)

    return (
        <div>
            open console
        </div>
    )
}
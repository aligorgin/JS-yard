import {FC} from "react";

export default function Scope() {
    //global scope
    let food = 'apple pie';
    // everything in brackets are scope


    //Fc scope
    const store = () => {
        let food = 'not apple pie'
    }

    //block scope
    for (let food = 0; food < 10; food++) {
        console.log(food)
    }

    food = 'pasta'

    // dont ever use 'var'
    store();
    console.log(food);

    const call = (x: number, y: number) => (x + y)

    console.log(call(2, 4))

    return (
        <div>
            open console
        </div>
    )
}
import React, {SetStateAction, useState} from "react";

export default function Parse() {

    const [value, setValue] = useState('')
    const [x, setX] = useState("")
    const [y, setY] = useState("")
    const [answer, setAnswer] = useState<SetStateAction<number | string>>(0)
    const [clicked,setClicked] = useState(false)

    // console.log(eval('2+3'));



    function calculate() {
        if (!value) return;
        setClicked(true)
        if (x && y && value){
            const transformingPowerInJs = value.replace('^', '**')
            const valueArr = transformingPowerInJs.split('');
            const addingMultiplyToX = valueArr.map(item => item === 'x' ? '*(x)' : item);
            const addingMultiplyToy = addingMultiplyToX.map(item => item === 'y' ? '*(y)' : item);
            const equation: string = addingMultiplyToy.join('');
            const replaceX = equation.replaceAll('x', x);
            const replaceY = replaceX.replaceAll('y', y);
            console.log(replaceY)
            setAnswer(eval(replaceY))
        }else {
            setAnswer('please fill inputs')
        }
    }


    return (
        <div className='flex flex-col pb-40 container'>
            <label htmlFor="text">equation</label>
            <input onChange={(e) => setValue(e.target.value)} id='text' name={'text'} type="text"/>

            <label htmlFor="x">x</label>
            <input onChange={(e) => setX(e.target.value)} type="number" name='x' id='y'/>

            <label htmlFor="y">y</label>
            <input onChange={(e) => setY(e.target.value)} id='y' name='y' type="number"/>


            <button className='button'
                    onClick={calculate}>
                calculate
            </button>

            <div>
                {clicked && `answer is : ${answer}`}
            </div>

        </div>
    )
}
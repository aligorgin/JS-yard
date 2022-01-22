import {useState} from "react";
import clsx from "clsx";

interface Props {
    arr: any;
}

export default function Rows({arr}: Props) {
    const [checked,setChecked]=useState<any>(false);

    console.log(checked)

    return (
        <div className='mt-4'>
            {arr.map((value: string | number, index: number) => {
                return (
                    <div className={clsx('flex items-center text-white py-2 px-4 bg-slate-700 rounded-lg mb-2',checked &&'underline text-opacity-40')} key={index}>
                        <input className='p-2' type="checkbox" value={checked} onClick={()=>{setChecked(!checked)}}/>
                        <div className='' >{value}</div>
                    </div>
                )
            })}
        </div>
    )
}
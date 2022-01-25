import {SetStateAction, useState} from "react";
import clsx from "clsx";

interface Props {
    arr: any;
}

export default function Rows({arr}: Props) {
    const [checked, setChecked] = useState<any>(false);
    const [selectedIndex, setSelectedIndex] = useState<SetStateAction<number | null>>(null);

    return (
        <div className='mt-4'>
            {arr.map((value: string | number, index: number) => {
                return (
                    <div
                        key={index}
                        onClick={() => {
                            setSelectedIndex(index);
                            console.log('index',index,'selected index:',selectedIndex)
                        }}
                        className={clsx('flex items-center text-white py-2 px-4 bg-slate-700 rounded-lg mb-2', checked && 'underline text-opacity-40')}
                        >
                        <input className='mr-3' type="checkbox" value={checked} onClick={() => {
                            setChecked(!checked)
                            console.log('index',index,'clicked')
                            setSelectedIndex(index);
                        }}/>
                        <div className=''>{value}</div>
                    </div>
                )
            })}
        </div>
    )
}
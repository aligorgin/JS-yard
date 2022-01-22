import {PlusIcon} from "@heroicons/react/solid";
import {SetStateAction, useEffect, useState} from "react";
import Rows from "./Rows";

export default function Title() {
    const [text, setText] = useState<string | number | readonly string[] | undefined>('');
    const [arr, setArr] = useState<any[]>([]);

    const handleChange = (e: any) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setText('');
        setArr((prevState: any[]) => [...prevState, text]);
    }

    return (
        <div className='w-full h-screen bg-slate-900'>
            <div className='max-w-[22rem] h-screen mx-auto pt-7'>
                <form onSubmit={handleSubmit}>
                    <div className='flex'>
                        <input
                            onChange={handleChange}
                            className='text-white p-2 w-4/5 focus:outline-none bg-slate-700 focus:bg-slate-500 transition rounded-md mr-5'
                            type="text"
                            value={text}
                        />
                        <button
                            className='rounded-md bg-slate-500 flex-1 hover:scale-105 transition active:scale-95 flex items-center justify-center'>
                            <PlusIcon className='w-6 h-6 text-slate-900'/>
                        </button>
                    </div>
                </form>
                <Rows arr={arr}/>
            </div>
        </div>

    )
}
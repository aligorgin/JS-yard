import {PlusIcon} from "@heroicons/react/solid";
import {SetStateAction, useState} from "react";
import clsx from "clsx";

export default function Title() {
    const [text, setText] = useState<string>('');
    const [todos, setTodos] = useState<any>([]);
    const [selected, setSelected] = useState(null);


    const handleInputClick = (index: any, e: any) => {
        setSelected(index)
        console.log(index, selected)
    }

    const handleChange = (e: any) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (text !== '') {
            setTodos([...todos,{text:text}]);
        }

        setText('');
    }
    console.log(todos)
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
                <div className='mt-4'>
                    {todos.map((todo:any, index: number) => {
                        return (
                            <div key={index}
                                 className={clsx('flex items-center text-white py-2 px-4 bg-slate-700 rounded-lg mb-2 ')}>
                                <input name='todo' className='mr-3' type="checkbox"
                                       onClick={(e) => handleInputClick(index, e)}/>
                                <div>{todo.text}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
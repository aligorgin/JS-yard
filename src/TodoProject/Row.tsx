import clsx from "clsx";
import {useState} from "react";

interface Props {
    text: string;
    isCompleted: boolean;
    setTodos: any;
    todo: {};
    todos: []
}

export default function zRow({text, isCompleted, todo, setTodos, todos}: Props) {
    const [isCompeted, setIsCompleted] = useState(false);

    // //delete handler
    // const onInputClick = () => {
    //     setTodos(todos.filter(arr => arr.id !== todo.id))
    // }

    // complete handler
    const onInputClick = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {...item, completed: !item.completed}
            }
            return item
        }))
    }

    return (
        <div className={clsx('flex items-center text-white py-2 px-4 bg-slate-700 rounded-lg mb-2 ')}>
            <input name='todo' className='mr-3' type="checkbox" onClick={onInputClick}/>
            <div className={clsx(isCompleted ? 'underline opacity-40' : '')}>{text}</div>
        </div>
    )
}
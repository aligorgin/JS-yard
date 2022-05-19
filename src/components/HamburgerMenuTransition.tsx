import {useEffect, useState} from "react";
import clsx from "clsx";

export default function HamburgerMenuTransition() {
    const [click, setClick] = useState(false);
    const classes: string = 'w-full h-[.35rem] bg-slate-900 rounded-sm transition-all duration-200';

    return (
        <div className='h-screen flex items-center justify-center'>
            <button onClick={() => setClick(prev => !prev)} className='w-12 h-9 flex justify-between flex-col'>
                <div className={clsx(classes, click && 'rotate-45 translate-y-[1.1rem]')}/>
                <div className={clsx(classes, click && '-translate-x-full opacity-0')}/>
                <div className={clsx(classes, click && '-rotate-45 -translate-y-[.8rem]')}/>
            </button>
        </div>
    )
}
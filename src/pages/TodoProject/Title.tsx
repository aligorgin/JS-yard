import { PlusIcon } from '@heroicons/react/solid';
import { SetStateAction, useEffect, useState } from 'react';
import clsx from 'clsx';
import List from './List';
import useLocalStorage from '../../utils/useLocalStorage';

export default function Title() {
	const [text, setText] = useState<string>('');
	const [todos, setTodos] = useLocalStorage<any>('todos', []);

	const handleChange = (e: any) => {
		setText(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (text !== '') {
			setTodos([...todos, { text: text, completed: false, id: Math.random() * 1000 }]);
		}
		setText('');
	};

	return (
		<div className="w-full h-screen bg-slate-900">
			<div className="max-w-[22rem] h-screen mx-auto pt-7">
				<form onSubmit={handleSubmit}>
					<div className="flex">
						<input
							onChange={handleChange}
							className="text-white p-2 w-4/5 focus:outline-none bg-slate-700 focus:bg-slate-500 transition rounded-md mr-5"
							type="text"
							value={text}
						/>
						<button className="rounded-md bg-slate-500 flex-1 hover:scale-105 transition active:scale-95 flex items-center justify-center">
							<PlusIcon className="w-6 h-6 text-slate-900" />
						</button>
					</div>
				</form>
				<List todos={todos} setTodos={setTodos} />
			</div>
		</div>
	);
}

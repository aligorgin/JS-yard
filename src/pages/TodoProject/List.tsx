import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Row from './Row';

interface Props {
	todos: [];
	setTodos: any;
}

export default function List({ todos, setTodos }: Props) {
	// de hydration react error
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (todos) {
			setShow(true);
		}
	}, []);
	return (
		<div className="mt-4">
			{show &&
				todos.map((todo: any) => (
					<Row
						key={todo.id}
						text={todo.text}
						todo={todo}
						todos={todos}
						isCompleted={todo.completed}
						setTodos={setTodos}
					/>
				))}
		</div>
	);
}

import { useState } from "react";
import "./App.css";

interface Todo {
	id: number;
	content: string;
}

function App() {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState<Todo[]>([]);

	function addTodo() {
		setTodos((current) => [
			...current,
			{
				id: Math.floor(Math.random() * 2 ** 32),
				content: inputValue,
			},
		]);
	}

	function markTodoAsDone(todo: Todo) {
		setTodos((current) => current.filter((t) => t.id !== todo.id));
	}

	return (
		<div className="container">
			<div className="input-row">
				<input
					className="todo-input"
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.currentTarget.value)}
				/>
				<button onClick={addTodo}>Add todo</button>
			</div>
			<ul className="todo-list">
				{todos.map((todo) => (
					<li key={todo.id}>
						{todo.content}
						<button className="done-btn" onClick={() => markTodoAsDone(todo)}>
							Done
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;

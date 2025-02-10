import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
	const [todos, setTodos] = useState([])

	const addTodo = (todo) => {
		setTodos((prev) => ([...prev, { id: Date.now(), ...todo }]))
	}

	const updateTodo = (id, todo) => {
		setTodos((prev) => (
			prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
		))
	}

	const deleteTodo = (id) => {
		setTodos((prev) => (
			prev.filter((prevTodo) => (prevTodo.id !== id))
		))
	}

	const toggleComplete = (id) => {
		setTodos((prev) => (
			prev.map((prevTodo) => (prevTodo.id === id ?
				{ ...prevTodo, completed: !prevTodo.completed } : prevTodo))
		))
	}

	useEffect(() => {
		const prevTodos = JSON.parse(localStorage.getItem("todos"))
		if (prevTodos && prevTodos.length > 0)
			setTodos(prevTodos)
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	return (
		<TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
			<div className="todoApp bg-[#172842] min-h-screen py-8">
				<div className="container w-full max-w-2xl mx-auto shadow-xl rounded-lg px-4 py-3 text-white border border-white/10">
					<h1 className="header text-2xl font-bold text-center mb-8 mt-2">
						Manage Your Todos</h1>
					<div className="form mb-4">
						<TodoForm />
					</div>
					<div className="todos flex flex-wrap gap-y-3">
						{todos.map((todo) => (
							<div key={todo.id}
								className='w-full'
							>
								<TodoItem todo={todo}/>
							</div>
						))}
					</div>
				</div>
			</div>
		</TodoProvider>
	)
}

export default App

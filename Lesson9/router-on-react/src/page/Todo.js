import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Todo = () => {
	const [todoList, setTodoList] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				let res = await fetch('https://jsonplaceholder.typicode.com/todos')
				res = await res.json()

				setTodoList(res)
			} catch (error) {
				console.log(error)
			}
		}

		fetchData()
	}, [])

	return (
		<div>
			<ul>
				{todoList.map(todo => (
					<li key={todo.id}>
						{todo.title}

						<Link to={'/todo/' + todo.id}>Detail</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Todo

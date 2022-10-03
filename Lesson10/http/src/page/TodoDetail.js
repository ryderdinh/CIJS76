import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TodoDetail = () => {
	const params = useParams()
	console.log(params)

	const [todo, setTodo] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			try {
				let res = await fetch(
					'https://jsonplaceholder.typicode.com/todos/' + params.todoId
				)
				res = await res.json()

				setTodo(res)
			} catch (error) {
				console.log(error)
			}
		}

		fetchData()
	}, [params.todoId])

	return <div>{JSON.stringify(todo, null, 2)}</div>
}

export default TodoDetail

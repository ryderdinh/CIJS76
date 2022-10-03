import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from '../components/Button'
import Footer from '../components/Footer'
import TodoAdd from '../components/TodoAdd'
import TodoList from '../components/TodoList'

const Todo = () => {
	// const [todoList, setTodoList] = useState([])

	// const [isLogin, setIsLogin] = useState(false)

	const [list, setList] = useState([
		{ id: uuidv4(), check: false, text: 'Clean up bedroom' },
		{ id: uuidv4(), check: false, text: 'Buy some milk' },
		{ id: uuidv4(), check: false, text: 'Jogging' },
		{ id: uuidv4(), check: false, text: 'Learn React' },
		{ id: uuidv4(), check: false, text: 'Doing execises' }
	])

	const removeAllList = () => {
		setList([])
	}

	const removeTask = id => {
		const newList = list.filter(item => item.id !== id)
		setList(newList)
	}

	const addTask = content => {
		let newTask = { id: uuidv4(), check: false, text: content }
		setList([newTask, ...list])
	}

	const doTask = id => {
		const newList = list.map(item => {
			if (item.id === id) return { ...item, check: !item.check }

			return item
		})

		setList(newList)
	}

	return (
		<div>
			<header>Todo list</header>
			<div className='App-main'>
				<TodoAdd addTask={addTask} />
				<div className='mid'>
					<Button content='Add' onClick={addTask} />
					<Button content='Remove all' onClick={removeAllList} />
				</div>
				<TodoList list={list} removeTask={removeTask} doTask={doTask} />
			</div>
			<Footer taskLeft={list.filter(item => !item.check).length} />
		</div>
	)
}

export default Todo

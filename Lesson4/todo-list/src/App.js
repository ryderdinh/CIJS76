import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'

function App() {
	const [list, setList] = useState([
		{ id: '1', check: false, text: 'Clean up bedroom' },
		{ id: '2', check: false, text: 'Buy some milk' },
		{ id: '3', check: false, text: 'Jogging' },
		{ id: '4', check: false, text: 'Learn React' },
		{ id: '5', check: false, text: 'Doing execises' }
	])

	const removeAllList = () => {
		setList([])
	}

	const removeTask = () => {
		const newList = list.filter(item => item.text !== 'Jogging')
		setList(newList)
	}

	const addTask = () => {}

	return (
		<div className='App'>
			<header>Todo list</header>
			<div className='App-main'>
				<TodoAdd />
				<div className='mid'>
					<Button content='Remove task: Jogging' onClick={removeTask} />
					<Button content='Add' onClick={addTask} />
					<Button content='Remove all' onClick={removeAllList} />
				</div>
				<TodoList list={list} />
			</div>
			<Footer />
		</div>
	)
}

export default App

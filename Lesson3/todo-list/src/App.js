import './App.css'
import Footer from './components/Footer'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'

function App() {
	const list = [
		{ id: '1', check: false, text: 'Clean up bedroom' },
		{ id: '2', check: false, text: 'Buy some milk' },
		{ id: '3', check: false, text: 'Jogging' },
		{ id: '4', check: false, text: 'Learn React' },
		{ id: '5', check: false, text: 'Doing execises' }
	]

	return (
		<div className='App'>
			<header>Todo list</header>
			<div className='App-main'>
				<TodoAdd />
				<TodoList list={list} />
			</div>
			<Footer />
		</div>
	)
}

export default App

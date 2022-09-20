import { useState } from 'react'
import './App.css'

function App() {
	const [counter, setCounter] = useState(0)

	const handleIncrease = () => {
		setCounter(counter + 1)
	}

	const handleDecrease = () => {
		if (counter === 0) return
		setCounter(counter - 1)
	}

	return (
		<div className='App'>
			<button onClick={handleDecrease} disabled={counter === 0 ? true : false}>
				-
			</button>
			{counter}
			<button onClick={handleIncrease}>+</button>
		</div>
	)
}

export default App

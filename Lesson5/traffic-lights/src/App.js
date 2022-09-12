import { useState } from 'react'
import './App.css'

function App() {
	const [number, setNumber] = useState(1)

	const changeNumber = () => {
		if (number === 3) {
			setNumber(1)
			return
		}

		setNumber(number + 1)
	}

	return (
		<div className='App'>
			<Button onClick={changeNumber}>Next</Button>
			<div className='lights'>
				<Light active={number === 1} />
				<Light active={number === 2} />
				<Light active={number === 3} />
			</div>
		</div>
	)
}

function Button({ onClick, children }) {
	return <button onClick={onClick}>{children}</button>
}

function Light({ active }) {
	return <div className={`light ${active ? 'true' : ''}`}></div>
}

export default App

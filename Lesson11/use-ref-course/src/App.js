import { useRef, useState } from 'react'
import './App.css'
import logo from './logo.svg'

function App() {
	let countVar = 0
	const [countState, setCountState] = useState(0)
	const countRef = useRef(0)
	const refInput = useRef(null)

	// 1. ref khong lam component re render
	// 2. ref khong bi reset du lieu

	// ref.current =  du lieu muon set
  //refInput.current.focus()

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<input type='text' name='' ref={refInput} />
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App

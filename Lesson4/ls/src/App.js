import { useState } from 'react'
import './App.css'
import logo from './logo.svg'

function App() {
	const [logoClass, setLogoClass] = useState('pr')
	const [inputValue, setInputValue] = useState({
		input1: '',
		input2: 'abc'
	})

	const logInput = () => {
		console.log(inputValue)
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<div
					className='pr'
					onMouseEnter={() => {
						console.log(true)
						setLogoClass('pr')
					}}
					onMouseOut={() => {
						setLogoClass('pr')
					}}
				>
					<img src={logo} className={logoClass} alt='logo' />
				</div>

				<input
					type='text'
					value={inputValue.input2}
					onChange={e => {
						setInputValue({ ...inputValue, input2: e.target.value })
					}}
					onKeyUp={e => {
						if (e.code === 'Enter') {
							console.log(inputValue)
						}
					}}
					onFocus={() => console.log('focus')}
					onBlur={() => console.log('blur')}
				/>
				<form
					onSubmit={e => {
						e.preventDefault()
						logInput()
					}}
				>
					<button onClick={logInput}>Log content input</button>
				</form>

				{/* <input
					type='text'
					value={inputValue.input1}
					onChange={e => {
						setInputValue({ ...inputValue, input1: e.target.value })
					}}
				/>
				<button
					onClick={() => {
						console.log(inputValue)
					}}
				>
					Log content input
				</button> */}
			</header>
		</div>
	)
}

export default App

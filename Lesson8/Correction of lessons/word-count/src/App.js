import { useEffect, useState } from 'react'
import './App.css'
import logo from './logo.svg'

function App() {
	const [inputData, setInputData] = useState('')
	const [numOfWord, setNumOfWord] = useState(0)

	const handleTextAriaChange = e => {
		setInputData(e.target.value)
	}

	useEffect(() => {
		const count = setTimeout(() => {
			setNumOfWord(
				inputData
					? inputData.trim().replace(/\s\s+/g, ' ').split(' ').length
					: 0
			)
		}, 500)

		return () => {
			clearTimeout(count)
		}
	}, [inputData])

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Số tu: {numOfWord}</p>
				<textarea
					type='text'
					value={inputData}
					onChange={handleTextAriaChange}
				/>
			</header>
		</div>
	)
}

export default App

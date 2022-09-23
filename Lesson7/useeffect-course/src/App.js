import { useEffect, useState } from 'react'
import './App.css'

import axios from 'axios'

function App() {
	const [check, setCheck] = useState(true)
	const [btnValue, setBtnValue] = useState('red')

	const setColor = color => setBtnValue(color)

	return (
		<div className='App'>
			<button onClick={() => setCheck(!check)}>{btnValue}</button>
			{check && <Header onClick={setColor} />}
		</div>
	)
}

const Header = ({ onClick }) => {
	const [count, setCount] = useState(0)
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState({
		isError: false,
		data: ''
	})

	const fetchApi = async api => {
		try {
			setError({ isError: false, data: '' })
			let res = await axios.get(api)

			setTimeout(() => {
				setData(res.data)
				setIsLoading(false)
			}, 2000)
		} catch (error) {
			setError({ isError: true, data: error.message })
		}
	}

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true)
			fetchApi('https://jsonplaceholder.typicode.com/todos')
		}, 2000)
	}, [])

	useEffect(() => {
		if (error.isError) {
			console.log('hien thi popup')
			console.log(error.data)
		}
	}, [error])

	// useEffect(() => {
	// 	onClick(count)
	// }, [count, onClick])

	useEffect(() => {
		console.log(data)
	}, [data])

	return (
		<header className='App-header'>
			<ol>
				{!data?.length && !isLoading ? <p>Nothing found</p> : ''}

				{data?.map(item => (
					<li key={item.id}>{item.title}</li>
				))}

				{isLoading && <p>Loading...</p>}
			</ol>
			Count value: {count}
			<button onClick={() => setCount(count + 1)}>set count</button>
		</header>
	)
}

export default App

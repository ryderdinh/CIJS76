import { useCallback, useMemo, useState } from 'react'
import './App.css'
import HelloComponent from './components/HelloComponent'

function App() {
	const [count, setCount] = useState(0)
	const [count1, setCount1] = useState(0)

	const increase = () => {
		setCount(count + 1)
	}

	const increase1 = () => {
		setCount1(count1 + 1)
	}

	const say = useCallback(() => {
		console.log('Hello' + count)
	}, [count])

	const data = useMemo(() => [{}, count], [count])

	return (
		<div className='App'>
			<header className='App-header'>
				<p>Count = {count}</p>
				<p>Count1 = {count1}</p>
				<button onClick={increase}>+ count</button>
				<button onClick={increase1}>+ count1</button>

				<HelloComponent say={say} data={data} />
			</header>
		</div>
	)
}

export default App

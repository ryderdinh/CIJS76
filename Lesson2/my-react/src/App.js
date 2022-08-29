import { useState } from 'react'
import './App.css'
import Description from './components/Description'
import UserName from './components/Name'
import logo from './logo.svg'

function App() {
	const [count, setCount] = useState(1)

	const inc = () => {
		setCount(count + 1)
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Description content={'hello react'} number={1}>
					<UserName name={'Quang Anh'} />
					<UserName name={'MindX'} />
					<UserName name={'Quang Anh'} />
					<UserName name={'Quang Anh'} />
					<UserName name={'Quang Anh'} />
				</Description>
				<button onClick={inc}>+</button>
				=> {count}
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

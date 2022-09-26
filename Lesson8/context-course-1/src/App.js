import { useContext } from 'react'
import './App.css'
import { NumberContext, NumberProvider } from './context/NumberContext'
import { ThemeContext } from './context/ThemeContext'
import logo from './logo.svg'

function App() {
	const { isShowCountComponent, toggleIsShowCountComponent } =
		useContext(ThemeContext)
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<button onClick={toggleIsShowCountComponent}>
					{isShowCountComponent ? 'hide' : 'show'}
				</button>
				<NumberProvider>
					{isShowCountComponent && (
						<>
							<CountNumberComponent />
							<NumberComponent />
						</>
					)}
				</NumberProvider>
			</header>
		</div>
	)
}

const NumberComponent = () => {
	const { count } = useContext(NumberContext)

	return <p>Count: {count}</p>
}

const CountNumberComponent = () => {
	const { count, setCount, inCreaseCount } = useContext(NumberContext)

	return (
		<>
			<button
				onClick={() => {
					setCount(count - 1)
				}}
			>
				-
			</button>

			<button onClick={inCreaseCount}>+</button>
		</>
	)
}

export default App

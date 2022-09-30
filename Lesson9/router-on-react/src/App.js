import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Account from './page/Account'
import Home from './page/Home'
import Signin from './page/Signin'
import Todo from './page/Todo'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<HeaderComponent />
				<RoutesComponent />
			</div>
		</BrowserRouter>
	)
}

function RoutesComponent() {
	return (
		<Routes>
			<Route path='/' element={<Home />}>
				<Route path='hero' element={<Hero />} />
			</Route>
			<Route path='/todo' element={<Todo />} />
			<Route path='/account' element={<Account />} />
			<Route path='/signin' element={<Signin />} />
		</Routes>
	)
}

function HeaderComponent() {
	return (
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/Todo'>Todo</Link>
			</li>
			<li>
				<Link to='/Account'>Account</Link>
			</li>
		</ul>
	)
}

export default App

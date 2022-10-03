import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Page404 from './page/404'
import Account from './page/Account'
import Home from './page/Home'
import Signin from './page/Signin'
import Todo from './page/Todo'
import TodoDetail from './page/TodoDetail'

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
			<Route path='/todo/:todoId' element={<TodoDetail />} />
			<Route path='/todo/about' element={<Todo />} />
			<Route path='/account' element={<Account />} />
			<Route path='/signin' element={<Signin />} />
			<Route path='*' element={<Page404 />} />
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
				<Link to='/todo'>Todo</Link>
			</li> 
			<li>
				<Link to='/account' state={{ home: true }}>
					Account
				</Link>
			</li>
		</ul>
	)
}

export default App

import React, { useEffect } from 'react'
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
	useParams,
	useSearchParams
} from 'react-router-dom'

import '../assets/css/Home.css'

const Home = () => {
	const params = useParams()
	let [searchParams, setSearchParams] = useSearchParams({})
	const location = useLocation()
	const navigate = useNavigate()

	const onClick = () => {
		setSearchParams(prev => ({ ...prev, findId: '1234567', findBy: 'name' }))
	}

	useEffect(() => {
		console.log(searchParams.get('findId'))
		for (let entry of searchParams.entries()) {
			console.log(entry)
		}
	}, [searchParams])

	// useEffect(() => {
	// 	const tout = setTimeout(() => {
	// 		navigate('/account')
	// 	}, 3000)

	// 	return () => {
	// 		clearTimeout(tout)
	// 	}
	// }, [navigate])

	return (
		<div className='container'>
			<div className='home'>
				<div>
					<p>Home</p>
					<button onClick={onClick}>set search param</button>
					<button
						onClick={() => {
							navigate('/account')
						}}
					>
						redirect to account page
					</button>
					<p>
						<Link to={'hero'}>Go to hero</Link>
					</p>
				</div>

				<Outlet />
			</div>
		</div>
	)
}

export default Home

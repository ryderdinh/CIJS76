import React from 'react'
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
	const [searchParams, setSearchParams] = useSearchParams()
	const location = useLocation()
	const navigate = useNavigate()

	console.log(params, searchParams, location)

	return (
		<div className='container'>
			<div className='home'>
				<div>
					<p>Home</p>
					<Link to={'hero'}>Go to hero</Link>
				</div>

				<Outlet />
			</div>
		</div>
	)
}

export default Home

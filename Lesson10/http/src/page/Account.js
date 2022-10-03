import React from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {
	const navigate = useNavigate()

	return (
		<div>
			Account
			<button
				onClick={() => {
					navigate(-1)
				}}
			>
				GO BACK
			</button>
		</div>
	)
}

export default Account

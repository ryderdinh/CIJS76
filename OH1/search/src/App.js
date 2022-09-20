import { useState } from 'react'
import './App.css'

function App() {
	const [users, setUsers] = useState([
		{
			phoneNumber: '347-383-9162 x523',
			name: 'Brett Borer',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/imammuht/128.jpg'
		},
		{
			phoneNumber: '1-500-074-0768 x82113',
			name: 'Mrs. German Bradtke',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/allagringaus/128.jpg'
		},
		{
			phoneNumber: '632.525.0648',
			name: 'Brianne Wilkinson',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/tbakdesigns/128.jpg'
		},
		{
			phoneNumber: '1-450-095-2436 x973',
			name: 'Mozell Weissnat',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/jlsolerdeltoro/128.jpg'
		},
		{
			phoneNumber: '531-940-7311',
			name: 'Dr. Howell Schinner',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/sterlingrules/128.jpg'
		},
		{
			phoneNumber: '151-571-6509 x743',
			name: 'Trace Kihn III',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/eduardostuart/128.jpg'
		},
		{
			phoneNumber: '526.732.5188 x8145',
			name: 'Ellie Mitchell',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/codysanfilippo/128.jpg'
		},
		{
			phoneNumber: '215-352-2435 x426',
			name: 'Mr. Lou Rowe',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/akmalfikri/128.jpg'
		},
		{
			phoneNumber: '021-305-5446',
			name: 'Tony Kirlin',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg'
		},
		{
			phoneNumber: '1-955-245-5835 x5436',
			name: 'Emory Cole',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/edobene/128.jpg'
		},
		{
			phoneNumber: '1-342-989-8319 x346',
			name: 'Luna Hagenes',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/gu5taf/128.jpg'
		},
		{
			phoneNumber: '774.663.9975',
			name: 'Haleigh Friesen',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kurtinc/128.jpg'
		},
		{
			phoneNumber: '175.128.8287',
			name: 'Maureen Armstrong',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nandini_m/128.jpg'
		},
		{
			phoneNumber: '477-832-1330 x37835',
			name: 'Vilma Goyette',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/shalt0ni/128.jpg'
		},
		{
			phoneNumber: '(669) 062-0169 x9510',
			name: 'Jaclyn Mraz',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/teylorfeliz/128.jpg'
		}
	])

	const [input, setInput] = useState('')

	const handleInputChange = e => {
		setInput(e.target.value)
	}

	return (
		<div className='App'>
			<form>
				<label>Search:</label>
				<input type='text' value={input} onChange={handleInputChange} />
			</form>

			<ul>
				{users
					.filter(user => {
						return user.phoneNumber.indexOf(input) !== -1
					})
					.map(user => (
						<li key={user.name + user.phoneNumber}>
							{user.name} ({user.phoneNumber})
						</li>
					))}
			</ul>
		</div>
	)
}

export default App

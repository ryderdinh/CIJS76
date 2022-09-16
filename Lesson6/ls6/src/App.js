import { useState } from 'react'
import './App.css'

function App() {
	const [persons, setPersons] = useState([
		{
			name: 'Lonie Osinski',
			mail: 'Jeremy_Kulas@gmail.com',
			phoneNumber: '(291) 041-2031 x102',
			address: 'East Erdmanfort, Carol Extensions, 69448',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/hiemil/128.jpg'
		},
		{
			name: 'Miss Bobby Runolfsdottir',
			mail: 'Ron.Emmerich@gmail.com',
			phoneNumber: '(152) 699-0066 x1057',
			address: 'Lake North Francesco, Stefanie Village, 63196',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/envex/128.jpg'
		},
		{
			name: 'Mrs. Rebeca Hauck',
			mail: 'Conor_Borer98@hotmail.com',
			phoneNumber: '(017) 086-2187',
			address: 'Port Robertschester, Kayley Neck, 86652',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/curiousoffice/128.jpg'
		},
		{
			name: 'Kallie Carroll',
			mail: 'Walker_Mohr6@hotmail.com',
			phoneNumber: '643-807-9856 x361',
			address: 'South Port Emie, Tod Garden, 78550',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/arishi_/128.jpg'
		},
		{
			name: 'Antonio Lang I',
			mail: 'Josiane.Beer24@gmail.com',
			phoneNumber: '(572) 216-6403',
			address: 'West Lake Yvonne, Sheila Throughway, 92939',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/illyzoren/128.jpg'
		},
		{
			name: 'Mrs. Misael Hammes',
			mail: 'Carolanne_Schroeder34@gmail.com',
			phoneNumber: '(321) 148-3100 x372',
			address: 'Lake Dooleymouth, Lois Lake, 12097',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/gabrielrosser/128.jpg'
		},
		{
			name: 'Floyd Ankunding',
			mail: 'Erica_Kling7@hotmail.com',
			phoneNumber: '(338) 139-1599 x0973',
			address: 'South Briastad, Jaeden Pines, 38533',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/kapaluccio/128.jpg'
		},
		{
			name: 'Mazie Gutkowski',
			mail: 'Mara_Jones78@gmail.com',
			phoneNumber: '1-565-280-3711',
			address: 'South North Jarred, Herman Forge, 86738',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/geshan/128.jpg'
		},
		{
			name: 'Jadon Ledner',
			mail: 'Ida76@yahoo.com',
			phoneNumber: '583.021.6680',
			address: "West Neiltown, O'Kon Extension, 10770",
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/robinlayfield/128.jpg'
		},
		{
			name: 'Javier Metz',
			mail: 'Corbin.Towne@yahoo.com',
			phoneNumber: '430.007.6711 x397',
			address: 'New West Lessie, Esta Spurs, 22307',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/xiel/128.jpg'
		},
		{
			name: 'Maybelle Gaylord',
			mail: 'Rahul_Hilll@gmail.com',
			phoneNumber: '702-152-5801 x416',
			address: 'Port Kuphalmouth, Abbott Courts, 35391',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg'
		},
		{
			name: 'Braden Larkin',
			mail: 'Ulises_Jenkins@yahoo.com',
			phoneNumber: '093.564.0989 x63307',
			address: 'New Cliffordport, Amanda Squares, 63305',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/tweetubhai/128.jpg'
		},
		{
			name: 'Meda Gislason',
			mail: 'Erica.Roberts@hotmail.com',
			phoneNumber: '1-830-391-1614 x782',
			address: 'East Margaretteland, Raven Rapid, 67866',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/increase/128.jpg'
		},
		{
			name: 'Benny Cremin',
			mail: 'Lester61@hotmail.com',
			phoneNumber: '(977) 456-5120',
			address: 'West Rickeymouth, Schultz Stream, 53860',
			avatar:
				'https://s3.amazonaws.com/uifaces/faces/twitter/mutu_krish/128.jpg'
		},
		{
			name: 'Mac Jacobs',
			mail: 'Kenyatta_Jacobson48@yahoo.com',
			phoneNumber: '866.122.2314',
			address: 'East New Hilmafort, Sylvester Knoll, 50850',
			avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/djsherman/128.jpg'
		}
	])
	const [input, setInput] = useState('')

	const handleInputChange = e => {
		setInput(e.target.value)
	}

	return (
		<div className='App'>
			<form>
				<label htmlFor=''>Search: </label>
				<input type='text' value={input} onChange={handleInputChange} />
			</form>

			<ul>
				{persons
					.filter(person => {
						return person.phoneNumber.indexOf(input.trim()) !== -1
					})
					.map(person => (
						<li key={person.name}>
							{person.name} - {person.phoneNumber}
						</li>
					))}
			</ul>
		</div>
	)
}

export default App

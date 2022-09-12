import React, { useState } from 'react'

const TodoAdd = ({ addTask }) => {
	const [input, setInput] = useState('')

	const onSubmit = e => {
		e.preventDefault()
		addTask(input)
		setInput('')
	}

	const onInputChange = e => {
		setInput(e.target.value)
	}

	return (
		<div className='todo-add'>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Enter your task here'
					value={input}
					onChange={onInputChange}
				/>
			</form>
		</div>
	)
}

export default TodoAdd

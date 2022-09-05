import React from 'react'

const TodoItem = props => {
	console.log(props)
	return (
		<li className='todo-item'>
			<div className='row'>
				<div className='choose'>{props.check}</div>
				<p>{props.text}</p>
			</div>
			<button className='btn-remove'>Remove</button>
		</li>
	)
}

export default TodoItem

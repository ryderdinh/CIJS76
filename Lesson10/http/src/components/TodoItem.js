import React from 'react'

const TodoItem = props => {
	return (
		<li className='todo-item'>
			<div className='row' onClick={() => props.doTask(props.id)}>
				<div className={`choose ${props.check ? 'true' : ''}`}>
					{props.check}
				</div>
				<p className={`content ${props.check ? 'true' : ''}`}>{props.text}</p>
			</div>

			<button className='btn-remove' onClick={() => props.removeTask(props.id)}>
				Remove
			</button>
		</li>
	)
}

export default TodoItem

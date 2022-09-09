import React from 'react'
import TodoItem from './TodoItem'

const TodoList = props => {
	const { list } = props

	return (
		<div className='todo-list'>
			<ul>
				{list.map((item, index) => (
					<TodoItem key={item.id} check={item.check} text={item.text} />
				))}
			</ul>
		</div>
	)
}

export default TodoList

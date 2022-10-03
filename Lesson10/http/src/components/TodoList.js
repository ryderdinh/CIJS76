import React from 'react'
import TodoItem from './TodoItem'

const TodoList = props => {
	const { list, removeTask, doTask } = props

	return (
		<div className='todo-list'>
			<ul>
				{list.map((item, index) => (
					<TodoItem
						key={item.id}
						id={item.id}
						check={item.check}
						text={item.text}
						removeTask={removeTask}
						doTask={doTask}
					/>
				))}
			</ul>
		</div>
	)
}

export default TodoList

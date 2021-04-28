import React from 'react'
import { Icon } from 'react-icons-kit';
import { check, trash } from 'react-icons-kit/fa/';
import './Todo.css'

// sempurnakan script code dibawah ini
 const List = (props) => {
	const { items, isCompleted, removeTask } = props;
	return (
		<ul>
			{items.map((item, key) => {
				return (
					<li key={key} className={`${item.completed ? 'completed' : 'pending'}`}>
					{item.task}
					<div className="actions">
						<span
							className={`${item.completed ? 'hide' : 'done'}`}
							onClick={() => isCompleted(item.id)}
						>
							<Icon size={20} icon={check} />
						</span>
						<span className="trash" onClick={() => removeTask(item.id)}>
							<Icon size={14} icon={trash} />
						</span>
					</div>
				</li>
				);
			})}
		</ul>
	)
}
export default List;
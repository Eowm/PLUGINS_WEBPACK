import React from 'react';
import style from './TodoList.css';

const List = props => {
	const todoListElments = props.list.map(element => <li key={element.id} id={element.id} onClick={() => props.remove(element.id)}>{element.text}</li>)
		return (
			<ul>{todoListElments}</ul>
		)
}

export default List;
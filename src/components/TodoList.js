import React from 'react';
import style from './TodoList.css';

const List = props => {
	const todoListElments = props.list.map(element => <Todo id={element.id} remove={props.remove} text={element.text}>)
		return (
		<div className={style.TodoList}>
			<ul>{todoListElments}</ul>
		</div>
		)
}

export default List;
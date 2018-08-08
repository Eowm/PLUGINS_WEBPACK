import React from 'react';

const TodoForm = (props) => (
			<form>
				<label>What do you need to do?</label>
				<input type='text' id='task' value={props.value} onChange={(event) => props.updateValue(event.target.value)} />
				<button onClick={event => {
					props.add(props.value, props.event);
				}>Just add it!</button>
			</form>
			);

export default TodoForm;
		

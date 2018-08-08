import React from 'react';

const TodoForm = (props) => (
			<form>
				<label>What do you need to do?</label>
				<input type='text' id='task' value={props.value} onChange={(event) => props.updateValue(event.target.value)} />
				<button onClick={() => props.add(props.value)}>Just add it!</button>
			</form>
			);

export default TodoForm;
		

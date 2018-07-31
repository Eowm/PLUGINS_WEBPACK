import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import List from '../components/TodoList';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
      		data: [{
        		id: 1,
        		text: 'clean room'
      		}, 
      		{
      		  id: 2,
      		  text: 'wash the dishes'
      		}, 
      		{
      		  id: 3,
      		  text: 'feed my cat'
      		}]
    	};
	}
	addTodo(val){
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data =[...this.state.data, todo];
		this.setState({data: data});
	}
	removeTodo(id){
		const reminder =this.state.data.filter(todo => todo.id !== id);
		this.setState({data: reminder});
	}
	render() {
		return (
			<div className={style.TodoApp}>
				<Title title='Lista ToDo' length={this.state.data.lenght} />
				<List list={this.state.data} remove={this.removeTodo.bind(this)} />
        	</div>
			);
	}
}

export default App;
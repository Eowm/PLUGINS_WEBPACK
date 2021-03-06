import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { hot } from 'react-hot-loader';

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
    	this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateValue = this.updateValue.bind(this);
	}
	addTodo(val, ev){
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		if (!val) {
		const data =[todo, ...this.state.data];
		this.setState({data: data});
		};
	}
	removeTodo(id){
		const reminder =this.state.data.filter(todo => todo.id !== id);
		this.setState({
			data: reminder
		});
	}
	updateValue(newValue) {
		this.setState({
			value: newValue
		});
	}
	render() {
		return (
			<div className={style.TodoApp}>
				<Title title='Lista ToDo' length={this.state.data.length} />
				<TodoForm add={this.addTodo} updateValue={this.updateValue} value={this.state.value} />
				<TodoList list={this.state.data} remove={this.removeTodo.bind(this)} />
        	</div>
			);
	}
}

export default hot(module)(App);
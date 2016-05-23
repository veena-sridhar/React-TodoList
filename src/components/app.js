import React from 'react';
import CreateTodo from './create-todo.js'
import TodoList from './todos-list.js'

const todos = [
	{
		task: 'make React tutorial',
		isCompleted: false
	},
	{
		task: 'eat dinner',
		isCompleted: true
	}
]

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos
		};
	}

	render () {
		return (
			<div>
				<h1>To Do List</h1>
				<CreateTodo createTask={this.createTask.bind(this)}/>
				<TodoList todos={this.state.todos}/>
			</div>
		);
	}

	createTask (task) {
		this.state.todos.push({
			task,
			isCompleted: false
		});

		//to re-render the page, you need to call state again
		this.setState({
			todos: this.state.todos
		});
	}
}








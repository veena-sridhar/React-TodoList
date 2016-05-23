import React from 'react';

export default class CreateTodo extends React.Component {
	render () {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type='text' placeholder='Add List Item' ref='createInput'></input>
				<button>Create</button>
			</form>
		);
	}

	handleCreate (event) {
		event.preventDefault();
		this.props.createTask({this.refs.createInput.value});
	}
};
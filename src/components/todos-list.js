import _ from 'lodash';
import React from 'react';
import TodoListHeader from './todos-list-header.js';
import TodoListItem from './todos-list-item';

export default class TodoList extends React.Component {
	renderItems() {
		return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} />);
	}

	render () {
		return (
			<div>
				<TodoListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</div>
		);
	}
};
import React from 'react';


export default class TodoListHeader extends React.Component {
	render () {
		return (
			<div>
				<thead>
					<tr>Task</tr>
					<th>Action</th>
				</thead>
			</div>
		);
	}
}
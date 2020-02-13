import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
	//De-structure the array. I can name thous values how I want not necessary resource, can be anything.
	//setResource is the same as setState. useState(is the same as {something: 'value'})
	const [resource, setResource] = useState('posts');
	return (
		<div className="ui container">
			<UserList />
			<div>
				<button
					//setResource assigns a value to resource. Same as setState in a class based component.
					onClick={() => setResource('posts')}
					className="ui button primary"
				>
					Posts
				</button>
				<button
					onClick={() => setResource('todos')}
					className="ui button neutral"
				>
					Todos
				</button>
				<button
					onClick={() => setResource('users')}
					className="ui button neutral"
				>
					Users
				</button>
			</div>
			<ResourceList resource={resource} />
		</div>
	);
};

export default App;

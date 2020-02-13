import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
	const [resources, setResources] = useState([]);

	//useEffect is essentially the same as class based components componentDidMount and componentDidUpdate (2nd param in useEffect is responsible
	//for component call is the value in array is the same, then component will not be called.)
	useEffect(() => {
		(async resource => {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/${resource}`
			);
			setResources(response.data);
		})(resource);
	}, [resource]);
	return resources;
};

export default useResources;

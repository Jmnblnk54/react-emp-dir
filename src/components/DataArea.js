import React, { useState, useEffect } from 'react';
import EmpTable from './EmpTable';
import Nav from './Nav';
import API from '../utils/API';
import EmpAreaContext from '../utils/EmpAreaContext';

const DataArea = () => {
	const [developerState, setDeveloperState] = useState({
		users: [],
		order: 'descend',
		filteredUsers: [],
		headings: [
			{ name: 'Image', width: '10%', order: 'descend' },
			{ name: 'name', width: '10%', order: 'descend' },
			{ name: 'phone', width: '20%', order: 'descend' },
			{ name: 'email', width: '20%', order: 'descend' }
		]
	});

	const handleSort = heading => {
		let currentOrder = developerState.headings
			.filter(elem => elem.name === heading)
			.map(elem => elem.order)
			.toString();

		if (currentOrder === 'descend') {
			currentOrder = 'ascend';
		} else {
			currentOrder = 'descend';
		}

		const compareFunction = (a, b) => {
			if (currentOrder === 'ascend') {
				// account for missing values
				if (a[heading] === undefined) {
					return 1;
				} else if (b[heading] === undefined) {
					return -1;
				}
				// numerically
				else if (heading === 'name') {
					return a[heading].first.localeCompare(b[heading].first);
				} else {
					return a[heading].localeCompare(b[heading]);
				}
			} else {
				// account for missing values
				if (a[heading] === undefined) {
					return 1;
				} else if (b[heading] === undefined) {
					return -1;
				}
			}
		};

		const sortedUsers = developerState.filteredUsers.sort(compareFunction);
		const updatedHeadings = developerState.headings.map(elem => {
			elem.order = elem.name === heading ? currentOrder : elem.order;
			return elem;
		});

		setDeveloperState({
			...developerState,
			filteredUsers: sortedUsers,
			headings: updatedHeadings
		});
	};

	const handleSearchChange = event => {
		const filter = event.target.value;
		const filteredList = developerState.users.filter(item => {
			let values = item.name.first.toLowerCase() + ' ' + item.name.last.toLowerCase();

			if (values.indexOf(filter.toLowerCase()) !== -1) {
				return item;
			} else {
				return null;
			}
		});
		console.log('filteredList', filteredList);
		setDeveloperState({ ...developerState, filteredUsers: filteredList });
	};
	useEffect(() => {
		API.search().then(results => {
			setDeveloperState({
				...developerState,
				users: results.data.results,
				filteredUsers: results.data.results
			});
		});
  }, []);
  
	return (
		<EmpAreaContext.Provider value={{ developerState, handleSearchChange, handleSort }}>
			<Nav />
			<div className="data-area">{developerState.filteredUsers.length > 0 ? <EmpTable /> : <div></div>}</div>
		</EmpAreaContext.Provider>
	);
};

export default DataArea;
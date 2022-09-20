import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from '../components/table/Table';

const EmployeeList = () => {
	const list = useSelector((state) => state.employee);

	console.log(list);
	return (
		<>
			<div className='container'>
				EmployeeList
				<Table />
			</div>
		</>
	);
};

export default EmployeeList;

// <ul>
// 	{list.map((user, index) => (
// 		<li key={index}>
// 			{user.firstName}, {user.lastName}
// 		</li>
// 	))}
// </ul>

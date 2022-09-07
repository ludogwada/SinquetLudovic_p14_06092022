import React from 'react';
import { useSelector } from 'react-redux';

const EmployeeList = () => {
	const list = useSelector((state) => state.employee);

	console.log(list);
	return (
		<>
			<div className='container'>EmployeeList</div>
			<ul>
				{list.map((user) => (
					<li>
						{user.firstName}, {user.lastName}
					</li>
				))}
			</ul>
		</>
	);
};

export default EmployeeList;

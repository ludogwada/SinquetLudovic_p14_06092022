import React from 'react';
import { useSelector } from 'react-redux';
import Table from '../components/table/Table';

const EmployeeList = () => {
	const list = useSelector((state) => state.employee);

	return (
		<>
			<div className='employeeList'>
				<Table datas={list} />
			</div>
		</>
	);
};

export default EmployeeList;

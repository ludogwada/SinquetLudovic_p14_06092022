import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<nav className='navBar'>
				<NavLink to='/' className='navBar__link'>
					Home
				</NavLink>
				<NavLink to='EmployeeList' className='navBar__link'>
					View Current Employees
				</NavLink>
			</nav>
		</>
	);
};

export default NavBar;

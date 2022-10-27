import React from 'react';
import Select from 'react-select';

/**
 * React component that returns a dropdown
 * @param {*} props
 * @returns Dropdown
 * @package react-select
 */

const Dropdown = (props) => {
	return (
		<div className='App'>
			<Select
				className={props.className}
				value={props.value}
				onChange={props.onChange}
				options={props.options}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default Dropdown;

import React from 'react';
import Select from 'react-select';

export default function App(props) {
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
}

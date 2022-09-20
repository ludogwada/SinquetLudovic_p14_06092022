import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReactDatePicker = (props) => {
	return (
		<>
			<DatePicker
				selected={props.date}
				// name={props.date}
				onChange={(Date) => props.setDate(Date)}
				peekNextMonth
				showYearDropdown
				showMonthDropdown
				dropdownMode='select'
				placeholderText='Click to select a date'
				withPortal
				todayButton='Today'
			/>
		</>
	);
};

export default ReactDatePicker;

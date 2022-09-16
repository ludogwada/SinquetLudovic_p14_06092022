import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReactDatePicker = (props) => {
	return (
		<>
			<DatePicker
				selected={props.date}
				// name={props.date}
				onChange={(Date) => props.setDate(Date)}
				showYearDropdown
				dateFormatCalendar='MMMM'
				yearDropdownItemNumber={100}
				scrollableYearDropdown
			/>
		</>
	);
};

export default ReactDatePicker;

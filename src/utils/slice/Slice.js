import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
	name: 'employees',
	initialState: [
		{
			firstName: 'Joe',
			lastName: 'Dalton',
			dateStart: '18/19/2022',
			departement: 'Sales',
			dateBirth: '15/05/1999',
			street: 'The',
			city: 'Miami',
			state: 'FL',
			zipCode: '1',
		},
		{
			firstName: 'Jack',
			lastName: 'Dalton',
			dateStart: '18/19/2022',
			departement: 'Legal',
			dateBirth: '15/05/1999',
			street: 'New',
			city: 'Dallas',
			state: 'TX',
			zipCode: '1',
		},
	],
	reducers: {
		createEmployee: (state, action) => {
			const newEmployee = action.payload;
			state.push(newEmployee);
		},
	},
});
export const { createEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
	name: 'employees',
	initialState: [],
	reducers: {
		createEmployee: (state, action) => {
			const newEmployee = action.payload;
			state.push(newEmployee);
		},
	},
});
export const { createEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

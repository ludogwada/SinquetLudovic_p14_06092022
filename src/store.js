import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './utils/slice/Slice';

export const store = configureStore({
	reducer: {
		employee: employeeReducer,
	},
});

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './index.css';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<CreateEmployee />} />
				<Route path='EmployeeList' element={<EmployeeList />} />
				<Route />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);

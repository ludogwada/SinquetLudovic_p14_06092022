import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './index.css';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import Error from './pages/Error';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<CreateEmployee />} />
					<Route path='EmployeeList' element={<EmployeeList />} />
					<Route path='/*' element={<Error />} />
					<Route />
				</Routes>
				<Footer />
			</Router>
		</Provider>
	</React.StrictMode>
);

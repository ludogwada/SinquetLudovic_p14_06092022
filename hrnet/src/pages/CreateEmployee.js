import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../utils/slice/Slice';
import { statesLocation } from '../datas/StatesLocation';
import { departements } from '../datas/Departement';
import ReactDatePicker from '../components/datePicker/DatePicker';

const CreateEmployee = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [dateBirth, setDateBirth] = useState('');
	const [dateStart, setDateStart] = useState('');
	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [departement, setDepartement] = useState('');
	const form = document.getElementById('form');

	const dispatch = useDispatch();

	const SaveUser = (e) => {
		e.preventDefault();
		const createdEmployee = {
			firstName: firstName,
			lastName: lastName,
			dateBirth: dateBirth.toLocaleDateString(),
			dateStart: dateStart.toLocaleDateString(),
			street: street,
			city: city,
			state: state,
			zipCode: zipCode,
			departement: departement,
		};
		console.log(createdEmployee);
		dispatch(createEmployee(createdEmployee));
		form.reset(e);
	};

	return (
		<div className='container'>
			<form id='form' className='form' onSubmit={SaveUser}>
				<label htmlFor='FirstName'>
					Fisrt Name
					<input
						type='text'
						name='FirstName'
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</label>
				<label htmlFor='lastName'>
					Last Name
					<input
						type='text'
						name='lastName'
						onChange={(e) => setLastName(e.target.value)}
					/>
				</label>
				<label htmlFor='dateBirth'>
					DateBirth
					<ReactDatePicker date={dateBirth} setDate={setDateBirth} />
				</label>
				<label htmlFor='dateStart'>
					DateStart
					<ReactDatePicker date={dateStart} setDate={setDateStart} />
				</label>
				<section className='form__adress'>
					<label htmlFor='Street'>
						Street
						<input
							type='text'
							name='Street'
							onChange={(e) => setStreet(e.target.value)}
						/>
					</label>
					<label htmlFor='City'>
						City
						<input
							type='text'
							name='City'
							onChange={(e) => setCity(e.target.value)}
						/>
					</label>
					<label htmlFor='State'>
						State
						<select value={state} onChange={(e) => setState(e.target.value)}>
							{statesLocation.map((location, index) => {
								return (
									<option key={index} value={location.abbreviation}>
										{location.name}
									</option>
								);
							})}
						</select>
					</label>
					<label htmlFor='ZipCode'>
						Zip Code
						<input
							type='number'
							name='ZipCode'
							onChange={(e) => setZipCode(e.target.value)}
						/>
					</label>
				</section>
				<label htmlFor='Departement'>
					Departement
					<select
						value={departement}
						onChange={(e) => setDepartement(e.target.value)}>
						{departements.map((dept, index) => {
							return (
								<option key={index} value={dept.departement}>
									{dept.departement}
								</option>
							);
						})}
					</select>
				</label>

				<button className='form__button'>Save New User</button>
			</form>
		</div>
	);
};

export default CreateEmployee;

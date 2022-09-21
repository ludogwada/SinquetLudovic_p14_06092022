import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../utils/slice/Slice';
import { statesLocation } from '../datas/StatesLocation';
import { departements } from '../datas/Departement';
import ReactDatePicker from '../components/datePicker/DatePicker';
import Dropdown from '../components/dropDown/Dropdown';

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

	const cancelForm = () => {
		form.reset();
		setDateBirth('');
		setDateStart('');
		setState('');
		setDepartement('');
	};

	const SaveUser = (e) => {
		e.preventDefault();
		if (
			// firstName !== '' &&
			// lastName !== '' &&
			// dateBirth !== '' &&
			// dateStart !== '' &&
			// street !== '' &&
			// city !== '' &&
			// state !== '' &&
			// zipCode !== '' &&
			departement !== ''
		) {
			const createdEmployee = {
				// firstName: firstName,
				// lastName: lastName,
				// dateBirth: dateBirth.toLocaleDateString(),
				// dateStart: dateStart.toLocaleDateString(),
				// street: street,
				// city: city,
				// state: state,
				// zipCode: zipCode,
				departement: departement,
			};
			console.log(createdEmployee);
			dispatch(createEmployee(createdEmployee));
			cancelForm();
		}
	};

	return (
		<div className='home'>
			<form id='form' className='form' onSubmit={SaveUser}>
				<section className='form__identity'>
					<section className='form__name'>
						<label className='form__label' htmlFor='FirstName'>
							<h3>Fisrt Name</h3>
							<input
								type='text'
								name='FirstName'
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</label>
						<label className='form__label' htmlFor='lastName'>
							<h3>Last Name</h3>
							<input
								type='text'
								name='lastName'
								onChange={(e) => setLastName(e.target.value)}
							/>
						</label>
						<label className='form__label' htmlFor='dateBirth'>
							<h3>Date of Birth</h3>
							<ReactDatePicker date={dateBirth} setDate={setDateBirth} />
						</label>
						<label className='form__label' htmlFor='dateStart'>
							<h3>Date Start</h3>
							<ReactDatePicker date={dateStart} setDate={setDateStart} />
						</label>
					</section>
					<section className='form__address'>
						<label className='form__label' htmlFor='Street'>
							<h3>Street</h3>
							<input
								type='text'
								name='Street'
								onChange={(e) => setStreet(e.target.value)}
							/>
						</label>
						<label className='form__label' htmlFor='City'>
							<h3>City</h3>
							<input
								type='text'
								name='City'
								onChange={(e) => setCity(e.target.value)}
							/>
						</label>
						<label className='form__label' htmlFor='State'>
							<h3>State</h3>
							<Dropdown
								value={state}
								onChange={setState}
								options={statesLocation}
								placeholder='Alabama'></Dropdown>
						</label>
						<label className='form__label' htmlFor='ZipCode'>
							<h3>Zip Code</h3>
							<input
								type='number'
								name='ZipCode'
								onChange={(e) => setZipCode(e.target.value)}
							/>
						</label>
					</section>
				</section>
				<label className='form__label' htmlFor='Departement'>
					<h3>Departement</h3>
					<Dropdown
						className='select'
						value={departement}
						onChange={setDepartement}
						options={departements}
						placeholder='Sales'></Dropdown>
				</label>

				<button className='form__button'>Save New User</button>
			</form>
		</div>
	);
};

export default CreateEmployee;

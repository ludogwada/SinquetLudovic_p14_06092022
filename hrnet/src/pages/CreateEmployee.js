import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../utils/slice/Slice';
import { statesLocation } from '../datas/StatesLocation';
import { departements } from '../datas/Departement';
import ReactDatePicker from '../components/datePicker/DatePicker';
import Dropdown from '../components/dropDown/Dropdown';
import { Modal } from 'modal-library-ludogwada';

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
	const [showModal, setShowModal] = useState(false);

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
			firstName !== '' &&
			lastName !== '' &&
			dateBirth !== '' &&
			dateStart !== '' &&
			street !== '' &&
			city !== '' &&
			state !== '' &&
			zipCode !== '' &&
			departement !== ''
		) {
			const createdEmployee = {
				firstName: firstName,
				lastName: lastName,
				dateStart: dateStart.toLocaleDateString(),
				departement: departement.label,
				dateBirth: dateBirth.toLocaleDateString(),
				street: street,
				city: city,
				state: state.value,
				zipCode: zipCode,
			};
			console.log(createdEmployee);
			setShowModal(true);

			dispatch(createEmployee(createdEmployee));
			cancelForm();
		}
	};

	return (
		<div className='home'>
			<h1 className='form__hidden'>Form HRnet</h1>
			<form id='form' className='form' onSubmit={SaveUser}>
				<section className='form__identity'>
					<section className='form__name'>
						<label className='form__label' htmlFor='FirstName'>
							<h2>Fisrt Name</h2>
							<input
								type='text'
								name='FirstName'
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</label>
						<label className='form__label' htmlFor='lastName'>
							<h2>Last Name</h2>
							<input
								type='text'
								name='lastName'
								onChange={(e) => setLastName(e.target.value)}
							/>
						</label>
						<label className='form__label' htmlFor='dateBirth'>
							<h2>Date of Birth</h2>
							<ReactDatePicker date={dateBirth} setDate={setDateBirth} />
						</label>
						<label className='form__label' htmlFor='dateStart'>
							<h2>Date Start</h2>
							<ReactDatePicker date={dateStart} setDate={setDateStart} />
						</label>
					</section>
					<section className='form__address'>
						<label className='form__label' htmlFor='Street'>
							<h2>Street</h2>
							<input
								type='text'
								name='Street'
								onChange={(e) => setStreet(e.target.value)}
							/>
						</label>
						<label className='form__label' htmlFor='City'>
							<h2>City</h2>
							<input
								type='text'
								name='City'
								onChange={(e) => setCity(e.target.value)}
							/>
						</label>
						<label className='form__label' htmlFor='State'>
							<h2>State</h2>
							<Dropdown
								value={state}
								onChange={setState}
								options={statesLocation}
								placeholder='Alabama'></Dropdown>
						</label>
						<label className='form__label' htmlFor='ZipCode'>
							<h2>Zip Code</h2>
							<input
								type='number'
								name='ZipCode'
								onChange={(e) => setZipCode(e.target.value)}
							/>
						</label>
					</section>
				</section>
				<label className='form__label' htmlFor='Departement'>
					<h2>Departement</h2>
					<Dropdown
						className='select'
						value={departement}
						onChange={setDepartement}
						options={departements}
						placeholder='Sales'></Dropdown>
				</label>

				<button className='form__button'>Save New Employee</button>
			</form>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				content='user added'
			/>
		</div>
	);
};

export default CreateEmployee;

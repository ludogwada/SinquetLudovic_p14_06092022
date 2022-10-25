import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../utils/slice/Slice';
import { Modal } from 'modal-library-ludogwada';
import Form from '../components/form/Form';

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
			<Form
				onSubmit={SaveUser}
				setFirstName={setFirstName}
				setLastName={setLastName}
				dateBirth={dateBirth}
				setDateBirth={setDateBirth}
				dateStart={dateStart}
				setDateStart={setDateStart}
				setStreet={setStreet}
				setCity={setCity}
				state={state}
				setState={setState}
				setZipCode={setZipCode}
				departement={departement}
				setDepartement={setDepartement}
			/>
			<Modal
				modalStyle='modal'
				textStyle='text'
				showModal={showModal}
				setShowModal={setShowModal}
				content='Employee added'
			/>
		</div>
	);
};

export default CreateEmployee;

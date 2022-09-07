import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../utils/slice/Slice';

const CreateEmployee = () => {
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [dateBirth, setDateBirth] = useState(null);
	const [dateStart, setDateStart] = useState(null);
	const [street, setStreet] = useState(null);
	const [city, setCity] = useState(null);
	const [state, setState] = useState(null);
	const [zipCode, setZipCode] = useState(null);
	const [departement, setDepartement] = useState(null);

	const dispatch = useDispatch();

	const SaveUser = (e) => {
		e.preventDefault();
		const createdEmployee = {
			firstName: firstName,
			lastName: lastName,
			dateBirth: dateBirth,
			dateStart: dateStart,
			street: street,
			city: city,
			state: state,
			zipCode: zipCode,
			departement: departement,
		};
		console.log(createdEmployee);
		dispatch(createEmployee(createdEmployee));
	};

	return (
		<div className='container'>
			<form className='form'>
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
					dateBirth
					<input
						type='date'
						name='dateBirth'
						onChange={(e) => setDateBirth(e.target.value)}
					/>
				</label>
				<label htmlFor='dateStart'>
					dateStart
					<input
						type='date'
						name='dateStart'
						onChange={(e) => setDateStart(e.target.value)}
					/>
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
						<input
							type='text'
							name='State'
							onChange={(e) => setState(e.target.value)}
						/>
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
					<input
						type='text'
						name='Departement'
						onChange={(e) => setDepartement(e.target.value)}
					/>
				</label>
				<button className='form__button' onClick={SaveUser}>
					Save New User
				</button>
			</form>
		</div>
	);
};

export default CreateEmployee;

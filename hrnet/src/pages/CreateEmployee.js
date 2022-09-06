import React, { useState } from 'react';

const CreateEmployee = () => {
	const [firstName, setFirstName] = useState(null);
	const [LastName, setLastName] = useState(null);
	const [DateBirth, setDateBirth] = useState(null);
	const [DateStart, setDateStart] = useState(null);
	const [street, setStreet] = useState(null);
	const [city, setCity] = useState(null);
	const [state, setState] = useState(null);
	const [zipCode, setZipCode] = useState(null);
	const [departement, setDepartement] = useState(null);

	const SaveUser = (e) => {
		e.preventDefault();
		console.log(
			firstName,
			LastName,
			DateBirth,
			DateStart,
			street,
			city,
			state,
			zipCode,
			departement
		);
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
				<label htmlFor='LastName'>
					Last Name
					<input
						type='text'
						name='LastName'
						onChange={(e) => setLastName(e.target.value)}
					/>
				</label>
				<label htmlFor='DateBirth'>
					DateBirth
					<input
						type='date'
						name='DateBirth'
						onChange={(e) => setDateBirth(e.target.value)}
					/>
				</label>
				<label htmlFor='DateStart'>
					DateStart
					<input
						type='date'
						name='DateStart'
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

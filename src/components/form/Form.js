import React from 'react';
import { statesLocation } from '../../datas/StatesLocation';
import { departements } from '../../datas/Departement';
import ReactDatePicker from '../datePicker/DatePicker';
import Dropdown from '../dropDown/Dropdown';

/**
 * React component that returns a form
 * @param {*} props
 * @returns Form
 */

const Form = (props) => {
	return (
		<form id='form' className='form' onSubmit={props.onSubmit}>
			<section className='form__identity'>
				<section className='form__name'>
					<label className='form__label' htmlFor='FirstName'>
						<h2>Fisrt Name</h2>
						<input
							id='FirstName'
							type='text'
							name='FirstName'
							onChange={(e) => props.setFirstName(e.target.value)}
						/>
					</label>
					<label className='form__label' htmlFor='lastName'>
						<h2>Last Name</h2>
						<input
							id='lastName'
							type='text'
							name='lastName'
							onChange={(e) => props.setLastName(e.target.value)}
						/>
					</label>
					<label className='form__label' htmlFor='dateBirth'>
						<h2>Date of Birth</h2>
						<ReactDatePicker
							date={props.dateBirth}
							setDate={props.setDateBirth}
							id='dateBirth'
						/>
					</label>
					<label className='form__label' htmlFor='dateStart'>
						<h2>Date Start</h2>
						<ReactDatePicker
							date={props.dateStart}
							setDate={props.setDateStart}
							id='dateStart'
						/>
					</label>
				</section>
				<section className='form__address'>
					<label className='form__label' htmlFor='Street'>
						<h2>Street</h2>
						<input
							id='Street'
							type='text'
							name='Street'
							onChange={(e) => props.setStreet(e.target.value)}
						/>
					</label>
					<label className='form__label' htmlFor='City'>
						<h2>City</h2>
						<input
							id='City'
							type='text'
							name='City'
							onChange={(e) => props.setCity(e.target.value)}
						/>
					</label>
					<label className='form__label' htmlFor='State'>
						<h2>State</h2>
						<Dropdown
							id='State'
							value={props.state}
							onChange={props.setState}
							options={statesLocation}
							placeholder='Alabama'></Dropdown>
					</label>
					<label className='form__label' htmlFor='ZipCode'>
						<h2>Zip Code</h2>
						<input
							id='ZipCode'
							type='number'
							name='ZipCode'
							onChange={(e) => props.setZipCode(e.target.value)}
						/>
					</label>
				</section>
			</section>
			<label className='form__label' htmlFor='Departement'>
				<h2>Departement</h2>
				<Dropdown
					id='Departement'
					className='select'
					value={props.departement}
					onChange={props.setDepartement}
					options={departements}
					placeholder='Sales'></Dropdown>
			</label>

			<button className='form__button'>Save New Employee</button>
		</form>
	);
};

export default Form;

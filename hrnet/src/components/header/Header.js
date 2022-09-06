import React from 'react';
import NavBar from '../navBar/NavBar';
import Logo from '../../assets/logo.jpg';

const Header = () => {
	return (
		<header className='header'>
			<section className='header__name'>
				<img className='header__logo' src={Logo} alt='Wealth Health' />
				<h1 className='header__title'>HRnet</h1>
			</section>
			<NavBar />
		</header>
	);
};

export default Header;

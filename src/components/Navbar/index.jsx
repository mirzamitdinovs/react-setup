import React from 'react';
import { Navbar as FNavbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
	const location = useLocation();
	return (
		<FNavbar fluid={true} rounded={true}>
			<FNavbar.Brand href='https://flowbite.com/'>
				<img
					src='https://flowbite.com/docs/images/logo.svg'
					className='mr-3 h-6 sm:h-9'
					alt='Flowbite Logo'
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					Flowbite
				</span>
			</FNavbar.Brand>
			<FNavbar.Toggle />
			<FNavbar.Collapse>
				<Link to='/'>
					<FNavbar.Link active={location.pathname === '/'}>Home</FNavbar.Link>
				</Link>
				<Link to='/todos'>
					<FNavbar.Link active={location.pathname === '/todos'}>
						Todos
					</FNavbar.Link>
				</Link>
			</FNavbar.Collapse>
		</FNavbar>
	);
};

export default Navbar;

import React, { useContext } from 'react';
import { Navbar as FNavbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
const Navbar = () => {
	const { cart, getTotalAmount } = useContext(CartContext); //! 4.1
	const location = useLocation();

	console.log('cart: ', cart.length);
	return (
		<div className='px-10'>
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
					<Link to='/cart'>
						<FNavbar.Link active={location.pathname === '/todos'}>
							<div className='inline-flex relative '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-7 h-7'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
									/>
								</svg>
								<span className='sr-only'>Notifications</span>
								{cart.length ? (
									<div className='inline-flex absolute -top-3 -right-3 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900'>
										{getTotalAmount()}
									</div>
								) : null}
							</div>
						</FNavbar.Link>
					</Link>
				</FNavbar.Collapse>
			</FNavbar>{' '}
		</div>
	);
};

export default Navbar;

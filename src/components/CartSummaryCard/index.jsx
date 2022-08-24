import React, { useContext, useState } from 'react';
import CartContext from '../../contexts/CartContext';

const CartSummaryCard = () => {
	const [shipping, setShipping] = useState('free');
	const { getTotalCost, getTotalAmount } = useContext(CartContext);
	return (
		<div id='summary' className='w-1/4 px-8 py-10'>
			<h1 className='font-semibold text-2xl border-b pb-8'>Order Summary</h1>
			<div className='flex justify-between mt-10 mb-5'>
				<span className='font-semibold text-sm uppercase'>
					Items {getTotalAmount()}
				</span>
				<span className='font-semibold text-sm'>${getTotalCost()}</span>
			</div>
			<div>
				<label className='font-medium inline-block mb-3 text-sm uppercase'>
					Shipping
				</label>
				<select
					value={shipping}
					onChange={(e) => setShipping(e.target.value)}
					className='block p-2 text-gray-600 w-full text-sm'
				>
					<option value='free'>Standard shipping - 0.00</option>
					<option value='premium'>Premium shipping - $10.00</option>
				</select>
			</div>
			<div className='py-10'>
				<label
					htmlFor='promo'
					className='font-semibold inline-block mb-3 text-sm uppercase'
				>
					Promo Code
				</label>
				<input
					type='text'
					id='promo'
					placeholder='Enter your code'
					className='p-2 text-sm w-full'
				/>
			</div>
			<button className='bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase'>
				Apply
			</button>
			<div className='border-t mt-8'>
				<div className='flex font-semibold justify-between py-6 text-sm uppercase'>
					<span>Total cost</span>
					<span>${getTotalCost() + (shipping === 'free' ? 0 : 10)}</span>
				</div>
				<button className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default CartSummaryCard;

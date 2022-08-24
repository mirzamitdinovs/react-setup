import React, { useContext, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductsContext from '../../contexts/ProductsContext';

const HomePage = () => {
	const { products, categories } = useContext(ProductsContext);
	// 3. WE USED SELECTEDCATEGORY TO KEEP SELECTED CATEGORY VALUE
	const [selectedCategory, setSelectedCategory] = useState('all');

	const handleSelectCategory = (c) => {
		setSelectedCategory(c);
	};
	return (
		<div className='p-10'>
			{/*! 1. WE USED SINGLE LI WITH ALL VALUE TO SKIP FILTER AND DREW ALL CATEGORIES WITH MAP */}
			<ul className='flex flex-wrap text-sm font-medium text-center mb-10 text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
				<li className='mr-2 cursor-pointer'>
					<div
						onClick={() => handleSelectCategory('all')}
						aria-current='page'
						className='inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active '
					>
						All
					</div>
				</li>
				{categories.map((item, index) => (
					<li className='mr-2 cursor-pointer' key={index}>
						<div
							onClick={() => handleSelectCategory(item)}
							aria-current='page'
							className='inline-block p-4 rounded-t-lg  '
						>
							{item}
						</div>
					</li>
				))}
			</ul>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				{/* 2. BEFORE DRAWING PRODUCTS WE FILTERED PRODUCS BY IT'S CATEGORY */}
				{products
					.filter((item) =>
						selectedCategory === 'all'
							? item
							: item.category === selectedCategory
					)
					.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
			</div>
		</div>
	);
};

export default HomePage;

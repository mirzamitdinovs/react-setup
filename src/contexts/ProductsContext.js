import { useState, useEffect, createContext } from 'react';
import { GET_CATEGORIES, GET_PRODUCTS } from '../services/products.service';

const ProductsContext = createContext(); //* 1

//* 3 WE CAN'T DEFAULT EXPORT PROVIDER BECAUSE ONLY ONE DEFAULT EXPORT IS ALLOWED
export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]); //* 4
	const [categories, setCategories] = useState([]); //* 4

	//* 6 CALL FETCH DATA ONLY ONCE WHEN CONTEXT IS LOADED FIRST TIME
	useEffect(() => {
		fetchData();
	}, []);

	//* 5 CREATE FUNCTION TO FETCH DATA FROM OSHXONA AND SAVE IT IN STATES
	const fetchData = async () => {
		const resProducts = await GET_PRODUCTS();
		const resCategories = await GET_CATEGORIES();
		if (resProducts) {
			setProducts(resProducts);
		}
		if (resCategories) {
			setCategories(resCategories);
		}
	};

	//* 6 PASS STATES INSIDE VALUE TO USE THEM INSIDE COMPONENTS
	return (
		<ProductsContext.Provider value={{ products, categories }}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContext; //* 2 WE DEFAULT EXPORT ProductsContext

import axios from 'axios';

//! STEP 1- WE CREATE FILE IN SERVICE FOLDER AND CREATE FUNCTIONS TO FETCH DATA FROM BACKEND
//! STEP 2- WE CREATE CONTEXT TO STORE FETCHED DATA (src/contexts/ProductsContext.js)
//! STEP 3- WE WRAP OUR APP COMPONENT INSIDE PRODUCT CONTEXT
//! STEP 4- WE CALL AND USE PRODUCT CONTEXT VALUE INSIDE HOME PAGE
//* npm i axios
export const GET_PRODUCTS = async () => {
	try {
		const res = await axios.get('https://fakestoreapi.com/products');
		return res.data;
	} catch (err) {
		console.log('err: ', err.message);
	}
};
export const GET_CATEGORIES = async () => {
	try {
		const res = await axios.get('https://fakestoreapi.com/products/categories');
		return res.data;
	} catch (err) {
		console.log('err: ', err.message);
	}
};

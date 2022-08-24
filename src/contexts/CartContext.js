import { useState, createContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addProduct = (product) => {
		setCart([
			...cart,
			{
				...product,
				qty: 1,
			},
		]);
	};

	const removeProduct = (id) => {
		setCart(cart.filter((item) => item.id !== id));
	};

	const updateProductQty = (id, qty) => {
		if (qty === 0) {
			removeProduct(id);
		} else {
			setCart(
				cart.map((item) => (item.id === id ? { ...item, qty: qty } : item))
			);
		}
	};

	const getTotalAmount = () => {
		return cart.map((item) => item.qty).reduce((a, b) => a + b, 0);
	};

	const getTotalCost = () => {
		return cart
			.map((item) => item.qty * item.price)
			.reduce((a, b) => a + b, 0)
			.toFixed(2);
	};
	return (
		<CartContext.Provider
			value={{
				cart,
				addProduct,
				removeProduct,
				updateProductQty,
				getTotalAmount,
				getTotalCost,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;

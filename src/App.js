import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CartProvider } from './contexts/CartContext';
import { ProductsProvider } from './contexts/ProductsContext';
import { TodosProvider } from './contexts/TodosContext';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';
function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<ProductsProvider>
					<TodosProvider>
						<div className='container mx-auto'>
							<Navbar />
							<Routes>
								<Route path='/' element={<HomePage />} />
								<Route path='/todos' element={<TodosPage />} />
								<Route path='/cart' element={<CartPage />} />
							</Routes>
						</div>
					</TodosProvider>
				</ProductsProvider>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;

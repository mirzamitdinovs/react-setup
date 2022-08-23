import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ProductsProvider } from './contexts/ProductsContext';
import { TodosProvider } from './contexts/TodosContext';
import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';
function App() {
	return (
		<BrowserRouter>
			<ProductsProvider>
				<TodosProvider>
					<div className='container mx-auto'>
						<Navbar />
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/todos' element={<TodosPage />} />
						</Routes>
					</div>
				</TodosProvider>
			</ProductsProvider>
		</BrowserRouter>
	);
}

export default App;

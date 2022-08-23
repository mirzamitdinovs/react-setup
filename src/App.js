import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { TodosProvider } from './contexts/TodosContext';
import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';
function App() {
	return (
		<BrowserRouter>
			<TodosProvider>
				<div className='container'>
					<Navbar />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/todos' element={<TodosPage />} />
					</Routes>
				</div>
			</TodosProvider>
		</BrowserRouter>
	);
}

export default App;

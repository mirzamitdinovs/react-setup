import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';
function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/todos' element={<TodosPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

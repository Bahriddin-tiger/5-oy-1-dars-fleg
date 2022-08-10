import Header from './components/header/Header';
import './components/container.css';
import '../src/components/sorch/sorch.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About/About';
function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path={`/about/:name`} element={<About />} />
			</Routes>
		</div>
	);
}
export default App;

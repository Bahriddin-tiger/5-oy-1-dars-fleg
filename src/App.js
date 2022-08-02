import Header from './components/header/Header';
import Sorch from './components/sorch/Sorch';
import './components/container.css';
import '../src/components/sorch/sorch.css';
import searchIcon from '../src/components/imgs/icon-search-black.svg';
import { Card } from './components/card/Card';
import './components/card/item.css';
// import aqsh from "./components/imgs/aqsh.jpg"
// import germaniya from "./components/imgs/germaniya.jpg"
// import brazil from "./components/imgs/brazil.jpg"
// import ppokiston from "./components/imgs/ppokiston.jpg"
// import shotlandiya from "./components/imgs/shot.jpg"
// import albanya from "./components/imgs/albanya.jpg"
// import finlandiya from "./components/imgs/finlandiya.jpg"
// import afgonistan from "./components/imgs/afg'oniston.jpg"

import { useEffect } from 'react';
import { useState } from 'react';

function App() {
	const [todo, setTodo] = useState([]);
	const [value, setValue] = useState('');

	useEffect(() => {
		if (value.length) {
			fetch(`https://restcountries.com/v3.1/name/${value}`)
				.then((res) => res.json())
				.then((name) => setTodo(name))
				.catch((er) => console.log(er));
		} else {
			fetch(`https://restcountries.com/v3.1/all`)
				.then((res) => res.json())
				.then((name) => setTodo(name))
				.catch((er) => console.log(er));
		}
	}, [value]);

	return (
		<div className='App'>
			<Header />

			<div className='hero'>
				<div className='container'>
					<form
						onSubmit={(evt) => evt.preventDefault()}
						className='hero__inner'
						autoComplete='off'>
						<div className='hero__box'>
							<img className='serchimg' src={searchIcon} />
							<input
								onKeyUp={(evt) => {
									if (evt.code === 'Enter') {
										setValue(evt.target.value);
									}
								}}
								className='hero__input'
								type='text'
								name='text'
								placeholder='Search for a country…'
							/>
						</div>

						<select
							onKeyUp={(evt) => {
								if (evt.code === 'Enter') {
									setValue(evt.target.value);
								}
							}}
							className='hero__sellect'>
							<option defaultValue='Filter by Region'>Filter by Region</option>
							<option defaultValue='afrika'>Afrika</option>
							<option defaultValue='America'>America</option>
							<option defaultValue='Asia'>Asia</option>
							<option defaultValue='Europe'>Europe</option>
							<option defaultValue='Oceania'>Oceania</option>
						</select>
					</form>
				</div>
			</div>

			<div className='container'>
				<ul className='list'>
					{todo.map((e, index) => (
						<Card
							key={index}
							img={e.flags.png}
							name={e.name.common}
							Population={e.population}
							Region={e.region}
							Capital={e.capital}
						/>
					))}

					{/* <Card img={germaniya} name="Germany" Population="81,770,900" Region="Europe" Capital="Berlin" />
<Card img={aqsh} name="United States of America" Population="323,947,000" Region="Americas" Capital="Washington, D.C."  />
<Card img={brazil} name="Brazil"  Population="206,135,893" Region="Americas" Capital=": Brasília" />
<Card img={finlandiya} name="Iceland" Population="334,300" Region="Europe" Capital="Reykjavík"  />
<Card img={afgonistan} name="Afghanistan" Population="27,657,145" Region="Asia" Capital="Kabul"  />
<Card img={shotlandiya} name="Åland Islands" Population=" 28,875" Region="Europe" Capital=" Mariehamn"  />
<Card img={albanya} name="Albania" Population="2,886,026" Region="Europe" Capital=" Tirana"  />
<Card img={ ppokiston} name="Algeria" Population=" 40,400,000" Region="Africa" Capital="Algiers"  /> */}
				</ul>
			</div>
		</div>
	);
}
export default App;

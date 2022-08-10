import {Card} from '../../components/card/Card';
import {useEffect} from 'react';
import {useState} from 'react';
import searchIcon from '../../components/imgs/icon-search-black.svg';
import '../../components/card/item.css';
export const Home = () => {
	const [todo, setTodo] = useState([]);
	const [value, setValue] = useState('');
	const [select, setSelect] = useState([]);

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

	useEffect(() => {
		if (select !== 'Filter by region') {
			fetch(`https://restcountries.com/v3.1/region/${select}`)
				.then((res) => res.json())
				.then((name) => setTodo(name))
				.catch((er) => console.log(er));
		} else {
			fetch(`https://restcountries.com/v3.1/all`)
				.then((res) => res.json())
				.then((region) => setTodo(region))
				.catch((er) => console.log(er));
		}
	}, [select]);
	return (
		 <>
		<div className = 'hero' >
		<div className = 'container' >
		<form onSubmit = {
			(evt) => evt.preventDefault()
		}
		className = 'hero__inner'
		autoComplete = 'off' >
		<div className = 'hero__box' >
		<img alt = 'searchimg' className = 'serchimg' src = {
			searchIcon
		} /> 
		<input onKeyUp = {
			(evt) => {
				if (evt.code === 'Enter') {
					setValue(evt.target.value);
				}
			}
		}
		className = 'hero__input'
		type = 'text'
		name = 'text'
		placeholder = 'Search for a country…' />
		</div>
		 <select onChange = {
			(evt) => {
				setSelect(evt.target.value);
			}
		}
		defaultValue = {
			'Filter by region'
		}
		className = 'hero__sellect'>
		<option defaultValue = 'Filter by Region' > Filter by Region </option> <option defaultValue = 'afrika' > Afrika </option> <
		option defaultValue = 'America' > America </option> <
		option defaultValue = 'Asia' > Asia </option> <
		option defaultValue = 'Europe' > Europe </option> <
		option defaultValue = 'Oceania' > Oceania </option>
		 </select> 
		</form> 
		</div> 
		</div>
		 <div className = 'container' >
		<ul className = 'list' > {
			todo.length ? (
				todo.map((e, index) => ( <
					Card key = {
						index
					}
					item={e}
					
				
					/>
				))
			) : ( <img className = 'loading-io'
				src = {
					searchIcon
				}
				width = '203'
				height = '203'
				alt = 'loading icon' />
			)
		} </ul> 
		</div>
		 </>
	);
};

import './item.css';
import '../container.css';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
	return (
		<li className='item'>
			<Link className='ItemLink' to={'/about/'+item.name.common}  >
				<img alt='itemimg' className='item__img' src={item.flags.png} />
				<div className='item__box'>
					<h1 className='item__title'>{item.name.common}</h1>
					<p className='item__num'>
						<span className='item__span'>Population: </span> {item.population}
					</p>
					<p className='item__num'>
						<span className='item__span'>Region: </span>
						{item.region}
					</p>
					<p className='item__num num'>
						<span className='item__span'>Capital :</span>
						{item.capital}{' '}
					</p>
				</div>
			</Link>
		</li>
	);
};

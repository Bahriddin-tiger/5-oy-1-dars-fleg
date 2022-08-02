import './item.css';
import '../container.css';
// import flegImg from "../imgs/1280px-Flag_of_Germany.svg.png";

export const Card = ({ img, name, Population, Region, Capital }) => {
	return (
		<li className='item'>
			<img className='item__img' src={img} />
			<div className='item__box'>
				<h1 className='item__title'>{name}</h1>
				<p className='item__num'>
					<span className='item__span'>Population: </span> {Population}
				</p>
				<p className='item__num'>
					<span className='item__span'>Region: </span>
					{Region}
				</p>
				<p className='item__num num'>
					<span className='item__span'>Capital :</span>
					{Capital}{' '}
				</p>
			</div>
		</li>
	);
};

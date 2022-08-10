import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './About.scss'
import Row from "../../components/imgs/row-back.svg"
export const About = () => {
	const {name} = useParams();
	const navigate = useNavigate()

	const [posts, setPosts] = useState([])

	useEffect(()=>{

		axios.get(`https://restcountries.com/v3.1/name/${name}`)
		  .then(function (response) {
			setPosts(response.data);
		  })
		  .catch(function (error) {
			console.log(error);
		  })
	},[name])


	return ( 
		<>
	
		<div className='container'>
		<button className='back-btn' onClick={()=> navigate(-1)}>
			<img className='back-btn-img' src={Row} alt="row" width={20} height={20} />
			<p className='btn-text'>Back</p></button>
		{
				posts.length && posts.map((e)=>(
					<div key={e.name.common} className='row'>
						<img src={e.flags.svg} width={560} height={401} alt={e.name.official} />
						<div className='text-box' >
							<h1 className='about-title'>{e.name.common}</h1>
							<div className="row">
								<div className='counteres-box'>
									<p>Native Name:<span>{e.name.nativeName[Object.keys(e.name.nativeName)[0]].common}</span></p>
									<p>
									Population: <span>{e.population}</span>
									</p>
									<p>
									Region:<span>{e.region}</span>
									</p>
									<p>
									Sub Region: <span>{e.subregion}</span>
									</p>
									<p>
									Capital: <span>{e.capital}</span>
									</p>
								</div>
								<div  >
								<p >
								Top Level Domain: <span>{e.tld}</span>
								</p>
								<p>
								Currencies:<span>{e.currencies[Object.keys(e.currencies)[0]].name}</span>
								</p>

								<p >
								Languages: <span>{e.languages[Object.keys(e.languages)[0]]}</span>
								</p>
								
								</div>
							</div>
						{e?.borders?.length &&( 
						<div>
						<span className='border-text'>Border Countries: </span>
							{e.borders.map((evt)=>(
								<button className='btn-border' key={evt}>
									<Link className='border-link' to={'/about/'+evt}>{evt}</Link>
								</button>
							))}
						</div>)}
						</div>
					</div>
				))}
			</div>
	
	</>
);
};
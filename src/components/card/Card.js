import "./item.css";
import "../container.css";
// import flegImg from "../imgs/1280px-Flag_of_Germany.svg.png";

 const Card = (props) => {
    return(
        <li className="item">
          <img className="item__img" src={props.img}/>
            <div className="item__box" >
            <h1 className="item__title">
          {props.name}
            </h1>
            <p className="item__num"><span className="item__span">Population: </span> {props.Population}</p>
            <p className="item__num">
            <span className="item__span">Region: </span>
            {props.Region}
            </p>
            <p className="item__num num">
            <span className="item__span">Capital :</span>
                {props.Capital} </p>
            </div>
        </li>
    )
}

export default Card;
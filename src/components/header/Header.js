import "./Header.css";
import "../container.css"
import munImg from "../imgs/Path.png"

const Header = () =>{
    return(
        <header className="site-header">
            <div className="container">
                <div className="header__inner">
                    
                    <h1 className="header__title">
                    Where in the world?
                    </h1>
                    <div className="header__box">
                        <img className="header__img" src={munImg}/>
                    <button className="header__button">Dark Mode</button>   
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
import "../container.css"
import "./sorch.css"
import searchIcon from "../imgs/icon-search-black.svg"
const Sorch = () => {
    const value ="Search for a country…"
    return(
       <div className="hero">
        <div  className="container">
            <form className="hero__inner" autoComplete="off">
                <div className="hero__box">
                    <img className="serchimg" src={searchIcon}/>
                <input className="hero__input" type="text" name="text" placeholder="Search for a country…"></input> 
                </div>
 
                    <select className="hero__sellect" >
                        <option  defaultValue="Filter by Region">Filter by Region</option>
                        <option defaultValue="afrika">Afrika</option>
                        <option defaultValue="America">America</option>
                        <option defaultValue="Asia">Asia</option>
                        <option defaultValue="Europe">Europe</option>
                        <option defaultValue="Oceania">Oceania</option>
                    </select>
 
              
            </form>
        </div>
       </div>
    )
}
export default Sorch;
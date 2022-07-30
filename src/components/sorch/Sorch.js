import "../container.css"
import "./sorch.css"
import searchIcon from "../imgs/icon-search-black.svg"
const Sorch = () => {
    const value ="Search for a country…"
    return(
       <div className="hero">
        <div  className="container">
            <form className="hero__inner">
                <div className="hero__box">
                    <img className="serchimg" src={searchIcon}/>
                <input className="hero__input" type="text" name="text" value={value}></input> 
                </div>
 
                    <select className="hero__sellect" >
                        <option selected value="Filter by Region">Filter by Region</option>
                        <option value="afrika">Afrika</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
 
              
            </form>
        </div>
       </div>
    )
}
export default Sorch;
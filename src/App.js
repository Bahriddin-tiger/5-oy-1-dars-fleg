import Header from "./components/header/Header";
import Sorch from "./components/sorch/Sorch";
import Card from "./components/card/Card";
import "./components/card/item.css"
import aqsh from "./components/imgs/aqsh.jpg"
import germaniya from "./components/imgs/germaniya.jpg"
import brazil from "./components/imgs/brazil.jpg"
import ppokiston from "./components/imgs/ppokiston.jpg"
import shotlandiya from "./components/imgs/shot.jpg"
import albanya from "./components/imgs/albanya.jpg"
import finlandiya from "./components/imgs/finlandiya.jpg"
import afgonistan from "./components/imgs/afg'oniston.jpg"



function App() {


  return (
    <div className="App">
<Header/>
<Sorch/>
<div className="container">

<ul className="list">
<Card img={germaniya} name="Germany" Population="81,770,900" Region="Europe" Capital="Berlin" />
<Card img={aqsh} name="United States of America" Population="323,947,000" Region="Americas" Capital="Washington, D.C."  />
<Card img={brazil} name="Brazil"  Population="206,135,893" Region="Americas" Capital=": Brasília" />
<Card img={finlandiya} name="Iceland" Population="334,300" Region="Europe" Capital="Reykjavík"  />
<Card img={afgonistan} name="Afghanistan" Population="27,657,145" Region="Asia" Capital="Kabul"  />
<Card img={shotlandiya} name="Åland Islands" Population=" 28,875" Region="Europe" Capital=" Mariehamn"  />
<Card img={albanya} name="Albania" Population="2,886,026" Region="Europe" Capital=" Tirana"  />
<Card img={ ppokiston} name="Algeria" Population=" 40,400,000" Region="Africa" Capital="Algiers"  />

</ul>
</div>
    </div>
  );
}

export default App;


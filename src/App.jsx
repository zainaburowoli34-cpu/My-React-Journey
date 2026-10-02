import React from "react";
import Car from "./Intro/Car";
import DestructureCar from "./Intro/DestructureCar";
import Football from "./Intro/Football";
import State from "./Intro/State";
import Conditional from "./Intro/Conditional";
import Toggle from "./Intro/Toggle";
import Reg from "./Intro/Reg";
import Clock from "./DigitalClock/Clock";
// import './DigitalClock/App.css'
import Colour from "./ColourChanger/Colour";
import './ColourChanger/App.css';
import UseRef from "./UseRef";

// import Navbar from './navbar'
// import Body from './body'
const App = () => {
  return (
    // <div>
    //   {/* <Navbar/>
    //   <Body/>  */}
    // </div>
    // <>
    // <Car name = "Mercedes" brand = "GLE" model = {63}/>
    // <Car name = "BMW" brand = "Benz" model = {34}/>
    // </>
    // <>
    // <DestructureCar name = "Mercedes" brand = "GLE" model = {63}/>
    // </>
    <>
      {/* <Football/>   */}
      {/* <State />  
      <Conditional />   
      <Toggle />   */}
      {/* <Reg/>  */}
      {/* <Clock /> */}
      <Colour />
      <UseRef />
    </>
  );
};

export default App;

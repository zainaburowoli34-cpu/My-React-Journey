import React, { useState } from 'react'

const Colour = () => {
    const [colour,setColour] = useState("") 
  return ( 
    <div className= 'app' style={{background:colour, minHeight:"100vh"}}>  
    <div className='colour-box'> 
         <h1>BackgroundColor Changer</h1>  
         <p>Choose a Colour</p>
         <div className="buttons">
        <button className='yellow' onClick={()=>setColour("yellow")}>Yellow</button> 
        <button className='red' onClick={()=>setColour("red")}>Red</button>
        <button className='blue' onClick={()=>setColour("blue")}>Blue</button>
        <button className='purple' onClick={()=>setColour("purple")}>Purple</button>
        <button className='green' onClick={()=>setColour("green")}>Green</button> 
         </div>
    </div>
    </div> 
  )
}

export default Colour
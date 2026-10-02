import React from 'react'

const Football = () => {
    const shoot = () => {
        alert("GOAAAAALLLLL!!!")  
    }
  return (
    <div> 
        <button onClick={shoot}>Click</button> 
        <button onClick={()=> {return alert("Offside")}}>Send</button>
    </div> 
  ) 
} 
 
export default Football 
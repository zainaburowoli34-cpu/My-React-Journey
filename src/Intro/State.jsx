import React, { useState } from 'react'  

const State = () => {   
  const [count,setCount] = useState(0) 

  const increaseCount = () =>{   
    setCount(count + 1)  
  } 
  const decreaseCount = () =>{  
    setCount(count - 1) 
  } 
  return ( 
    <div> 
      <h1>Count: {count}</h1> 
      <button onClick={increaseCount}>Add</button> 
      <button onClick={decreaseCount}>Remove</button> 
    </div>  
  )  
}  

export default State  
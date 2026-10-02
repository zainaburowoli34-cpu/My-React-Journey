import React from 'react'

const Car = (props) => { 
  return ( 
    <div>
        <h1>I own a {props.name}</h1> 
        <h1>I am driving {props.brand}</h1> 
        <h1>{props.model} model</h1> 

    </div> 
  ) 
} 

export default Car 
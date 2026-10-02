// ref access DOM element directly 
// it is a react hook that returns an object with a single property

import React, { useEffect, UseRef } from 'react'

const UseRef = () => {
    const inputRef = React.useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    const changeValue = () =>{
        inputRef.current.value = "Hello xee xee"
    } 
  return (
    <div>
        <input ref={inputRef} type="text" placeholder='Enter Your Value' />
        <>
        <input ref={inputRef} />
        <button onClick={changeValue}>Change Value</button>
        </>
    
    </div>
  )
}

export default UseRef
// state don't have an access to DOM
import React, { useEffect, useState } from 'react' 

const Clock = () => {  
    const [time,setTime] = useState(new Date())   
    const [isRunning, setIsRunning] = useState(false)   
    const [darkMode,setDarkMode] = useState(false) 
    useEffect(()=> {   
    if (!isRunning) return 
     const timer = setInterval(()=> {    
            setTime(new Date())  
        },1000)  
        return () => {   
        clearInterval(timer)  
    }  
    },[isRunning]) 
    
    const day = time.toLocaleDateString(undefined,{weekday:"long"})  
    const date = time.toLocaleDateString() 

    const formattedTime = time.toLocaleTimeString([],{ 
      hour:"2-digit", 
      minute:"2-digit", 
      second:"2-digit", 
      hour12:false 
    }) 

  return (  
    <div className={darkMode ? "clock-container dark" : "clock-container"}> 
     <h1>Digital Clock</h1>  
     <div className='day'>  
       {day}   
     </div> 
     <div className='date'>
      {date}
     </div> 
     <div className='clock'> 
      {formattedTime} 
     </div>
     <div className='buttons'>
      <button onClick={()=> setIsRunning(true)}> 
        Start 
      </button> 
        <button onClick={()=> setIsRunning(false)}> 
        Stop 
      </button>
        <button onClick={()=> setDarkMode((prev)=> !prev)}>
        {darkMode ? "Light Mode" : "Dark Mode"} 
      </button> 
     </div>
    </div> 
  )  
}  

export default Clock  
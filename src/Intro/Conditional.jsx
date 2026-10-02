import React, { useState } from 'react' 

const Conditional = () => {  
    const [isOpen,setIsOpen] = useState(false) 
    
  return (  
    <div> 
        <button onClick={()=> setIsOpen((prev)=> !prev)}>  
         {isOpen ? "OPEN" : "CLOSE"}  
        </button>  
    </div> 
  )  
} 

export default Conditional    
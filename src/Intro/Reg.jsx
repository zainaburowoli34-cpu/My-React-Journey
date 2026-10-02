import React, { useState } from 'react'  

const Reg = () => { 
    const [form, setForm] = useState({Name:" ",email:" ",password:" "})  

    const submit = (e) =>{   
        e.preventDefault()  
        localStorage.setItem("user", JSON.stringify(form)) 
        alert("Registration Successful")  
    } 
  return (   
    <div> 
        <form onSubmit={submit}>  
     <input type="text" placeholder='enter your name' onChange={(e)=>setForm({...form,Name:e.target.value})} />   
     <input type="email" placeholder='enter your email' onChange={(e)=>setForm({...form,email:e.target.value})} />        
     <input type="password" placeholder='enter your password'  onChange={(e)=>setForm({...form,password:e.target.value})} />  
     <button>Register</button>     
        </form>  
    </div> 
  ) 
}  

export default Reg  
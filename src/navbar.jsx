import React, { useContext } from 'react'
import AuthProvider from './AuthContext'

const navbar = () => {
    const {user} = useContext(AuthProvider) 
  return (
        <nav style={{display:'flex',justifyContent:'space-between',padding:'10px',background:'#eee'}}>
            <h3>My App</h3> 
            {user ? <p>welcome back, <strong>{user.name}</strong>!</p> : <p>Please Login</p>}  
        </nav>  
  )
}

export default navbar
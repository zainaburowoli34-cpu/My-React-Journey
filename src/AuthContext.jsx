import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null) 

const AuthProvider = ({children}) => { 
   const [user,setUser] = useState(null) 
   const logIn = (username) =>{ 
     setUser({
    name: username,
    role: "admin", 
}) 
   }

   const logOut = () =>{
       setUser(null)
   }
  return (
    <div>
        <AuthContext.Provider value={{user,logIn,logOut}}> 
            {children} 
        </AuthContext.Provider>
    </div> 
  )
}

export default AuthProvider 

// export function useAuth(){
//     return useContext(AuthContext) 
// } 
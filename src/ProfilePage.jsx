import React, { useContext } from 'react'

const ProfilePage = () => {
    const {user,logIn,logOut} = useContext(AuthProvider) 
  return ( 
    <div style={{padding:'20px'}}>
    <h2>User Profile</h2>
    {user? <p>Login as: {user.name}</p>} 
    </div> 
  )
}

export default ProfilePage
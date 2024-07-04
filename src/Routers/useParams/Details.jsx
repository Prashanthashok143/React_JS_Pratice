import React from 'react'
import { useParams } from 'react-router-dom'
import { UserData } from './UsersData';

const Details = () => {
    const {id}=useParams();
    console.log(id) 
    // eslint-disable-next-line
    const userDetailsData=UserData.find((eachUser)=> eachUser.id == id);
  return (
    <div>
        <h1>Id : {userDetailsData.id}</h1>  
     <h1>Name : {userDetailsData.name}</h1>
     <h1>Username : {userDetailsData.username}</h1>
     <h1>Email : {userDetailsData.email}</h1>
      
    </div>
  )
}

export default Details
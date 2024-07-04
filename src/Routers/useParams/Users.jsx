import React from 'react'
import { UserData } from './UsersData' 
import { Link } from 'react-router-dom'
const Users = () => {

  return (
    <div>
 
  {
    UserData.map(({id,name})=>(
   
     <Link to={`/users/${id}`} key={id} >
     <article>
     <h1>{id}</h1>
    <h1>{name}</h1>
     </article>
     </Link>
  
    ))
  }

    </div>
  )
}

export default Users
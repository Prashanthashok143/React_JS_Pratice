import React,{useContext} from 'react'

import { UserContext } from './Home';

const Example = () => {
    const {user,setUser}=useContext(UserContext)
  return (
    <div>Example :
    <input type='text'  value={user} onChange={(e)=>setUser(e.target.value)}/>
    </div>

  )
}

export default Example
import React, { useContext } from 'react'
import { Contextvalue } from './ParentComp'

const ChildComp = () => {
    const {name,setName}=useContext(Contextvalue)
  return (
    <div>ChildComp
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}

export default ChildComp
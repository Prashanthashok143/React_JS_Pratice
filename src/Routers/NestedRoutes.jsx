import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NestedRoutes = () => {
  return (
    <div>
     <h1 className='text-center'>Nested Routes</h1> 
     <ul className="nav justify-content-center">  
     <li className="nav-item">
          <Link className="nav-link" to="nested1">Nested1</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="nested2">Nested2</Link>
        </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default NestedRoutes
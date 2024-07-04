import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { createProvider } from "../../App";


const Layout = () => {
  const {isLogin}=useContext(createProvider)
  return (
    <div>  <nav>
    <ul>
    <li>
        <Link to="/signup">Login</Link>
        </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <Link to="/blogs/9603049161/Prashanth?age=22">Prashanth</Link> <br/>
        <Link to="/blogs/8179556208/Ashok?age=42">Ashok</Link> <br/>
        <Link to="/blogs/8688759378/Shirisha?age=24">Shirisha</Link> <br/>
      </li> */}
      { isLogin && <><li>
          <Link to="/contact">Contact</Link>
         
        </li>
        <li>
        <Link to="/api">API</Link>
        </li>
        <li>
        <Link to="/pratice">Pratices</Link>
        </li></>
      }
    </ul>
  </nav>

  <Outlet /></div>
  )
}

export default Layout
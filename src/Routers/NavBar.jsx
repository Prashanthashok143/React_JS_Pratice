import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <nav className="navbar justify-content-center bg-dark  border-body" data-bs-theme="dark">
        <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/nestedRoutes">Nested Routes</Link>
        </li>
       
      </ul>
</nav>
      
    </div>
  );
};

export default NavBar;

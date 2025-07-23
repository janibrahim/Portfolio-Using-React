import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="sticky-nav-options">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          About
        </NavLink>

        <NavLink 
          to="/skills" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Skills
        </NavLink>

        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Projects
        </NavLink>

        <NavLink 
          to="/clients" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Clients
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

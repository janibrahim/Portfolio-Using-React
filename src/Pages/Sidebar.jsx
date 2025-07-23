import React, { useState } from 'react';
import JAN from '../assets/JAN.png';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <img src={JAN} alt="Jan Ibrahim" />
        <p>Hello it's me</p>
        <h1><span>Jan</span> Ibrahim.</h1>
        <ol>
          <li><i className="fa-brands fa-square-github"></i><a href="https://github.com/janibrahim" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><i className="fa-brands fa-linkedin"></i><a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><i className="fa-brands fa-square-whatsapp"></i><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
          <li><i className="fa-solid fa-envelope"></i><a href="mailto:safiullahsu2005@gmail.com?subject=Hello Safi&body=I%20would%20like%20to%20discuss...">Email</a></li>
        </ol>
      </div>

      <div className="main-content">
        <nav className="sticky-nav">
          <div className="nav-icons">
            <span
              className="icon"
              style={{ cursor: 'pointer' }}
              onClick={toggleDropdown}
            >
              🔽
            </span>

            {isDropdownOpen && (
              <div id="dropdownMenu" className="dropdown-content">
                <ol>
                  <li><a href="https://github.com/Safiullah55555" target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li><a href="https://www.linkedin.com/in/safi-ullah-563173327/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
                  <li><a href="mailto:safiullahsu2005@gmail.com?subject=Hello Safi&body=I%20would%20like%20to%20discuss...">Email</a></li>
                </ol>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

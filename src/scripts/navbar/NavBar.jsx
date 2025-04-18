import { useState } from 'react'
import './NavBar.css'

function NavBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        {/* Company Title/Logo */}
        <div className="company-title"><a href="#"><p>Purplejam Cafe</p></a></div>
        
        {/* Navbar */}
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#page-menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* TO-DO: DROPDOWN LIST FOR PORTRAIT. */}
        <div id="mini-menu">
          <a href="#page-menu">
            <img id="navi-icon" src="src/assets/menu-icon.svg" alt="Navi" />
          </a>
        </div>
        
      </div>
    </>
  )
}

export default NavBar;
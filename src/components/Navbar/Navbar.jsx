import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsClicked(false)
  }, [location])

  function handleClickNav() {
    setIsClicked(!isClicked)
  }

  return (
    <nav>
      <div className={isClicked === false ? "links" : "links mobile-links"}>
        <a style={{ "--i": 1 }}><Link to={"/"}>Home</Link></a>
        <a style={{ "--i": 2 }}><Link to={"/projects"}>Projects</Link></a>
        <a style={{ "--i": 3 }}><Link to={"/experience"}>Experience</Link></a>
      </div>

      <div className='toggle-button-container'>
        <button onClick={handleClickNav} className='toggle-button'>
          {isClicked === false ? <ReorderIcon sx={{ fontSize: 35 }} /> : <CloseIcon sx={{ fontSize: 35 }} />}
        </button>
      </div>
    </nav>
  )
}
export default Navbar
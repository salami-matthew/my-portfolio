import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  const date = new Date();
  let currentYear = date.getFullYear();

  return (
    <footer>
      <div className='footer-icons'>
        <a href='#' style={{ "--i": 4 }}><InstagramIcon /></a>
        <a href='#' style={{ "--i": 5 }}><TwitterIcon /></a>
        <a href='#' style={{ "--i": 6 }}><GitHubIcon /></a>
      </div>
      <p className='copyright'>&copy; {currentYear} Salami Matthew</p>
    </footer>
  )
}

export default Footer
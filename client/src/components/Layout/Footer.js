import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <h4 className='text-center'>
        2023 © Sara Abbessi
      </h4>
      <p className="text-center mt -3"  > 
      <Link to="/about">About</Link> 
      |
      <Link to="/contact">Contact</Link> 
      |
      <Link to="/policy">Privacy & Security Policy</Link> 
      </p>
    </div>
  )
}

export default Footer


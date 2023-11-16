import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" classname="navbar-logo">
            <img src="./public/images/logo.png" alt="Logo"/>
        </Link>
        </div>
    </nav>

    </>
  )
}

export default Navbar; 
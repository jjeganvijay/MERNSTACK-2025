import { Link } from 'react-router-dom';
import '../../css/Nabar.css';
import { useState } from 'react';
const Navbar = ({ onLogout }) => {
 
  const styling = {
    textDecoration: 'underline',
    color: 'blue',
    listStyleType: 'none',
    textAlign: 'center',
  };

  return (
    <header>
      <nav>
        <ol style={styling}>
          <li><Link className="link" to="/home">Home</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to="/gallery">Gallery</Link></li>
          <li><Link className="link" to="/contact">Contact</Link></li>
         
        
          <li><Link className="link" to="/Signup">Signup</Link></li>

          <li>
            <Link
              className="link"
              to="/"
              onClick={() => {

                onLogout();
              }}
            >
              Logout
            </Link>
          </li>

        </ol>
      </nav>
    </header>
  );
};

export default Navbar;

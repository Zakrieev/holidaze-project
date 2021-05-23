import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../../context/AuthContext";
import "../../sass/style.scss";


function Navbar({favNum}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [auth] = useContext(AuthContext);
  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img to='/' src="/assets/homelogo.png" alt="logo" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/accommodations'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Accommodations
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/favourites'
                className='nav-links fav-icon'
                onClick={closeMobileMenu}
              >
                <i className="far fa-heart" /><span>{favNum}</span>
              </Link>
            </li>

            {auth ? (
              <li className="nav-item">
                <Link to="/admin" className="nav-links" onClick={closeMobileMenu}>Admin</Link>
              </li>
            ) : ( 
              <li className='nav-item'>
              <Link
                to='/signin'
                className='nav-links'
                onClick={closeMobileMenu}>
               <i className="[ far fa-user ]" />
              </Link>
            </li> 
            )}
          </ul>
        </div>
      </nav>
   </>
  );
}

export default Navbar;

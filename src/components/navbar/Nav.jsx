import React, { useEffect, useState } from 'react'
import netflixLogo from '../../assets/images/netflix-logo.png'
import './nav.scss';
import { useNavigate } from "react-router-dom";
import { ROUTE_URL } from "../../shared/constants";

const Nav = () => {
  const [ showNav, setShowNav ] = useState(false);
  const navigate = useNavigate();

  const navBarTransition = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navBarTransition);
    return () => {
      window.removeEventListener("scroll", navBarTransition);
    }
  }, [])

  return (
    <div className={ `nav ${ showNav && 'nav__black' }` }>
      <div className="nav__content">
        <img
          className="nav__logo"
          src={ netflixLogo }
          alt=""
          onClick={ () => {
            navigate(ROUTE_URL.HOME)
          } }
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
          onClick={ () => {
            navigate(ROUTE_URL.PROFILE)
          } }
        />
      </div>
    </div>
  )
}

export default Nav;
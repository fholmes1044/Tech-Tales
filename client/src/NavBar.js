import React, {useContext} from "react";
import { UserContext } from "./context/user";
import { NavLink} from "react-router-dom";
import './styling/NavBar.css'

function NavBar() {
const {user, logout, loggedIn} = useContext(UserContext)

const logoutUser = (e) => {
  e.preventDefault()
  fetch("/logout",{
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    },
  })
    .then(() =>{
      logout()
    })
}


if (loggedIn && user) {
  return (
    <nav id="navbar">
    {/* <div id="navbar"> */}
      <div className="navbar-container">
        <div className="navbar-brand">

      {/* <h2 id="navbarh2"> {user.full_name}, It is time to reflect</h2> */}
        <img 
            id="navbar-logo"
            src="https://i.imgur.com/NvMO05y.png"
            alt="Logo"
          />
        </div>
      {/* <br/> */}
      <ul className="navbar-links">
        <li className="navbar-item">
      <NavLink
        to="/"
        exact
        activeClassName="activeLink"
        className="navbar-link" 
      >
        Home
      </NavLink>
        </li>
        <li className="navbar-item">
      <NavLink
        to="/events"
        exact
        activeClassName="activeLink"
        className="navbar-link"
      >
        All Events
      </NavLink>
        </li>
        <li className="navbar-item">
      <NavLink
        to="/reviews"
        exact
        activeClassName="activeLink"
        className="navbar-link"
      >
        My Reviewed Events
      </NavLink>
      </li>
      <li className="navbar-item">
      <button onClick={logoutUser}>Sign Out</button>
      </li>
      </ul>
    </div>
    </nav>
  );
}else {
  return (
    <nav id="navbar">
     <div className="navbar-container">
     <ul className="navbar-links">
     <li className="navbar-item">
      <NavLink
        to="/"
        exact
        activeClassName="activeLink"
        className="navbar-link"
      >
        <button className="navbar-button">Home</button>
      </NavLink>
      </li>
      <li className="navbar-item">
      <NavLink
        to="/login"
        activeClassName="activeLink"
        className="navbar-link"
      >
        <button className="navbar-button">Login</button>
      </NavLink>
      </li>
      <li className="navbar-item">
      <NavLink
        to="/signup"
        activeClassName="activeLink"
        className="navbar-link"
        >
        <button className="navbar-button">Signup</button>
      </NavLink>
      </li>
    </ul>
    </div>
    </nav>
  )
}
  
  
}

export default NavBar;
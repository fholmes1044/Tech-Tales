import React, {useContext} from "react";
import { UserContext } from "./context/user";
import { NavLink} from "react-router-dom";

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
    <div id="navbar">

      <h2> {user.full_name}, It is time to reflect</h2>

      <br/>
      
      <NavLink
        to="/"
        exact
        activeClassName="activeLink"
        className="navbar-link"
        
      >
        Home
      </NavLink>
     
      <NavLink
        to="/events"
        exact
        activeClassName="activeLink"
        className="navbar-link"
      
      >
        All Events
      </NavLink>

      <NavLink
        to="/reviews"
        exact
        activeClassName="activeLink"
        className="navbar-link"
        
      >
        My Reviewed Events
      </NavLink>
      <button onClick={logoutUser}>Sign Out</button>
    </div>
  );
}else {
  return (
    <div>
      <NavLink
      to="/login">
        <button>Login</button>
      </NavLink>
      <NavLink
        to="/signup">
        <button>Signup</button>
      </NavLink>
    </div>
  )
}
  
}

export default NavBar;
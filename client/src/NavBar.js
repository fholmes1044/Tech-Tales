import React, {useContext} from "react";
import { UserContext } from "./context/user";
import { NavLink , useHistory} from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "180px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "rgb(59, 148, 172)",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
const {user, logout, loggedIn} = useContext(UserContext)
const history = useHistory()

const logoutUser = (e) => {
  e.preventDefault()
  fetch("/logout")
    .then(() =>{
      logout()
      history.push("/")
    })
}
console.log(loggedIn,"logged")
if (loggedIn ) {
  return (
    <div id="navbar">

      <h1> Hello {user.full_name}</h1>
      <br/>
      
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
     
      <NavLink
        to="/events"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Events
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
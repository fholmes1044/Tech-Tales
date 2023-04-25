import React, {useContext} from "react";
import { UserContext } from "./context/user";
import { NavLink } from "react-router-dom";

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
const {user, logout} = useContext(UserContext)

  return (
    <div id="navbar">

      <h1> Hello </h1>
      <br/>
      <button onClick={logout}></button>
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
    </div>
  );
}

export default NavBar;
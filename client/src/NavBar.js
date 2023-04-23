import React from "react";
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

  return (
    <div id="navbar">
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
        to="/hosts"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Hosts
      </NavLink>
    </div>
  );
}

export default NavBar;
import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <NavLink to="/" exact={true}>
            Home
          </NavLink>
          <NavLink to="/todo">Todo</NavLink>
          <NavLink to="/about">Information</NavLink>
          <NavLink to="/user">Users</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/form">Form</NavLink>
          <NavLink to="/event">Event</NavLink>
        </div>
      </div>
    );
  }
}
export default Nav;

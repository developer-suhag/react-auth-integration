import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <NavLink activeClassName="selected" to="/home">
        Home
      </NavLink>
      <NavLink activeClassName="selected" to="/orderplace">
        Order Place
      </NavLink>
      <NavLink activeClassName="selected" to="/shipping">
        Shipping
      </NavLink>
      <NavLink activeClassName="selected" to="/login">
        Login
      </NavLink>
      <NavLink activeClassName="selected" to="/register">
        Registration
      </NavLink>
      <span>{user.displayName} </span>
      {user?.email && <button onClick={logOut}>Log Out</button>}
    </div>
  );
};

export default Header;

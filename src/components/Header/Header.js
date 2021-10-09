import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <div className="header">
      <NavLink activeClassName="selected" to="/home">
        Home
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

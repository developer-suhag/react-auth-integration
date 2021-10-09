import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  return (
    <div>
      <h3>Please login</h3>
      <button onClick={signInUsingGoogle}>Sign In with Google</button>
      <br />
      <Link to="/register">New User?</Link>
    </div>
  );
};

export default Login;

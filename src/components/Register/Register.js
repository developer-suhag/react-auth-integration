import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Please Register</h3>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email Address" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
      </form>
    </div>
  );
};

export default Register;

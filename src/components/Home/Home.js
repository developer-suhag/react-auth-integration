import React from "react";
import useAuth from "../../Hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3>Welcome home</h3>
      <h5>{user.displayName}</h5>
    </div>
  );
};

export default Home;

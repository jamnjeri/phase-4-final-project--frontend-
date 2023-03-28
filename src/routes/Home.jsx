import React from "react";

const Home = ({ onLogout }) => {
    return (
      <div>
        <button onClick={onLogout}>Logout</button>
      </div>
    );
  };

export default Home;

import React, { useState } from "react";
import "./App.css";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import Home from "./routes/Home";

function App() {
  // Initialize state variables
  const [currentForm, setCurrentForm] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to switch between login and register forms
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {/* Render home component if user is logged in */}
      {isLoggedIn ? (
        <Home onLogout={handleLogout} />
      ) : (
        // Render login or register form, depending on currentForm state
        currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} onLogin={handleLogin} />
        ) : (
          <Register onFormSwitch={toggleForm} onLogin={handleLogin} />
        )
      )}
    </div>
  );
}

export default App;

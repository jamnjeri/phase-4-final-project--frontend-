import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      {
        isLoggedIn ?
        <>
        <Home />
        </> :
          (currentForm === "login" ? <Login onFormSwitch={toggleForm} onLogin={handleLogin} /> : <Register onFormSwitch={toggleForm} onLogin={handleLogin} />)
      }
    </div>
  );
}


export default App;

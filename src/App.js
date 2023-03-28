import React, { useState, useEffect } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import Home from "./routes/Home";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      {
        isLoggedIn ?
        <>
        <Home onLogout={handleLogout} />
        </> :
          (currentForm === "login" ? <Login onFormSwitch={toggleForm} onLogin={handleLogin} /> : <Register onFormSwitch={toggleForm} onLogin={handleLogin} />)
      }
    </div>
  );
}



export default App;

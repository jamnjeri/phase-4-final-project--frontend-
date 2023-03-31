import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from '../assests/logo.png';

function Login({setIsLoggedIn, setUserId, userId}) {
 
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  let navigate = useNavigate();

  function recipeListAccess(response) {
    const data = response.data
    setUserId (data.id)
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

        fetch('https://zamil-petfinder.onrender.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        })
        .then(response => {
          if (response.ok) {
             setIsLoggedIn(true);
             response.json().then(recipeListAccess)
            navigate("/home");
          } else {
            throw new Error('Something went wrong');
          }
        })
        .catch(error => {
          console.error(error);
        });   
      
      
    }

  return (
    <div className="container-fluid bg-black h-screen" id="log">
      <img src={logo} alt="Logo" width="200" height="180" class="d-inline-block align-text-top"/>
      <center className="text-yellow-400 text-4xl mb-9">
        <h1>LOGIN</h1>
      </center>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-bold mb-2">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white font-bold mb-2">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="text-center">
          <Link type="submit" to="/" className="bg-white hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </Link>
          <p className="text-white mt-4">
            Need an account? <Link to="/signup" className="font-bold text-yellow-400">Sign up?</Link>
          </p>
        </div>
      </form>
      
  </div>
     
  );
}

export default Login;
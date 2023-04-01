import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assests/logo.png";

function Signup({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const nav = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        firstname: formData.firstname,
        lastname: formData.lastname,
        username: formData.username,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // setIsLoggedIn(true);
          nav("/");
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container-fluid bg-black h-screen">
      <img src={logo} alt="Logo" width="200" height="180" className="d-inline-block align-text-top" />
      <center className="text-yellow-400 text-4xl mb-9">
        <h1>SIGNUP</h1>
      </center>

      <form onSubmit={handleSubmit} className="mt-4 max-w-sm mx-auto">
        <div className="mb-4">
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded-md"
            placeholder="First Name"
            name="firstname"
            id="firstname"
            onChange={handleChange}
            value={formData.firstname}
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Last Name"
            name="lastname"
            id="lastname"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded-md"
            placeholder="@Username"
            name="username"
            id="username"
            onChange={handleChange}
            value={formData.username}
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            className="block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Email Address"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            className="block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className="text-center">
          <Link type="submit" to="/login" className="bg-white hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Signup
          </Link>
          <p className="text-white mt-4">
          Already registered ? <Link to="/login" className="font-bold text-yellow-400">Login?</Link>
          </p>
        </div>
      </form>

    </div>
    );
}
export default Signup;
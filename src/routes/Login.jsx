import React, { useState } from "react";
import Footer from '../Footer/footer';

export const Login = (props) => {
  // Initialize state variables for email, password, reset password, and reset email
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [resetPassword, setResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  // When the login form is submitted, prevent default form behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the user's inputted email and pass values
    console.log(email);
    console.log(pass);
    // Call the onLogin prop function passed down from parent component with user email
    props.onLogin(email);
  }

  // When reset password form is submitted, prevent default form behavior and log reset email
  const handleResetSubmit = (e) => {
    e.preventDefault();
    console.log(resetEmail);
  }

  // When "Forgot Password?" button is clicked, set resetPassword to true to show reset password form
  const handleResetClick = () => {
    setResetPassword(true);
  }

  // When "Back to Login" button is clicked within reset password form, set resetPassword to false to go back to login form
  const handleBackClick = () => {
    setResetPassword(false);
  }

  // Return the JSX for the Login component with conditional rendering based on resetPassword state variable
  return (
    <div className="auth-form-container">
      {/* Display "Reset Password" or "Login" depending on resetPassword state */}
      <h2>{resetPassword ? 'Reset Password' : 'Login'}</h2>
      
      {/* If resetPassword is true, display the reset password form */}
      {resetPassword ? (
        <form className="reset-form" onSubmit={handleResetSubmit}>
          <label htmlFor="reset-email">Email</label>
          <input 
            value={resetEmail} 
            onChange={(e) => setResetEmail(e.target.value)} 
            type="text" 
            placeholder="youremail@gmail.com" 
            id="reset-email" 
            name="reset-email" 
            required 
          />
          <button type="submit">Reset Password</button>
          <button className="link-btn" onClick={handleBackClick}>Back to Login</button>
        </form>
      ) : (
        // If resetPassword is false, display the login form
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            placeholder="youremail@gmail.com" 
            id="email" 
            name="email" 
            required 
          />
          <label htmlFor="password">Password</label>
          <input 
            value={pass} 
            onChange={(e) => setPass(e.target.value)} 
            type="password" 
            placeholder="********" 
            id="password" 
            name="password" 
            required 
          />
          <button type="submit">Log In</button>
          <button className="link-btn" onClick={handleResetClick}>Forgot Password?</button>
        </form>
      )}

      {/* If resetPassword is false, display "Don't have an account? Register here." button that calls onFormSwitch prop function */}
      {!resetPassword && (
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
          Don't have an account? Register here.
        </button>
      )}
      <footer/>
    </div>
  )
}

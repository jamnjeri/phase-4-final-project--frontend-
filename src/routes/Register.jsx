import React, { useState } from "react";

export const Register = ({ onLogin, onFormSwitch }) => {
  // Initialize state fields using a single useState hook
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phoneNumber: '',
    age: '',
  });

  // Initialize validation error state to an empty string
  const [validationError, setValidationError] = useState('');

  // Update form data when input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      // Display validation error message if passwords do not match
      setValidationError("Passwords do not match");
      return;
    }

    // Call onLogin handler if form data is valid
    onLogin();
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Use label attribute to associate input with its label */}
        <label>
          Full name
          <input
            value={formData.name}
            onChange={handleInputChange}
            type="text"
            name="name"
            placeholder="Full Name"
            required />
        </label>

        <label>
          Email
          <input
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            placeholder="youremail@gmail.com"
            name="email"
            required />
        </label>

        <label>
          Password
          <input
            value={formData.password}
            onChange={handleInputChange}
            type="password"
            placeholder="********"
            name="password"
            required />
        </label>

        <label>
          Confirm Password
          <input
            value={formData.confirmPassword}
            onChange={handleInputChange}
            type="password"
            placeholder="********"
            name="confirmPassword"
            required />
        </label>

        <label>
          Phone Number
          <input
            value={formData.phoneNumber}
            onChange={handleInputChange}
            type="tel"
            placeholder="+1-555-555-1212"
            name="phoneNumber"
            required
            pattern="[0-9]+"
            maxLength="10"
            title="Please enter numbers only" />
        </label>

        <label>
          Age
          <input
            value={formData.age}
            onChange={handleInputChange}
            type="number"
            placeholder="18"
            name="age"
            required
            min="0"
            max="120"/>
        </label>

        {/* Display validation error message if any */}
        {validationError && <div style={{color: "red"}}>{validationError}</div>}

        <button type="submit">Register</button>
      </form>

      {/* Use onClick event handler to switch to login form */}
      <button className="link-btn" onClick={() => onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

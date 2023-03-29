import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [validationError, setValidationError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
          setValidationError("Passwords do not match");
          return;
        }
        
        console.log(email);
        props.onLogin();
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" required />
                
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
                
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
                
                <label htmlFor="confirm-password">Confirm Password</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="********" id="confirm-password" name="confirm-password" required />
                
                <label htmlFor="phone-number">Phone Number</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="+1-555-555-1212" id="phone-number" name="phone-number" required pattern="[0-9]+" maxLength="10" title="please enter numbers only"/>
                
                <label htmlFor="age">Age</label>
                <input value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="18" id="age" name="age" required min="0" max="120"/>

                {validationError && <div style={{color: "red"}}>{validationError}</div>}
                

                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}

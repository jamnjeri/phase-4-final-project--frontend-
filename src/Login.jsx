import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [resetPassword, setResetPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        props.onLogin();
    }
    

    const handleResetSubmit = (e) => {
        e.preventDefault();
        console.log(resetEmail);
    }

    const handleResetClick = () => {
        setResetPassword(true);
    }

    const handleBackClick = () => {
        setResetPassword(false);
    }

    return (
        <div className="auth-form-container">
            <h2>{resetPassword ? 'Reset Password' : 'Login'}</h2>
            {resetPassword ?
                <form className="reset-form" onSubmit={handleResetSubmit}>
                    <label htmlFor="reset-email">Email</label>
                    <input value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="reset-email" name="reset-email" required />
                    <button type="submit">Reset Password</button>
                    <button className="link-btn" onClick={handleBackClick}>Back to Login</button>
                </form>
                :
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
                    <button type="submit">Log In</button>
                    <button className="link-btn" onClick={handleResetClick}>Forgot Password?</button>
                </form>
            }
            {!resetPassword &&
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            }
        </div>
    )
}


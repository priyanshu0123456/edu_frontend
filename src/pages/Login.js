import React from "react";
import "./Auth.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Welcome Back!</h2>
        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="switch-text">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

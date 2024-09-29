import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./login.css";
import bg2 from './assets/bg2.jpg';
import Swal from 'sweetalert2'; 

const LoginRegister = () => {
  const [formState, setFormState] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState === "login") {
      console.log("Login data:", { email, password, rememberMe });
      Swal.fire('Login Successful!', 'You are now logged in.', 'success'); 
    } else if (formState === "register") {
      if (password !== confirmPassword) {
        Swal.fire('Error!', 'Passwords do not match!', 'error'); 
        return;
      }
      console.log("Register data:", { name, email, password });
      Swal.fire('Registration Successful!', 'You can now log in.', 'success'); 
    } else if (formState === "forgotPassword") {
      console.log("Phone number for verification:", phone);
      Swal.fire('Reset Link Sent!', 'Check your phone for a verification code.', 'success'); 
      setEmail("");
      setPhone("");
      setFormState("login");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleForm = (newFormState) => {
    setFormState(newFormState);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setPhone("");
  };

  return (
    <div className="login-container">
      <img src={bg2} alt="background" className="login-img" />

      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-title">{formState === "login" ? "Login" : formState === "register" ? "Register" : "Forgot Password"}</h1>

        <div className="login-content">
          {formState === "register" && (
            <div className="input-box">
              <i className="ri-user-line icon"></i>
              <div className="input-wrapper">
                <input
                  type="text"
                  required
                  className="input"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" "
                />
                <label htmlFor="name" className="label">Name</label>
              </div>
            </div>
          )}

          <div className="input-box">
            <i className="ri-mail-line icon"></i>
            <div className="input-wrapper">
              <input
                type="email"
                required
                className="input"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
              />
              <label htmlFor="email" className="label">Email</label>
            </div>
          </div>

          {formState === "login" && (
            <div className="input-box">
              <i className="ri-lock-2-line icon"></i>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="input"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" "
                />
                <label htmlFor="password" className="label">Password</label>
                <i
                  className={`ri-${showPassword ? "eye-line" : "eye-off-line"} toggle-password`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            </div>
          )}

          {formState === "register" && (
            <div className="input-box">
              <i className="ri-lock-line icon"></i>
              <div className="input-wrapper">
                <input
                  type="password"
                  required
                  className="input"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder=" "
                />
                <label htmlFor="confirm-password" className="label">Confirm Password</label>
              </div>
            </div>
          )}

          {formState === "login" && (
            <div className="remember-section">
              <div className="remember-group">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember" className="checkbox-label">Remember me</label>
              </div>

              <a href="#" className="forgot-password" onClick={() => toggleForm("forgotPassword")}>Forgot Password?</a>
            </div>
          )}

          {formState === "forgotPassword" && (
            <div className="input-box">
              <i className="ri-phone-line icon"></i>
              <div className="input-wrapper">
                <input
                  type="tel"
                  required
                  className="input"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder=" "
                />
                <label htmlFor="phone" className="label">Phone Number</label>
              </div>
            </div>
          )}

          <button type="submit" className="login-button">
            {formState === "login" ? "Login" : formState === "register" ? "Register" : "Send Reset Link"}
          </button>

          {formState === "login" ? (
            <p className="toggle-link">
              Don't have an account? <a href="#" onClick={() => toggleForm("register")}>Register</a>
            </p>
          ) : formState === "register" ? (
            <p className="toggle-link">
              Already have an account? <a href="#" onClick={() => toggleForm("login")}>Login</a>
            </p>
          ) : (
            <p className="toggle-link">
              Back to <a href="#" onClick={() => toggleForm("login")}>Login</a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginRegister;

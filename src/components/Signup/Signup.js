import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signup__container">
      <div className="signup__wrapper">
        <form>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name*</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="mb-3">
            <label>Email address*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="password_container">
            <div className="mb-3">
              <label>Create Password*</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-3">
              <label>Confirm Password*</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="mb-3">
            <label>Skills</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter comma separated skills"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">Have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></p>
        </form>
      </div>
    </div>
  );
}

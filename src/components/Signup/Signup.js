import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { Button } from "@mui/material";

export default function Signup() {
  return (
    <div className="signup__container">
      <div className="signup__wrapper">
        <form>
          <h3>Signup</h3>
          <div className="mb-3">
            <label style={{ fontSize: 14, color: "#303F60" }}>
              First name*
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="mb-3">
            <label style={{ fontSize: 14, color: "#303F60" }}>
              Email address*
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="password_container">
            <div className="mb-3">
              <label style={{ fontSize: 14, color: "#303F60" }}>
                Create Password*
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-3">
              <label style={{ fontSize: 14, color: "#303F60" }}>
                Confirm Password*
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="mb-3">
            <label style={{ fontSize: 14, color: "#303F60" }}>Skills</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter comma separated skills"
            />
          </div>
          <div className=" text-center">
            <Button
              style={{
                backgroundColor: "#43afff",
                fontSize: 16,
                textTransform: "none",
                marginTop: 10,
                width: 100,
              }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Signup
            </Button>
          </div>
          <p className="forgot-password text-center mb-0 mt-1">
            Have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

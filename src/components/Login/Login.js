import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login__container">
      <div className="login__wrapper">
        <form>
          <h3 style={{ fontSize: 22 }}>Login</h3>
          <div className="mb-3">
            <label style={{ fontSize: 14 }}>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="lable_conatiner">
              <label style={{ fontSize: 14 }}>Password</label>
              <p
                className="forgot-password text-right"
                style={{ fontSize: 14, color: "#43AFFF" }}
              >
                Forgot your password?
              </p>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login_button_container">
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
            >
              Login
            </Button>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: 14 }}>New to MyJobs? </span>
              <span
                className="forgot-password text-right"
                style={{ fontSize: 14, color: "#43AFFF" }}
              >
                Create an account
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

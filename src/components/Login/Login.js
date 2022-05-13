import React, { useEffect, useState, useRef } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { loginUrl } from "../../util/url";
import "./Login.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
export default function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(loginUrl, {
        email: email,
        password: password,
      });

      setEmail("");
      setPassword("");
      console.log(res.data);
      const data = res.data.data;
      setAuth({ ...data });
      setSuccess(res.data.success);
      navigate(from, { replace: true });
    } catch (e) {
      console.log(e);
      setErrMsg("Incorrect email address or password.");
    }
  };

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  return (
    <div className="login__container">
      <div className="login__wrapper">
        <form onSubmit={submitHandler}>
          <h3 style={{ fontSize: 22 }}>Login</h3>
          <div className="mb-3">
            <label style={{ fontSize: 14, color: "#303F60" }}>
              Email address
            </label>
            <input
              required
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="lable_conatiner">
              <label style={{ fontSize: 14, color: "#303F60" }}>Password</label>
              <p
                className="forgot-password text-right"
                style={{ fontSize: 14, color: "#43AFFF" }}
              >
                Forgot your password?
              </p>
            </div>
            <input
              required
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ textAlign: "right" }}>
            {!success && <p ref={errRef}>{errMsg}</p>}
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
              type="submit"
            >
              Login
            </Button>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: 14 }}>New to MyJobs? </span>
              <Link
                to="/signup"
                className="forgot-password text-right"
                style={{
                  textDecoration: "none",
                  fontSize: 14,
                  color: "#43AFFF",
                }}
              >
                Create an account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

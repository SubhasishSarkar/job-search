import React from "react";

import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { auth, setAuth } = useAuth();
  const handleLogout = () => {
    setAuth("");
  };

  return (
    <div className="header__container">
      <div className="header__wrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header__logo_conatiner">
            <strong className="logo__1">My</strong>
            <strong className="logo__2">Job</strong>
          </div>
        </Link>
        {!auth?.token ? (
          <div className="header__button_container">
            <div className="header__login">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  style={{ textTransform: "none" }}
                  variant="outlined"
                  color="primary"
                >
                  Login/Signup
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                fontSize: 16,
                color: "white",
                marginRight: 20,
              }}
              to="/post"
            >
              Post a job
            </Link>

            <div className="avatar">S</div>
            <Button
              style={{ textTransform: "none" }}
              variant="outlined"
              color="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";

import "./Header.css";
import { Button } from "@mui/material";
export default function Header() {
  return (
    <div className="header__container">
      <div className="header__wrapper">
        <div className="header__logo_conatiner">
          <strong className="logo__1">My</strong>
          <strong className="logo__2">Job</strong>
        </div>
        <div className="header__button_container">
          <div className="header__login">
            <Button variant="outlined" color="primary">
              Login/Signup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

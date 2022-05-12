import React from "react";

import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";
export default function Header() {

  const {auth,setAuth} = useAuth();
  //console.log(auth)
  const handleLogout = ()=>{
    setAuth('')
  }

  return (
    <div className="header__container">
      <div className="header__wrapper">
        <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="header__logo_conatiner">
          <strong className="logo__1">My</strong>
          <strong className="logo__2">Job</strong>
        </div>
        </Link>
        { !auth?.token 
          ?<div className="header__button_container">
            <div className="header__login">
              <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="primary">
                Login/Signup
              </Button>
              </Link>
            </div>
          </div>
          :<div>
            <Button onClick={()=>{console.log('a')}}>Post a job</Button>
            <Button onClick={handleLogout}> Logout</Button>
          </div>
        }
      </div>
    </div>
  );
}

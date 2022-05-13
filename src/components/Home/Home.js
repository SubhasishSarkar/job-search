import React from "react";
import { Link } from "react-router-dom";
import Whyus from "./Whyus";
import Trust from "./Trust";
import { Button } from "@mui/material";
import "./Home.css";
import useAuth from "../../hooks/useAuth";
export default function Home() {
  const auth = useAuth();
  return (
    <div className="home__conatiner">
      <div className="home__banner">
        <div className="home_heading">
          <div className="text">
            <span className="text_1"> Welcome to</span>
            <br />
            <strong className="text_2">My</strong>
            <strong className="text_3">Jobs</strong>
          </div>
          <Link
            to={auth ? "/home" : "/signup"}
            style={{ textDecoration: "none" }}
          >
            <Button
              style={{
                backgroundColor: "#43afff",
                fontSize: 16,
                textTransform: "none",
                marginTop: 10,
              }}
              variant="contained"
              color="primary"
            >
              Get Started
            </Button>
          </Link>
        </div>
        <div className="home_banner_image">
          <img src="/banner.png" alt="banner" />
        </div>
      </div>
      <Whyus />
      <Trust />
    </div>
  );
}

import React from "react";
import { Button } from "@mui/material";
import "./Post.css";
export default function Post() {
  return (
    <div className="post__container">
      <div className="post__wrapper">
        <form>
          <h3 style={{ fontSize: 22 }}>Post a Job</h3>
          <div className="mb-3">
            <label style={{ fontSize: 14 }}>Job title*</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="Enter job title"
            />
          </div>
          <div className="mb-3">
            <label style={{ fontSize: 14 }}>Description*</label>
            <textarea
              required
              type="text"
              className="form-control"
              placeholder="Enter decsription"
            />
          </div>
          <div className="mb-3">
            <label style={{ fontSize: 14 }}>Description*</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="Enter decsription"
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
              type="submit"
            >
              Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

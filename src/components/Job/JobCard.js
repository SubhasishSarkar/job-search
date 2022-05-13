import { Button } from "@mui/material";
import React from "react";
import "./Job.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function JobCard({ job, modalHandler }) {
  const { title, description, location, id } = job;
  return (
    <div className="jobcard__container">
      <div className="jobcard__wrapper">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="jobcard__footer">
          <div>
            <LocationOnOutlinedIcon sx={{ color: "#43AFFF", fontSize: 14 }} />
            <span
              style={{ fontSize: 14, color: "#303F60", wordBreak: "break-all" }}
            >
              {location}
            </span>
          </div>
          <Button
            style={{
              backgroundColor: "#43AFFF33",
              color: "#303F60",
              fontSize: 12,
              textTransform: "none",
            }}
            variant="contained"
            color="primary"
            onClick={(e) => modalHandler(e, id)}
          >
            View Applicarions
          </Button>
        </div>
      </div>
    </div>
  );
}

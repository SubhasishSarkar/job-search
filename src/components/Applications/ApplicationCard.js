import React from "react";
import "./Application.css";
export default function ApplicationCard({ application }) {
  const { name, email, skills } = application;
  return (
    <div class="application__container">
      <div class="application__wrapper">
        <div class="header">
          <div className="profile">
            <div>{name[0].toUpperCase()}</div>
          </div>
          <div className="info">
            <div>{name}</div>
            <div>{email}</div>
          </div>
        </div>
        <div className="skills">
          <h5>Skills</h5>
          <p>{skills}</p>
        </div>
      </div>
    </div>
  );
}

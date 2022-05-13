import React from "react";
import "./Application.css";
export default function ApplicationCard({ application }) {
  const { name, email, skills } = application;
  return (
    <div class="application__container">
      <div class="application__wrapper">
        <div class="header">
          <div className="profile">
            <div className="profile_initial">{name[0].toUpperCase()}</div>
          </div>
          <div className="info">
            <div style={{ color: "#303F60", fontSize: 15, fontWeight: "bold" }}>
              {name}
            </div>
            <div style={{ color: "#303F60", fontSize: 15 }}>{email}</div>
          </div>
        </div>
        <div className="skills">
          <h5 style={{ color: "#303F60", fontSize: 13, margin: 0 }}>Skills</h5>
          <p style={{ color: "#303F60", fontSize: 15, margin: 0 }}> {skills}</p>
        </div>
      </div>
    </div>
  );
}

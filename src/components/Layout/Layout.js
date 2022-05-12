import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";
export default function Layout() {
  return (
    <>
      <Header />
      <div className="layout__countainer">
        <Outlet />
      </div>
    </>
  );
}

import React, { useRef } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

import { LayoutRefProvider } from "../../context/LayoutRefProvider";
import "./Layout.css";
export default function Layout() {
  const layoutRef = useRef(null);
  return (
    <>
      <Header />
      <div className="layout__countainer" ref={layoutRef}>
        <LayoutRefProvider value={layoutRef}>
          <Outlet />
        </LayoutRefProvider>
      </div>
    </>
  );
}

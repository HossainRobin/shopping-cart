import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

function MainLayout() {
  const loc = useLocation();

  useEffect(() => {
    if (loc.pathname == "/") {
      document.title = `Home`;
    } else {
      const firstLetter = loc.pathname.replace("/", "").charAt(0).toUpperCase();
      document.title = `${firstLetter}${loc.pathname
        .replace("/", "")
        .slice(1)}`;
    }

    if (loc.state) {
      document.title = `${loc.state}`;
    }
  }, [loc.pathname]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default MainLayout;

import React from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <TopNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

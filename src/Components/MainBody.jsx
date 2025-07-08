// src/components/MainBody.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const MainBody = () => (
  <div className="flex">
    <SideBar />
    <div className="flex flex-1 overflow-hidden">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  </div>
);

export default MainBody;

// src/components/MainBody.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import AddProject from "./AddProject";

const MainBody = () => (
  <div className="w-screen h-screen bg-pink-600">
    <Header/>
    <div className="flex">
      <SideBar/>

      <div className="w-full pt-16">
        <Outlet/>
      </div>
    </div>
  </div>
);

export default MainBody;

//header
//

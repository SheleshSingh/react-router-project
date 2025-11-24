import React from "react";
import { Outlet } from "react-router";

const Settings = () => {
  return (
    <>
      <div>Settings</div>
      <Outlet />
    </>
  );
};

export default Settings;

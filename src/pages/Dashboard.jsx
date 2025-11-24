import React from "react";
import { Outlet, useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Dashboard</div>
      <button onClick={() => navigate("/products/56")}>
        Go to ProductDetails page
      </button>
      <Outlet />
    </>
  );
};

export default Dashboard;

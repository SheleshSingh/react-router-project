import React from "react";
import { Outlet, useNavigate } from "react-router";

const Team = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Team</div>
      <button
        onClick={() => navigate("member/67")}
        className="border-4 border-gray-600 p-3 bg-amber-500 rounded-xl"
      >
        Go to Member page
      </button>
      <Outlet />
    </>
  );
};

export default Team;

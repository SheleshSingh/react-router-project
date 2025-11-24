import React from "react";
import Team from "./Team";
import Company from "./Company";
import { Outlet, useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>About</div>
      <button
        onClick={() => navigate("company")}
        className="border-4 border-gray-600 p-3 bg-amber-500 rounded-xl"
      >
        Go to Company page
      </button>
      <button
        onClick={() => navigate("team")}
        className="border-4 border-gray-600 p-3 bg-amber-500 rounded-xl"
      >
        Go to Team page
      </button>
      <Outlet />
    </>
  );
};

export default About;

import React from "react";
import { useParams } from "react-router";

const Member = () => {
  const params = useParams();
  console.log(params);
  return <div>Member:{params.id}</div>;
};

export default Member;

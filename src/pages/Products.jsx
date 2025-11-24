import React from "react";
import { Outlet, useParams } from "react-router";

const Products = () => {
  // const navigate = useNavigate();
  const params = useParams();
  return (
    <>
      <div>Products: {params.productId}</div>

      <Outlet />
    </>
  );
};

export default Products;

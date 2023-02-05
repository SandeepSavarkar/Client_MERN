import React from "react";
import { Route, Routes } from "react-router-dom";
import useRoutes from "./route";

const Routing = ({ ...props }) => {
  const { publicRoutes } = useRoutes();
  console.log("publicRoutes: ", publicRoutes);

  return (
    <Routes {...props}>
      <Route path="/">
        {publicRoutes.map(({ id, ...otherProps }) => (
          <Route index key={id} {...otherProps} />
        ))}
      </Route>
    </Routes>
  );
};

export default Routing;

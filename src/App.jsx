import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
  const newRoutes = useRoutes(routes);
  console.log(newRoutes);

  return (
    <>
      <div>{newRoutes}</div>
    </>
  );
}

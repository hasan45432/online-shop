import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
  const newRoutes = useRoutes(routes);
  

  return (
    <>
      <div>{newRoutes}</div>
    </>
  );
}

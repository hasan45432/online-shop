import React, { useEffect } from "react";
import routes from "./routes";
import { useRoutes, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function App() {
  const newRoutes = useRoutes(routes);

   
  return (
    <>
      <div>{newRoutes}</div>
    </>
  );
}

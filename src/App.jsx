import React, { useEffect } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import routes from "./routes";

export default function App() {
  const newRoutes = useRoutes(routes);

  const navigate = useNavigate();


  useEffect(() => {
    const adminToken = localStorage.getItem("users");
    console.log(adminToken);

    if (adminToken === null) {
      navigate("/");
   
    }
  }, []);

  return (
    <>
      <div>{newRoutes}</div>
    </>
  );
}

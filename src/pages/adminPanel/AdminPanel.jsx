import React, { useEffect } from "react";
import HeaderDesktop from "../../components/adminPanel/headerDesktop/HeaderDesktop";
export default function AdminPanel() {
  useEffect(() => {
    fetch("http://localhost:4000/v1/courses")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <>
      <div>
        <HeaderDesktop />
      </div>
    </>
  );
}

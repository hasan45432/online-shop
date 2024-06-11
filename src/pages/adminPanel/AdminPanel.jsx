import React, { useEffect } from "react";
import HeaderDesktop from "../../components/adminPanel/headerDesktop/HeaderDesktop";
import Table from "../../components/adminPanel/table/Table";
import HeaderMobile from "../../components/adminPanel/headerDesktop/headerMobile/HeaderMobile";
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
      <div className=" hidden lg:block">
        <HeaderDesktop />
      </div>
      <div className="">
        <HeaderMobile />
      </div>
      <div>
        <Table />
      </div>
    </>
  );
}

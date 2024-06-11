import React, { useEffect } from "react";
import HeaderDesktop from "../../components/adminPanel/headerDesktop/HeaderDesktop";
import Table from "../../components/adminPanel/table/Table";
import HeaderMobile from "../../components/adminPanel/headerMobile/HeaderMobile";
import FormData from "../../components/adminPanel/formData/FormData";
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
      <div className=" lg:hidden">
        <HeaderMobile />
      </div>
      <div className="flex">
        <div className=" hidden lg:block">
          <HeaderDesktop />
        </div>
        <div className="w-[100%]">
          <FormData />
          <Table />
        </div>
      </div>
    </>
  );
}

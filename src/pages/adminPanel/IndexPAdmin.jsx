import React, { useEffect } from "react";
import HeaderDesktop from "../../components/adminPanel/headerDesktop/HeaderDesktop";
import { Outlet } from "react-router-dom";
import Table from "../../components/adminPanel/table/Table";
import HeaderMobile from "../../components/adminPanel/headerMobile/HeaderMobile";

export default function IndexPAdmin() {
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
          <Outlet />
          <Table />
        </div>
      </div>
    </>
  );
}

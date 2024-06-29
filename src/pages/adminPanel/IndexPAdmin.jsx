import React, { useEffect } from "react";
import HeaderDesktop from "../../components/adminPanel/headerDesktop/HeaderDesktop";
import { Outlet } from "react-router-dom";
import HeaderMobile from "../../components/adminPanel/headerMobile/HeaderMobile";
import { useDispatch, useStore } from "react-redux";
import { getStates } from "../../Redux/store/fetchStor";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
export default function IndexPAdmin() {
  const dispatch = useDispatch();
  const store = useStore();
  const location = useLocation();
  const navigate = useNavigate();

  const fetchData = async () => {
    let url = "http://localhost:4000/v1/auth/me";
    await dispatch(getStates({ url }));

    let getMy = store.getState().fetchStor;
    const adminToken = localStorage.getItem("users");
    console.log(adminToken);
    console.log(location.pathname);
    if (getMy.role !== "ADMIN" || adminToken === null) {
      navigate("/");
      swal({
        title: "امکان دسترسی کاربران عادی به پنل ادمین وجود ندارد",
        icon: "error",
        buttons: "ok",
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const params = useParams();

  useEffect(() => {
    const adminToken = localStorage.getItem("users");
    console.log(adminToken);
    if (adminToken === null) {
      navigate("/");
    }
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
          <Outlet />
        </div>
      </div>
    </>
  );
}

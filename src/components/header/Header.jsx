import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useDispatch, useStore } from "react-redux";
import { getUserData } from "../../Redux/store/authentication";
import swal from "sweetalert";
export default function Header() {
  const [action, setAction] = useState("");
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openMenu = () => {
    setAction("right-[1px]");
  };

  const closeMenu = () => {
    setAction("-right-[1000px]");
  };

  const dispatch = useDispatch();
  const store = useStore();
  const location = useLocation();
  const params = useParams();
  const userToken = localStorage.getItem("users");

  const fetchDataUser = async () => {
    let url = "http://localhost:4000/v1/auth/me";

    await dispatch(getUserData({ url, userToken }));

    let userDataStore = store.getState().authentication;

    setUser(userDataStore.username);
  };

  const logout = (e) => {
    e.preventDefault();
    swal({
      title: "ایا می خواهید از سایت خارج شوید؟",
      icon: "warning",
      buttons: ["نه", "اره"],
    }).then((res) => {
      if (res) {
        localStorage.removeItem("users");
        setIsLoggedIn(true);
        setUser("");
      }
    });
  };

  useEffect(() => {
    if (userToken) {
      fetchDataUser();
    }
  }, [location.pathname, logout]);
  return (
    <>
      <header className=" bg-neutral-200  px-4 h-16 flex flex-row-reverse items-center  transition-all duration-500 child:transition-all child:duration-500 justify-between lg:hidden">
        <nav
          className={`flex z-50 absolute  colsAction navigation top-0 bottom-0 ${action}  shadow-normal -right-[1000px] bottom-0  w-[70%] sm:w-[50%] bg-neutral-200 shadow-xl flex-col gap-5 items-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 absolute top-2 left-2 cursor-pointer"
            onClick={closeMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          <div className="w-[80%] flex items-center justify-between mt-5">
            <div className="flex iconOpenMenu closeIcon flex-col gap-1 active child:transition-all child:duration-500 cursor-pointer"></div>
          </div>
          <ul className="flex  sm:text-[20px]   text-black transition-all duration-700 child:transition-all child:duration-300 text-md md:text-[20px] w-[80%] child:p-[8px]  child:rounded-[16px] flex-col absolute top-16 gap-2 child:md:mt-[10px] right-5  font-vazirBlack child-hover:bg-neutral-300  child-hover:text-blue-600  child:w-[100%]">
            <li>
              <Link to="/" className=" ">
                صفحه اصلی
              </Link>
            </li>
            <li className="">
              <Link to="/products"> تمام محصولات </Link>
            </li>
            <li>
              <Link to="/shirt"> پیراهن </Link>
            </li>
            <li>
              <Link to="/tshirt"> تی شرت </Link>
            </li>
            <li>
              <a href="#"> درباره ی ما </a>
            </li>
            <li>
              <a href="#"> تماس با ما </a>
            </li>
            <li>
              {!userToken ? (
                <div className="flex flex-col ">
                  <Link className=" font-vazirBold" to="/login">
                    ورود
                  </Link>

                  <Link className=" mt-4   font-vazirBold" to="/register">
                    ثبت نام
                  </Link>
                </div>
              ) : (
                <>
                  <div className=" text-orange-500 ">{user}</div>
                  <Link to="/usershoppingbasket">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 mt-4 mb-4 text-black hover:text-orange-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </Link>
                  <button
                    onClick={logout}
                    className=" text-neutral-800 pb-2 hover:text-orange-500 transition-all duration-300"
                  >
                    خروج
                  </button>
                </>
              )}
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2 ">
          {userToken ? (
            <div className="border-2  border-black/10 text-orange-500 pr-3 pl-3 rounded-[10px] text-center pb-6 min-w-[100px] h-8">
              {user}
            </div>
          ) : (
            ""
          )}
          <Link to="/usershoppingbasket">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-black hover:text-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 sm:size-10 cursor-pointer"
          onClick={openMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </header>
    </>
  );
}

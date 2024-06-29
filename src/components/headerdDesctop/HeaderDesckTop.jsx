import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useDispatch, useStore } from "react-redux";
import { getUserData } from "../../Redux/store/authentication";
import swal from "sweetalert";

export default function HeaderDesckTop(props) {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <div>
      <header
        className={`${props.position} z-50 hidden md:flex backdrop-blur-[6px]  text-lg bg-neutral-200 w-[90%] shadow-xl right-0 left-0 mx-auto items-center mt-8 justify-between rounded-2xl h-20`}
      >
        <nav className="flex gap-5 items-center mr-5">
          <div></div>
          <ul className="flex gap-3  child:text-[19px]  text-black/60 font-vazirBlack child-hover:text-orange-500 child:transition-colors duration-300">
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
          </ul>
        </nav>

        <div className="flex gap-5 text-gray-100 ml-5">
          <div className="flex gap-1 items-center moodinbody">
            <img
              className="block w-8 filter invert cursor-pointer"
              src="./CoffeeShop-Files//icons/icons8-shopping-cart-100.png"
              alt=""
            />
            <img
              className="block w-8 filter invert cursor-pointer moonIcon"
              src="./CoffeeShop-Files//icons/icons8-moon-50.png"
              alt=""
            />
            <img
              className="hidden w-8 filter invert cursor-pointer sunIcon"
              src="./CoffeeShop-Files/icons/icons8-sun-30.png"
              alt=""
            />
          </div>
          <div className="flex gap-2 child-hover:text-orange-500 child-hover:transition-all child-hover:duration-300">
            {!userToken ? (
              <>
                <Link className="text-black/60 font-vazirBold" to="/login">
                  ورود
                </Link>
                <p className=" w-[30px] h-[1px] bg-black/60  rotate-90 mt-3"></p>
                <Link className="text-black/60   font-vazirBold" to="/register">
                  ثبت نام
                </Link>
              </>
            ) : (
              <div className=" flex items-center gap-4">
                <div className="border-2 border-black/10 text-orange-500 pr-3 pl-3 rounded-[10px] text-center pb-8 min-w-[100px] h-8">
                  {user}
                </div>
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
                <button
                  onClick={logout}
                  className=" text-neutral-800 pb-2 hover:text-orange-500 transition-all duration-300"
                >
                  خروج
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

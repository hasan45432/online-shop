import React, { useEffect, useState } from "react";
import { useDispatch, useStore, useSelector } from "react-redux";
import { registerState } from "../../Redux/store/authentication";
import { Link } from "react-router-dom";
import Inputs from "../inputs/Inputs";
import swal from "sweetalert";
import { getStates } from "../../Redux/store/fetchStor";
import { useNavigate } from "react-router-dom";
export default function FormRegister() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState(0);

  const userToken = localStorage.getItem("users");
  const shoppingBasket = useSelector((state) => state); // A

  const dispatch = useDispatch();
  const store = useStore();
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    let body = {
      name,
      username,
      email,
      phone,
      password,
    };

    if (
      username.length &&
      name.length &&
      email.length &&
      phone.length &&
      password.length
    ) {
      if (password.length >= 8 && password.length <= 11) {
        if (phone.length === 11) {
          if (/^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/.test(email)) {
            let url = "http://localhost:4000/v1/auth/register";
            await dispatch(registerState({ url, body }));
            let registerStore = store.getState().authentication.accessToken;
            if (registerStore !== undefined) {
              localStorage.setItem("users", registerStore);
            }
            if (registerStore) {
              navigate("/");
            }
          } else {
            swal({
              title: "ایمیل نادرست است",
              icon: "error",
              buttons: "ok",
            });
          }
        } else {
          swal({
            title: "شماره تلفن باید یازده رقم باشد",
            icon: "error",
            buttons: "ok",
          });
        }
      } else {
        swal({
          title: "تعداد کاراکتر پسورد باید بیش تر از هشت عدد باشد",
          icon: "error",
          buttons: "ok",
        });
      }
    } else {
      swal({
        title: "لطفا تمامی فیلد ها را پر کنید",
        icon: "error",
        buttons: "ok",
      });
    }
    setUsername("");
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  useEffect(() => {
    if (userToken) {
      navigate("/");
    }
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className=" container mx-auto">
        <div className="mt-20 text-center ">
          <div className="flex justify-around xl:mr-[200px] child:text-[15px]  xl:ml-[200px]   child:transition-all child:duration-500">
            <Link
              to="/register"
              className="border grid  border-neutral-900 pr-4 pl-4 pt-1 pb-1 hover:bg-neutral-400 hover:text-white"
            >
              REGISTER
            </Link>
            <Link
              to="/"
              className="border grid sm:ml-6  border-neutral-900 pr-4 pl-4 pt-1 pb-1 hover:bg-neutral-400 hover:text-white"
            >
              HOME
            </Link>
            <Link
              to="/login"
              className="border border-neutral-900 pr-4 pl-4 pt-1 pb-1 hover:bg-neutral-400 hover:text-white"
            >
              LOGIN
            </Link>
          </div>
          <div className="mt-8 mb-8">
            <h2 className="text-3xl">?Have an account</h2>
            <p className="mt-2">Sign in to speed up the checkout</p>
            <p> process and manage your orders</p>
          </div>
          <form className="flex  flex-col items-center gap-4">
            <div className="flex flex-col w-[100%] md:w-[70%] xl:w-[50%] 2xl:w-[60%] gap-3">
              <Inputs
                type={"text"}
                className={"form-control text-left"}
                id={"inputEmail4"}
                placeholder={"username"}
                onText={(e) => setUsername(e)}
                value={username}
              />
              <Inputs
                type={"text"}
                className={"form-control text-left"}
                placeholder={"name"}
                onText={(e) => setName(e)}
                value={name}
              />
              <input
                type="email"
                className="form-control text-left w-[80%] sm:w-[60%]  mx-auto "
                placeholder="email"
                onInput={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="number"
                className="form-control text-left w-[80%] sm:w-[60%]  mx-auto "
                placeholder="phone"
                onInput={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <input
                type="password"
                className="form-control text-left w-[80%] sm:w-[60%]  mx-auto "
                placeholder="password"
                onInput={(e) => setPassword(e.target.value)}
                value={password}
              />

              <button
                onClick={register}
                className="text-[18px] md:text-[25px] lg:text-[30px] mx-auto pt-[3px] pb-[10px]   md:pb-[45px] lg:pb-[53px] hover:bg-neutral-400 hover:text-white transition-all duration-500  w-[40%] sm:w-[33%]  xl:w-[34%] xl:pb-[54px] mt-8 h-[35px] md:h-[40px]  border border-neutral-800"
              >
                register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

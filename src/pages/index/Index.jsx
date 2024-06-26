import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
import Footer from "../../components/footer/Footer";
import { useDispatch, useStore } from "react-redux";
import { getStates, createState } from "../../Redux/store/fetchStor";
export default function Index() {
  const [user, setUser] = useState("");

  const dispatch = useDispatch();
  const store = useStore();

  const fetchDataUser = async () => {
    let url = "http://localhost:4000/v1/auth/me";

    await dispatch(getStates({ url }));

    let userData = store.getState().fetchStor;
    setUser(userData.username);
  };

  useEffect(() => {
    fetchDataUser();
  }, []);

  return (
    <>
      <div>
        <div className="block lg:hidden">
          <Header />
        </div>
        <div className=" hidden lg:block">
          <HeaderDesckTop position={"fixed"} user={user} />
        </div>

        <Main />
        <Footer />
      </div>
    </>
  );
}

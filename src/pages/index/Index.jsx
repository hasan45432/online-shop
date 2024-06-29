import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { useRoutes, useNavigate } from "react-router-dom";
import Main from "../../components/main/Main";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
import Footer from "../../components/footer/Footer";
import { useDispatch, useStore } from "react-redux";
import { getStates, createState } from "../../Redux/store/fetchStor";
import { getUserData } from "../../Redux/store/authentication";
import { useParams, useLocation } from "react-router-dom";

export default function Index() {
  const [user, setUser] = useState("");



  

  return (
    <>
         
      <div>
             
        <div className="block lg:hidden">
                 <Header />
        </div>
             
        <div className=" hidden lg:block">
          <HeaderDesckTop position={"fixed"} />             
        </div>
                <Main />
                <Footer />     
      </div>
       
    </>
  );
}

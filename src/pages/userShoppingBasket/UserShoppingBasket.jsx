import React, { useEffect, useState } from "react";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import UserProduct from "../../components/userProduct/UserProduct";
import { useDispatch, useStore, useSelector } from "react-redux";
import swal from "sweetalert";
import { getStates } from "../../Redux/store/fetchStor";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Product from "../../components/product/Product";
export default function UserShoppingBasket() {
  const [userProducts, setUserProducts] = useState([]);

  const dispatch = useDispatch();
  const store = useStore();
  const userToken = localStorage.getItem("users");
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const fetchData = async () => {
    fetch("http://localhost:4000/v1/users/courses", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setUserProducts(data);
        console.log(data);
        return data;
      });
  };

  useEffect(() => {
    if (!userToken) {
      navigate("/login");
    }
    fetchData();
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <>
        <div className="block lg:hidden">
          <Header />
        </div>
        <div className=" hidden lg:block">
          <HeaderDesckTop />
        </div>
        <div className=" container mx-auto">
          <div className="grid sm:mr-[60px] sm:ml-[60px] md:mr-[20px] md:ml-[20px] lg:mr-[90px] lg:ml-[90px] xl:mr-[130px] xl:ml-[130px] grid-cols-2  xl:gap-4  md:gap-3 sm:gap-2 sm:p-2 md:grid-cols-3 xl:grid-cols-4 mt-4 mb-4">
            {userProducts.length ? (
              userProducts.map((product) => (
                <UserProduct key={product._id} {...product} />
              ))
            ) : (
              <Alert
                variant="danger"
                className="w-[250px] md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[800px]"
              >
                هیچ محصولی در سبد خرید شما وجود ندارد
              </Alert>
            )}
          </div>
        </div>

        <Footer />
      </>
    </>
  );
}

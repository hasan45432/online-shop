import React, { useEffect, useState } from "react";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import UserProduct from "../../components/userProduct/UserProduct";
import { useDispatch, useStore } from "react-redux";
import swal from "sweetalert";
import { getUserProduct } from "../../Redux/store/ShoppingBasket";

export default function UserShoppingBasket() {
  const [userProducts, setUserProducts] = useState([]);

  const dispatch = useDispatch();
  const store = useStore();

  const fetchData = async () => {
    let url = "http://localhost:4000/v1/users/courses/";
    await dispatch(getUserProduct({ url }));
    let userProductStore = store.getState().shoppingBasket;
    await setUserProducts(userProductStore);
    console.log(userProductStore);
  };

  useEffect(() => {
    fetchData();
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
          <div className="grid sm:mr-[50px] sm:ml-[50px] md:mr-[20px] md:ml-[20px] lg:mr-[90px] lg:ml-[90px] xl:mr-[130px] xl:ml-[130px] grid-cols-2  xl:gap-4  md:gap-3 sm:gap-2 sm:p-2 md:grid-cols-3 xl:grid-cols-4 mt-4 mb-4">
            {userProducts.map((product) => {
              return <UserProduct key={product._id} {...product} />;
            })}
          </div>
        </div>

        <Footer />
      </>
    </>
  );
}

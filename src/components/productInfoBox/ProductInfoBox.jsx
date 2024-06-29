import React, { useState, useEffect } from "react";
import { createState } from "../../Redux/store/fetchStor";
import { useDispatch, useStore } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductInfoBox() {
  const [productInfo, setProductInfo] = useState({});
  const [productCategoryID, setProductCategoryID] = useState("");
  const [productCreatedAt, setProductCreatedAt] = useState("");

  const productName = useParams();
  const dispatch = useDispatch();
  const store = useStore();
  const userToken = localStorage.getItem("users");

  const fetchData = async () => {
    let url = `http://localhost:4000/v1/courses/${productName.shortname}`;
    await dispatch(createState({ url }));

    let productInfoStore = store.getState().fetchStor;
    window.scroll(0, 0);
    await setProductInfo(productInfoStore);
    console.log(productInfoStore.categoryID.name);
    await setProductCategoryID(productInfoStore.categoryID.name);
    await setProductCreatedAt(productInfoStore.createdAt);
  };

  const addToShoppingBasket = async (e) => {
    e.preventDefault();
    console.log("asdasd");
    let body = {
      price: props.price,
    };
    fetch(`http://localhost:4000/v1/courses/${props._id}/register`, {
      method: "POST",
      body: JSON.stringify(body),

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          swal({
            title: "محصول مورد نظر با موفقیت به سبد خرید اضافه شد",
            icon: "success",
            buttons: "ok",
          });
          console.log(res);
          return res.json();
        } else {
          swal({
            title: "این محصول در سبد خرید شما وجود دارد ",
            icon: "error",
            buttons: "ok",
          });
          console.log(res);
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        return data;
      });
    console.log(props);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className=" container  mx-auto ">
        <div className=" flex flex-col items-center justify-center xl:grid xl:grid-cols-2 mt-20">
          <div>
            <img
              src={`http://localhost:4000/courses/covers/${productInfo.cover}`}
              alt=""
              className="w-[250px] sm:w-[400px] xl:w-[600px]  bg-cover bg-center rounded-[15px]"
            />
          </div>

          <div>
            <div className="flex  flex-col items-center ">
              <p className=" mx-auto  sm:mr-[200px] mt-2  md:text-[25px] ">
                {productInfo.description}
              </p>
              <div className="flex">
                <div
                  className="w-[130px] sm:w-[150px]  shadow-2xl  pr-[30px] pl-[10px] pt-[20px]
pb-[20px] rounded-[50px] mt-10"
                >
                  {" "}
                  <p>نام محصول :</p>
                  <p>{productInfo.name}</p>
                </div>
                <div
                  className="w-[130px] sm:w-[150px]   shadow-2xl pr-[30px] pl-[10px] pt-[20px]
pb-[10px]  rounded-[50px] mt-10 mr-4"
                >
                  {" "}
                  <p>دسته بندی : </p>
                  <p>{productCategoryID}</p>
                </div>
              </div>
              <div className="flex">
                <div
                  className="w-[130px] sm:w-[150px]  shadow-2xl pr-[30px] pl-[10px] pt-[20px]
pb-[20px] rounded-[50px] mt-10 "
                >
                  {" "}
                  <p> تاریخ عرضه :</p>
                  <p>{productCreatedAt.slice(0, 10)}</p>
                </div>
                <div
                  className="w-[130px] sm:w-[150px]  shadow-2xl pr-[30px] pl-[10px] pt-[20px]
pb-[20px] rounded-[50px] mt-10 mr-4 "
                >
                  {" "}
                  <p> قیمت محصول :</p>
                  <p>{productInfo.price}</p>
                </div>
              </div>
              <div className="flex ml-3">
                <div
                  className="w-[130px] sm:w-[150px]  shadow-2xl pr-[30px] pl-[10px] pt-[20px]
pb-[20px] rounded-[50px] mt-10 mr-4 "
                >
                  {" "}
                  <p> پشتیبانی :</p>
                  <p>{productInfo.support}</p>
                </div>
                <div
                  className="w-[130px] sm:w-[150px]  shadow-2xl pr-[30px] pl-[10px] pt-[20px]
pb-[20px] rounded-[50px] mt-10 mr-4"
                >
                  {" "}
                  <p> وضعیت :</p>
                  <p>
                    {productInfo.status === "start" ? "موجود " : "اتمام موجودی"}
                  </p>
                </div>
              </div>
              <div className="mt-10">
                {userToken ? (
                  <button
                    onClick={addToShoppingBasket}
                    className="border  text-[12px] md:text-[18px] transition-all duration-300 md:pb-2  font-vazirBlack pr-4 hover:text-white hover:bg-neutral-400 pl-4 pb-[5px] m-1"
                  >
                    خرید
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="border text-[12px] md:text-[18px] transition-all duration-300 md:pb-2  font-vazirBlack pr-4 hover:text-white hover:bg-neutral-400 pl-4 pb-[5px] m-1"
                  >
                    خرید
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

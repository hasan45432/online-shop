import React, { useState, useEffect } from "react";
import { createState } from "../../Redux/store/fetchStor";
import { useDispatch, useStore } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductInfoBox() {
  const [productInfo, setProductInfo] = useState({});
  const [productCategoryID, setProductCategoryID] = useState("");
  const [productCreatedAt, setProductCreatedAt] = useState("");

  const productName = useParams();
  const dispatch = useDispatch();
  const store = useStore();

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

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <div className=" container">
        <div className=" grid grid-cols-2 mt-20">
          <div>
            <img
              src={`http://localhost:4000/courses/covers/${productInfo.cover}`}
              alt=""
              className="w-[500px] bg-cover bg-center rounded-[15px]"
            />
          </div>
          <div>
            <p className="text-[25px]">{productInfo.description}</p>

            <div className="flex flex-col ">
              <div className="flex">
                <div
                  className="w-[150px] shadow-2xl  pr-[30px] pl-[10px] pt-[20px]
pb-[20px] rounded-[50px] mt-10"
                >
                  {" "}
                  <p>نام محصول :</p>
                  <p>{productInfo.name}</p>
                </div>
                <div
                  className="w-[150px]  shadow-2xl pr-[30px] pl-[10px] pt-[20px]
pb-[20px] rounded-[50px] mt-10 mr-4"
                >
                  {" "}
                  <p>دسته بندی :</p>
                  <p>{productCategoryID}</p>
                </div>
                <div
                  className="w-[150px]  shadow-2xl pr-[30px] pl-[10px] pt-[20px]
pb-[20px] rounded-[50px] mt-10 mr-4"
                >
                  {" "}
                  <p>دسته بندی :</p>
                  <p>
                    {productInfo.status === "start" ? "موجود " : "اتمام موجودی"}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div
                  className="w-[150px]  shadow-2xl pr-[30px] pl-[10px] pt-[20px]
pb-[20px] rounded-[50px] mt-10 "
                >
                  {" "}
                  <p> تاریخ عرضه :</p>
                  <p>{productCreatedAt.slice(0, 10)}</p>
                </div>
                <div
                  className="w-[150px]  shadow-2xl pr-[30px] pl-[10px] pt-[20px]
pb-[20px] rounded-[50px] mt-10 mr-4 "
                >
                  {" "}
                  <p> قیمت محصول :</p>
                  <p>{productInfo.price}</p>
                </div>
                <div
                  className="w-[150px]  shadow-2xl pr-[30px] pl-[10px] pt-[20px]
pb-[20px] rounded-[50px] mt-10 mr-4 "
                >
                  {" "}
                  <p> پشتیبانی :</p>
                  <p>{productInfo.support}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

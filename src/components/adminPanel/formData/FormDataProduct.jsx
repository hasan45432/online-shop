import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import Inputs from "../../inputs/Inputs";
import { createState, getStates } from "../../../Redux/store/fetchStor";

const FormDataProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [support, setSupport] = useState("");
  const [cover, setCover] = useState({});
  const [categoryID, setCategoryID] = useState("666d8334290441cd168cf4f1");
  const [status, setStatus] = useState("");
  const [shortName, setShortName] = useState("");

  const [categories, setCategories] = useState([]);

  const store = useStore();

  const dispatch = useDispatch();

  const addNewProduct = async (event) => {
    event.preventDefault();

    let newFormData = await new FormData();

    newFormData.append("name", name);
    newFormData.append("description", description);
    newFormData.append("price", price);
    newFormData.append("support", support);
    newFormData.append("cover", cover);
    newFormData.append("categoryID", categoryID);
    newFormData.append("status", status);
    newFormData.append("shortName", shortName);

    let url = "http://localhost:4000/v1/courses";

    dispatch(createState({ url, newFormData }));
  };

  useEffect(() => {
    const fetchData = async () => {
      let url = "http://localhost:4000/v1/category";
      await dispatch(getStates({ url }));

      let categoryStore = store.getState().fetchStor;
      setCategories(categoryStore);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=" container ">
        <div className="w-[100%] mt-10">
          <form className="flex flex-col gap-4 xl:flex 2xl:flex-row w-[100%] ">
            <div className="w-[100%] flex flex-col items-center gap-4">
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-[12px]"}
                id={"inputEmail4"}
                placeholder={"لطفا نام محصول را وارد کنید"}
                onText={(e) => setName(e)}
              />
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-[12px]"}
                id={"inputEmail4"}
                placeholder={"لطفا توضیحات محصول را وارد کنید"}
                onText={(e) => setDescription(e)}
              />
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-[12px]"}
                id={"inputEmail4"}
                placeholder={"لطفا url محصول را وارد کنید"}
                onText={(e) => setShortName(e)}
              />
            </div>

            <div className="w-[100%] flex flex-col items-center  gap-4">
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-[12px]"}
                id={"inputEmail4"}
                placeholder={"نحوه ی پشتبانی محصول را وارد کنید "}
                onText={(e) => setSupport(e)}
              />
              <input
                type="number"
                placeholder="لطفا قیمت محصول  را وارد کنید "
                className="form-control placeholder-text text-[12px] w-[50%]"
                onInput={(e) => setPrice(e.target.value)}
              />
              <div className="md:flex pl-20 gap-2">
                <p> انتخاب دسته بندی:</p>
                <select
                  className="w-[120px]"
                  onChange={(e) => setCategoryID(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:flex pr-16  gap-2 mt-2">
                <p>انتخاب عکس :</p>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setCover(e.target.files[0])}
                ></input>
              </div>
              <div className="ml-[116px]">
                <input
                  type="radio"
                  id="option1"
                  name="radiobutton"
                  value="start"
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label className="ml-6" htmlFor="option1">
                  در حال فروش
                </label>
                <input
                  type="radio"
                  id="option2"
                  name="radiobutton"
                  value="presell"
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label htmlFor="option2">فروخته شده </label>
              </div>

              <button
                onClick={addNewProduct}
                className="mt-2 hover:bg-neutral-400 transition-all duration-300 rounded-[6px] hover:text-white md:ml-[240px] border pr-6 pl-6  pb-1"
              >
                افزودن
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormDataProduct;

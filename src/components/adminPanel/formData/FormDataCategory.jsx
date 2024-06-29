import React, { useEffect, useState } from "react";
import Inputs from "../../inputs/Inputs";
import { useDispatch, useStore } from "react-redux";
import {
  createState,
  getStates,
  removeState,
  updateState,
} from "../../../Redux/store/fetchStor";
import swal from "sweetalert";

export default function FormDataCategory() {
  const [nameCategory, setNameCategory] = useState("");
  const [titleCategory, setTitleCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const store = useStore();

  const addNewCategory = async (e) => {
    e.preventDefault();
    let body = {
      name: nameCategory,
      title: titleCategory,
    };
    if (nameCategory.length && titleCategory.length) {
      let url = "http://localhost:4000/v1/category";
      await dispatch(createState({ url, body }));
      fetchData();
    } else {
      swal({
        title: "لطفا تمامی فیلد ها را پر کنید ",
        icon: "error",
        buttons: "ok",
      });
    }
  };

  const fetchData = async () => {
    let url = "http://localhost:4000/v1/category";
    await dispatch(getStates({ url }));

    let productStore = store.getState().fetchStor;
    setCategories(productStore);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeCategory = (e, id) => {
    console.log(id);
    e.preventDefault();
    swal({
      title: "ایا از حذف این دسته بندی اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "اره"],
    }).then(async (res) => {
      if (res) {
        let url = `http://localhost:4000/v1/category/${id}`;
        await dispatch(removeState({ url }));

        fetchData();
      }
    });
  };

  const updateCategory = (e, id) => {
    e.preventDefault();
    swal({
      title: "ایا از ویرایش این دسته بندی اطمینان دارید؟",
      icon: "warning",
      content: "input",
      buttons: ["نه", "اره"],
    }).then(async (res) => {
      if (res.trim().length) {
        let body = {
          title: res,
        };

        let url = `http://localhost:4000/v1/category/${id}`;
        await dispatch(updateState({ url, body }));

        fetchData();
      } else {
        swal({
          title: "فیلد نمی تواند خالی باشد",
          icon: "error",
          buttons: "ok",
        });
        fetchData();
      }
    });
  };
  return (
    <>
      <div className="mt-10">
        <form>
          <div className="sm:w-[80%] xl:w-[50%] w-[100%] mx-auto flex flex-col xl:flex xl:flex-rows items-center gap-4">
            <Inputs
              type={"text"}
              className={"form-control placeholder-text text-[12px]"}
              id={"inputEmail4"}
              placeholder={"نام دسته بندی محصول را وارد کنید "}
              onText={(e) => setNameCategory(e)}
            />
            <Inputs
              type={"text"}
              className={"form-control placeholder-text text-[12px]"}
              id={"inputEmail4"}
              placeholder={"توضحیات ی دسته بندی محصول را وارد کنید "}
              onText={(e) => setTitleCategory(e)}
            />
            <button
              onClick={addNewCategory}
              className="mt-2 hover:bg-neutral-400 mx-auto transition-all duration-300 rounded-[6px] hover:text-white md:ml-[230px] border pr-6 pl-6  pb-1"
            >
              افزودن
            </button>
          </div>
        </form>
      </div>
      <div className=" overflow-auto mt-16 lg:p-4 mb-10  ">
        <table className=" table w-[600px] sm:w-[100%]">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th> حذف</th>
              <th>ویرایش</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.title}</td>

                <td>
                  <button
                    onClick={(e) => removeCategory(e, category._id)}
                    className="border pr-4 pl-4 pb-[3px] transition-all duration-300 hover:bg-neutral-400 hover:text-white"
                  >
                    حذف
                  </button>
                </td>

                <td>
                  <button
                    onClick={(e) => updateCategory(e, category._id)}
                    className="border pr-4 pl-4 pb-[3px] transition-all duration-300 hover:bg-neutral-400 hover:text-white"
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

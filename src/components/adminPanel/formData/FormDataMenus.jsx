import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import {
  getStates,
  createState,
  removeState,
} from "../../../Redux/store/fetchStor";
import Inputs from "../../inputs/Inputs";
import swal from "sweetalert";

export default function FormDataMenus() {
  const [menus, setMenus] = useState([]);
  const [title, setTitle] = useState("");
  const [href, setHref] = useState("");

  const dispatch = useDispatch();
  const store = useStore();

  const fetchData = async () => {
    let url = "http://localhost:4000/v1/menus";
    await dispatch(getStates({ url }));

    let menuStore = store.getState().fetchStor;

    setMenus(menuStore);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addNewMenu = async (e) => {
    e.preventDefault();
    let url = "http://localhost:4000/v1/menus";
    let body = {
      title,
      href,
    };

    if (title.length && href.length) {
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

  const removeMenus = (e, id) => {
    e.preventDefault();
    swal({
      title: "ایا از حذف این منو اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "اره"],
    }).then(async (res) => {
      if (res) {
        let url = `http://localhost:4000/v1/menus/${id}`;
        await dispatch(removeState({ url }));

        fetchData();
      }
    });
  };

  return (
    <>
      <div>
        <form>
          <div className="flex flex-col items-center sm:w-[85%] xl:w-[50%] w-[100%]   mx-auto gap-6 mt-10">
            <Inputs
              type={"text"}
              className={"form-control placeholder-text text-[12px]"}
              id={"inputEmail4"}
              placeholder={"لطفا نام محصول را وارد کنید"}
              onText={(e) => setTitle(e)}
            />
            <Inputs
              type={"text"}
              className={"form-control placeholder-text text-[12px]"}
              id={"inputEmail4"}
              placeholder={"لطفا ادس منو را وارد کنید"}
              onText={(e) => setHref(e)}
            />

            <button
              onClick={addNewMenu}
              className="mt-2  w-[100px] 2xl:mx-auto hover:bg-neutral-400 transition-all duration-300 rounded-[6px] hover:text-white md:ml-[240px] border pr-6 pl-6  pb-1"
            >
              افزودن
            </button>
          </div>
        </form>
        <div className="overflow-x-auto  mt-16 lg:p-6  mb-10">
          <table className=" table w-[700px] sm:w-[100%]">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>نام</th>
                <th>ادرس</th>
                <th> حذف</th>
              </tr>
            </thead>

            <tbody>
              {menus.map((menu, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{menu.title}</td>
                  <td>{menu.href}</td>
                  <td>
                    <button
                      onClick={(e) => removeMenus(e, menu._id)}
                      className="border  pr-4 pl-4 pb-[3px] transition-all duration-300 hover:bg-neutral-400 hover:text-white"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

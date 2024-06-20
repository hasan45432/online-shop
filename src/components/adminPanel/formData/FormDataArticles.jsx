import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import Inputs from "../../inputs/Inputs";
import {
  getStates,
  removeState,
  createState,
} from "../../../Redux/store/fetchStor";
import swal from "sweetalert";

export default function FormDataArticles() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  const [articleName, setArticleName] = useState("");
  const [articleDescription, setArticleDescription] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [articleShortName, setArticleShortName] = useState("");
  const [categoryID, setCategoryID] = useState("666ec0050605f7b9f16dce8a");
  const [articleCover, setArticleCover] = useState({});

  const dispatch = useDispatch();
  const store = useStore();
  const fetchData = async () => {
    let url = "http://localhost:4000/v1/articles";
    await dispatch(getStates({ url }));

    let articlesStore = store.getState().fetchStor;
    setArticles(articlesStore);
  };
  const fetchDataCategory = async () => {
    let url = "http://localhost:4000/v1/category";
    await dispatch(getStates({ url }));

    let categoryStore = store.getState().fetchStor;
    setCategories(categoryStore);
  };
  useEffect(() => {
    fetchData();
    fetchDataCategory();
  }, []);

  const removeArticle = (e, id) => {
    e.preventDefault();

    swal({
      title: "ایا از حذف این مقاله اطمینان دارید ؟ ",
      icon: "warning",
      buttons: ["نه", "اره"],
    }).then(async (res) => {
      if (res) {
        let url = `http://localhost:4000/v1/articles/${id}`;
        await dispatch(removeState({ url }));

        fetchData();
        fetchDataCategory();
      }
    });
  };
  const addNewArticle = async (e) => {
    e.preventDefault();

    let body = {
      title: articleName,
      description: articleDescription,
      body: articleBody,
      shortName: articleShortName,
      categoryID: categoryID,
      cover: articleCover,
    };

    let url = "http://localhost:4000/v1/articles";
    await dispatch(createState({ url, body }));

    fetchData();
    fetchDataCategory();
  };
  return (
    <>
      <div>
        <form className=" mt-10">
          <div className="flex flex-col items-center gap-6 sm:w-[80%] xl:w-[50%] w-[100%] mx-auto">
            <Inputs
              type={"text"}
              className={"form-control placeholder-text text-[12px]"}
              id={"inputEmail4"}
              placeholder={"نام  مقاله  را وارد کنید "}
              onText={(e) => setArticleName(e)}
            />
            <Inputs
              type={"text"}
              className={"form-control placeholder-text text-[12px]"}
              id={"inputEmail4"}
              placeholder={" توضیحات مقاله را وارد کنید "}
              onText={(e) => setArticleDescription(e)}
            />
            <Inputs
              type={"text"}
              className={"form-control placeholder-text text-[12px]"}
              id={"inputEmail4"}
              placeholder={"بدنه مقاله را وارد کنید "}
              onText={(e) => setArticleBody(e)}
            />
            <Inputs
              type={"text"}
              className={"form-control placeholder-text text-[12px]"}
              id={"inputEmail4"}
              placeholder={"url مقاله را وارد کنید "}
              onText={(e) => setArticleShortName(e)}
            />
            <div className="flex gap-2 ">
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
            <input
              type="file"
              onChange={(e) => {
                setArticleCover(e.target.files[0]);
              }}
              placeholder="لطفا عکس مقاله را انتخاب کنید "
              className="form-control placeholder-text text-[12px] sm:mx-auto w-[190px]"
            />

            <button
              onClick={addNewArticle}
              className="mt-2 mx-auto hover:bg-neutral-400 transition-all duration-300 rounded-[6px] hover:text-white md:ml-[240px] border pr-6 pl-6  pb-1"
            >
              افزودن
            </button>
          </div>
        </form>
        <div className=" overflow-x-auto mt-16 md:p-4  mb-10">
          <table className=" table w-[600px] sm:w-[100%]">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>عنوان</th>
                <th>سازنده</th>
                <th>لینک</th>
                <th> حذف</th>
              </tr>
            </thead>

            <tbody>
              {articles.map((article, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{article.title}</td>
                  <td>{article.creator.name}</td>
                  <td>{article.shortName}</td>
                  <td>
                    <button
                      onClick={(e) => removeArticle(e, article._id)}
                      className="border pr-4 pl-4 pb-[3px] transition-all duration-300 hover:bg-neutral-400 hover:text-white"
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

import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import {
  getStates,
  removeState,
  updateState,
} from "../../../Redux/store/fetchStor";
import swal from "sweetalert";

export default function FormUsers() {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  const store = useStore();

  const fetchData = async () => {
    let url = "http://localhost:4000/v1/users";
    await dispatch(getStates({ url }));

    let usersStore = store.getState().fetchStor;
    setUsers(usersStore);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeUsers = (e, id) => {
    e.preventDefault();

    swal({
      title: "ایا از حذف این کاربر اطمینان دارید ",
      icon: "warning",
      buttons: ["نه", "اره"],
    }).then(async (res) => {
      if (res) {
        let url = `http://localhost:4000/v1/users/${id}`;
        await dispatch(removeState({ url }));

        fetchData();
      }
    });
  };

  const banUsers = (e, id) => {
    e.preventDefault();
    swal({
      title: "ایا از بن کردن این کاربر اطمینان دارید ؟",
      icon: "warning",
      buttons: ["نه", "اره"],
    }).then(async (res) => {
      if (res) {
        let url = `http://localhost:4000/v1/users/ban/${id}`;
        await dispatch(updateState({ url }));
        fetchData();
      }
    });
  };
  return (
    <>
      <div className=" overflow-x-auto mt-16 md:p-4 mb-10 ">
        <table className=" w-[100%] table ">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>نام</th>
              <th>سمت </th>
              <th> شماره تلفن</th>
              <th>ایمیل</th>
              <th> حذف</th>
              <th> بن کاربر</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={(e) => removeUsers(e, user._id)}
                    className="border pr-4 pl-4 pb-[3px] transition-all duration-300 hover:bg-neutral-400 hover:text-white"
                  >
                    حذف
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => banUsers(e, user._id)}
                    className="border mx-auto  w-[100px] pr-4 pl-4 pb-[3px] transition-all duration-300 hover:bg-neutral-400 hover:text-white"
                  >
                    بن کاربر
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

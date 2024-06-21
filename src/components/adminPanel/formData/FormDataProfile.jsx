import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { getStates } from "../../../Redux/store/fetchStor";
export default function FormDataProfile() {
  const [profile, setProfile] = useState({});

  const dispatch = useDispatch();
  const store = useStore();

  const fetchData = async () => {
    let url = "http://localhost:4000/v1/auth/me";
    await dispatch(getStates({ url }));

    let profileStore = store.getState().fetchStor;

    setProfile(profileStore);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <div className="overflow-x-auto mt-16 lg:p-6 mb-10 ">
          <table className=" table  w-[500px] sm:w-[100%]">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>نام</th>
                <th>سمت</th>
                <th>ایمیل</th>
                <th>نام کاربری</th>
                <th> شماره تماس</th>
              </tr>
            </thead>

            <tbody>
              {
                <tr>
                  <td>{1}</td>
                  <td>{profile.name}</td>
                  <td>{profile.role}</td>
                  <td>{profile.email}</td>
                  <td>{profile.username}</td>
                  <td>{profile.phone}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

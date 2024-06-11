import React from "react";

export default function HeaderDesktop() {
  return (
    <>
      <div>
        <ul>
          <li className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 016 0v1zm-2 0v-1a1 1 0 00-2 0v1h2z" />
            </svg>
            <a href="">پروفایل مدیر</a>
          </li>
          <li className="flex items-center">
            <svg fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zM2 5a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm10 7c-2.761 0-5-2.686-5-6h2c0 2.566 1.67 4 3 4s3-1.434 3-4h2c0 3.314-2.239 6-5 6z"
                clipRule="evenodd"
              />
            </svg>
            <a href="">محصولات</a>
          </li>
          <li className="flex items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1.5em"
              width="1.5em"
            >
              <path d="M1.5 0A1.5 1.5 0 000 1.5v2A1.5 1.5 0 001.5 5h13A1.5 1.5 0 0016 3.5v-2A1.5 1.5 0 0014.5 0h-13zm1 2h3a.5.5 0 010 1h-3a.5.5 0 010-1zm9.927.427A.25.25 0 0112.604 2h.792a.25.25 0 01.177.427l-.396.396a.25.25 0 01-.354 0l-.396-.396zM0 8a2 2 0 012-2h12a2 2 0 012 2v5a2 2 0 01-2 2H2a2 2 0 01-2-2V8zm1 3v2a1 1 0 001 1h12a1 1 0 001-1v-2H1zm14-1V8a1 1 0 00-1-1H2a1 1 0 00-1 1v2h14zM2 8.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" />
            </svg>
            <a href="">منوها</a>
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <a href="">کاربران</a>
          </li>
          <li className="flex items-center">
            <svg
              data-name="Layer 1"
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M13.991 13h-4a1 1 0 000 2h4a1 1 0 000-2zm-4-2h1a1 1 0 000-2h-1a1 1 0 000 2zm6-1V9a4.004 4.004 0 00-4-4h-2a5.006 5.006 0 00-5 5v4a5.006 5.006 0 005 5h4a5.006 5.006 0 005-5v-1a3.005 3.005 0 00-3-3zm0 0v.001h-1zm1 4a3.003 3.003 0 01-3 3h-4a3.003 3.003 0 01-3-3v-4a3.003 3.003 0 013-3h2a2.003 2.003 0 012 2v1a2.003 2.003 0 002 2 1 1 0 011 1zm3-13h-16a3.003 3.003 0 00-3 3v16a3.003 3.003 0 003 3h16a3.003 3.003 0 003-3V4a3.003 3.003 0 00-3-3zm1 19a1 1 0 01-1 1h-16a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1z" />
            </svg>
            <a href="">مقاله ها</a>
          </li>
          <li className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z" />
            </svg>
            <a href="">دسته بندی</a>
          </li>
        </ul>
      </div>
    </>
  );
}
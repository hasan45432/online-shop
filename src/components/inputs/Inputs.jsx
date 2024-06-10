import React, { useEffect } from "react";

export default function Inputs(props) {
  const addNewUser = (e) => {
    if (props.onPassword) {
      props.onPassword(e.target.value);
    } else if (props.onEmail) {
      props.onEmail(e.target.value);
    } else if (props.onUserName) {
      props.onUserName(e.target.value);
    } else if (props.onFirstName) {
      props.onFirstName(e.target.value);
    } else if (props.onLastName) {
      props.onLastName(e.target.value);
    }
  };


  return (
    <>
      <div className="w-[80%] sm:w-[50%] sm:mx-auto">
        <input
          type={props.type}
          className={props.className}
          id={props.id}
          placeholder={props.placeholder}
          onInput={addNewUser}
        />
      </div>
    </>
  );
}

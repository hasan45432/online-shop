import React, { useEffect } from "react";

export default function Inputs(props) {
  const addNewUser = (e) => {
    if (props.onText) {
      props.onPassword(e.target.value);
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

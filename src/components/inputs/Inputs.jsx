import React, { useEffect } from "react";

export default function Inputs(props) {
 
  const add = (e) => {
    if (props.onText) {
      props.onText(e.target.value);
   
    }
  };

  return (
    <>
      <div className="w-[80%] sm:w-[60%] mx-auto ">
        <input
          type={props.type}
          className={props.className}
          id={props.id}
          placeholder={props.placeholder}
          onInput={add}
        />
      </div>
    </>
  );
}

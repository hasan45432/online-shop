import React, { useEffect } from "react";

export default function Inputs(props) {
 
  const add = (e) => {
   
      props.onText(e.target.value);
    
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
          value={props.value}
        />
      </div>
    </>
  );
}

import React from "react";

export default function Inputs(props) {
  const information =(e)=>{
   console.log(e.target.value);
  }
  return (
    <>
      <div className="w-[80%] sm:w-[50%] sm:mx-auto">
        <input
          type={props.type}
          className={props.className}
          id={props.id}
          placeholder={props.placeholder}
          onInput={information}
        />
      </div>
    </>
  );
}

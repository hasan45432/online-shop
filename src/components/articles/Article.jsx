import React from "react";

export default function Article(props) {
  return (
    <>
      <div>
        <div className="flex h-[200px] mt-4 sm:h-[300px] md:h-[320px] lg:h-[350] xl:h-[390px] 2xl:h-[420px] hover:scale-110 m-1 transition  duration-300 flex-col  overflow-hidden rounded-[15px]">
          <img
            src={`http://localhost:4000/courses/covers/${props.cover}`}
            className="h-[100%] bg-no-repeat bg-cover bg-center"
          />
        </div>
        <p className="text-[10px]  md:text-xl">{props.body}</p>
      </div>
    </>
  );
}

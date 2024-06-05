import React from "react";
import Information from "../informaicon/Information";
export default function Footer() {
  return (
    <>
      <div className=" bg-neutral-200 h-[400px] sm:h-[500px] w-[100%] mt-20 ">
        <div className=" text-center p-1">
          <h2 className="text-4xl md:text-5xl text-black pt-4">HIFashion</h2>
          <p className="text-[14px] md:text-[14px] break-words lg:text-[19px] mt-3">
            Making a luxurious lifestyle accessible for a generous group of
          </p>
          <p className="text-[14px] md:text-[14px] break-words lg:text-[19px]">
            women is our daily drive.
          </p>
        </div>
        <div className="grid gap-8 p-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10 lg:mt-20">
          <Information />
          <Information />
          <Information />
          <Information />
        </div>
      </div>
      <div className=" container mx-auto">
        <div className="flex justify-around items-center mt-[30px] ">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="2em"
            width="2em"
            className=" sm:w-[3em] sm:h-[3em]"
          >
            <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
          </svg>
          <svg
            viewBox="0 0 448 512"
            fill="currentColor"
            height="2em"
            width="2em"
            className=" sm:w-[3em] sm:h-[3em]"
          >
            <path d="M224 202.66A53.34 53.34 0 10277.36 256 53.38 53.38 0 00224 202.66zm124.71-41a54 54 0 00-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 00-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0030.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0030.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33zM224 338a82 82 0 1182-82 81.9 81.9 0 01-82 82zm85.38-148.3a19.14 19.14 0 1119.13-19.14 19.1 19.1 0 01-19.09 19.18zM400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88z" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2em"
            width="2em"
            className=" sm:w-[3em] sm:h-[3em]"
          >
            <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center mt-[60px] text-xl sm:child:text-2xl">
          <p>Support@HiFashion.com</p>
          <p className="mt-2 mb-2">0992 782 15 70</p>
          <p>08:00 - 22:00 - Everyday</p>
        </div>
      </div>
      <div className=" bg-neutral-200 h-[70px] flex justify-center items-center mt-[60px]">
        <p className="text-md sm:text-xl">.Copyright© HiFashion All Rights Reserved</p>
      </div>
    </>
  );
}

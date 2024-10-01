import React from "react";

export default function Hero({ background_image, text }) {
  return (
    <div
      className=" relative  overflow-hidden w-full h-[600px] p-2 justify-center items-center flex "
      style={{
        backgroundImage: `url(${background_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" h-[600px] top-0 left-0 right-0 absolute  bg-black bg-opacity-50 w-full  flex justify-center items-center  text-4xl    md:text-5xl  lg:text-7xl text-white font-passion font-thin ">
        {text}
      </div>
    </div>
  );
}

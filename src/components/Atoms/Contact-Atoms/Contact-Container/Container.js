import React from "react";
import Hero from "../Containers/Hero";

export default function Container() {
  return (
    <div className="w-full h-[fixed] justify-start items-start flex flex-col gap-y-[100px] ">
    <Hero/>
    </div>
  );
}

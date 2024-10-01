import React from "react";
import Hero from "../Containers/Hero";
import Holder from "../Containers/Form-Element-Holder";

export default function Container() {
  return (
    <div className="w-full h-[fixed] justify-start items-start flex flex-col gap-y-[100px] ">
    <Hero/>
    <Holder/>
    </div>
  );
}

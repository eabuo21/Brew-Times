import React from "react";
import Hero from "../Containers/Hero";
import Menu1 from "../Containers/Menu1";
import Menu2 from "../Containers/Menu2";
import Paralx from "../../Home-Atoms/Containers/Paralax";

export default function Container() {
  return (
    <div className="w-full h-[fixed] justify-start items-start flex flex-col gap-y-[100px] ">
      <Hero />
      <Menu1 />
      <Menu2/>
      <Paralx/>
    </div>
  );
}

import React from "react";
import Hero from "../Containers/Hero";
import SubHero from "../Containers/SubHero";
import CounterCards from "../../Home-Atoms/Containers/Counter-Cards";
import Paralax from "../../Home-Atoms/Containers/Paralax";
import Mission from "../Containers/Mission";
import Teams from "../Containers/Teams";

export default function Container() {
  return (
    <div className="w-full flex flex-col gap-y-[100px]">
      <Hero />
      <SubHero />
      <Mission />
      <Paralax />
      <Teams />
      <CounterCards />
    </div>
  );
}

import React from "react";
import Hero from "../Containers/Hero";
import Subhero from "../Containers/Subhero";
import Cards from "../Containers/Cards";
import Crds from "../Containers/Crds";
import Paralax from "../Containers/Paralax";
import CounterCards from "../Containers/Counter-Cards";
import CartCards from "../Containers/Cart-Cards";
import Gallery from "../Containers/Gallery";
import Clients from "../Containers/Clients";

export default function Container() {
  return (
    <div className="w-full h-[fixed] justify-start items-start flex flex-col gap-y-[100px] ">
      <Hero />
      <Subhero />
      <Cards />
      <Crds />
      <Paralax />
      <CounterCards />
      <CartCards/>
      <Gallery/>
      <Clients/>
    </div>
  );
}

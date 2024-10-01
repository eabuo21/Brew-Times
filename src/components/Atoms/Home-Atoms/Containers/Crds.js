import React from "react";
import Cards2 from "@/components/shared/Atoms/Card-Atoms/Cards2";
import SubHeros from "@/components/shared/Atoms/SubHeros";

export default function Crds() {
  const subs = [
    {
      title: "Perfectly Brewed",
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png",
      text: "Experience the artistry of coffee with every sip. From smooth lattes to bold espressos, our expertly crafted brews are made to delight your senses and energize your day.",
    },
  ];

  const cards_items = [
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-1.jpg",
      title: "Savor Every Sip",
      text: "From the first taste to the last drop, our hand-selected beans and precision brewing ensure every cup delivers exceptional flavor and balance.",
      route: "#",
      link: "#",
      link_text: "Read More",
    },
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-2.jpg",
      title: "Beyond Coffee",
      text: "Pair your favorite coffee with our range of freshly baked pastries, sandwiches, and snacks—crafted to complement your brew and elevate your experience.",
      route: "#",
      link: "#",
      link_text: "Read more",
    },
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-3.jpg",
      title: "Seasonal Specials",
      text: "Discover new flavors with our limited-time seasonal brews, featuring unique blends and ingredients to keep things fresh and exciting year-round.",
      route: "#",
      link: "#",
      link_text: "Read more",
    },
  ];
  return (
    <div className="w-full h-[fixed] flex flex-col  justify-center items-center bg-stone-500 py-8 ">
      <SubHeros items={subs} />
      <Cards2 cards={cards_items} className={``} />
    </div>
  );
}

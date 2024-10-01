import React from "react";
import SubHeros from "@/components/shared/Atoms/SubHeros";

export default function SubHero() {
  const items = [
    {
      title: "About Brew Time",
      image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png",
      text: "At Bre Time, we believe in blending moments of relaxation with the finest flavors of coffee. Whether you're seeking a peaceful break, a space to connect with friends, or just a refreshing pause from a busy day, Bre Time is here to enhance your experience. Our carefully crafted brews and warm, inviting atmosphere are designed to provide you with that perfect coffee moment. From rich espresso shots to smooth cold brews, we offer a wide range of choices tailored to every coffee lover’s taste. Come, unwind, and savor your favorite cup at Bre Time – where every sip is a celebration of flavor and comfort.",
    },
  ];

  return (
    <div className="w-full h-[fixed]    mb-[2rem] md:mb-[5rem]">
      <SubHeros items={items} />
    </div>
  );
}

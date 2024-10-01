import React from "react";
import CardsWithImage from "@/components/shared/Atoms/Card-Atoms/Cards-With_image";

export default function Cards() {
  const items = [
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-5.png",
      title: "Espresso",
      text: "A strong and bold coffee shot, perfect for a quick caffeine boost.",
    },
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-6.png",
      title: "Cappuccino",
      text: "A balanced mix of espresso, steamed milk, and foam with a sprinkle of cocoa.",
    },
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-7.png",
      title: "Latte",
      text: "A smooth blend of espresso and steamed milk, topped with light foam.",
    },
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-8.png",
      title: "Americano",
      text: "Espresso diluted with hot water for a smooth, less intense flavor.",
    },
  ];
  return (
    <div className="w-full h-[fixed]">
      <CardsWithImage cards={items} />
    </div>
  );
}

import React from "react";
import SubHeros from "@/components/shared/Atoms/SubHeros";
import MenuCards from "@/components/shared/Atoms/Card-Atoms/Menu-Cards";

export default function Menu2() {
  const menu_contents = [
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
      title: "Cafe Latte",
      prize: "$3.45",
      description: "Fresh Brewed coffee and steamed milk",
    },
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
      title: "Cafe Latte",
      prize: "$3.45",
      description: "Fresh Brewed coffee and steamed milk",
    },
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
      title: "Cafe Latte",
      prize: "$3.45",
      description: "Fresh Brewed coffee and steamed milk",
    },
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
      title: "Cafe Latte",
      prize: "$3.45",
      description: "Fresh Brewed coffee and steamed milk",
    },
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
      title: "Cafe Latte",
      prize: "$3.45",
      description: "Fresh Brewed coffee and steamed milk",
    },
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
      title: "Cafe Latte",
      prize: "$3.45",
      description: "Fresh Brewed coffee and steamed milk",
    },
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
      title: "Cafe Latte",
      prize: "$3.45",
      description: "Fresh Brewed coffee and steamed milk",
    },
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
      title: "Cafe Latte",
      prize: "$3.45",
      description: "Fresh Brewed coffee and steamed milk",
    },
  ];
  const hero_items = [
    {
      title: "Cold Beverages",
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png",
      text: "Indulge in the comforting warmth of our expertly crafted hot beverages, from rich coffees to soothing teas, perfect for any moment of relaxation or recharge.",
    },
  ];

  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-5 justify-center items-center  bg-stone-500 p-2 ">
      <SubHeros items={hero_items} />

      <MenuCards title=" Menus" cards={menu_contents} />
    </div>
  );
}

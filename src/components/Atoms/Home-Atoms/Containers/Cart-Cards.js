import React from "react";
import Cards2 from "@/components/shared/Atoms/Card-Atoms/Cards2";
import SubHeros from "@/components/shared/Atoms/SubHeros";
import AddToCart from "@/components/shared/Atoms/Card-Atoms/Ad-Cart";

export default function CartCards() {
  const card_items = [
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-3.png",
      name: "Ethiopian  Coffee",
      prize: "$15.00 ",
      adtext: "Add to Cart",
    },

    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-3.png",
      name: "Colombian   Coffee",
      prize: "$15.00 ",
      adtext: "Add to Cart",
    },

    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-3.png",
      name: "Costa Rican  Coffee",
      prize: "$15.00 ",
      adtext: "Add to Cart",
    },

    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-3.png",
      name: "Brazilian   Coffee",
      prize: "$15.00 ",
      adtext: "Add to Cart",
    },
  ];
  const subs = [
    {
      title: "Your Daily Delight",
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png",
      text: "Indulge in our selection of expertly crafted coffees, from creamy cappuccinos to rich americanos, designed to elevate your coffee experience and brighten your day.",
    },
  ];

  const cart_items = [];
  return (
    <div className="w-full h-[fixed] flex flex-col  justify-center items-center bg-stone-300 py-8 ">
      <SubHeros items={subs} />
      <AddToCart
        cards={card_items}
        onClick={() => {
          alert("item added to cart");
        }}
      />
    </div>
  );
}

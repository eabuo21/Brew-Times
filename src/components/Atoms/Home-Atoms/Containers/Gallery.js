import React from "react";
import Cards2 from "@/components/shared/Atoms/Card-Atoms/Cards2";
import SubHeros from "@/components/shared/Atoms/SubHeros";
import AddToCart from "@/components/shared/Atoms/Card-Atoms/Ad-Cart";
import Gall from "@/components/shared/Atoms/Card-Atoms/Gall";

export default function Gallery() {
  const gallery_items = [
    {
      image: "https://www.thelaughingpug.com.au/cdn/shop/products/Foto2021-10-20150729_1800x1800.jpg?v=1712793934",
      title: "Perfect Cup",
      id1: "#",
      id2: "#",
      id_name1: "Cup Coffee",
      id_name2: "Filtered",
    },
    {
        image: "https://www.thelaughingpug.com.au/cdn/shop/products/Foto2021-10-20150729_1800x1800.jpg?v=1712793934",
        title: "Perfect Cup",
        id1: "#",
        id2: "#",
        id_name1: "Cup Coffee",
        id_name2: "Filtered",
      },
      {
        image: "https://www.thelaughingpug.com.au/cdn/shop/products/Foto2021-10-20150729_1800x1800.jpg?v=1712793934",
        title: "Perfect Cup",
        id1: "#",
        id2: "#",
        id_name1: "Cup Coffee",
        id_name2: "Filtered",
      },
      {
        image: "https://www.thelaughingpug.com.au/cdn/shop/products/Foto2021-10-20150729_1800x1800.jpg?v=1712793934",
        title: "Perfect Cup",
        id1: "#",
        id2: "#",
        id_name1: "Cup Coffee",
        id_name2: "Filtered",
      },

      {
        image: "https://www.thelaughingpug.com.au/cdn/shop/products/Foto2021-10-20150729_1800x1800.jpg?v=1712793934",
        title: "Perfect Cup",
        id1: "#",
        id2: "#",
        id_name1: "Cup Coffee",
        id_name2: "Filtered",
      },
      {
        image: "https://www.thelaughingpug.com.au/cdn/shop/products/Foto2021-10-20150729_1800x1800.jpg?v=1712793934",
        title: "Perfect Cup",
        id1: "#",
        id2: "#",
        id_name1: "Cup Coffee",
        id_name2: "Filtered",
      },
      {
        image: "https://www.thelaughingpug.com.au/cdn/shop/products/Foto2021-10-20150729_1800x1800.jpg?v=1712793934",
        title: "Perfect Cup",
        id1: "#",
        id2: "#",
        id_name1: "Cup Coffee",
        id_name2: "Filtered",
      },
      {
        image: "https://www.thelaughingpug.com.au/cdn/shop/products/Foto2021-10-20150729_1800x1800.jpg?v=1712793934",
        title: "Perfect Cup",
        id1: "#",
        id2: "#",
        id_name1: "Cup Coffee",
        id_name2: "Filtered",
      },
  ];

  const subs = [
    {
      title: "Our Sweet Gallery",
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png",
      text: "Discover a delightful selection of pastries and desserts crafted to perfection. Pair them with your favorite coffee for a truly indulgent experience!.",
    },
  ];

  const cart_items = [];
  return (
    <div className="w-full h-[fixed] flex flex-col  justify-center items-center  gap-y-8  py-8 ">
      <SubHeros items={subs} />
      <Gall cards={gallery_items} />
    </div>
  );
}

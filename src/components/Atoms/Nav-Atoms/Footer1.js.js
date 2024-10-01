import React from "react";
import SubHeros from "@/components/shared/Atoms/SubHeros";

export default function Foot() {
  const links = [
    { text: "Dunsmuir Ave, Los Angeles, CA 90036, USA ", url: "#" },
    { text: "Dunsmuir Ave, Los Angeles, CA 90036, USA ", url: "#" },
  ];
  const items = [
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/logo-footer-sidearea.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,nostrud exercitation ullamco laboris.",
    },
  ];

  return (
    <div className="w-full h-[fixed] justify-center items-center   flex flex-col gap-y-5    parallax2">
      <SubHeros
        items={items}
        text_className={`text-white lg:text-2xl `}
        image_className={`  h-[80px] object-fill max-w-[200px]    md:h-[100px]`}
      />
      <div className="flex flex-col gap-y-5 justify-center items-center w-full h-[fixed]">
        <h3 className="text-white text-xl md:text-3xl lg:text-4xl font-bold ">
          Stores
        </h3>
        <div className="flex flex-col justify-center items-center w-full">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`text-white hover:text-stone-600 px-3 py-2 text-base md:text-xl font-medium transition duration-300 ease-in-out `}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

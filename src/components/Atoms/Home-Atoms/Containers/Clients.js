import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Clients() {
  const clients_images = [
    "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-1.png",
    "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-2-hover.png",
    "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-3-hover.png",
    "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-4-hover.png",
    "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-2-hover.png",
    "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-3-hover.png",
    "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/clients-img-4-hover.png",
  ];

  return (
    <div className=" w-full h-[300px] flex  flex-col justify-center items-center p-2 ">
      {/* tab nine write a code to render the array of images in the marquee */}
      <Marquee scrollSpeed={20} pauseOnHover={true} direction="left" className="flex gap-x-8">
        {clients_images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={500}
            height={500}
            alt="client"
            className="     h-[100px] w-[100px]             md:w-[200px] md:h-[150px] object-cover object-center   cursor-pointer hover:scale-105 transform ease-in-out duration-500"
          />
        ))}
      </Marquee>
    </div>
  );
}

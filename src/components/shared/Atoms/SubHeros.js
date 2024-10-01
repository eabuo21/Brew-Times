import {useEffect} from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

export default function SubHeros({ items = [], className, text_className, image_className }) {

  useEffect(() => {
   
    Aos.init({
      duration: 2000,
      easing: "ease-in-out-cubic",
      anchorPlacement: "top-center",
      once: true,
      mirror: true,
      disableMutationObserver: true,
      startEvent: "DOMContentLoaded",
      resetAnimation: true,
      offset: 100,
      delay: 0,
      anchorPlacement: "top-center",
    });
  }, []); 
  return (
    <div data-aos="fade-in"
      className={`w-full h-[fixed] justify-center items-start  flex  flex-col p-2 ${className} `}
    >
      <section className="w-full h-[fixed] justify-center items-center  p-1 flex flex-col gap-y-5 ">
        {items.map((item, index) => (
          <div
            key={index}
            className=" title-image-text-container w-full flex flex-col gap-y-5 justify-center items-center  p-1  "
          >
            <h1 className="text-gray-800 font-medium text-4xl  md:text-5xl lg:text-7xl font-lato tracking-wider ">
              {item.title}
            </h1>
            <Image
              src={item.image}
              width={400}
              height={400}
              alt={item.title}
              className={`w-[200px] h-[40px] object-fill  ${image_className}`}
            />
            <p className={` ${text_className} text-gray-800 font-normal text-base font-serif md:text-lg   lg:text-lg  tracking-wide  w-[90%] md:w-[70%] text-center `}>
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

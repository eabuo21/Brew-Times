import {useEffect} from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MenuCards({ cards = [], title }) {
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
    <div className="w-full h-[fixed] flex flex-col justify-center items-center p-2  ">
      <h1 className="text-gray-800 font-medium text-base  md:text-lg   font-cur tracking-wider ">
        {title}
      </h1>
      <section className="w-full h-[fixed] justify-center items-center p-2  gap-y-5  mx-auto  grid grid-cols-1 md:grid-cols-2    ">
        {cards.map((card, index) => (
          <div data-aos="flip-up"
            key={index}
            className="w-full h-[fixed] justify-center items-start  md:items-center flex flex-col  px-2   mx-auto  "
          >
            <section className="flex flex-row justify-center items-center  p-2 gap-x-5  ">
              <Image
                src={card.image}
                alt={card.name}
                width={300}
                height={300}
                className=" w-[50px] h-[50px]    md:w-[100px] md:h-[100px]"
              />
              <div className="flex flex-col gap-y-5 justify-center items0center  p-2 w-full h-[fixed] ">
                <h3 className="text-gray-800  font-normal text-base flex flex-row gap-x-4   md:text-lg lg:text-xl font-serif tracking-wider ">
                  {card.title}................... {card.prize}
                </h3>
                <p className="text-gray-800 font-normal text-base  md:text-lg font-serif tracking-wide ">
                  {card.description}
                </p>
              </div>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}

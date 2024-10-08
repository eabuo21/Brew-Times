import {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Gall({ cards = [], className }) {
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
    <div
      className={` ${className} w-full h-[fixed] md:h-[600px] p-2 pb-2  justify-center items0center flex flex-col `}
    >
      <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  w-full h-[fixed] justify-center  items-center      gap-x-[10px] mx-auto  gap-y-[30px] ">
        {cards.map((gal, index) => (
          <div data-aos="zoom-in-up"
            key={index}
            className=" relative  group  transform duration-700 ease-in-out mx-auto  w-full    md:w-[300px] md:h-[fixed] overflow-hidden  justify-center items-center  flex flex-col gap-y-5 "
          >
            <Image
              src={gal.image}
              width={500}
              height={500}
              alt={gal.title}
              className="    w-full    md:w-[300px] h-[300px] object-cover object-center "
            />

            <div
              className="absolute left-0 right-0 top-0  w-full  h-full  flex justify-center items-center flex-col   
            opacity-0 transform duration-700 ease-in-out  bg-black bg-opacity-70  gap-y-5
              group-hover:transform group-hover:duration-700 group-hover:ease-in-out  group-hover:opacity-100
             "
            >
              <h3
                className="text-white font-medium text-xl  md:text-2xl lg:text-3xl font-lato tracking-wider  
              "
              >
                {gal.title}
              </h3>
              <section className="flex flex-row gap-x-2  justify-center items-center  ">
                <Link
                  href={`/gallery/${gal.id}`}
                  className="text-white  font-serif font-normal  text-xl   hover:text-tomato"
                >
                  {gal.id_name1}
                </Link>{" "}
                /{" "}
                <Link
                  href={`/gallery/${gal.id2}`}
                  className="text-white  text-xl   hover:text-tomato"
                >
                  {gal.id_name2}
                </Link>
              </section>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

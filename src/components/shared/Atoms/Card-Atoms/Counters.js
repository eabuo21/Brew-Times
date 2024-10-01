import {useEffect} from "react";
import CountUp from 'react-countup';
import Aos from "aos";
import "aos/dist/aos.css";


export default function Counters({counters_cards = []}) {
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
    <div className="w-full  h-[fixed] flex flex-col gap-y-5 justify-center items-center p-2  relative bottom-[5rem] ">
      <section className="items-container grid grid-cols-1 gap-y-[30px] gap-x-8   md:grid-cols-4 justify-center items-center  p-2  px-2  md:px-[3rem]">
        {counters_cards.map((card, index) => (
          <div data-aos="fade-up"
            key={index}
            className="w-full has-[fixed] justify-center items-center flex flex-col gap-y-5 0-1"
          >
            <CountUp
              start={0}
              end={card.value}
              duration={50}
              separator=","
              useEasing={true}
              className="font-medium  font-lato text-2xl  md:text-4xl lg:text-6xl text-center text-stone-800"
            />
            <h3 className="text-gray-800 font-medium text-xl  md:text-2xl lg:text-3xl font-lato tracking-wider  text-center">
              {card.title}
            </h3>
            <p className="text-gray-800 font-normal text-base font-serif md:text-lg   lg:text-lg  tracking-wide   text-center w-[250px]  md:w-full ">
              {card.text}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

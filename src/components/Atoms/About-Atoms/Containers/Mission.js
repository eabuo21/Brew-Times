import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Mission() {
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

  const cards_items = [
    {
      title: "Mission",
      description:
        "At Brew Time, our mission is to create memorable coffee experiences by serving exceptional, handcrafted brews made from the finest ingredients. We aim to foster a welcoming environment where coffee lovers can connect, relax, and recharge. Through innovation and passion for quality, we strive to provide our customers with moments of joy in every cup.",
    },
    {
      title: "Vision",
      description:
        "Our vision is to become a globally recognized leader in the coffee industry, inspiring a culture of excellence and sustainability. We aspire to bring people together through our coffee, creating lasting connections and enriching communities while maintaining a commitment to environmental responsibility and continuous improvement in every aspect of our business.",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-y-5 justify-center items-center p-2  mb-[7rem]">
      <section className="w-full grid grid-cols-1    md:grid-cols-2  h-[fixed] justify-center items-center   md:px-[3rem]  p-2">
        {cards_items.map((card, index) => (
          <div data-aos="fade-up"
            key={index}
            className={`      w-[300px]   md:w-[300px]   lg:w-[500px]   mx-auto  flex flex-col gap-y-5 justify-center items-center p-2  px-5 border border-stone-700   ${
              index === 1 ? "relative top-[4rem]" : ""
            }`}
          >
            <h2 className="text-lg  md:text-xl  lg:text-3xl text-center text-gray-800 font-lato font-medium  ">
              {card.title}
            </h2>
            <p className="text-base  md:text-lg  font-serif font-normal  lg:text-xl  text-gray-800 text-center">
              {card.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

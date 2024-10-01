import { useEffect } from "react";
import Container from "@/components/Atoms/Home-Atoms/Home-Container/Container";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      data-aos="flip-left"
      className="w-full h-[fixed] justify-start items-start  overflow-hidden  mb-9 pb-9"
    >
      <Container />
    </div>
  );
};

export default HomePage;

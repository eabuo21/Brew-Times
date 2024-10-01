import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { Thumbs, EffectFade, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import HeadingWithContent from "@/components/shared/Atoms/Heading-With-Content";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Hero() {

  useEffect(()=>{
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
  },[]);
  const contents = [
    {
      heading: "Welcome To Brew Time ",
      description: "Check out our daily special offers on coffee and pastries.",
      route: "/contact-us",
      route_name: "Get Started",
    },
  ];
  //initializing animate on scroll

  const swipesimages = [
    "https://blog-assets.lightspeedhq.com/img/2021/03/b26bcdcf-blog_coffee-shop-equipment-list_1200x628.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JiQHHOz-AwMT45D3fc_SIJTIXkgbv_a7qA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwJNz_so5ZNDjnU2RP_Ykz4VZObEO-zLfDA&s",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="relative w-full  h-[800px] overflow-hidden   flex flex-col  justify-start items-start    ">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          effect="fade"
          thumbs={{ swiper: thumbsSwiper }}
          modules={[EffectFade, Thumbs, Autoplay]}
          className="mySwiper2"
        >
          {swipesimages.map((swipe, index) => (
            <SwiperSlide key={index}>
              <Image
                src={swipe}
                alt={`swiper-image-${index}`}
                height={300}
                width={600}
                className=" "
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          watchSlidesProgress={true}
          modules={[Thumbs, Autoplay]}
          className="mySwiper"
        >
          {swipesimages.map((swipe, index) => (
            <SwiperSlide key={index}>
              <Image
                src={swipe}
                alt={`thumb-image-${index}`}
                height={100}
                width={100}
                className=" "
              />
            </SwiperSlide>
          ))}
        </Swiper> */}

        <div className=" absolute left-0 right-0 top-0  h-[650px]  p-2  bg-black  bg-opacity-50  z-30  grid grid-cols-1 gap-y-[100px] w-full md:h-[fixed]   justify-center items-center  mb-9   lg:grid-cols-2  lg:px-[4rem]  ">
          <section  data-aos="zoom-in-up" data-aos-delay="100" className="first-container   h-[fixed] flex flex-col  justify-start items-start px-4 gap-y-[30px]  w-full  relative top-[3rem]   lg:top-0 ">
            <HeadingWithContent items={contents} className={``} />
          </section>
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { Thumbs, EffectFade, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import HeadingWithContent from "@/components/shared/Atoms/Heading-With-Content";

export default function Hero() {
  const contents = [
    {
      heading: "Welcome To Brew Time ",
      description: "Check out our daily special offers on coffee and pastries.",
      route: "/",
      route_name: "Read More",
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
      <div className="relative w-full  h-[800px] overflow-hidden   flex flex-col  justify-start items-start      mb-9 ">
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

        <div className=" absolute left-0 right-0 top-0  h-[655px]  p-2  bg-black  opacity-65  z-30  grid grid-cols-1 gap-y-[100px] w-full md:h-[fixed]   justify-center items-center  mb-9   lg:grid-cols-2  lg:px-[4rem]  ">
          <section className="first-container   h-[fixed] flex flex-col  justify-start items-start px-4 gap-y-[30px]  w-full  relative top-[3rem]   lg:top-0 ">
            <HeadingWithContent items={contents} className={``} />
          </section>
        </div>
      </div>
    </>
  );
}

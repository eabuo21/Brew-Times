import React from "react";
import Image from "next/image";

export default function parallax() {
  return (
    <div className="w-full h-[700px] flex flex-col justify-center items-center p-2 parallax relative bottom-[6.5rem]">
      <section className="flex flex-col justify-center items-center w-full h-[fixed] p-2">
        <Image
          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h1-single-img-1-250x226.png"
          alt="coffe-logo-hoax"
          width={500}
          height={500}
          className="    w-[200px] h-[200px]       md:w-[350px] md:h-[350px]   "
        />
      </section>
    </div>
  );
}

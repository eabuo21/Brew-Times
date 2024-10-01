import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Teams() {
  const Teams_data = [
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/our-team-1.jpg",
      name: "Timothy Oliver",
      role: "Barista",
      links: [
        {
          icon: faFacebook,
          url: "#",
        },
        {
          icon: faLinkedin,
          url: "#",
        },
        {
          icon: faXTwitter, // Corrected icon
          url: "#",
        },
      ],
    },
    // team 2
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/our-team-2.jpg",
      name: "Vincent Duncan",
      role: "Barista",
      links: [
        {
          icon: faFacebook,
          url: "#",
        },
        {
          icon: faLinkedin,
          url: "#",
        },
        {
          icon: faXTwitter, // Corrected icon
          url: "#",
        },
      ],
    },
    // team 3
    {
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/our-team-3.jpg",
      name: "Maria Richards",
      role: "Manager",
      links: [
        {
          icon: faFacebook,
          url: "#",
        },
        {
          icon: faLinkedin,
          url: "#",
        },
        {
          icon: faXTwitter, // Corrected icon
          url: "#",
        },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-y-5 justify-center items-center p-2 mb-[2rem] md:mb-[7rem]">
      <h2 className="text-xl md:text-2xl lg:text-5xl text-gray-800 font-lato font-medium">
        Meet Our Team
      </h2>
      <section className="w-full p-2 grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-x-5 gap-y-8 ">
        {Teams_data.map((team, index) => (
          <div
            key={index}
            className="        w-[fixed]               lg:w-[400px] h-[fixed] gap-y-5  flex flex-col  relative overflow-hidden"
          >
            <Image
              width={500}
              height={500}
              className="object-cover    w-[500px]         lg:w-full h-auto"
              src={team.image}
              alt={team.name}
            />

            <div className="w-full flex flex-col justify-center items-center gap-y-5">
              <h3 className="text-gray-800 font-medium font-lato text-lg md:text-xl lg:text-2xl">
                {team.name}
              </h3>
              <h3 className="text-gray-800 font-normal font-serif text-base md:text-lg lg:text-xl">
                {team.role}
              </h3>
              <section className="w-full flex flex-row gap-x-[3rem]  justify-center items-center ">
                {team.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row  items-center gap-x-2 text-gray-700 hover:text-gray-900"
                  >
                    <FontAwesomeIcon icon={link.icon} className="text-xl" />
                  </a>
                ))}
              </section>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

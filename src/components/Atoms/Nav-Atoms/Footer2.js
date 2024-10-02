import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer2() {
  const links = [
    {
      label: "About ",
      url: "/about-us",
    },
    {
      label: "Menus",
      url: "/menu",
    },
    {
      label: "Contact ",
      url: "/contact-us",
    },
  ];

  const socials = [
    {
      link: "#",
      icon: faFacebook,
    },
    {
      link: "#",
      icon: faXTwitter,
    },
    {
      link: "#",
      icon: faLinkedin,
    },
    {
      link: "#",
      icon: faYoutube,
    },
    {
      link: "#",
      icon: faInstagram,
    },
  ];
  return (
    <div className="w-full bg-black  h-[fixed]  md:h-[200px] flex flex-col justify-center items-start p-4">
      <div className="grid grid-cols-1    md:grid-cols-3  lg:grid-cols-3 justify-center items-start gap-x-8 gap-y-8  w-full ">
        <p className=" copyright-container-text text-center  md:text-left  text-white font-lato font-normal text-base md:text-lg lg:text-lg  transform hover:text-stone-500  ease-in-out duration-700">
          &copy; {new Date().getFullYear()} Brew Time. All rights reserved.
        </p>
        <div className=" links-container flex flex-row gap-y-5 md:flex-row gap-x-5  justify-center items-center mx-auto  ">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="text-white text-base md:text-lg lg:text-lg font-lato font-normal   hover:text-stone-500 transform hover:scale-110 ease-in-out duration-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className=" social-links-container flex  flex-row  gap-y-5 md:flex-row gap-x-5  justify-center items-center mx-auto  ">
          {socials.map((social) => (
            <a
              key={social.icon}
              href={social.link}
              className="social-icon-container flex items-center justify-center gap-x-2 transform hover:scale-110 ease-in-out duration-700"
            >
              <FontAwesomeIcon icon={social.icon} className="bg-white text-base md:text-lg  text-black transform  duration-700 ease-in-out hover:bg-stone-500  rounded-full p-1 " />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

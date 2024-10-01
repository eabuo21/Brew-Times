import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function ContactElements() {
  const socials = [
    {
      icon: faFacebook,
      url: "https://www.facebook.com/",
    },

    {
      icon: faXTwitter,
      url: "https://www.twitter.com/",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/",
    },
  ];

  return (
    <div className="w-full h-[fixed] flex flex-col  gap-y-5 p-2 justify-center items-start   px-6    md:ml-[3rem] mb-auto">
      <h1 className="text-gray-800 font-medium text-4xl  md:text-5xl lg:text-7xl font-lato tracking-wider ">
        Get in Touch
      </h1>
      <p
        className={`  text-gray-800 font-normal text-base font-serif md:text-lg   lg:text-lg  tracking-wide  w-[90%] md:w-[70%] text-justify `}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
      </p>
      <ul className=" text-gray-800 font-normal text-base font-serif md:text-lg   list-disc flex flex-col gap-y-5  lg:text-lg  tracking-wide  w-[90%] md:w-[70%] text-justify">
        <li> Duis aute irure dolor</li>
        <li> In reprehenderit in</li>
        <li> Voluptate velit esse</li>
        <li> Illum dolore eu fugiat nulla pariatur.</li>
      </ul>

      <div className="socials-icon-container flex flex-row gap-x-8 justify-center items-center  p-2">
        {socials.map((social) => (
          <Link
            key={social.url} // Changed to social.url for unique key
            href={social.url}
            target="_blank"
            className="social-icon-wrapper flex flex-row gap-x-2 items-center"
          >
            <FontAwesomeIcon
              icon={social.icon}
              className="text-gray-700 text-xl  bg-gray-300 p-2 rounded-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

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
      url: "https://www.facebook.com/brewtimecoffee",
    },
    {
      icon: faXTwitter,
      url: "https://www.twitter.com/brewtimecoffee",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/company/brewtimecoffee",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/brewtimecoffee",
    },
  ];

  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-5 p-2 justify-center items-start px-6 md:ml-[3rem] mb-auto">
      <h1 className="text-gray-800 font-medium text-4xl md:text-5xl lg:text-7xl font-lato tracking-wider">
        Get in Touch
      </h1>
      <p
        className={`text-gray-800 font-normal text-base font-serif md:text-lg lg:text-lg tracking-wide w-[90%] md:w-[70%] text-justify`}
      >
        We&apos;re here to answer your questions and help you enjoy your perfect cup of coffee. Reach out to us through any of the contacts below, and we&apos;ll get back to you as soon as possible!
      </p>
      <ul className="text-gray-800 font-normal text-base font-serif md:text-lg list-disc flex flex-col gap-y-5 lg:text-lg tracking-wide w-[90%] md:w-[70%] text-justify">
        <li>Phone: +1 (555) 123-4567</li>
        <li>Email: contact@brewtimecoffee.com</li>
        <li>Customer Support: support@brewtimecoffee.com</li>
        <li>Business Inquiries: business@brewtimecoffee.com</li>
      </ul>

      <div className="socials-icon-container flex flex-row gap-x-8 justify-center items-center p-2">
        {socials.map((social) => (
          <Link
            key={social.url} // Changed to social.url for unique key
            href={social.url}
            target="_blank"
            className="social-icon-wrapper flex flex-row gap-x-2 items-center"
          >
            <FontAwesomeIcon
              icon={social.icon}
              className="text-gray-700 text-xl bg-gray-300 p-2 rounded-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

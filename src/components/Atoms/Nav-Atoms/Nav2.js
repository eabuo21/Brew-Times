import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Nav2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigationLinks = [
    {
      name: "About",
      to: "/about-us",
    },
    { name: "Menus", to: "/menu" },
    {
      name: "Contact",
      to: "/contact-us",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 right-0 z-50 h-[100px]  justify-center items-start flex   md:h-[100px] w-full transition-transform duration-300 ease-in-out ${
        scrolling
          ? "  shadow-md text-black  bg-white transition-transform duration-700 transform -translate-y-2 ease-in-out"
          : "  bg-white    text-black   md:bg-transparent  md:text-white transform duration-700 ease-in-out translate-y-0 "
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto grid grid-cols-2 md:grid-cols-2   items-center  mt-6 justify-center py-2 w-full px-5 lg:px-[1rem]">
            {/* Logo */}
            <div className="  mr-auto flex flex-row gap-x-2 justify-center items-center  px-4">
              <Link href="/">
                <Image
                  src="https://brewtime.ca/images/logo-prime.webp"
                  alt="tongston-logo"
                  width={100}
                  height={100}
                  className=" bg-white  object-fill object-center"
                />
              </Link>
              <Link href="https://fabzcode.vercel.app" target="_blank">
                <Image
                  src="https://fabzcode.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdev.23fdd3e7.png&w=1080&q=75"
                  alt="tees-logo"
                  width={30}
                  height={20}
                  className="  bg-white rounded-full h-[30px]  object-fill "
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden  md:flex ml-auto  mr-7 lg:flex-row space-x-8 justify-start items-center pr-[4rem]">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.to}
                  className=" font-passion  flex flex-row justify-center items-start  hover-line hover:text-stone-500 font-thin text-lg md:text-xl lg:text-2xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Hamburger Menu (visible on small screens) */}
            <div className="md:hidden ml-auto mr-5 text-2xl">
              <Disclosure.Button
                className={` text-black   ${scrolling ? "text-black" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="sr-only">Open Menu</span>
                <FontAwesomeIcon icon={faBars} />
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Menu (hidden on large screens) */}
          <Transition
            show={menuOpen}
            as={React.Fragment}
            enter="transform duration-700 ease-in-out"
            enterFrom="-translate-y-[5%]"
            enterTo="translate-y-0"
            leave="transform duration-700 ease-in-out"
            leaveFrom="translate-y-[5%]"
            leaveTo="-translate-y-[5%]"
          >
            <Disclosure.Panel className="md:hidden bg-white  h-[300px] p-2   z-50 w-[100%] mt-[1rem] flex flex-col justify-start items-start gap-8 text-2xl">
              <div className="flex flex-col justify-center items-start space-y-8 mt-9 p-4 ">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.to}
                    className="text-black  font-passion font-thin  flex  w-[300px] px-2 border-b border-b-stone-500 text-xl"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-gray-800 ml-auto  mr-3 text-base "
                    />
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Nav2;

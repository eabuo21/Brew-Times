import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Nav2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigationLinks = [
    {
      name: "Agenda",
      to: "https://drive.google.com/file/d/1cKY5zian9COS3Dpz972IxTkvr1n4sPTz/view?usp=sharing",
    },
    { name: "Pitch", to: "https://t-ventures.tongston.com/" },
    {
      name: "TEES 2022",
      to: "https://www.youtube.com/playlist?list=PL7oSbvL-lLz0s_IuS06A-X6dA4xuYEkSn",
    },
    {
      name: "TEES 2023",
      to: "https://www.youtube.com/playlist?list=PL7oSbvL-lLz2v6W77UObekSN840imG2lh",
    },
    { name: "Contact Us", to: `mailto:tees@tongston.com` },
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
      className={`fixed top-0 left-0 right-0 z-50 h-[110px]  md:h-[130px] w-full transition-transform duration-300 ease-in-out ${
        scrolling
          ? "bg-stone-800 bg-opacity-90 shadow-md transition-transform duration-700 transform -translate-y-8 ease-in-out"
          : "bg-transparent text-white transform duration-700 ease-in-out translate-y-0 "
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto grid grid-cols-2 md:grid-cols-2   items-center  mt-6 justify-evenly w-full px-5 lg:px-[1rem]">
            {/* Logo */}
            <div className="  mr-auto flex flex-row gap-x-2 justify-center items-center ">
              <Link href="https://tongston.com" target="_blank">
                <Image
                  src="/assets/images/tongston-logo.png"
                  alt="tongston-logo"
                  width={100}
                  height={100}
                  className=" bg-white "
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/images/tees-logo.png"
                  alt="tees-logo"
                  width={100}
                  height={100}
                  className=" "
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden  md:flex ml-auto  mr-7 lg:flex-row space-x-4 justify-start items-center">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.to}
                  target="_blank"
                  className="text-white font-lato  hover:text-red-700 font-thin text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Hamburger Menu (visible on small screens) */}
            <div className="md:hidden ml-auto mr-5 text-2xl">
              <Disclosure.Button
                className="text-white"
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
            enter="transition-transform duration-700 ease-in-out"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-700 ease-in-out"
            leaveFrom="-translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Disclosure.Panel className="md:hidden bg-stone-800 bg-opacity-90 mt-[6.5rem] h-[1000px] fixed inset-0 z-50 w-[65%] flex flex-col justify-start items-start gap-8 text-2xl">
              <div className="flex flex-col justify-center items-start space-y-8 mt-9 p-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.to}
                    className="text-white hover:text-red-600 font-ger border-b border-b-gray-200 w-full  font-thin text-xl"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* <div className="lg:flex justify-start items-start bg-transparent shadow-2xl border border-white rounded-md p-1 ml-auto">
                  <Link href="#" onClick={() => setMenuOpen(false)}>
                    <section className="button-section font-thin w-[100px] rounded-md flex flex-col justify-center items-center p-2 text-base animate-pulse text-white bg-transparent hover:bg-blue-700">
                      Log In
                    </section>
                  </Link>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="close-button text-4xl text-white border-2 border-grey p-1"
                >
                  X
                </button> */}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Nav2;

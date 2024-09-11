"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const navItems = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "User Guides", link: "/guide" },
  { id: 3, title: "FAQ", link: "/questions" },
  { id: 4, title: "Pricing", link: "/pricing" },
  { id: 5, title: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const [navBackground, setNavBackground] = useState("bg-transparent");
  const [navHeight, setNavHeight] = useState("h-[140px]");
  const [navLogoWidth, setNavLogoWidth] = useState(220);
  const [navLogoHeight, setNavLogoHeight] = useState(220);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground("bg-white shadow-lg");
        setNavHeight("h-[100px]");
        setNavLogoWidth(180); // Adjust logo width on scroll
        setNavLogoHeight(180); // Adjust logo height on scroll
      } else {
        setNavBackground("bg-transparent");
        setNavHeight("h-[140px]");
        setNavLogoWidth(220); // Default logo width
        setNavLogoHeight(220); // Default logo height
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`w-full ${navHeight} border-b border-b-100 ${navBackground} transition-colors duration-300 ease-in-out sticky top-0 z-50`}>
        <div className="flex items-center justify-evenly h-full">
          {/* // logo */}
          <div className="w-[25%] flex items-center justify-center">
          <Image src="/logo.png" width={navLogoWidth} height={navLogoHeight} alt="logo" />
          </div>
          {/* // nav items */}
          <div className="w-[55%]">
            <ul className="flex justify-center items-center gap-10">
              {navItems.map((item) => (
                <Link key={item.id} href={item.link}>
                  <li className="text-[1.12rem] tracking-wide">{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          {/* // button */}
          <div className="w-[20%] flex items-center justify-center">
            <button className="bg-[#FB9808] py-3 px-7 rounded-md text-white font-semibold
              hover:bg-transparent hover:text-[#FB9808] hover:border border-gray-500 transition-colors duration-300 ease-in-out">
              Add To Chrome
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

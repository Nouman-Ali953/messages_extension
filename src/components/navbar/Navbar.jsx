"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import TemporaryDrawer from "../temp_drawer/TemporaryDrawer";

// Navigation items
const navItems = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "User Guides", link: "/guide" },
  { id: 3, title: "FAQ", link: "/questions" },
  { id: 4, title: "Pricing", link: "/pricing" },
  { id: 5, title: "Contact Us", link: "/contact" },
];

// Debounce function to limit the scroll event firing rate
const debounce = (func, wait = 10) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full ${
        isScrolled ? "h-[80px] bg-white shadow-lg" : "h-[140px] bg-transparent"
      } border-b transition-all duration-300 ease-in-out sticky top-0 z-50`}
    >
      <div className="flex items-center justify-between h-full px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              width={isScrolled ? 160 : 220}
              height={isScrolled ? 160 : 220}
              alt="logo"
              className="transition-all duration-300 ease-in-out"
            />
          </Link>
        </div>
        
         {/* Drawer */}
        <div className="hidden sm:flex">
          <TemporaryDrawer isOpen={drawerOpen} />
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 lg:space-x-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={`${"text-gray-900"} text-[1rem] lg:text-[1.12rem] font-medium tracking-wide transition-colors duration-300`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="hidden lg:flex items-center justify-center">
          <button
            className={`${
              isScrolled
                ? "bg-[#FB9808] text-white "
                : "bg-transparent text-[#FB9808] border border-[#FB9808]"
            } py-2 px-6 rounded-md font-semibold hover:bg-transparent hover:text-[#FB9808] hover:border border-[#FB9808] transition-colors duration-300 ease-in-out`}
          >
            Add To Chrome
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none " onClick={toggleDrawer}>
            {/* You can replace this with a hamburger menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

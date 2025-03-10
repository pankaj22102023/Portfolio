"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { headerData } from "@/lib/siteData";
import { useTheme } from "next-themes";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [, setHeaderHeight] = useState<number>(0);
  const headerRef = useRef<HTMLElement>(null);
  const toggleMenuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.clientHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* Toggle Menu */}
      <div
        ref={toggleMenuRef}
        className={`toggle-menu ${
          isMenuOpen ? "show" : ""
        } fixed right-0 top-0 z-20 h-full w-96 translate-x-3 bg-black px-10 py-12 transition-all duration-150 ease-out dark:bg-boxDark dark:shadow-darkBox ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Menu Content */}
        <h6 className="mb-2 block font-mono text-sm font-normal uppercase tracking-[0.5px] text-white">
          Phone:
        </h6>
        <h4 className="font-poppins text-2xl font-medium text-white">
          {headerData.mainData.phone}
        </h4>

        <div className="mt-6">
          <h6 className="mb-2 block font-mono text-sm font-normal uppercase tracking-[0.5px] text-white">
            Email:
          </h6>
          <h4 className="font-poppins text-2xl font-medium text-white">
            {headerData.mainData.email}
          </h4>
        </div>

        <ul className="mt-4 space-x-2">
          {headerData.socialLinks.map((link, index) => (
            <li key={index} className="inline-block list-none">
              <Link
                href={link.url}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition duration-150 ease-out hover:bg-white/20"
                aria-label={"Social link"}
              >
                <i className={link.icon}></i>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-10 space-y-2">
          <li className="relative pl-3 transition-all duration-100 before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-70 before:content-[''] hover:before:opacity-100">
            <button
              className="font-mono text-sm font-medium uppercase tracking-[0.5px] text-white hover:underline"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "Light Version" : "Dark Version"}
            </button>
          </li>
          {headerData.links.map((item, index) => (
            <li
              key={index}
              className="relative pl-3 transition-all duration-100 before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-70 before:content-[''] hover:before:opacity-100"
            >
              <Link
                href={item.url}
                className="font-mono text-sm font-medium uppercase tracking-[0.5px] text-white hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-12 left-10 right-10">
          <p className="text-white/70">
            &copy; {currentYear} {headerData.mainData.copywriter}.
          </p>
        </div>

        {/* Close Button */}
        <button
          className="menu-close absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xl text-white transition duration-150 ease-out hover:bg-white/20"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <i className="bi bi-x"></i>
        </button>
      </div>
      {/* End of Toggle Menu */}
      {/* Header */}
      <header id="header" ref={headerRef} className="lg:flex lg:justify-between">
        <div className="flex h-[50px] items-center justify-end space-x-6 lg:order-2">
          <ul className="hidden space-x-3.5 font-mono text-sm font-medium uppercase tracking-[0.5px] sm:block">
            {[...headerData.socialLinks, ...headerData.links].map((item, index) => (
              <li key={index} className="inline-block list-none">
                <Link
                  href={item.url}
                  className="hover:underline dark:text-white"
                  target={item.name === "Resume" ? "_blank" : "_self"}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="menu-btn group relative h-[50px] w-[50px] rounded-b-lg bg-black dark:bg-boxDark"
            aria-label="Toggle navigation menu"
            onClick={toggleMenu}
          >
            <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all delay-100 duration-100 ease-linear group-hover:scale-[3]" />
            <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 before:absolute before:-left-[10px] before:top-0 before:h-1 before:w-1 before:rounded-full before:bg-white before:transition-all before:duration-100 before:ease-linear before:content-[''] after:absolute after:-right-[10px] after:top-0 after:h-1 after:w-1 after:rounded-full after:bg-white after:transition-all after:duration-100 after:ease-linear after:content-[''] group-hover:before:left-0 group-hover:before:opacity-0 group-hover:after:right-0 group-hover:after:opacity-0" />
          </button>
        </div>

        <div className="py-7 lg:order-1">
          <h1 className="font-poppins text-5xl font-semibold dark:text-white xl:text-7xl">
            {headerData.mainData.firstName}{" "}
            <span className="stroke-text">{headerData.mainData.secondName}</span>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;

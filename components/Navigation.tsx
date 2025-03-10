"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

interface NavigationProps {
  initialActiveSection?: string;
}

const Navigation: React.FC<NavigationProps> = ({ initialActiveSection = "about" }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);
  const [activeLink, setActiveLink] = useState(initialActiveSection);
  const [headerHeight, setHeaderHeight] = useState(0);

  const navItems = [
    { label: "About Me", id: "about", icon: "bi bi-person" },
    { label: "Portfolio", id: "portfolio", icon: "bi bi-briefcase" },
    { label: "Tech Stack", id: "tech-stack", icon: "bi bi-code-slash" },
    // { label: "Testimonial", id: "testimonial", icon: "bi bi-quote" },
    { label: "Resume", id: "resume", icon: "bi bi-file-earmark-arrow-down" },
    // { label: 'Blog', id: 'blog' },
    { label: "Contact", id: "contact", icon: "bi bi-envelope" },
  ];

  useEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.clientHeight);
    }
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    for (const item of navItems) {
      const element = document.getElementById(item.id);
      if (element && scrollY >= element.offsetTop - 100) {
        setActiveLink(item.id);
      }
    }

    const windowWidth = window.innerWidth;
    if (windowWidth < 992) {
      setIsFixed(scrollY >= headerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const windowWidth = window.innerWidth;
    if (windowWidth < 992) {
      const header = document.getElementById("header");
      if (header && window.scrollY >= header.clientHeight) {
        setIsFixed(true);
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 50, // Adjust offset as needed
        // top: 100,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = async (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname !== "/") {
      await router.push("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <div
      className={`sticky top-2 z-10 rounded-lg bg-black/90 py-3 backdrop-blur-[5px] dark:bg-boxDark sm:px-4 lg:top-6 lg:h-fit lg:w-1/4 lg:bg-black lg:px-8 lg:py-5 lg:backdrop-blur-none xl:px-10 xl:py-7 ${
        isFixed ? "fixed border border-white" : ""
      }`}
    >
      <ul className="space-x-4 text-center font-mono text-sm font-normal uppercase tracking-wider lg:space-x-0 lg:text-left">
        {navItems.map((item) => (
          <li className="inline-block list-none lg:block" key={item.id}>
            <Link
              href={`#${item.id}`}
              className={`section-link group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-transparent py-3 text-white/70 transition duration-100 ease-linear hover:text-white lg:block lg:h-auto lg:w-auto lg:justify-normal lg:rounded-none lg:border-none ${activeLink === item.id ? "active" : ""}`}
              onClick={(e) => handleNavigation(item.id, e)}
            >
              <span className="hidden lg:inline-block">{item.label}</span>
              <i className={`${item.icon} mx-auto lg:hidden`}></i>{" "}
              {/* <span className="lg:hidden">{item.label.charAt(0)}</span> */}
              <span
                className={`nav-circle absolute right-0 top-1/2 hidden h-[5px] w-[5px] -translate-y-1/2 before:absolute before:left-1/2 before:top-1/2 before:h-[5px] before:w-[5px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-70 before:transition-all before:duration-200 before:ease-out before:content-[''] group-hover:before:opacity-100 lg:inline-block ${
                  activeLink === item.id ? "before:opacity-100" : ""
                }`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;

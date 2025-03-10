"use client";

import React, { useEffect, useRef } from "react";
import { portfolioData } from "@/lib/siteData";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mixer: any;

    const initMixitup = async () => {
      if (typeof window !== "undefined") {
        const mixitupModule = await import("mixitup");
        const mixitup = mixitupModule.default;

        if (portfolioRef.current) {
          mixer = mixitup(portfolioRef.current, {
            selectors: {
              target: ".portfolio-item",
            },
            animation: {
              duration: 250,
            },
          });
        }
      }
    };

    initMixitup();

    return () => {
      if (mixer) {
        mixer.destroy();
      }
    };
  }, []);

  return (
    <div
      id="portfolio"
      className="section rounded-lg bg-white px-6 py-8 shadow-sectionBoxShadow transition duration-[160ms] ease-out hover:shadow-sectionBoxShadowHover dark:bg-boxDark md:px-8 md:py-10 lg:p-12"
    >
      <div className="md:w-4/5 lg:w-3/4">
        <h6
          className="// // relative mb-5 pt-4 font-mono text-sm font-medium uppercase tracking-wider before:pr-2 before:content-['//'] after:absolute after:left-0 after:top-0 after:font-poppins after:text-4xl after:font-bold after:uppercase after:opacity-15 after:content-[attr(data-backdrop-text)] dark:text-white"
          data-backdrop-text={portfolioData.mainData.title}
        >
          {portfolioData.mainData.title}
        </h6>
        <h2 className="mb-3 font-poppins text-3xl font-semibold dark:text-white lg:mb-4 lg:text-4xl">
          {portfolioData.mainData.title2}
        </h2>
        <p className="text-pColor dark:text-white/70">{portfolioData.mainData.description}</p>
      </div>
      <div className="mt-6 filter lg:mt-12">
        <ul className="flex flex-wrap gap-2">
          {portfolioData.filterCategories.map((category, index) => (
            <li
              key={index}
              data-filter={index === 0 ? "all" : `.${category}`}
              className="inline-block cursor-pointer list-none rounded-full border border-dashed border-black px-4 py-2 font-mono text-sm transition duration-100 ease-linear hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              {category}
            </li>
          ))}
        </ul>
        <div
          ref={portfolioRef}
          className="portfolio-grid mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {portfolioData.projects.map((project, idx) => (
            <Link
              key={idx}
              href={
                project.isExternalRedirect
                  ? project?.liveLink?.url || "#"
                  : `portfolio/${project.slug}`
              }
              target={project.isExternalRedirect ? "_blank" : "_self"}
              className={`portfolio-item ${project.category}`}
            >
              <div className="imgScrollOnHover group relative max-h-96 overflow-hidden rounded-lg after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-t after:from-black/30 after:to-transparent after:opacity-0 after:transition after:duration-[160ms] after:ease-out after:content-[''] hover:after:opacity-100">
                <div className="">
                  <Image
                    src={project.mainImage || ""}
                    alt={project.projectTitle}
                    width={500}
                    height={800}
                    placeholder="blur"
                    // className="transition object-contain ease-custom duration-500 group-hover:scale-105 group-hover:blur-[1.4px]"
                  />
                </div>
                <span className="absolute right-4 top-4 z-[1] rounded-full bg-black/20 px-4 py-2 font-mono text-sm font-normal uppercase tracking-[0.5px] text-white backdrop-blur-[5px]">
                  {project.category}
                </span>
                <div className="invisible absolute bottom-0 left-0 z-[1] w-full translate-y-2 px-7 pb-6 opacity-0 transition duration-[160ms] ease-out group-hover:visible group-hover:mb-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="portfolio-stroke-text cursor-pointer font-poppins text-3xl font-semibold tracking-[0.5px] transition-all duration-100 ease-linear lg:text-4xl">
                    {project.projectTitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

"use client";

import React, { useState } from "react";
import { portfolioData } from "@/lib/siteData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils";

const Portfolio = () => {
  const path = usePathname();
  const [selectedFilter, setSelectedFilter] = useState<"All" | "Major" | "Frontend" | "Full-Stack">(
    path === "/portfolio" ? "All" : "Major",
  );
  const isPortfolioPath = path === "/portfolio";

  const filterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <div
      id="portfolio"
      className="section rounded-lg bg-white px-6 py-8 shadow-sectionBoxShadow transition duration-[160ms] ease-out hover:shadow-sectionBoxShadowHover dark:bg-boxDark md:px-8 md:py-10 lg:p-12"
    >
      <div className="md:w-4/5 lg:w-3/4">
        <h6
          className="relative mb-5 pt-4 font-mono text-sm font-medium uppercase tracking-wider dark:text-white"
          data-backdrop-text={portfolioData.mainData.title}
        >
          {portfolioData.mainData.title}
        </h6>
        <h2 className="mb-3 font-poppins text-3xl font-semibold dark:text-white lg:mb-4 lg:text-4xl">
          {portfolioData.mainData.title2}
        </h2>
        <p className="text-pColor dark:text-white/70">{portfolioData.mainData.description}</p>
      </div>
      {/* Filter Categories List */}
      <div className="mt-4 space-y-6">
        <ul className="flex flex-wrap gap-2">
          {portfolioData.filterCategories
            .slice(!isPortfolioPath ? 1 : 0, portfolioData.filterCategories.length)
            .map((category, index) => (
              <li
                key={index}
                onClick={() => setSelectedFilter(category as typeof selectedFilter)}
                className={cn(
                  "cursor-pointer rounded-full border border-dashed px-4 py-2 font-mono text-sm transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
                  selectedFilter === category &&
                    "bg-black text-white dark:bg-white dark:text-black",
                )}
              >
                {category}
              </li>
            ))}
        </ul>
        {/* Filtered Items  */}
        <motion.div layout className="portfolio-grid mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <AnimatePresence mode="wait">
            {portfolioData.projects
              .filter((item) => item.category?.includes(selectedFilter))
              .slice(0, !isPortfolioPath ? 4 : portfolioData.projects.length)
              .map((project) => (
                <motion.div
                  key={project.slug}
                  variants={filterVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <Link
                    href={
                      project.isExternalRedirect
                        ? project?.liveLink?.url || "#"
                        : `portfolio/${project.slug}`
                    }
                    target={project.isExternalRedirect ? "_blank" : "_self"}
                    className="portfolio-item"
                  >
                    <div className="group relative max-h-96 overflow-hidden rounded-lg">
                      <Image
                        src={project.mainImage || ""}
                        alt={project.projectTitle}
                        width={500}
                        height={800}
                        placeholder="blur"
                      />
                      <span className="absolute right-4 top-4 rounded-full bg-black/20 px-4 py-2 text-sm text-white">
                        {project?.category?.length === 1
                          ? project?.category?.[0]
                          : project?.category?.[1]}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
        {!isPortfolioPath && (
          <Link
            href="/portfolio"
            className="mx-auto flex h-min justify-center rounded-full border border-dashed px-4 py-2 text-pColor hover:text-black dark:border-white/30 dark:text-white/70 dark:hover:text-white"
          >
            <span className="hidden sm:block">See More</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Portfolio;

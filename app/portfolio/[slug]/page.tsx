import React from "react";
import Image from "next/image";
import { portfolioData } from "@/lib/siteData";
import { getPortfolioProjectSEO } from "@/lib/seoData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import GalleryWrapper from "@/components/GalleryWrapper";
import Navigation from "@/components/Navigation";
import { Functionality } from "@/lib/types.ds";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const seo = getPortfolioProjectSEO(slug, project.projectTitle, project?.description || "");

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function PortfolioProject({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <GalleryWrapper>
      <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-12">
        <Navigation initialActiveSection="portfolio" />

        <div className="space-y-6 pb-12 lg:w-3/4">
          <div className="section rounded-lg bg-white px-6 py-8 shadow-sectionBoxShadow transition duration-[160ms] ease-out hover:shadow-sectionBoxShadowHover dark:bg-boxDark md:px-8 md:py-10 lg:p-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <h6 className="font-mono text-sm font-medium uppercase tracking-[0.5px] dark:text-white">
                  Client:
                </h6>
                <p className="text-pColor dark:text-white/70">{project.client}</p>
              </div>
              <div>
                <h6 className="font-mono text-sm font-medium uppercase tracking-[0.5px] dark:text-white">
                  Live Link:
                </h6>
                <Link
                  href={project?.liveLink?.url || "#"}
                  target="_blank"
                  className="text-blue-500"
                >
                  {project?.liveLink?.name}
                </Link>
              </div>
              <div>
                <h6 className="font-mono text-sm font-medium uppercase tracking-[0.5px] dark:text-white">
                  Duration:
                </h6>
                <p className="text-pColor dark:text-white/70">{project.duration}</p>
              </div>
            </div>
            <div className="mt-6 lg:mt-8">
              <h2 className="mb-3 font-poppins text-3xl font-semibold dark:text-white lg:text-4xl">
                {project.projectTitle}
              </h2>
              <p className="leading-7 text-pColor dark:text-white/70">{project.description}</p>
              <ul className="mt-2 space-y-3">
                {!!project?.techStack &&
                  project.techStack.map((item, index) => (
                    <li
                      key={index}
                      className="me-2 inline-block list-none rounded-full border border-dashed border-black/20 px-4 py-2 text-pColor transition duration-100 ease-linear hover:text-black dark:border-white/20 dark:text-white/70 dark:hover:text-white"
                    >
                      {item.name}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Media */}
            <div className="mt-6 grid grid-cols-12 gap-4 lg:mt-12">
              {!!project.images &&
                project.images.map((image, index) => (
                  <div
                    key={index}
                    className={`imgScrollOnHover rounded-lg ${
                      index === 0 ? "col-span-12 md:col-span-8" : "col-span-4 hidden md:block"
                    }`}
                  >
                    <Image src={image.image} alt={image.alt} />
                  </div>
                ))}
            </div>
            {/* imagesLightbox & video  */}
            {(project?.imagesLightbox || project?.video) && (
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {project?.imagesLightbox && (
                  <div className="group relative overflow-hidden rounded-lg">
                    <a
                      href={project.imagesLightbox.image.src}
                      className="glightbox block after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-t after:from-black/20 after:to-transparent after:opacity-0 after:transition after:duration-[160ms] after:ease-out after:content-[''] hover:after:opacity-100"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.imagesLightbox.image}
                          alt={project.imagesLightbox.alt}
                          loading="lazy"
                          width={1280}
                          height={500}
                          className="transition duration-500 ease-custom group-hover:scale-105 group-hover:blur-[1.5px]"
                        />
                        <div className="absolute left-1/2 top-1/2 z-[1] inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-[5px]">
                          <i className="bi bi-arrows-fullscreen"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                )}

                {project.video && (
                  <div className="group relative overflow-hidden rounded-lg">
                    <a
                      href={project.video.url}
                      data-gallery="video"
                      className="glightbox block after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-t after:from-black/20 after:to-transparent after:opacity-0 after:transition after:duration-[160ms] after:ease-out after:content-[''] hover:after:opacity-100"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.video.thumbnail}
                          alt={project.projectTitle}
                          loading="lazy"
                          width={1280}
                          height={500}
                          className="transition duration-500 ease-custom group-hover:scale-105 group-hover:blur-[1.5px]"
                        />
                        <div className="absolute left-1/2 top-1/2 z-[1] inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-lg text-white backdrop-blur-[5px]">
                          <i className="bi bi-play"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* functionality  */}
            <FunctionalitiesDisplay data={project?.functionality} />
          </div>
        </div>
      </div>
    </GalleryWrapper>
  );
}

const RecursiveList = ({
  items,
  level = 0,
}: {
  items: Functionality[] | string[];
  level?: number;
}) => {
  return (
    <ul className={`ml-4 space-y-2`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${typeof item === "string" ? "before:mr-2 before:content-['●']" : ""}`}
        >
          {typeof item === "string" ? (
            item
          ) : (
            <>
              <span
                className={`mb-5 font-poppins ${level >= 0 ? "text-xl lg:text-2xl" : "text-2xl lg:text-3xl"} font-semibold`}
              >
                {item.title}
              </span>
              {item.list && <RecursiveList items={item.list} level={level + 1} />}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

const FunctionalitiesDisplay = ({ data = [] }: { data: Functionality[] | undefined }) => {
  return (
    <div className="rounded-lg p-6 shadow-md">
      {data?.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="mb-3 font-poppins text-2xl font-semibold dark:text-white lg:text-3xl">
            {section.title}
          </h2>
          <RecursiveList items={section.list} />
        </div>
      ))}
    </div>
  );
};

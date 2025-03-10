import React from "react";
import Image from "next/image";
import { getBlogPostSEO } from "@/lib/seoData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import GalleryWrapper from "@/components/GalleryWrapper";
import Navigation from "@/components/Navigation";
import { blogData } from "@/lib/siteData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const post = blogData.posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "post Not Found",
    };
  }

  const seo = getBlogPostSEO(slug, post.title, post.description);

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

export default async function Portfoliopost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = blogData.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <GalleryWrapper>
      <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-12">
        <Navigation initialActiveSection="blog" />

        <div className="lg:w-3/4 space-y-6 pb-12">
          <div className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h6 className="font-mono font-medium uppercase text-sm tracking-[0.5px] dark:text-white">
                  Posted by:
                </h6>
                <p className="text-pColor dark:text-white/70">
                  {post.postedBy}
                </p>
              </div>
              <div>
                <h6 className="font-mono font-medium uppercase text-sm tracking-[0.5px] dark:text-white">
                  Category:
                </h6>
                <p className="text-pColor dark:text-white/70">
                  {post.category}
                </p>
              </div>
              <div>
                <h6 className="font-mono font-medium uppercase text-sm tracking-[0.5px] dark:text-white">
                  Posted on:
                </h6>
                <p className="text-pColor dark:text-white/70">{post.date}</p>
              </div>
            </div>
            <div className="mt-6 lg:mt-8">
              <h2 className="text-3xl lg:text-4xl font-poppins font-semibold dark:text-white mb-3">
                {post.title}
              </h2>
              <p className="leading-7 text-pColor dark:text-white/70">
                {post.description}
              </p>
              <ul className="space-y-3 mt-2">
                {post.tags.map((item, index) => (
                  <li
                    key={index}
                    className="list-none inline-block px-4 py-2 border border-black/20 border-dashed rounded-full me-2 text-pColor hover:text-black transition ease-linear duration-100 dark:text-white/70 dark:border-white/20 dark:hover:text-white"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Media */}
            <div className="overflow-hidden rounded-lg mt-6 lg:mt-12">
              {post.images.map((image, index) => (
                <div key={index}>
                  <Image src={image.image} alt={image.alt} />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {post.imagesLightbox && (
                <div className="overflow-hidden relative rounded-lg group">
                  <a
                    href={post.imagesLightbox.image.src}
                    className="block glightbox after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/20 after:to-transparent after:opacity-0 after:transition after:ease-out after:duration-[160ms] hover:after:opacity-100"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.imagesLightbox.image}
                        alt={post.imagesLightbox.alt}
                        loading="lazy"
                        width={1280}
                        height={500}
                        className="transition ease-custom duration-500 group-hover:scale-105 group-hover:blur-[1.5px]"
                      />
                      <div className="z-[1] absolute inline-flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/20 w-14 h-14 rounded-full text-white backdrop-blur-[5px]">
                        <i className="bi bi-arrows-fullscreen"></i>
                      </div>
                    </div>
                  </a>
                </div>
              )}

              {post.video && (
                <div className="overflow-hidden relative rounded-lg group">
                  <a
                    href={post.video.url}
                    data-gallery="video"
                    className="block glightbox after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/20 after:to-transparent after:opacity-0 after:transition after:ease-out after:duration-[160ms] hover:after:opacity-100"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.video.thumbnail}
                        alt={post.title}
                        loading="lazy"
                        width={1280}
                        height={500}
                        className="transition ease-custom duration-500 group-hover:scale-105 group-hover:blur-[1.5px]"
                      />
                      <div className="z-[1] absolute inline-flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/20 w-14 h-14 rounded-full text-white backdrop-blur-[5px] text-lg">
                        <i className="bi bi-play"></i>
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>
            {/* end Media */}
          </div>
        </div>
      </div>
    </GalleryWrapper>
  );
}

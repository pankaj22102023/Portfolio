import { resumeData } from "@/lib/siteData";
import Link from "next/link";
import React from "react";

const Resume = () => {
  return (
    <div
      id="resume"
      className="section rounded-lg bg-white px-6 py-8 shadow-sectionBoxShadow transition duration-[160ms] ease-out hover:shadow-sectionBoxShadowHover dark:bg-boxDark md:px-8 md:py-10 lg:p-12"
    >
      <div className="flex justify-between">
        <div className="md:w-4/5 lg:w-3/4">
          <h6
            className="relative mb-5 pt-4 font-mono text-sm font-medium uppercase tracking-wider before:pr-2 before:content-['//'] after:absolute after:left-0 after:top-0 after:font-poppins after:text-4xl after:font-bold after:uppercase after:opacity-15 after:content-[attr(data-backdrop-text)] dark:text-white"
            data-backdrop-text={resumeData.mainData.title}
          >
            {resumeData.mainData.title}
          </h6>
          <h2 className="mb-3 font-poppins text-3xl font-semibold dark:text-white lg:mb-4 lg:text-4xl">
            {resumeData.mainData.title2}
          </h2>
          <p className="text-pColor dark:text-white/70">{resumeData.mainData.description}</p>
        </div>
        <Link
          href={resumeData.resumeDoc.url}
          target="_blank"
          className="me-2 h-min flex justify-center list-none rounded-full border border-dashed border-black/20 px-4 py-2 text-pColor transition duration-100 ease-linear hover:text-black dark:border-white/30 dark:text-white/70 dark:hover:text-white"
        >
          <i className={`${resumeData.resumeDoc.icon} sm:pe-1`}></i>{" "}
          <span className="hidden sm:block text-nowrap">{resumeData.resumeDoc.title}</span>
          {/* <div className="inline-block font-mono text-sm"></div> */}
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:mt-12 lg:gap-10">
        <div className="relative space-y-7 pl-5 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:border-l before:border-dashed before:border-black/20 before:content-[''] dark:before:border-white/20">
          <div className="text-3xl dark:text-white">
            <i className="bi bi-briefcase"></i>
          </div>
          {resumeData.experience.map((item, index) => (
            <div key={index} className="group">
              <span className="relative inline-block rounded-full border border-dashed border-black/20 px-4 py-2 font-mono text-sm font-medium uppercase tracking-[0.5px] text-pColor transition duration-100 ease-linear before:absolute before:left-[-20px] before:top-1/2 before:h-[1px] before:w-[20px] before:border-t before:border-dashed before:border-black/20 before:content-[''] after:absolute after:left-[-22px] after:top-1/2 after:h-[5px] after:w-[5px] after:-translate-y-1/2 after:rounded-full after:bg-black after:content-[''] group-hover:text-black dark:border-white/20 dark:text-white/70 dark:before:border-white/20 dark:after:bg-white dark:group-hover:text-white">
                {item.date}
              </span>
              <h4 className="mb-1 mt-2 font-poppins text-lg font-medium dark:text-white lg:mb-2 lg:mt-3 lg:text-xl">
                {item.degree}
              </h4>
              <span className="text-pColor dark:text-white/70">{item.university}</span>
            </div>
          ))}
        </div>
        <div className="relative space-y-7 pl-5 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:border-l before:border-dashed before:border-black/20 before:content-[''] dark:before:border-white/20">
          <div className="text-3xl dark:text-white">
            <i className="bi bi-mortarboard"></i>
          </div>
          {resumeData.education.map((item, index) => (
            <div key={index} className="group">
              <span className="relative inline-block rounded-full border border-dashed border-black/20 px-4 py-2 font-mono text-sm font-medium uppercase tracking-[0.5px] text-pColor transition duration-100 ease-linear before:absolute before:left-[-20px] before:top-1/2 before:h-[1px] before:w-[20px] before:border-t before:border-dashed before:border-black/20 before:content-[''] after:absolute after:left-[-22px] after:top-1/2 after:h-[5px] after:w-[5px] after:-translate-y-1/2 after:rounded-full after:bg-black after:content-[''] group-hover:text-black dark:border-white/20 dark:text-white/70 dark:before:border-white/20 dark:after:bg-white dark:group-hover:text-white">
                {item.date}
              </span>
              <h4 className="mb-1 mt-2 font-poppins text-lg font-medium dark:text-white lg:mb-2 lg:mt-3 lg:text-xl">
                {item.degree}
              </h4>
              <span className="text-pColor dark:text-white/70">{item.university}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;

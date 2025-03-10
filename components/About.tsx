"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { aboutData } from "@/lib/siteData";

interface Counters {
  [key: string]: number;
  yearsOfExperience: number;
  hoursOfWorking: number;
  projectsDone: number;
}

const About = () => {
  const initialCounters = aboutData.skills.reduce((obj, skill) => {
    obj[String(skill.id)] = 0;
    return obj;
  }, {} as Counters);

  const [counters, setCounters] = useState<Counters>({
    ...initialCounters,
    yearsOfExperience: 0,
    hoursOfWorking: 0,
    projectsDone: 0,
  });

  // Convert all string values to numbers and ensure string keys
  const targetCounters: Counters = {
    ...aboutData.skills.reduce((obj, skill) => {
      obj[String(skill.id)] = parseInt(skill.percent, 10);
      return obj;
    }, {} as Counters),
    yearsOfExperience: parseInt(aboutData.mainData.yearsOfExperience, 10),
    hoursOfWorking: parseInt(aboutData.mainData.hoursOfWorking, 10),
    projectsDone: parseInt(aboutData.mainData.projectsDone, 10),
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2400;
      const interval = 50;

      Object.keys(targetCounters).forEach((key) => {
        const targetValue = targetCounters[key];
        const increment = (targetValue / duration) * interval;

        let current = 0;
        const intervalId = setInterval(() => {
          current += increment;
          setCounters((prevCounters) => ({
            ...prevCounters,
            [key]: Math.min(Math.ceil(current), targetValue),
          }));

          if (current >= targetValue) {
            clearInterval(intervalId);
          }
        }, interval);
      });
    };

    animateCounters();
  }, []);

  return (
    <div
      id="about"
      className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]"
    >
      <div className="lg:flex lg:space-x-10">
        <div className="relative h-fit mb-">
          <Image
            src={aboutData.mainData.heroAvatar}
            alt="hero-avatar"
            placeholder="blur"
            className="min-w-52 min-h-52 w-full max-w-64 max-h-64 rounded-full object-contain"
          />
          <div className="absolute bottom-4 left-2 text-nowrap bg-black/30 dark:bg-black/60 px-4 py-2 rounded-full shadow-avatarText backdrop-blur-[5px] text-white font-mono font-normal uppercase text-sm tracking-wider">
            <Typewriter
              options={{
                strings: aboutData.mainData.typewriter,
                cursor: "_",
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 15,
              }}
            />
          </div>
        </div>
        <div>
          <h6
            className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
            data-backdrop-text={aboutData.mainData.title}
          >
            {aboutData.mainData.title2}
          </h6>
          <h2 className="text-4xl font-poppins font-semibold mb-2 dark:text-white max-w-screen-sm">
            {aboutData.mainData.jobTitle.split(".")[0]}.
            <br />
            {aboutData.mainData.jobTitle.split(".")[1]}
          </h2>
          <ul className="space-y-3 mb-4">
            {aboutData.skills.map((skill, index) => (
              <li
                key={index}
                className="list-none inline-block px-4 py-2 me-2 rounded-full border border-black/20 dark:border-white/30 border-dashed text-pColor hover:text-black dark:text-white/70 dark:hover:text-white transition ease-linear duration-100"
              >
                <i className={`${skill.icon} pe-1`}></i> {skill.name}
                <div className="inline-block font-mono text-sm">
                  (<span className="counter">{counters[skill.id]}</span>%)
                </div>
              </li>
            ))}
          </ul>
          <p className="text-pColor dark:text-white/70">
            {aboutData.mainData.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
        <div className="flex items-center">
          <div className="pe-2">
            <h1 className="font-mono font-semibold text-6xl stroke-text">
              <span className="counter">{counters.yearsOfExperience}</span>
            </h1>
          </div>
          <div className="dark:text-white">
            <h4 className="block text-2xl font-normal mb-1">+</h4>
            <p className="font-mono font-medium text-sm uppercase tracking-[0.5px]">
              Years of Experience
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="pe-2">
            <h1 className="font-mono font-semibold text-6xl stroke-text">
              <span className="counter">{counters.hoursOfWorking}</span>
            </h1>
          </div>
          <div className="dark:text-white">
            <h4 className="block text-2xl font-normal mb-1">k</h4>
            <p className="font-mono font-medium text-sm uppercase tracking-[0.5px]">
              Hours of Working
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="pe-2">
            <h1 className="font-mono font-semibold text-6xl stroke-text">
              <span className="counter">{counters.projectsDone}</span>
            </h1>
          </div>
          <div className="dark:text-white">
            <h4 className="block text-2xl font-normal mb-1">+</h4>
            <p className="font-mono font-medium text-sm uppercase tracking-[0.5px]">
              Projects Done
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>JAVA</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>the University of Newcastle</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "Certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransiton] = useTransition();

  const handleTabChange = (id) => {
    startTransiton(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16  xl:px-16">
        <Image src="/images/about-image.png" width={600} height={600}></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            I am a CS student passionate about lifelong learning,
            problem-solving, and continuous self- improvement. Throughout my
            studies, I have developed a strong foundation in programming,
            software development, and computer science theory. Some of the tools
            I've used in my projects include: Programming Languages:
            JavaScript,TypeScript, C#, Java,Python Web Development: React,
            Next.js, .Net, HTML, CSS, Bootstrap, Tailwind CSS Databases:SQL
            Server,PostgreSQL,MongoDB Development Tools: Git/GitHub, Docker,
            JIRA Currently, I am diving into full-stack development and
            exploring the exciting world of Al. I thrive on learning new
            technologies and am always eager to tackle challenging projects that
            push the boundaries of my knowledge and skills.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              {""}
              Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Certification")}
              active={tab === "Certification"}
            >
              {""}
              Certification{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

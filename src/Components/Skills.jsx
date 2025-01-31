import React from "react";

import python from "../assets/python.png";
import sql from "../assets/sql.png";
import aws from "../assets/aws.png";
import powerbi from "../assets/powerbi.png";
import github from "../assets/github.png";
import agile from "../assets/agile.png";
import waterfall from "../assets/waterfall.png";
import jira from "../assets/jira.png";
import git from "../assets/git.png";
import snowflake from "../assets/snowflake.png";
import AOS from "aos";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  const techs = [
    {
      id: 1,
      src: python,
      title: "Python",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: sql,
      title: "SQL",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: aws,
      title: "AWS",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: powerbi,
      title: "Power BI",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: agile,
      title: "Agile",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: waterfall,
      title: "Waterfall",
      style: "shadow-yellow-400",
    },
    {
      id: 8,
      src: jira,
      title: "Jira",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-orange-400",
    },
    {
      id: 10,
      src: snowflake,
      title: "Snowflake",
      style: "shadow-blue-400",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black text-white
     w-full h-full"
    >
      <div className="max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Skills
          </p>
          <p className="py-6">This are the technologies I've learned . . .</p>
        </div>

        <div className="w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

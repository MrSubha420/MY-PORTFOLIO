import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/skill/getall",
        { withCredentials: true }
      );
      setSkills(data.skills);
    };
    getMySkills();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 py-4 bg-gray-50 dark:bg-gray-900">
      {/* Divider */}
      <hr className="border-blue-300 dark:border-gray-600 mb-4" />

      {/* Skills Heading */}
      <h1 className="text-tubeLight-effect text-[1.5rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] tracking-[8px] mx-auto w-fit">
        SKILLS
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-2 sm:px-4 md:px-6">
        {skills &&
          skills.map((element) => {
            return (
              <Card
                className="h-fit p-3 sm:p-4 flex flex-col justify-center items-center gap-2 shadow-md bg-white dark:bg-gray-800 
                rounded-md transform hover:scale-105 transition-transform duration-300 dark:shadow-lg"
                key={element._id}
              >
                {/* Skill Icon */}
                <img
                  src={element.svg && element.svg.url}
                  alt={element.title}
                  className="h-10 sm:h-16 w-auto object-contain"
                />

                {/* Skill Title */}
                <p className="text-gray-700 dark:text-gray-300 font-semibold text-xs sm:text-sm text-center">
                  {element.title}
                </p>

                {/* Progress Bar for Skill Proficiency */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full"
                    style={{ width: `${element.proficiency}%` }}
                  />
                </div>

                {/* Proficiency Percentage */}
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
                  {element.proficiency}% Proficient
                </p>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;

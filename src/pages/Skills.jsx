import React, { Suspense } from "react";
import Skill from "./Skill";

const Skills = ({ data }) => {
  return (
    <div className="p-6 md:p-10 lg:p-20">
      <h2 className="text-center text-3xl md:text-5xl font-extrabold text-[#1E2939] pb-2">
        Popular Skills
      </h2>
      <Suspense fallback={<span>Loading....</span>}>
        <div className=" container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
          {data.map((singleSkill) => (
            <Skill key={singleSkill.skillId} singleSkill={singleSkill}></Skill>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Skills;

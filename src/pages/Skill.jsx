import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = ({ singleSkill }) => {
  const { image, skillName, rating, price } = singleSkill;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="card p-8 space-y-6 shadow-sm hover:shadow-2xl rounded-3xl bg-gradient-to-b from-[#e1f1ed] to-[#75b499] hover:scale-105 transition-transform duration-200">
        <figure>
          <img
            src={image}
            alt="Skill"
            className="rounded-full w-68 h-68 md:w-70 md:h-70 lg:w-90 lg:h-90"
          />
        </figure>
        <div className=" flex flex-col space-y-4 ">
          <h2 className="text-center font-bold text-lg md:text-xl lg:text-2xl text-white">
            {skillName}
          </h2>
          <div className="flex justify-between ">
            <div className="border-2 border-emerald-800 rounded-xl shadow-lg px-4 py-1">
              <p className="text-emerald-900 font-semibold text-lg">{price}$</p>
            </div>
            <div className="border-2 border-emerald-800 rounded-xl shadow-lg px-4 py-1">
              <p className="text-emerald-900 font-semibold text-lg">
                *{rating}
              </p>
            </div>
          </div>
          <div className="card-actions flex justify-center items-center">
            <button className="btn bg-gradient-to-r from-[#6fa391]  to-[#106b57] text-white border-none rounded-lg hover:scale-105 transition-transform duration-200 ">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

import React, { useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const TopProviders = ({ data }) => {
  const top3Provides = [...data]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="px-6 md:px-20 ">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold text-[#1E2939] pb-2">
          Top Rated Providers
        </h2>
        <div className="container mx-auto my-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20 ">
          {top3Provides.map((provider) => (
            <div
              key={provider.skillId}
              className="flex items-center space-x-4 md:space-x-6 border-3 border-amber-300 shadow-amber-800 shadow-md bg-[#FFFFE8] p-4 md:p-6 rounded-3xl hover:scale-105 transition-transform duration-200 "
            >
              <div className="rounded-full border-5 border-blue-900">
                <AiOutlineUser size="6em" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#1E2939]">
                  {provider.providerName}
                </h2>
                <div className="flex items-center space-x-1">
                  <AiFillStar size="2em" color="#FFD250" />
                  <p className="font-semibold">{provider.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProviders;

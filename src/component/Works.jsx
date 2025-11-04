import React, { useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa6";
import { PiCertificateDuotone } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className="p-6 md:p-20 ">
      <h2 className="text-center text-3xl md:text-5xl font-extrabold text-[#1E2939] pb-2">
        How It Works
      </h2>
      <div className="container mx-auto text-center my-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20">
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:scale-105 transition-transform duration-200 ">
          <FaRegLightbulb className="w-10 h-10 text-[#023020] mb-3" />
          <h3 className="text-xl font-semibold mb-2">Browse Skills</h3>
          <p className="text-gray-600">
            Explore a wide range of skills from expert instructors.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:scale-105 transition-transform duration-200 ">
          <FaHourglassStart className="w-10 h-10 text-[#023020] mb-3" />
          <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
          <p className="text-gray-600">
            Join sessions and improve your skills with real practice.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:scale-105 transition-transform duration-200 ">
          <PiCertificateDuotone className="w-10 h-10 text-[#023020] mb-3" />
          <h3 className="text-xl font-semibold mb-2">Earn Certificates</h3>
          <p className="text-gray-600">
            Complete courses and get your verified certificate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;

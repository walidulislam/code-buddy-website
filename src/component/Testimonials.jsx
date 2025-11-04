import React from "react";
import reviewImg from "../assets/avatar-48.png";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <div className="px-6 md:px-20 pb-6 md:pb-10 mx-auto container">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-5xl font-extrabold text-[#1E2939] pb-8"
      >
        Testimonial
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src={reviewImg}
          alt="Feedback"
          className="w-full md:w-1/3 p-6 rounded-2xl shadow-xl bg-cyan-100"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left max-w-lg"
        >
          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            “Learning new skills through this platform has completely changed my
            career path. The lessons are clear, practical, and fun to follow!”
          </p>
          <h3 className="font-bold text-[#023020] text-2xl">
            — Atiqur Rahaman
          </h3>
          <p className="text-gray-500">Front-End Developer</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;

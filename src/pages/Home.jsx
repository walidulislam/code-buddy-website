import React from "react";
import Hero from "../component/Hero";
import Skills from "./Skills";
import TopProviders from "../component/TopProviders";
import Works from "../component/Works";
import Testimonials from "../component/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Skills></Skills>
      <TopProviders></TopProviders>
      <Works></Works>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

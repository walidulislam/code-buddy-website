import React from "react";
import Hero from "../component/Hero";
import Skills from "./Skills";
import { useLoaderData } from "react-router";
import TopProviders from "../component/TopProviders";
import Works from "../component/Works";
import Testimonials from "../component/Testimonials";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Skills data={data}></Skills>
      <TopProviders data={data}></TopProviders>
      <Works></Works>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

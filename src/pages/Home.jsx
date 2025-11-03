import React from "react";
import Hero from "../component/Hero";
import Skills from "./Skills";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Skills data={data}></Skills>
    </div>
  );
};

export default Home;

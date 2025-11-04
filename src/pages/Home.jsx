import React from "react";
import Hero from "../component/Hero";
import Skills from "./Skills";
import { useLoaderData } from "react-router";
import TopProviders from "../component/TopProviders";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Skills data={data}></Skills>
      <TopProviders data={data}></TopProviders>
    </div>
  );
};

export default Home;

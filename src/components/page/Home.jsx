import React from "react";
import Banner from "../layout/Banner";
import Catagorie from "../layout/Catagorie";
import ThisMonth from "../layout/ThisMonth";
import Experience from "../layout/Experience";

const Home = () => {
  return (
    <>
      <Banner />
      <Catagorie />
      <ThisMonth />
      <Experience/>
    </>
  );
};

export default Home;

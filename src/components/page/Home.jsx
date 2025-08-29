import React from "react";
import Banner from "../layout/Banner";
import Catagorie from "../layout/Catagorie";
import ThisMonth from "../layout/ThisMonth";
import Experience from "../layout/Experience";
import OurProducts from "../layout/OurProducts";
import NewArraivel from "../layout/NewArraivel";
import Survices from "../layout/Survices";

const Home = () => {
  return (
    <>
      <Banner />
      <Catagorie />
      <ThisMonth />
      <Experience/>
      <OurProducts/>
      <NewArraivel/>
      <Survices/>
    </>
  );
};

export default Home;

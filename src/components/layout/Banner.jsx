import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

// =========== Slider =============
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Flex from "../Flex";
// ===========

// MARK: 🛠️ Apnar shob image gulo ekhane import korun
// Ei path gulo (../assets/...) apnar shothik file structure onujayi change korte hobe.
import bannerImage1 from "/src/assets/inpfive.png";
import bannerImage2 from "/src/assets/inpsix.png";
import bannerImage3 from "/src/assets/inpfore.png";
import bannerImage4 from "/src/assets/ipthree.png";
import bannerImage5 from "/src/assets/ipfore.png";
import bannerImage6 from "/src/assets/ipfive.png";


const Banner = () => {
  // MARK: 🛠️ Image path string-er jaygay imported variables gulo byabohar korun
  const bannerImages = [
    bannerImage1,
    bannerImage2,
    bannerImage3,
    bannerImage4,
    bannerImage5,
    bannerImage6,
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div style={{ backgroundColor: "transparent", padding: "25px" }}>
        <ul className="flex justify-center gap-2 mt-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-[6px] h-[6px] border border-gray-400 rounded-full hover:bg-gray-700 transition-all duration-300"></div>
    ),
  };

  return (
    <>
      <div className="py-[20px]"></div>
      <Container>
        <Flex className="flex-col lg:flex-row gap-6 items-start">
          {/* Sidebar Menu - No change needed here */}
          <div className="flex w-full lg:w-[25%] items-start justify-center lg:justify-start">
            <div className="w-full lg:w-[90%]">
              <ul className="text-[15px] font-medium font-pop leading-[30px] text-gray-700 text-center lg:text-left border-r lg:border-r border-gray-200 pr-4">
                <Link><li className="mt-3 hover:text-[#DB4444] hover:font-semibold duration-200 cursor-pointer">Woman’s Fashion</li></Link>
                <Link><li className="mt-3 hover:text-[#DB4444] hover:font-semibold duration-200 cursor-pointer">Men’s Fashion</li></Link>
                <Link><li className="mt-3 hover:text-[#DB4444] hover:font-semibold duration-200 cursor-pointer">Electronics</li></Link>
                <Link><li className="mt-3 hover:text-[#DB4444] hover:font-semibold duration-200 cursor-pointer">Medicine</li></Link>
                <Link><li className="mt-3 hover:text-[#DB4444] hover:font-semibold duration-200 cursor-pointer">Sports & Outdoor</li></Link>
                <Link><li className="mt-3 hover:text-[#DB4444] hover:font-semibold duration-200 cursor-pointer">Baby’s & Toys</li></Link>
                <Link><li className="mt-3 hover:text-[#DB4444] hover:font-semibold duration-200 cursor-pointer">Groceries & Pets</li></Link>
                <Link><li className="mt-3 hover:text-[#DB4444] hover:font-semibold duration-200 cursor-pointer">Health & Beauty</li></Link>
              </ul>
            </div>
          </div>

          {/* Slider */}
          <div className="w-full lg:w-[75%] rounded-lg overflow-hidden">
            <Slider {...settings}>
              {/* MARK: 🛠️ Image Array-ti ekhane byabohar kora hoche */}
              {bannerImages.map((imgUrl, i) => (
                <div key={i}>
                  <div
                    // MARK: 🛠️ Inline style use kore background image set kora holo
                    style={{ backgroundImage: `url(${imgUrl})` }}
                    className="bg-cover bg-center bg-no-repeat py-[180px] sm:py-[220px] md:py-[250px] rounded-lg"
                  ></div>
                </div>
              ))}
            </Slider>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Banner;
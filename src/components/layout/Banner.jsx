import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

// =========== Slider =============
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Flex from "../Flex";
// ===========

const Banner = () => {
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
          {/* Sidebar Menu */}
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
              {[
                "inpfive.png",
                "inpsix.png",
                "inpfore.png",
                "ipthree.png",
                "ipfore.png",
                "ipfive.png",
              ].map((img, i) => (
                <div key={i}>
                  <div
                    className={`bg-[url('/src/assets/${img}')] bg-cover bg-center bg-no-repeat py-[180px] sm:py-[220px] md:py-[250px] rounded-lg`}
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

import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

// ===========
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
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",

          padding: "30px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "5px",
          height: "5px",
          color: "white",
          border: "1px cyan solid",
          borderRadius: "50%",
        }}
      >
        
      </div>
    ),
  };
  return (
    <>
    <div className="py-[20px]"></div>
      <Container>
        <Flex>
          <div className="flex w-[30%] items-center  mt-[40px]">
            <div className="">
              <ul className="text-[14px] font-pop leading-[27px]">
                <Link>
                  <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">
                    Woman’s Fashion
                  </li>
                </Link>
                <Link>
                  <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">
                    Men’s Fashion
                  </li>
                </Link>
                <Link>
                  <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">
                    Electronics
                  </li>
                </Link>
                <Link>
                  <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">
                    Medicine
                  </li>
                </Link>
                <Link>
                  <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">
                    Sports & Outdoor
                  </li>
                </Link>
                <Link>
                  <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">
                    Baby’s & Toys
                  </li>
                </Link>
                <Link>
                  <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">
                    Groceries & Pets
                  </li>
                </Link>
                <Link>
                  <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">
                    Health & Beauty
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="w-[70%]">
            <Slider {...settings}>
              <div>
                <div className="bg-[url('/src/assets/inpfive.png')] bg-cover bg-center bg-no-repeat py-[250px]"></div>
              </div>
              <div>
                <div className="bg-[url('/src/assets/inpsix.png')] bg-cover bg-center bg-no-repeat py-[250px] rounded-[5px]"></div>
              </div>
              <div>
                <div className="bg-[url('/src/assets/inpfore.png')] bg-cover bg-center bg-no-repeat py-[250px] rounded-[5px]"></div>
              </div>
              <div>
                <div className="bg-[url('/src/assets/ipthree.png')] bg-cover bg-center bg-no-repeat py-[250px] rounded-[5px]"></div>
              </div>
              <div>
                <div className="bg-[url('/src/assets/ipfore.png')] bg-cover bg-center bg-no-repeat py-[250px] rounded-[5px]"></div>
              </div>
              <div>
                <div className="bg-[url('/src/assets/ipfive.png')] bg-cover bg-center bg-no-repeat py-[250px] rounded-[5px]"></div>
              </div>
            </Slider>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Banner;

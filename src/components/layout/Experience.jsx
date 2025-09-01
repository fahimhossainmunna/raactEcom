import React from "react";
import Container from "../Container";
import Button from "../Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";


const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",

  };
  return (
    <div className="py-[50px]">
      <Container>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="bg-[url('/src/assets/applee.jpg')] bg-no-repeat bg-cover bg-center w-full py-[100px]">
                <div className="flex items-center pl-[50px] gap-x-6 pt-3">
                  <div className="text-6xl text-white">
                    <FaApple />
                  </div>
                  <div className="text-white text-[16px] font-pop leading-[24px] mt-2">
                    <h3>iPhone 14 Series</h3>
                  </div>
                </div>
                <div className="text-[#fafafa] text-[58px] font-semibold font-int leading-[90px] pl-[60px] w-[400px] py-[30px] ">
                  <h2>Up to 10% off Voucher</h2>
                </div>
                <div className="flex items-center space-x-2 pl-[60px]">
                  <a
                    href="#"
                    className="relative text-white text-3xl font-pop font-medium group"
                  >
                    Shop Now
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <span className="text-white text-4xl mt-1">
                    <GoArrowRight/>
                  </span>
                </div>
                {/* <div className="text-[#FAFAFA] text-[26px] font-pop leading-[24px] pl-[60px] flex items-center gap-x-4">
                <Link>
                <h3 className="border-b">Shop Now</h3>
                </Link>
                <div className="mt-1 text-5xl">
                  <GoArrowRight/>
                  
                </div>
              </div> */}
              </div>
            </div>
            <div>
              <div className="bg-[url('/image/music.png')] bg-no-repeat bg-cover bg-center w-full py-[100px]">
                <h3 className="text-[#00FF66] font-medium text-[16px] font-pop pl-[50px]">
                  Categories
                </h3>
                <h1 className="text-[#FAFAFA] font-semibold text-[48px] font-int leading-[60px] w-[443px] py-[32px] pl-[50px]">
                  Enhance Your Music Experience
                </h1>
                <div className="flex items-center pl-[50px] text-center gap-x-5">
                  <div className="mb-6 w-[62px] h-[62px] rounded-[50%] bg-[#fff] text-center relative ">
                    <h3 className="font-semibold text-[16px] font-pop leading-[20px] absolute top-[40%] left-[50%] translate-[-50%]">
                      23
                    </h3>
                    <p className="text-[11px] leading-[18px] absolute top-[60%] left-[50%] translate-[-50%]">
                      Hours
                    </p>
                  </div>
                  <div className="mb-6 w-[62px] h-[62px] rounded-[50%] bg-[#fff] text-center relative ">
                    <h3 className="font-semibold text-[16px] font-pop leading-[20px] absolute top-[40%] left-[50%] translate-[-50%]">
                      05
                    </h3>
                    <p className="text-[11px] leading-[18px] absolute top-[60%] left-[50%] translate-[-50%]">
                      Days{" "}
                    </p>
                  </div>
                  <div className="mb-6 w-[62px] h-[62px] rounded-[50%] bg-[#fff] text-center relative ">
                    <h3 className="font-semibold text-[16px] font-pop leading-[20px] absolute top-[40%] left-[50%] translate-[-50%]">
                      59
                    </h3>
                    <p className="text-[11px] leading-[18px] absolute top-[60%] left-[50%] translate-[-50%]">
                      Minutes
                    </p>
                  </div>
                  <div className="mb-6 w-[62px] h-[62px] rounded-[50%] bg-[#fff] text-center relative ">
                    <h3 className="font-semibold text-[16px] font-pop leading-[20px] absolute top-[40%] left-[50%] translate-[-50%]">
                      35
                    </h3>
                    <p className="text-[11px] leading-[18px] absolute top-[60%] left-[50%] translate-[-50%]">
                      Seconds
                    </p>
                  </div>
                </div>
                <Button className="py-[16px] px-[45px] w-[171px] ml-[50px] border-transparent text-[16px] font-medium font-pop leading-[24px] bg-[#00FF66] hover:bg-transparent border-[1px] hover:border-cyan-600 hover:text-shadow-white duration-500">
                  Buy Now!
                </Button>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Experience;

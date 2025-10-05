import React from "react";
import Container from "../Container";
import Button from "../Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaApple } from "react-icons/fa";
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
            {/* =================== SLIDE 1 =================== */}
            <div>
              <div className="bg-[url('/src/assets/applee.jpg')] bg-no-repeat bg-cover bg-center w-full py-[84px] md:py-[104px]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center pl-[20px] sm:pl-[50px] gap-y-2 sm:gap-x-6 pt-3">
                  <div className="text-4xl sm:text-6xl text-white">
                    <FaApple />
                  </div>
                  <div className="text-white text-[14px] sm:text-[16px] font-pop leading-[24px] mt-1 sm:mt-2">
                    <h3>iPhone 14 Series</h3>
                  </div>
                </div>

                <div className="text-[#fafafa] text-[32px] sm:text-[48px] md:text-[58px] font-semibold font-int leading-[45px] sm:leading-[70px] md:leading-[90px] pl-[20px] sm:pl-[60px] w-[90%] sm:w-[400px] py-[20px] sm:py-[30px]">
                  <h2>Up to 10% off Voucher</h2>
                </div>

                <div className="flex items-center space-x-2 pl-[20px] sm:pl-[60px]">
                  <a
                    href="#"
                    className="relative text-white text-xl sm:text-3xl font-pop font-medium group"
                  >
                    Shop Now
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <span className="text-white text-2xl sm:text-4xl mt-1">
                    <GoArrowRight />
                  </span>
                </div>
              </div>
            </div>

            {/* =================== SLIDE 2 =================== */}
            <div>
              <div className="bg-[url('/image/music.png')] bg-no-repeat bg-cover bg-center w-full py-[80px] md:py-[100px]">
                <h3 className="text-[#00FF66] font-medium text-[14px] sm:text-[16px] font-pop pl-[20px] sm:pl-[50px]">
                  Categories
                </h3>

                <h1 className="text-[#FAFAFA] font-semibold text-[30px] sm:text-[40px] md:text-[48px] font-int leading-[40px] sm:leading-[55px] md:leading-[60px] w-[90%] sm:w-[443px] py-[20px] sm:py-[32px] pl-[20px] sm:pl-[50px]">
                  Enhance Your Music Experience
                </h1>

                <div className="flex flex-wrap sm:flex-nowrap items-center pl-[20px] sm:pl-[50px] text-center gap-x-3 sm:gap-x-5 gap-y-3">
                  {[["23", "Hours"], ["05", "Days"], ["59", "Minutes"], ["35", "Seconds"]].map(
                    ([num, label], i) => (
                      <div
                        key={i}
                        className="mb-4 w-[55px] sm:w-[62px] h-[55px] sm:h-[62px] rounded-full bg-[#fff] text-center relative"
                      >
                        <h3 className="font-semibold text-[14px] sm:text-[16px] font-pop leading-[20px] absolute top-[40%] left-[50%] translate-[-50%]">
                          {num}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] leading-[18px] absolute top-[60%] left-[50%] translate-[-50%]">
                          {label}
                        </p>
                      </div>
                    )
                  )}
                </div>

                <Button className="py-[12px] sm:py-[16px] px-[35px] sm:px-[45px] w-[140px] sm:w-[171px] ml-[20px] sm:ml-[50px] mt-4 border-transparent text-[14px] sm:text-[16px] font-medium font-pop leading-[20px] sm:leading-[24px] bg-[#00FF66] hover:bg-transparent border-[1px] hover:border-cyan-600 hover:text-shadow-white duration-500">
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

import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import Button from "../Button";
import coat from "/src/assets/shirt.png";
import bag from "/src/assets/bag.png";
import cpu from "/src/assets/cpu.png";
import books from "/src/assets/books.png";
// ================
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

// ================
const ThisMonth = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // large screen
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // medium
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-[60px] md:py-[100px]">
        <Container>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap px-4 md:px-0">
            <div className="py-[20px] bg-[#DB4444] w-[18px] sm:w-[20px] rounded-[5px]"></div>
            <h3 className="text-[14px] sm:text-[16px] font-semibold font-pop text-[#DB4444]">
              This Month
            </h3>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 md:px-0">
            <div>
              <h1 className="text-[28px] sm:text-[32px] md:text-[36px] text-[#000] font-semibold font-int leading-[38px] sm:leading-[44px] md:leading-[48px] md:w-[400px] my-6 md:my-8 text-center md:text-left">
                Best Selling Products
              </h1>
            </div>
            <div className="text-center md:text-right">
              <Button className="py-[12px] sm:py-[14px] md:py-[16px] px-[35px] sm:px-[40px] md:px-[45px] text-[14px] sm:text-[15px] md:text-[16px] font-medium font-pop leading-[22px] sm:leading-[24px] bg-[#DB4444] hover:bg-transparent border-[1px] hover:border-black hover:text-black duration-500">
                View All
              </Button>
            </div>
          </div>

          {/* ================= */}
          <div className="relative py-8 px-2 sm:px-4 md:px-0">
            <Slider {...settings}>
              <div>
                <Product
                  productImg={coat}
                  title={"The north coat"}
                  price={"$260"}
                />
              </div>
              <div>
                <Product
                  productImg={bag}
                  title={"Gucci duffle bag"}
                  price={"$960"}
                />
              </div>
              <div>
                <Product
                  productImg={cpu}
                  title={"RGB liquid CPU Cooler"}
                  price={"$160"}
                />
              </div>
              <div>
                <Product
                  productImg={books}
                  title={"Small BookSelf"}
                  price={"$360"}
                />
              </div>
              <div>
                <Product
                  productImg={bag}
                  title={"Gucci duffle bag"}
                  price={"$960"}
                />
              </div>
              <div>
                <Product
                  productImg={books}
                  title={"Small BookSelf"}
                  price={"$360"}
                />
              </div>
            </Slider>
          </div>
          {/* ================= */}
        </Container>
      </div>
    </>
  );
};

export default ThisMonth;

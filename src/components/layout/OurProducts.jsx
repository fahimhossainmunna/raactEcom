import React, { useRef } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import Product from "../Product";
import dogfood from "/src/assets/dogfood.png";
import camera from "/src/assets/camera.png";
import laptop from "/src/assets/laptop.png";
import facewash from "/src/assets/facewash.png";
import Button from "../Button";

// ===============
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
// ===============

const OurProducts = () => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // large laptop
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-[60px] max-sm:py-[40px]">
      <Container>
        {/* =========== Heading Section =========== */}
        <div className="flex items-center gap-4 mb-4">
          <div className="py-[20px] bg-[#DB4444] w-[20px] rounded-[5px]"></div>
          <h3 className="text-[16px] font-semibold font-pop text-[#DB4444]">
            Our Products
          </h3>
        </div>

        <Flex className="items-center justify-between flex-wrap gap-y-4">
          <h1 className="text-[36px] text-[#000] font-semibold font-int leading-[48px] w-[400px] my-4 max-lg:text-[30px] max-md:text-[26px] max-sm:text-[22px] max-sm:leading-[32px] max-sm:w-full">
            Best Selling Products
          </h1>

          <div className="flex items-center gap-x-3 text-5xl text-[#555] max-sm:text-4xl">
            <SlArrowLeftCircle
              className="cursor-pointer hover:text-[#DB4444] transition-all duration-300"
              onClick={() => sliderRef1.current?.slickPrev()}
            />
            <SlArrowRightCircle
              className="cursor-pointer hover:text-[#DB4444] transition-all duration-300"
              onClick={() => sliderRef1.current?.slickNext()}
            />
          </div>
        </Flex>

        {/* =========== Slider 1 =========== */}
        <div className="mt-6">
          <Slider ref={sliderRef1} {...settings}>
            <div>
              <Product
                productImg={dogfood}
                title={"Breed Dry Dog Food"}
                price={"$100"}
              />
            </div>
            <div>
              <Product
                productImg={camera}
                title={"CANON EOS DSLR Camera"}
                price={"$360"}
              />
            </div>
            <div>
              <Product
                productImg={laptop}
                title={"ASUS FHD Gaming Laptop"}
                price={"$700"}
              />
            </div>
            <div>
              <Product
                productImg={facewash}
                title={"Curology Product Set "}
                price={"$500"}
              />
            </div>
            <div>
              <Product
                productImg={laptop}
                title={"ASUS FHD Gaming Laptop"}
                price={"$700"}
              />
            </div>
            <div>
              <Product
                productImg={camera}
                title={"CANON EOS DSLR Camera"}
                price={"$360"}
              />
            </div>
          </Slider>
        </div>

        {/* =========== Slider 2 =========== */}
        <div className="mt-[80px] max-sm:mt-[50px]">
          <Slider ref={sliderRef2} {...settings}>
            <div>
              <Product
                productImg={dogfood}
                title={"Breed Dry Dog Food"}
                price={"$100"}
              />
            </div>
            <div>
              <Product
                productImg={camera}
                title={"CANON EOS DSLR Camera"}
                price={"$360"}
              />
            </div>
            <div>
              <Product
                productImg={laptop}
                title={"ASUS FHD Gaming Laptop"}
                price={"$700"}
              />
            </div>
            <div>
              <Product
                productImg={facewash}
                title={"Curology Product Set "}
                price={"$500"}
              />
            </div>
            <div>
              <Product
                productImg={dogfood}
                title={"Breed Dry Dog Food"}
                price={"$100"}
              />
            </div>
            <div>
              <Product
                productImg={laptop}
                title={"ASUS FHD Gaming Laptop"}
                price={"$700"}
              />
            </div>
          </Slider>
        </div>

        {/* =========== View All Button =========== */}
        <div className="flex justify-center mt-12">
          <Button className="py-[14px] px-[40px] text-[16px] font-medium font-pop leading-[24px] bg-[#DB4444] hover:bg-transparent border border-[#DB4444] hover:text-[#DB4444] transition-all duration-300 rounded-md w-[230px] max-sm:w-[180px] max-sm:text-[14px]">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default OurProducts;

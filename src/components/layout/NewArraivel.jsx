import React from "react";
import Container from "../Container";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Image from "../Image";
import ps5 from "/src/assets/psfive.png";
import shopp from "/src/assets/shopp.png";
import speker from "/src/assets/speker.png";
import gucci from "/src/assets/gucchi.png";

const NewArraivel = () => {
  return (
    <>
      <section className="py-10 max-sm:py-6">
        <Container>
          {/* ======= Section Title ======= */}
          <div className="flex items-center gap-4">
            <div className="py-[20px] bg-[#DB4444] w-[20px] rounded-[5px]"></div>
            <h3 className="text-[16px] font-semibold font-pop text-[#DB4444]">
              Featured
            </h3>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-y-4">
            <h1 className="text-[36px] text-[#000] font-semibold font-int leading-[48px] w-[400px] my-8 max-lg:text-[30px] max-md:text-[26px] max-sm:text-[22px] max-sm:w-full max-sm:my-4">
              New Arrival
            </h1>

            <div className="flex items-center gap-x-3 text-5xl text-[#555] max-sm:text-4xl">
              <SlArrowLeftCircle className="cursor-pointer hover:text-[#DB4444] transition-all duration-300" />
              <SlArrowRightCircle className="cursor-pointer hover:text-[#DB4444] transition-all duration-300" />
            </div>
          </div>

          {/* ======= Product Layout ======= */}
          <Flex className="justify-between flex-wrap gap-y-6">
            {/* ===== Left Large Image ===== */}
            <div className="w-[49%] max-lg:w-[100%]">
              <Link to={"/"}>
                <div className="relative overflow-hidden rounded-[10px] group shadow-md hover:shadow-xl transition-all duration-500">
                  <Image
                    imgSrc={ps5}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <button className="bg-[#DB4444] text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-white hover:text-[#DB4444] border border-[#DB4444] transition-all duration-300">
                      Shop Now
                    </button>
                  </div>
                </div>
              </Link>
            </div>

            {/* ===== Right Side Images ===== */}
            <div className="w-[49%] max-lg:w-[100%] flex flex-col gap-y-5">
              {/* Top Image */}
              <Link to={"/"}>
                <div className="relative overflow-hidden rounded-[10px] group shadow-md hover:shadow-xl transition-all duration-500">
                  <Image
                    imgSrc={shopp}
                    className="w-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <button className="bg-[#DB4444] text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-white hover:text-[#DB4444] border border-[#DB4444] transition-all duration-300">
                      Shop Now
                    </button>
                  </div>
                </div>
              </Link>

              {/* Bottom Two Small Images */}
              <div className="flex items-center justify-between gap-x-5 max-sm:flex-col max-sm:gap-y-5">
                <Link to={"/"}>
                  <div className="relative overflow-hidden rounded-[10px] group shadow-md hover:shadow-xl transition-all duration-500">
                    <Image
                      imgSrc={speker}
                      className="w-full h-[340px] object-cover group-hover:scale-105 transition-all duration-500 max-sm:h-[250px]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <button className="bg-[#DB4444] text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-white hover:text-[#DB4444] border border-[#DB4444] transition-all duration-300">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </Link>

                <Link to={"/"}>
                  <div className="relative overflow-hidden rounded-[10px] group shadow-md hover:shadow-xl transition-all duration-500">
                    <Image
                      imgSrc={gucci}
                      className="w-full h-[340px] object-cover group-hover:scale-105 transition-all duration-500 max-sm:h-[250px]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <button className="bg-[#DB4444] text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-white hover:text-[#DB4444] border border-[#DB4444] transition-all duration-300">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default NewArraivel;

import React, { useState } from "react";
import Container from "../Container";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { LiaHeadphonesAltSolid } from "react-icons/lia";
import { LuGamepad } from "react-icons/lu";

const Catagorie = () => {
  const [active, setActive] = useState(null);

  const categories = [
    { icon: <CiMobile4 size={40} />, label: "Phones" },
    { icon: <HiOutlineComputerDesktop size={40} />, label: "Computers" },
    { icon: <BsSmartwatch size={40} />, label: "Smartwatch" },
    { icon: <CiCamera size={40} />, label: "Camera" },
    { icon: <LiaHeadphonesAltSolid size={40} />, label: "Headphones" },
    { icon: <LuGamepad size={40} />, label: "Gamepad" },
  ];

  return (
    <>
      <Container>
        <div className="pt-[100px] flex items-center gap-4">
          <div className="py-[20px] bg-[#DB4444] w-[20px] rounded-[5px]"></div>
          <h3 className="text-[16px] font-semibold font-pop text-[#DB4444]">
            Categories
          </h3>
        </div>

        <div className="">
          <h1 className="text-[28px] md:text-[36px] text-[#000] font-semibold font-int leading-[38px] md:leading-[48px] my-8 text-center md:text-left">
            Browse By Category
          </h1>
        </div>

        {/* Responsive Grid */}
        <div className="mb-[60px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 place-items-center">
          {categories.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer w-[150px] sm:w-[160px] md:w-[170px] h-36 sm:h-40 border border-[rgba(0,0,0,0.33)] rounded-xl flex flex-col items-center justify-center bg-white
              transition-all duration-300 ease-in-out 
              hover:bg-[#DB4444] hover:text-white hover:-translate-y-2 hover:shadow-xl
              ${
                active === i
                  ? "bg-[#DB4444] text-white shadow-xl scale-105"
                  : "text-black"
              }`}
            >
              <div
                className={`mb-2 transform transition-transform duration-300 ${
                  active === i ? "scale-110" : "group-hover:scale-110"
                }`}
              >
                {item.icon}
              </div>
              <p className="text-[15px] font-pop leading-[24px] font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="border-b border-b-[rgba(0,0,0,0.28)] pb-4"></div>
      </Container>
    </>
  );
};

export default Catagorie;

import React from "react";
import Container from "../Container";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { LiaHeadphonesAltSolid } from "react-icons/lia";
import { LuGamepad } from "react-icons/lu";





const Catagorie = () => {
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
          <h1 className="text-[36px] text-[#000] font-semibold font-int leading-[48px] my-8">
            Browse By Category
          </h1>
        </div>
        
        <div className="mb-[60px] flex items-center justify-between">
          <div className="w-[170px] h-40 border border-[rgba(0,0,0,0.33)] rounded-lg flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white duration-300">
            <CiMobile4 size={40} className="mb-2" />

            <p className="text-[16px] font-pop leading-[24px] font-medium">Phones</p>
          </div>
          <div className="w-[170px] h-40 border border-[rgba(0,0,0,0.33)] rounded-lg flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white duration-300">
            <HiOutlineComputerDesktop size={40} className="mb-2" />

            <p className="text-[16px] font-pop leading-[24px] font-medium">Computers</p>
          </div>
          <div className="w-[170px] h-40 border border-[rgba(0,0,0,0.33)] rounded-lg flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white duration-300">
            <BsSmartwatch size={40} className="mb-2" />

            <p className="text-[16px] font-pop leading-[24px] font-medium">Smartwatch</p>
          </div>
          <div className="w-[170px] h-40 border border-[rgba(0,0,0,0.33)] rounded-lg flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white duration-300">
            <CiCamera size={40} className="mb-2" />

            <p className="text-[16px] font-pop leading-[24px] font-medium">Camera</p>
          </div>
          <div className="w-[170px] h-40 border border-[rgba(0,0,0,0.33)] rounded-lg flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white duration-300">
            <LiaHeadphonesAltSolid size={40} className="mb-2" />

            <p className="text-[16px] font-pop leading-[24px] font-medium">Phones</p>
          </div>
          <div className="w-[170px] h-40 border border-[rgba(0,0,0,0.33)] rounded-lg flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white duration-300">
            <LuGamepad size={40} className="mb-2" />

            <p className="text-[16px] font-pop leading-[24px] font-medium">Gamepad</p>
          </div>
        </div>
        <div className="border-b border-b-[rgba(0,0,0,0.28)] pb-4"></div>
      </Container>
    </>
  );
};

export default Catagorie;

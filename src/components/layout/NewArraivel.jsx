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

// =============
const NewArraivel = () => {
  return (
    <>
      <div className="py-5">
        <Container>
          <div className=" flex items-center gap-4">
            <div className="py-[20px] bg-[#DB4444] w-[20px] rounded-[5px]"></div>
            <h3 className="text-[16px] font-semibold font-pop text-[#DB4444]">
              Featured
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="text-[36px] text-[#000] font-semibold font-int leading-[48px] w-[400px] my-8">
                New Arrival
              </h1>
            </div>
            <div className="flex items-center gap-x-2 text-5xl">
              <SlArrowLeftCircle />
              <SlArrowRightCircle />
            </div>
          </div>
          <Flex className={"justify-between"}>
            <div className="size-[49%]">
              <Link to={"/"}>
                <Image imgSrc={ps5} className={"w-full "} />
              </Link>
            </div>
            <div className="w-[49%]">
                <Link to={"/"}>
                <Image imgSrc={shopp} className={"w-full"} />
              </Link>
              
              <div className="flex items-center justify-between gap-x-5 mt-5">
                 <Link to={"/"}>
                <Image imgSrc={speker} className={ " w-full h-[340px]"} />
              </Link>
               <Link to={"/"}>
                <Image imgSrc={gucci} className={"w-full h-[340px]"} />
              </Link>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default NewArraivel;

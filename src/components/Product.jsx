import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import ico from "/src/assets/iconn.png";
import { FaStar, FaRegStar } from "react-icons/fa";

// =============

const Product = ({ productImg, title, price }) => {
  return (
    <>
      <div className="w-1/4 relative">
        <Image imgSrc={productImg} className={"w-full"} />
        <Badge badtImg={ico} className={"absolute top-5 right-5 opacity-20 hover:opacity-100 duration-500"} />
        <div className="">
          <div className="bg-black text-white text-center absolute w-[100%] top-[250px] py-2 opacity-0 hover:opacity-100 duration-300">
            <h3>Add To Cart</h3>
          </div>
          <h3 className="text-[16px] font-medium font-pop leading-[24px] py-3">
            {title}
          </h3>
          <h3 className="text-[16px] text-[#DB4444] font-medium font-pop leading-[24px]">
            {price}
          </h3>
          <div className="flex items-center gap-x-2 mt-3">

          <div className="flex text-yellow-500 ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="text-[14px] text-[#2c2f32] font-semibold font-pop leading-[21px]">(65)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

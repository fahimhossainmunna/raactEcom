import React from "react";
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
const OurProducts = () => {
  return (
    <>
      <div className="py-[60px]">
        <Container>
          <div className=" flex items-center gap-4">
            <div className="py-[20px] bg-[#DB4444] w-[20px] rounded-[5px]"></div>
            <h3 className="text-[16px] font-semibold font-pop text-[#DB4444]">
              Our Products
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="text-[36px] text-[#000] font-semibold font-int leading-[48px] w-[400px] my-8">
                Best Selling Products
              </h1>
            </div>
            <div className="flex items-center gap-x-2 text-5xl">
              <SlArrowLeftCircle />
              <SlArrowRightCircle />
            </div>
          </div>
          {/* ============= */}
          <Flex className={"gap-x-5"}>
            <Product
              productImg={dogfood}
              title={"Breed Dry Dog Food"}
              price={"$100"}
            />
            <Product
              productImg={camera}
              title={"CANON EOS DSLR Camera"}
              price={"$360"}
            />
            <Product
              productImg={laptop}
              title={"ASUS FHD Gaming Laptop"}
              price={"$700"}
            />
            <Product
              productImg={facewash}
              title={"Curology Product Set "}
              price={"$500"}
            />
          </Flex>
          <Flex className={"gap-x-5 mt-[70px]"}>
            <Product
              productImg={dogfood}
              title={"Breed Dry Dog Food"}
              price={"$100"}
            />
            <Product
              productImg={camera}
              title={"CANON EOS DSLR Camera"}
              price={"$360"}
            />
            <Product
              productImg={laptop}
              title={"ASUS FHD Gaming Laptop"}
              price={"$700"}
            />
            <Product
              productImg={facewash}
              title={"Curology Product Set "}
              price={"$500"}
            />
          </Flex>
          <div className="flex justify-center mt-12">
               <Button className="py-[16px] px-[45px] text-[16px] font-medium font-pop leading-[24px] bg-[#DB4444] hover:bg-transparent border-[1px] hover:border-black hover:text-black duration-500 w-[234px]">
                View All Products
              </Button>
              
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurProducts;

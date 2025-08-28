import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import Button from "../Button";
import coat from "/src/assets/shirt.png";
import bag from "/src/assets/bag.png";
import cpu from "/src/assets/cpu.png";
import books from "/src/assets/books.png";

const ThisMonth = () => {
  return (
    <>
      <div className="py-[100px]">
        <Container>
          <div className=" flex items-center gap-4">
            <div className="py-[20px] bg-[#DB4444] w-[20px] rounded-[5px]"></div>
            <h3 className="text-[16px] font-semibold font-pop text-[#DB4444]">
              This Month
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="text-[36px] text-[#000] font-semibold font-int leading-[48px] w-[400px] my-8">
                Best Selling Products
              </h1>
            </div>
            <div className="">
              <Button className="py-[16px] px-[45px] text-[16px] font-medium font-pop leading-[24px] bg-[#DB4444] hover:bg-transparent border-[1px] hover:border-black hover:text-black duration-500">
                View All
              </Button>
            </div>
          </div>

          <Flex className={"gap-x-5"}>
            <Product
              productImg={coat}
              title={"The north coat"}
              price={"$260"}
            />
            <Product
              productImg={bag}
              title={"Gucci duffle bag"}
              price={"$960"}
            />
            <Product
              productImg={cpu}
              title={"RGB liquid CPU Cooler"}
              price={"$160"}
            />
            <Product
              productImg={books}
              title={"Small BookSelf"}
              price={"$360"}
            />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default ThisMonth;

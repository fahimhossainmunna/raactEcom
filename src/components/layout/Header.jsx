import React from "react";
import Container from "../Container";
import Image from "../Image";
import logo from "/src/assets/Logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCart } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="bg-black text-white py-[12px] font-pop">
        <div className="text-center flex justify-center gap-x-2">
          <h3>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h3>
          <span className="border-b-1">
            <a href="#">ShopNow</a>
          </span>
        </div>
      </div>

      <Container>
        <div className="pt-[50px] pb-[22px] flex justify-between items-center">
          <div className="">
            <Link to={"/"}>
              <Image imgSrc={logo} />
            </Link>
          </div>
          <ul className="">
            <div className="flex items-center gap-x-5 text-[16px] leading-[24px] font-pop ">
              <Link to={"/"}>
                <li className="hover:text-black hover:font-semibold duration-150">Home</li>
              </Link>
              <Link to={"contact"}>
                <li className="hover:text-black hover:font-semibold duration-150">Contact</li>
              </Link>
              <Link to={"about"}>
                <li className="hover:text-black hover:font-semibold duration-150">About</li>
              </Link>
              <Link to={"signup"}>
                <li className="hover:text-black hover:font-semibold duration-150">Sign Up</li>
              </Link>
            </div>
          </ul>
          <div className="flex items-center">
            <div className="relative px-[20px]">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="py-[7px] px-[12px] w-[243px] bg-[#F5F5F5] rounded-[5px]"
              />
              <FaSearch className="absolute right-7 top-1/2 -translate-1/2" />
            </div>
            <div className="flex items-center gap-x-3">
              <CiHeart />
              <IoCart />
            </div>
          </div>
        </div>
      </Container>
      <div className="border border-[#D9D9D9]"></div>
    </>
  );
};

export default Header;

import React, { useState } from "react";
import Container from "../Container";
import Image from "../Image";
import logo from "/src/assets/Logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { FaBarsProgress } from "react-icons/fa6";

const Header = () => {
  let [show, setshow] = useState(false);
  const handleBtn = () => {
    setshow(!show);
  };

  return (
    <>
      <div className="bg-black text-white py-[12px] font-pop">
        <div className="text-center flex justify-center gap-x-2 text-sm md:text-base">
          <h3>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h3>
          <span className="border-b-1">
            <a href="#">ShopNow</a>
          </span>
        </div>
      </div>

      <div className="border-b-2 border-b-[#D9D9D9]">
        <Container>
          <div className="pt-[20px] pb-[10px] flex justify-between items-center flex-wrap md:flex-nowrap gap-y-3 md:gap-y-0">
            <div>
              <Link to={"/"}>
                <Image imgSrc={logo} />
              </Link>
            </div>

            {/* ==== Nav ==== */}
            <nav className="hidden md:flex space-x-8">
              <div className="group">
                <Link to={"/"}>
                  <div className="text-gray-700 hover:text-black transition-colors duration-300 relative">
                    Home
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </div>
                </Link>
              </div>

              <Link to={"contact"}>
                <div className="group text-gray-700 hover:text-black transition-colors duration-300 relative">
                  Contact
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </div>
              </Link>

              <Link to={"about"}>
                <div className="group text-gray-700 hover:text-black transition-colors duration-300 relative">
                  About
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </div>
              </Link>

              <Link to={"signUp"}>
                <div className="group text-gray-700 hover:text-black transition-colors duration-300 relative">
                  Sign Up
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </div>
              </Link>
            </nav>

            {/* ==== Search + Icons ==== */}
            <div className="flex items-center w-full md:w-auto justify-between md:justify-end">
              <div className="relative px-[10px] md:px-[20px] w-[70%] md:w-auto">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="py-[7px] px-[12px] w-full md:w-[243px] bg-[#F5F5F5] rounded-[5px] text-sm md:text-base"
                />
                <FaSearch className="absolute right-5 md:right-7 top-1/2 -translate-y-1/2" />
              </div>

              <div className="flex items-center gap-x-3 pr-3 md:pr-0">
                <CiHeart className="text-[20px]" />
                <IoCart className="text-[20px]" />

                {/* ==== Sidebar Toggle Btn ==== */}
                <div className="md:hidden hover:text-2xl duration-300 transition-all">
                  <button onClick={handleBtn}>
                    <FaBarsProgress />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ==== Sidebar ==== */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-[300px] bg-[#2C2C2C] text-white transition-transform duration-500 ease-in-out z-50 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-start pt-[80px] px-6 space-y-5">
          <Link
            to={"/"}
            onClick={handleBtn}
            className="text-lg hover:bg-[#4E4E4E] rounded py-2 text-center duration-300"
          >
            Home
          </Link>
          <Link
            to={"contact"}
            onClick={handleBtn}
            className="text-lg hover:bg-[#4E4E4E] rounded py-2 text-center duration-300"
          >
            Contact
          </Link>
          <Link
            to={"about"}
            onClick={handleBtn}
            className="text-lg hover:bg-[#4E4E4E] rounded py-2 text-center duration-300"
          >
            About
          </Link>
          <Link
            to={"signup"}
            onClick={handleBtn}
            className="text-lg hover:bg-[#4E4E4E] rounded py-2 text-center duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* ==== Overlay Close Area ==== */}
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40"
          onClick={handleBtn}
          style={{ display: show ? "block" : "none" }}
        ></div>
      </div>
    </>
  );
};

export default Header;

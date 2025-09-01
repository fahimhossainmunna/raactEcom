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
        <div className="text-center flex justify-center gap-x-2">
          <h3>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h3>
          <span className="border-b-1">
            <a href="#">ShopNow</a>
          </span>
        </div>
      </div>
   <div className="border-b-2 border-b-[#D9D9D9] ">

      <Container>
        <div className="pt-[30px] pb-[10px] flex justify-between items-center">
          <div className="">
            <Link to={"/"}>
              <Image imgSrc={logo} />
            </Link>
          </div>
          <nav className="flex space-x-8">
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
              <div className="relative">
                <button onClick={handleBtn}>
                  <FaBarsProgress />
                </button>
              </div>
              {show && (
                <div className="bg-[#2C2C2C] absolute py-2 top-[22%] right-18 z-10 transition-all  rounded-[5px] text-white w-[200px] text-center">
                  <ul>
                    <Link to={"/"}>
                      <li className="block py-2  rounded-[5px] text-white text-[16px] font-pop text-center transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                        Home
                      </li>
                    </Link>

                    <Link to={"contact"}>
                      <li className="block py-2  rounded-[5px] text-white text-[16px] font-pop text-center transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                        Contact
                      </li>
                    </Link>
                    <Link to={"about"}>
                      <li className="block py-2  rounded-[5px] text-white text-[16px] font-pop text-center transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                        About
                      </li>
                    </Link>
                    <Link to={"signup"}>
                      <li className="block py-2  rounded-[5px] text-white text-[16px] font-pop text-center transition-all duration-300 hover:bg-[#4E4E4E] hover:animate-pulse mx-1">
                        Sign Up
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      </div>
      
       
      
    </>
  );
};

export default Header;

import React from "react";
import Container from "../Container";
import { FaPaperPlane } from "react-icons/fa";
import Image from "../Image";
import apps from "/src/assets/apps.png";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaRegCopyright } from "react-icons/fa";

import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="py-6 bg-black">
        <Container>
          <div className="p-[30px] flex items-center justify-between text-white">
            <div className="">
              <h2 className="text-[24px] font-bold font-int leading-[24px]">
                Exclusive
              </h2>
              <h2 className="text-[20px] font-medium font-pop leading-[28px] py-[24px]">
                Subscribe
              </h2>
              <p className="text-[16px] font-pop leading-[24px] pb-3">
                Get 10% off your first order
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className=" border border-white w-[217px] p-[10px] rounded-[5px]"
                />
                <FaPaperPlane className="absolute right-5 top-1/2 -translate-1/2" />
              </div>
            </div>
            <div className="">
              <h2 className="text-[20px] font-medium font-pop leading-[28px]">
                Support
              </h2>
              <h3 className="text-[16px] font-pop leading-[24px] pt-[24px] w-[175px]">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </h3>
              <h3 className="text-[16px]  font-pop leading-[24px] py-[16px]">
                exclusive@gmail.com
              </h3>
              <p className="text-[16px]  font-pop leading-[24px]">
                +88015-88888-9999
              </p>
            </div>
            <div className="">
              <h2 className="text-[20px] font-medium font-pop leading-[28px] pt-12">
                Account
              </h2>

              <h3 className="text-[16px]  font-pop leading-[24px] pt-[24px]">
                My Account
              </h3>
              <h3 className="text-[16px]  font-pop leading-[24px] py-[16px]">
                Login / Register
              </h3>
              <h3 className="text-[16px]  font-pop leading-[24px] ">Cart</h3>
              <h3 className="text-[16px]  font-pop leading-[24px] py-[16px]">
                Wishlist
              </h3>
              <h3 className="text-[16px]  font-pop leading-[24px] ">Shop</h3>
            </div>
            <div className="">
              <h2 className="text-[20px] font-medium font-pop leading-[28px] ">
                Quick Link
              </h2>
              <h3 className="text-[16px]  font-pop leading-[24px] pt-[24px]">
                Privacy Policy
              </h3>
              <h3 className="text-[16px]  font-pop leading-[24px] py-[16px]">
                Terms Of Use
              </h3>
              <h3 className="text-[16px]  font-pop leading-[24px] ">FAQ</h3>
              <h3 className="text-[16px]  font-pop leading-[24px] pt-[16px]">
                Contact
              </h3>
            </div>
            <div className="">
              <h2 className="text-[20px] font-medium font-pop leading-[28px] pb-[24px]">
                Download App
              </h2>
              <h3 className="text-[#FAFAFA] text-[12px] font-medium font-pop leading-[18px] pb-[8px]">
                Save $3 with App New User Only
              </h3>
              <Image imgSrc={apps} />
              <div className="flex items-center pt-[24px] gap-x-7 text-3xl">
                <CiFacebook />
                <CiTwitter />
                <CiInstagram />
                <TiSocialLinkedin />
              </div>
            </div>
          </div>
        </Container>
        <div className="border-t-1 border-[#7D8184] "></div>
        <div className="flex items-center text-[#7D8184] justify-center mt-3">
          <FaRegCopyright className="h-4 w-4 mr-1 " />
          <span className="">
            Copyright Rimel 2024. All right reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;

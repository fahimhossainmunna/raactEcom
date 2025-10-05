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
      <div className="py-8 bg-gradient-to-b from-[#111111] to-[#000000] shadow-[0_-4px_20px_rgba(255,255,255,0.05)] text-white">
        <Container>
          <div className="p-[30px] flex items-start justify-between flex-wrap gap-y-12 max-lg:gap-y-14 max-md:flex-col max-md:items-start">
            {/* ===== Subscribe ===== */}
            <div className="w-[20%] max-lg:w-[45%] max-md:w-full">
              <h2 className="text-[24px] font-bold font-int leading-[24px]">
                Exclusive
              </h2>
              <h2 className="text-[20px] font-medium font-pop leading-[28px] py-[24px]">
                Subscribe
              </h2>
              <p className="text-[16px] font-pop leading-[24px] pb-3 opacity-90">
                Get 10% off your first order
              </p>
              <div className="relative group mt-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border border-white w-[217px] p-[10px] rounded-[5px] bg-transparent placeholder:text-gray-400 focus:outline-none transition-all duration-300 group-hover:border-[#DB4444]"
                />
                <FaPaperPlane className="absolute right-13 top-1/2 -translate-y-1/2 text-white group-hover:text-[#DB4444] transition duration-300" />
              </div>
            </div>

            {/* ===== Support ===== */}
            <div className="w-[20%] max-lg:w-[45%] max-md:w-full">
              <h2 className="text-[20px] font-medium font-pop leading-[28px]">
                Support
              </h2>
              <h3 className="text-[16px] font-pop leading-[24px] pt-[24px] w-[175px] opacity-90">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </h3>
              <h3 className="text-[16px] font-pop leading-[24px] py-[16px] opacity-90 hover:text-[#DB4444] transition">
                exclusive@gmail.com
              </h3>
              <p className="text-[16px] font-pop leading-[24px] opacity-90 hover:text-[#DB4444] transition">
                +88015-88888-9999
              </p>
            </div>

            {/* ===== Account ===== */}
            <div className="w-[20%] max-lg:w-[45%] max-md:w-full">
              <h2 className="text-[20px] font-medium font-pop leading-[28px] max-md:pt-0">
                Account
              </h2>
              {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map(
                (item, i) => (
                  <h3
                    key={i}
                    className="text-[16px] font-pop leading-[24px] py-[8px] opacity-90 hover:text-[#DB4444] transition cursor-pointer"
                  >
                    {item}
                  </h3>
                )
              )}
            </div>

            {/* ===== Quick Link ===== */}
            <div className="w-[20%] max-lg:w-[45%] max-md:w-full">
              <h2 className="text-[20px] font-medium font-pop leading-[28px]">
                Quick Link
              </h2>
              {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
                (item, i) => (
                  <h3
                    key={i}
                    className="text-[16px] font-pop leading-[24px] py-[8px] opacity-90 hover:text-[#DB4444] transition cursor-pointer"
                  >
                    {item}
                  </h3>
                )
              )}
            </div>

            {/* ===== Download App ===== */}
            <div className="w-[20%] max-lg:w-[45%] max-md:w-full">
              <h2 className="text-[20px] font-medium font-pop leading-[28px] pb-[24px]">
                Download App
              </h2>
              <h3 className="text-[#FAFAFA] text-[12px] font-medium font-pop leading-[18px] pb-[8px]">
                Save $3 with App New User Only
              </h3>
              <Image imgSrc={apps} className="hover:scale-105 transition duration-300" />
              <div className="flex items-center pt-[24px] gap-x-6 text-3xl">
                {[CiFacebook, CiTwitter, CiInstagram, TiSocialLinkedin].map(
                  (Icon, i) => (
                    <Icon
                      key={i}
                      className="cursor-pointer hover:text-[#DB4444] transition duration-300"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </Container>

        {/* ===== Bottom Section ===== */}
        <div className="border-t border-[#2a2a2a] mt-10"></div>
        <div className="flex items-center text-[#7D8184] justify-center mt-3 text-sm">
          <FaRegCopyright className="h-4 w-4 mr-1" />
          <span>Copyright Rimel 2024. All right reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;

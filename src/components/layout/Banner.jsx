import React from "react";
import Image from "../Image";
import phn from "/src/assets/frem.png";
import Container from "../Container";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Container>
        <div className="flex items-center justify-between mt-[40px]">
          <div className="">
            <ul className="text-[14px] font-pop leading-[27px]">
                <Link>
                <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">Woman’s Fashion</li>
                </Link>
                <Link>
                <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">Men’s Fashion</li>
                </Link>
                <Link>
                <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">Electronics</li>
                </Link>
                <Link>
                <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">Medicine</li>
                </Link>
                <Link>
                <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">Sports & Outdoor</li>
                </Link>
                <Link>
                <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">Baby’s & Toys</li>
                </Link>
                <Link>
                <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">Groceries & Pets</li>
                </Link>
                <Link>
                <li className="mt-6 hover:text-menuHover hover:font-bold duration-200">Health & Beauty</li>
                </Link>
            </ul>
          </div>
          <div className="">
            <Image imgSrc={phn} />
          </div>
        </div>
       
      </Container>
    </>
  );
};

export default Banner;

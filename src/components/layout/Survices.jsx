import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import truck from "/src/assets/truck.png"
import support from "/src/assets/ser.png"
import guranted from "/src/assets/gurant.png"
import { Link } from 'react-router-dom'

const Survices = () => {
  return (
    <>
    <div className="py-[100px]">
        <Container>
            <Link>
            <Flex className={"justify-around"}>
                <div className="flex flex-col items-center text-center">
                    <Image imgSrc={truck} />
                    <h3 className="text-[20px] font-semibold font-pop leading-[28px] mt-6">FREE AND FAST DELIVERY</h3>
                    <p className="text-[14px] font-pop leading-[21px]">Free delivery for all orders over $140</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image imgSrc={support} />
                    <h3 className="text-[20px] font-semibold font-pop leading-[28px] mt-6">24/7 CUSTOMER SERVICE</h3>
                    <p className="text-[14px] font-pop leading-[21px]">Friendly 24/7 customer support</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image imgSrc={guranted} />
                    <h3 className="text-[20px] font-semibold font-pop leading-[28px] mt-6">MONEY BACK GUARANTEE</h3>
                    <p className="text-[14px] font-pop leading-[21px]">We reurn money within 30 days</p>
                </div>
            </Flex>
            </Link>
        </Container>
    </div>
    </>
  )
}

export default Survices
import React from 'react'
import Container from '../Container'
import Button from '../Button'

const Experience = () => {
  return (
    <div className="py-[50px]">
        <Container>
            <div className="bg-[url('/image/music.png')] bg-no-repeat bg-cover bg-center w-full py-[100px]">
             <h3 className="text-[#00FF66] font-medium text-[16px] font-pop pl-[50px]">
            Categories
          </h3>
          <h1 className="text-[#FAFAFA] font-semibold text-[48px] font-int leading-[60px] w-[443px] py-[32px] pl-[50px]">Enhance Your Music Experience</h1>
          <Button className="py-[16px] px-[45px] w-[171px] ml-[50px] text-[16px] font-medium font-pop leading-[24px] bg-[#00FF66] hover:bg-transparent border-[1px] hover:border-cyan-600 hover:text-shadow-white duration-500">
               Buy Now!
              </Button>
            </div>
            
        </Container>
    </div>
  )
}

export default Experience
import React from 'react'
import { GrNext } from "react-icons/gr";


const NextArrow = (props) => {
    const { onClick } = props;
  return (
    <div
      className={'text-3xl text-red-700 absolute  -right-5 top-[35%] '}
     
      onClick={onClick}
    >
        <GrNext/>
    </div>
  )
}

export default NextArrow
import React from "react";
import Image from "./Image";

const Badge = ({ className, badtImg, badText }) => {
  return (
    <div className={className}>
      <Image imgSrc={badtImg}/>
      {badText}
    </div>
  );
};

export default Badge;

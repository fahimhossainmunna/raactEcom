import React from "react";
import { GrPrevious } from "react-icons/gr";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={"text-3xl text-red-700 absolute  -left-5 top-[35%]"}
      onClick={onClick}
    >
      <GrPrevious />
    </div>
  );
};

export default PrevArrow;

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimateResultItem from "./AnimateResultItem";

const ResultItem = ({ label, value }) => {
  const _value = !isNaN(value) && value < 10 ? `0${value}` : value;

  return (
    <div className="flex gap-x-2 slg:gap-x-0">
      {_value === "--" && (
        <span className="text-purple font-Poppins font-extrabold italic text-[3.4rem] leading-[1.15] slg:leading-[1.14] slg:text-[6.3rem] slg:tracking-[0.18em]">
          --
        </span>
      )}
      {_value !== "--" && <AnimateResultItem value={_value} />}
      <span className="text-off-black font-Poppins font-extrabold italic text-[3.4rem] leading-[1.15] slg:leading-[1.14] slg:text-[6.3rem] slg:-ml-1">
        {label}
      </span>
    </div>
  );
};

export default ResultItem;

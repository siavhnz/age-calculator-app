import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

//https://stackoverflow.com/a/60523470

const AnimateResultItem = ({ value }) => {
  const spanEl = useRef();

  useEffect(() => {
    const node = spanEl.current;

    const controls = animate(0, +value, {
      duration: 0.4,
      onUpdate(x) {
        const _x = x < 10 ? `0${x.toFixed(0)}` : x.toFixed(0);
        node.textContent = _x;
      },
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span
      ref={spanEl}
      className="text-purple font-Poppins font-extrabold italic text-[3.4rem] leading-[1.15] slg:leading-[1.14] slg:text-[6.3rem] slg:tracking-[0.18em]"
    ></span>
  );
};

export default AnimateResultItem;

import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useState } from "react";

const Input = forwardRef(
  ({ label, placeholder, min, max, error, onChange }, ref) => {
    const [value, setValue] = useState("");

    const handleOnChange = (e) => {
      setValue(e.target.value);

      if (placeholder === "yyyy") {
        if (e.target.value.length === 4) {
          onChange(e);
        }
      }
    };

    return (
      <div className="flex flex-col flex-1 gap-y-3 slg:max-w-[10rem]">
        <label
          className={`uppercase text-smokey-grey font-Poppins text-xs slg:text-sm font-bold tracking-[0.2em] ${
            error ? "text-light-red transition-all duration-700" : ""
          }`}
        >
          {label}
        </label>
        <input
          type="number"
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder}
          ref={ref}
          min={min}
          max={max}
          className={`disable-number h-14 slg:h-18 slg:pl-6 slg:text-3xl border border-light-grey outline-none rounded-lg uppercase font-Poppins placeholder:text-smokey-grey text-off-black font-bold pl-4 text-xl -mt-1 hover:border-purple hover:cursor-pointer  transition-all duration-700 ${
            error ? "border-light-red transition-all duration-700" : ""
          }`}
        />
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: { duration: 0.7 },
              }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.7 } }}
              className="text-light-red font-Poppins italic text-xs"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

export default Input;

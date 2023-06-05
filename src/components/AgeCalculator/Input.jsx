import { forwardRef } from "react";

const Input = forwardRef(({ label, placeholder, error }, ref) => {
  return (
    <div className="flex flex-col flex-1 gap-y-3 slg:max-w-[10rem]">
      <label className="uppercase text-smokey-grey font-Poppins text-xs slg:text-sm font-bold tracking-[0.2em]">
        {label}
      </label>
      <input
        defaultValue=""
        placeholder={placeholder}
        ref={ref}
        className="h-14 slg:h-18 slg:pl-6 slg:text-3xl border border-light-grey outline-none rounded-lg uppercase font-Poppins placeholder:text-smokey-grey text-off-black font-bold pl-4 text-xl -mt-1"
      />
    </div>
  );
});

export default Input;

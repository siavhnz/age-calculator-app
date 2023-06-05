import Input from "./Input";
import { ReactComponent as Arrow } from "../../assets/images/icon-arrow.svg";

const Inputs = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 mt-2 slg:mt-4 slg:flex slg:gap-x-8">
        <Input label="day" placeholder="dd" error={{}} />
        <Input label="month" placeholder="mm" error={{}} />
        <Input label="year" placeholder="yyyy" error={{}} />
      </div>
      <div className="relative h-16 mt-8 slg:h-24 slg:mt-0">
        <span className="block border-b absolute translate-y-1/2 top-1/2 w-full"></span>
        <button
          aria-label="caculate age"
          className="bg-purple rounded-[100%] w-16 h-16 slg:w-24 slg:h-24 flex justify-center items-center absolute translate-x-1/2 right-1/2 slg:translate-x-0 slg:right-0"
        >
          <span className="w-8 h-8 slg:w-12 slg:h-12">
            <Arrow aria-hidden={true} focusable={false} />
          </span>
        </button>
      </div>
    </>
  );
};

export default Inputs;

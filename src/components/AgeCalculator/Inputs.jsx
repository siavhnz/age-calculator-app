import Input from "./Input";
import { ReactComponent as Arrow } from "../../assets/images/icon-arrow.svg";
import { useRef, useState } from "react";
import { validate } from "./validate-inputs";

const Inputs = ({ onCalculteAge }) => {
  const [error, setError] = useState({});
  const yearInput = useRef();
  const monthInput = useRef();
  const dayInput = useRef();
  const currentYear = new Date().getUTCFullYear();

  const handleClick = (e) => {
    e.preventDefault();

    const [day, month, year] = [
      dayInput.current.value,
      monthInput.current.value,
      yearInput.current.value,
    ];

    const errorMessage = validate(day, month, year);

    setError(errorMessage);
    const date =
      Object.keys(errorMessage).length === 0
        ? `${year}/${month}/${day}`
        : "---";
    onCalculteAge(date);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 mt-2 slg:mt-4 slg:flex slg:gap-x-8">
        <Input
          label="day"
          placeholder="dd"
          min={1}
          max={31}
          ref={dayInput}
          error={error && error.day}
        />
        <Input
          label="month"
          placeholder="mm"
          min={1}
          max={12}
          ref={monthInput}
          error={error && error.month}
        />
        <Input
          label="year"
          placeholder="yyyy"
          min={0}
          max={currentYear}
          ref={yearInput}
          error={error && error.year}
          onChange={handleClick}
        />
      </div>
      <div className="relative h-16 mt-8 slg:h-24 slg:mt-0">
        <span className="block border-b absolute translate-y-1/2 top-1/2 w-full"></span>
        <button
          onClick={handleClick}
          aria-label="caculate age"
          className="bg-purple transition-all duration-700 rounded-[100%] w-16 h-16 slg:w-24 slg:h-24 flex justify-center items-center absolute translate-x-1/2 right-1/2 slg:translate-x-0 slg:right-0 hover:bg-black"
        >
          <span className="bg-transparent w-8 h-8 slg:w-12 slg:h-12">
            <Arrow aria-hidden={true} focusable={false} />
          </span>
        </button>
      </div>
    </>
  );
};

export default Inputs;

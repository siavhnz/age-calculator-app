import { useState } from "react";
import Inputs from "./Inputs";
import Result from "./Result";

const AgeCalculator = () => {
  const initialState = {
    year: "--",
    month: "--",
    day: "--",
  };
  const [state, setState] = useState(initialState);

  //https://stackoverflow.com/a/7091965
  const handleCalculateAge = (dateString) => {
    if (dateString === "---") {
      setState(initialState);
    } else {
      const today = new Date();
      const enteredDate = new Date(dateString); //"1980/08/10
      let day = today.getDate() - enteredDate.getDate();
      let month = today.getMonth() - enteredDate.getMonth();
      let year = today.getFullYear() - enteredDate.getFullYear();

      if (day < 0) {
        month = month - 1;
        day = 31 + day;
      }

      if (
        month < 0 ||
        (month === 0 && today.getDate() < enteredDate.getDate())
      ) {
        year--;
        month = 12 + month;
      }

      if (month > 11) {
        month = 0;
        year++;
      }

      if (year < 0 || year === 0) {
        year = 0;
      }

      setState({
        year,
        month,
        day,
      });
    }
  };

  return (
    <div className="bg-white px-6 slg:px-14 py-10 pb-11 rounded-3xl rounded-br-[6rem] slg:rounded-br-[11rem] mx-4 mt-22 slg:mt-0 max-w-[840px] slg:w-[840px] slg:mr-auto slg:ml-auto">
      <Inputs onCalculteAge={handleCalculateAge} />
      <Result years={state.year} months={state.month} days={state.day} />
    </div>
  );
};

export default AgeCalculator;

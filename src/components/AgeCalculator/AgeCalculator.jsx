import Inputs from "./Inputs";
import Result from "./Result";

const AgeCalculator = () => {
  return (
    <div className="bg-white px-6 slg:px-14 py-10 pb-11 rounded-3xl rounded-br-[6rem] slg:rounded-br-[11rem] mx-4 mt-22 slg:mt-0 max-w-[840px] slg:w-[840px] slg:mr-auto slg:ml-auto">
      <Inputs />
      <Result years={""} months={""} days={""} />
    </div>
  );
};

export default AgeCalculator;

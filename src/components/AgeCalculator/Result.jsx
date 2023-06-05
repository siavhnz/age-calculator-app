import ResultItem from "./ResultItem";

const Result = ({ years, months, days }) => {
  return (
    <div className="mt-8 flex flex-col slg:mt-0">
      <ResultItem label="years" value={years} />
      <ResultItem label="months" value={months} />
      <ResultItem label="days" value={days} />
    </div>
  );
};

export default Result;

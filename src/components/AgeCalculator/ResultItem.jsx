const ResultItem = ({ label, value }) => {
  return (
    <div className="flex gap-x-2 slg:gap-x-0">
      <span className="text-purple font-Poppins font-extrabold italic text-[3.4rem] leading-[1.15] slg:leading-[1.14] slg:text-[6.3rem] slg:tracking-[0.18em]">
        {value ? value : "--"}
      </span>
      <span className="text-off-black font-Poppins font-extrabold italic text-[3.4rem] leading-[1.15] slg:leading-[1.14] slg:text-[6.3rem] slg:-ml-1">
        {label}
      </span>
    </div>
  );
};

export default ResultItem;

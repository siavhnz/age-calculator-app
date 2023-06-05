export const validate = (day, month, year) => {
  const error = {};
  const currentDate = new Date();
  const dayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let [_day, _month, _year] = [day.trim(), month.trim(), year.trim()];

  if (_day === "" || _day === undefined) {
    error.day = "This field is required";
  } else if (isNaN(_day) || +_day < 1 || +_day > 31) {
    error.day = "Must be a valid day";
  }

  if (_month === "" || _month === undefined) {
    error.month = "This field is required";
  } else if (isNaN(_month) || +_month < 1 || +_month > 12) {
    error.month = "Must be a valid month";
  }

  if (
    !isNaN(_day) &&
    !isNaN(_month) &&
    (+_month >= 1 || +_month <= 12) &&
    +_day > dayOfMonth[+_month - 1]
  ) {
    error.day = "Must be a valid day";
  }

  if (_year === "" || _year === undefined) {
    error.year = "This field is required";
  } else if (isNaN(_year) || +_year < 0) {
    error.year = "Must be a valid year";
  } else if (new Date(`${year}/${month}/${day}`) > currentDate) {
    error.year = "Must be in the past";
  }

  return error;
};

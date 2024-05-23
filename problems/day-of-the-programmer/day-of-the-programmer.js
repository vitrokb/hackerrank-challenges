function dayOfProgrammer(year) {
  let isLeapYear;

  if (year < 1918) {
    isLeapYear = year % 4 == 0;
    return isLeapYear ? `12.09.${year}` : `13.09.${year}`;
  } else if (year == 1918) {
    return `26.09.${year}`;
  } else {
    isLeapYear = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
    return isLeapYear ? `12.09.${year}` : `13.09.${year}`;
  }
}

dayOfProgrammer(2100);

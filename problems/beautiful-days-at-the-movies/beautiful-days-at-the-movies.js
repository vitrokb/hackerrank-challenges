function beautifulDays(i, j, k) {
  function reverseNum(num) {
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
  }

  let amountOfBeautifulDays = 0;
  const days = [];

  for (let a = i; a <= j; a++) {
    days.push(a);
  }

  days.forEach((day) => {
    const difference = Math.abs(day - reverseNum(day));
    const division = difference % k;
    if (division == 0) {
      amountOfBeautifulDays += 1;
    }
  });

  return amountOfBeautifulDays;
}

beautifulDays(20, 23, 6);

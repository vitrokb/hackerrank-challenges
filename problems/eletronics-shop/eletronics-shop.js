function getMoneySpent(keyboards, drives, b) {
  let maximumSpent = -1;

  for (let keyboard of keyboards) {
    for (let drive of drives) {
      const sumOfItemsPrice = keyboard + drive;
      if (sumOfItemsPrice <= b && sumOfItemsPrice > maximumSpent) {
        maximumSpent = sumOfItemsPrice;
      }
    }
  }

  return maximumSpent;
}

getMoneySpent([40, 50, 60], [5, 8, 12], 60);

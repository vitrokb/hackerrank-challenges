function bonAppetit(bill, k, b) {
  const correctBill =
    bill.filter((e, index) => index != k).reduce((acc, curr) => acc + curr, 0) / 2;

  if (correctBill == b) {
    console.log('Bon Appetit');
  } else {
    const incorrectBill = bill.reduce((acc, curr) => acc + curr, 0) / 2;
    const refound = incorrectBill - correctBill;
    console.log(refound);
  }
}

bonAppetit([3, 10, 2, 9], 1, 4);

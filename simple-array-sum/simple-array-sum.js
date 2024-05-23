function simpleArraySum(ar) {
  return ar.reduce((acc, currentValue) => acc + currentValue, 0);
}

simpleArraySum([1, 2, 3]);

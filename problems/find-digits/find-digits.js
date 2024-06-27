function findDigits(n) {
  let result = 0;

  const separatedInteger = n.toString();

  for (let i of separatedInteger) {
    if (n % i == 0) {
      result += 1;
    }
  }

  return result;
}

findDigits(1012);

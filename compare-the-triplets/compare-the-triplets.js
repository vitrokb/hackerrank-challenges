function compareTriplets(a, b) {
  const answer = [0, 0];

  a.forEach((element, index) => {
    if (element > b[index]) {
      answer[0] += 1;
    }

    if (element < b[index]) {
      answer[1] += 1;
    }
  });

  return answer;
}

compareTriplets([1, 2, 3], [1, 3, 4]);

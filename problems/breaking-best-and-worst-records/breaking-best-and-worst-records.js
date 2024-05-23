function breakingRecords(scores) {
  let minCount = 0;
  let maxCount = 0;

  let min = scores[0];
  let max = scores[0];

  for (i of scores) {
    if (i < min) {
      min = i;
      minCount += 1;
    }

    if (i > max) {
      max = i;
      maxCount += 1;
    }
  }

  return [maxCount, minCount];
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);

function kangaroo(x1, v1, x2, v2) {
  let answer = 'NO';
  let kangaroo1 = x1;
  let kangaroo2 = x2;

  if (kangaroo1 > kangaroo2 && v1 < v2) {
    while (kangaroo1 > kangaroo2) {
      kangaroo1 += v1;
      kangaroo2 += v2;

      if (kangaroo1 == kangaroo2) {
        answer = 'YES';
      }
    }
  } else if (kangaroo1 < kangaroo2 && v1 > v2) {
    while (kangaroo1 < kangaroo2) {
      kangaroo1 += v1;
      kangaroo2 += v2;

      if (kangaroo1 == kangaroo2) {
        answer = 'YES';
      }
    }
  }

  return answer;
}

kangaroo(0, 3, 4, 2);

function getTotalX(a, b) {
  const minInA = Math.min(...a);
  const maxInA = Math.max(...a);

  const minInB = Math.min(...b);
  const maxInB = Math.max(...b);

  const min = minInA < minInB ? minInA : minInB;
  const max = maxInA > maxInB ? maxInA : maxInB;

  const answer = [];

  for (let i = min; i <= max; i++) {
    let fillAnswer = true;
    for (let elementOfA of a) {
      if (i % elementOfA != 0) {
        fillAnswer = false;
      }
    }

    for (let elementOfB of b) {
      if (elementOfB % i != 0) {
        fillAnswer = false;
      }
    }

    if (fillAnswer) answer.push(i);
    fillAnswer = true;
  }

  return answer.length;
}

getTotalX([2, 6], [24, 36]);

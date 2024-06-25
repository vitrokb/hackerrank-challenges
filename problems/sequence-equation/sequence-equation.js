function permutationEquation(p) {
  const answerArray = [];

  for (let i = 1; i <= p.length; i++) {
    const xPosition = p.findIndex((integer) => integer == i) + 1;

    const yInP = p.findIndex((integer) => integer == xPosition) + 1;

    answerArray.push(yInP);
  }

  return answerArray;
}

permutationEquation([2, 3, 1]);

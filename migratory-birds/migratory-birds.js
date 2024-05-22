function migratoryBirds(arr) {
  const CRESCENT = 'crescent';
  const DECRESCENT = 'decrescent';

  const occurrences = [
    {
      value: 0,
      weight: 1,
    },
    {
      value: 0,
      weight: 2,
    },
    {
      value: 0,
      weight: 3,
    },
    {
      value: 0,
      weight: 4,
    },
    {
      value: 0,
      weight: 5,
    },
  ];

  function orderCondition(a, b, type) {
    if (a.value > b.value) {
      return type == CRESCENT ? 1 : -1;
    }
    if (a.value < b.value) {
      return type == CRESCENT ? -1 : 1;
    }
    return 0;
  }

  for (let i of arr) {
    occurrences[i - 1].value = occurrences[i - 1].value += 1;
  }

  const orderedArray = [...occurrences].sort((a, b) => orderCondition(a, b, DECRESCENT));

  let answerArray = [...orderedArray];

  if (orderedArray[0].value == orderedArray[1].value) {
    answerArray = orderedArray.filter((obj) => obj.value == orderedArray[0].value);
    answerArray.sort((a, b) => orderCondition(a, b, CRESCENT));
  }

  return answerArray[0].weight;
}

migratoryBirds([1, 2, 3, 4, 4, 5, 5]);

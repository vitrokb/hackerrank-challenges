function birthday(s, d, m) {
  let possibleCases = [];
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let partOfArray = s.slice(i, i + m);
    if (partOfArray.length == m) {
      possibleCases.push(partOfArray);
    }
  }

  possibleCases.forEach((element) => {
    const sum = element.reduce((acc, currentValue) => acc + currentValue, 0);
    if (sum == d) {
      answer += 1;
    }
  });

  return answer;
}

birthday([1, 1, 1, 1, 1], 3, 2);

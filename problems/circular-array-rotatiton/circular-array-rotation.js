function circularArrayRotation(a, k, queries) {
  function roundArray() {
    let lastElement = a.pop();
    a.splice(0, 0, lastElement);
  }

  for (let i = 0; i < k; i++) {
    roundArray();
  }

  let resultArray = [];

  queries.forEach((integer) => (resultArray = [...resultArray, a[integer]]));

  return resultArray;
}

circularArrayRotation([3, 4, 5], 2, [1, 2]);

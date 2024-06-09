function pickingNumbers(a) {
  a.sort((a, b) => a - b);

  const arraySet = [];

  for (let i = 0; i < a.length; i++) {
    let secondaryArray = [];
    for (let j = 0; j < a.length; j++) {
      let difference = Math.abs(a[i] - a[j]);
      if (difference == 1 || difference == 0) {
        secondaryArray = [...secondaryArray, a[j]];
        arraySet.push(secondaryArray);
      }
    }
  }

  let sizeOfTheBiggestArray = 0;

  for (let array of arraySet) {
    let clearArray = true;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        let difference = Math.abs(array[i] - array[j]);
        if (difference !== 1 && difference !== 0) {
          clearArray = false;
        }
      }
    }

    if (clearArray && array.length > sizeOfTheBiggestArray) {
      sizeOfTheBiggestArray = array.length;
    }
  }

  return sizeOfTheBiggestArray;
}

pickingNumbers([
  9, 6, 13, 16, 5, 18, 4, 10, 3, 19, 4, 5, 8, 1, 13, 10, 20, 17, 15, 10, 6, 10, 13, 20, 18, 17, 7,
  10, 6, 5, 16, 18, 13, 20, 19, 7, 16, 13, 20, 17, 4, 17, 8, 19, 12, 7, 17, 1, 18, 3, 16, 4, 5, 3,
  15, 17, 6, 17, 14, 11, 11, 7, 11, 6, 15, 15, 12, 6, 17, 19, 8, 6, 13, 9, 10, 19, 14, 18, 7, 9, 11,
  16, 11, 20, 4, 20, 10, 7, 8, 4, 2, 12, 11, 8, 12, 13, 19, 8, 8, 5,
]);

function pageCount(n, p) {
  const arrayOfPages = [];
  const reversedArrayOfPages = [];

  for (let i = 1; i <= n; i++) {
    arrayOfPages.push(i);
    reversedArrayOfPages.push(i);
  }

  if (arrayOfPages.length % 2 == 0) {
    arrayOfPages.push(0);
    reversedArrayOfPages.push(0);
  }

  function normalizePages(pages) {
    return pages.splice(0, 0, 0);
  }

  function getTurns(pages) {
    let numberIndex = pages.indexOf(p);

    if (numberIndex == 0 || numberIndex == 1) {
      return 0;
    } else {
      return Math.trunc(numberIndex / 2);
    }
  }

  normalizePages(arrayOfPages);
  normalizePages(reversedArrayOfPages);

  reversedArrayOfPages.reverse();

  const normalWay = getTurns(arrayOfPages);
  const reverseWay = getTurns(reversedArrayOfPages);

  return normalWay < reverseWay ? normalWay : reverseWay;
}

pageCount(6, 5);

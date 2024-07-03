function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 != y2 && y2 < y1) {
    return console.log(10000);
  } else if (y2 > y1) {
    return console.log(0);
  } else if (m1 != m2 && m2 < m1) {
    return console.log((m1 - m2) * 500);
  } else if (m2 > m1) {
    return console.log(0);
  } else if (d1 != d2 && d2 < d1) {
    return console.log((d1 - d2) * 15);
  }

  return console.log(0);
}

libraryFine(10, 6, 2016, 9, 6, 2016);

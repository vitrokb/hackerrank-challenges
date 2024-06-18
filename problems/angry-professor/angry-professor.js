function angryProfessor(k, a) {
  let arrivalTimeEarly = 0;
  let arrivalTimeLate = 0;

  a.forEach((time) => {
    if (time <= 0) {
      arrivalTimeEarly = arrivalTimeEarly + 1;
    } else {
      arrivalTimeLate = arrivalTimeLate + 1;
    }
  });

  return arrivalTimeEarly >= k ? 'NO' : 'YES';
}

angryProfessor(3, [-2, -1, 0, 1, 2]);

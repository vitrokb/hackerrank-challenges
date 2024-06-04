function catAndMouse(x, y, z) {
  let catA = z - x;
  let catB = z - y;

  if (catA < 0) {
    catA = catA * -1;
  }

  if (catB < 0) {
    catB = catB * -1;
  }

  if (catA == catB) {
    return 'Mouse C';
  } else if (catA < catB) {
    return 'Cat A';
  } else {
    return 'Cat B';
  }
}

catAndMouse(1, 2, 3);

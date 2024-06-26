function jumpingOnClouds(c, k) {
  let e = 100;

  for (let i = 0; (i + k) % c.length; i = i + k) {
    if (c[(i + k) % c.length] == 0) {
      e = e - 1;
    } else {
      e = e - 3;
    }
  }

  if (c[0] == 0) {
    e = e - 1;
  } else {
    e = e - 3;
  }

  return e;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2);

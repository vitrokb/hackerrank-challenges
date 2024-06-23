function saveThePrisoner(n, m, s) {
  const sweetsAndPosition = m + s - 1;

  const result = sweetsAndPosition % n || n;

  return result;
}

saveThePrisoner(4, 6, 2);

function hurdleRace(k, height) {
  const maxHeight = Math.max(...height);

  const magicPotions = maxHeight - k;

  return magicPotions > 0 ? magicPotions : 0;
}

hurdleRace(7, [2, 5, 4, 5, 2]);

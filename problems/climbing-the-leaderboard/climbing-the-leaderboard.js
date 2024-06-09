function climbingLeaderboard(ranked, player) {
  function clearArray(array) {
    return Array.from(new Set(array));
  }

  const clearedRanked = clearArray(ranked);

  const position = [];

  for (let play of player) {
    clearedRanked.push(play);
    clearedRanked.sort((a, b) => b - a);
    clearArray(clearedRanked);

    position.push(clearedRanked.findIndex((rank) => rank == play) + 1);
  }

  return position.forEach((element) => console.log(element));
}

climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]);

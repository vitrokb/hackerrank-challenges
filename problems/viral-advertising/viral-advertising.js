function viralAdvertising(n) {
  let shared = 5;
  let likes = 0;

  for (let i = 0; i < n; i++) {
    likes += Math.floor(shared / 2);
    shared = Math.floor(shared / 2) * 3;
  }

  return likes;
}

viralAdvertising(5);

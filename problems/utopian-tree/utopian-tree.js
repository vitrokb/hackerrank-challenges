function utopianTree(n) {
  let H = 0;
  for (let i = 0; i <= n; i++) {
    if (i == 0) {
      H = 1;
    } else if (i % 2 != 0) {
      H = H * 2;
    } else {
      H = H + 1;
    }
  }

  console.log(H);
}

utopianTree(2);
utopianTree(0);
utopianTree(1);

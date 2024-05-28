function sockMerchant(n, ar) {
  const peerIncidence = {};

  ar.forEach((element) => {
    peerIncidence[element] = 0;
  });

  ar.forEach((element) => {
    peerIncidence[element] = peerIncidence[element] + 1;
  });

  const sumOfPairs = Object.values(peerIncidence).reduce(
    (acc, curr) => acc + Math.trunc(curr / 2),
    0
  );

  return sumOfPairs;
}

sockMerchant(7, [10, 20, 10, 20, 10, 30, 20]);

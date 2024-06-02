function countingValleys(steps, path) {
  const splittedString = path.split('');

  let hikes = 0;
  let previousStep = 0;
  let pathsCounter = 0;

  splittedString.forEach((letter) => {
    if (letter == 'U') {
      previousStep = pathsCounter;
      pathsCounter += 1;
    } else {
      previousStep = pathsCounter;
      pathsCounter -= 1;
    }

    if (pathsCounter == 0 && previousStep < 0) {
      hikes += 1;
    }
  });

  return hikes;
}

countingValleys(12, 'DDUUDDUDUUUD');

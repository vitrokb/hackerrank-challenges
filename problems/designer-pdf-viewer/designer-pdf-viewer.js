function designerPdfViewer(h, word) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  function findIndex(letter) {
    return alphabet.findIndex((element) => element == letter.toLowerCase());
  }

  const heights = [];

  word.split('').forEach((letter) => {
    heights.push(h[findIndex(letter)]);
  });

  const calculatedArea = Math.max(...heights) * heights.length;

  return calculatedArea;
}

designerPdfViewer(
  [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5],
  'torn'
);

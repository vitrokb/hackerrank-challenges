function appendAndDelete(s, t, k) {
  let steps = 0;
  let wordA = s;

  function removeElements(string, index) {
    let str = string.split('');
    str.splice(index, 1);
    return str.join('');
  }

  function checkRepetition() {
    const repeatedLetter = () => [...wordA].findIndex((el, index) => el !== t[index]);

    while (repeatedLetter() != -1) {
      wordA = removeElements(wordA, repeatedLetter());
      steps += 1;
    }
  }

  checkRepetition();

  function fillWithT() {
    while (wordA.length < t.length) {
      wordA = wordA.concat(t[[...t].findIndex((el, index) => el !== wordA[index])]);
      steps += 1;
    }
  }

  fillWithT();

  if (steps > k) {
    return 'No';
  } else if (wordA.length + t.length <= k) {
    return 'Yes';
  } else {
    while (steps < k) {
      if (wordA.length == t.length) {
        wordA = removeElements(wordA, wordA.length - 1);
        steps += 1;
      } else {
        fillWithT();
      }
    }

    if (wordA == t) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
}

appendAndDelete('abcd', 'abcdert', 10);

**Create a circular array**

```
  function createCircularArray(n, m) {
    const sequence = [...Array(n).keys()];
    const filledSequences = [];

      for (let i = 0, sequenceLen = sequence.length; i < m; i++) {
        let integerSequence = [];
        for (let j = 0; j < m; j++) {
          integerSequence.push(sequence[(i + j) % sequenceLen]);
        }
        filledSequences.push(integerSequence);
    }

    return filledSequences;
  }

  createCircularArray(3, 7);

  // Answer:
  //  [
  //    [0, 1, 2, 0, 1, 2, 0],
  //    [1, 2, 0, 1, 2, 0, 1],
  //    [2, 0, 1, 2, 0, 1, 2],
  //    [0, 1, 2, 0, 1, 2, 0],
  //    [1, 2, 0, 1, 2, 0, 1],
  //    [2, 0, 1, 2, 0, 1, 2],
  //    [0, 1, 2, 0, 1, 2, 0],
  //  ];
```
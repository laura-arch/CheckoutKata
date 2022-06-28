function checkout(array) {
  let A = 0;
  let B = 0;
  let C = 0;

  for (const item of array) {
    console.log(item);
    switch (item) {
      case "A":
        A++;
        break;
      case "B":
        B++;
        break;
      case "C":
        C++;
        break;
    }
  }
  console.log(A, B, C);
  //   checking I can add the total of each type
}

checkout(["A", "B"]);

module.exports = checkout;

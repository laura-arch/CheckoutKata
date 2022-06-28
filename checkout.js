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
  return 0.5 * A + 0.75 * B + 0.25 * C;
  //   checking we can sum the total without the discounts implemented
}

checkout(["A", "B"]);

module.exports = checkout;

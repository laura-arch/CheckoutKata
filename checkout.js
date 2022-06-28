function checkout(array) {
  let A = 0;
  let B = 0;
  let C = 0;
  let cost = 0;

  //   Sums total of each type of product:
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

  if (Math.floor(B / 2) > 0) {
    cost += 1.25 * Math.floor(B / 2);
    //   charging for the deals
    B -= 2 * Math.floor(B / 2);
    //   removing those we've already charged for
  }

  if (Math.floor(C / 4) > 0) {
    cost += 0.75 * Math.floor(C / 4);
    //   charging for the deals
    C -= 4 * Math.floor(C / 4);
    // removing those we've already charged for
  }

  return cost + 0.5 * A + 0.75 * B + 0.25 * C;
  //   checking we can sum the total without the discounts implemented
}

checkout(["A", "B"]);

module.exports = checkout;

function checkout(array) {
  let A = 0;
  let B = 0;
  let C = 0;
  let cost = 0;

  //   Sums total of each type of product:
  for (const item of array) {
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

  //   Adding total for A
  cost += 0.5 * A;

  //   Adding discounted B
  cost += 1.25 * Math.floor(B / 2);

  //   Adding full price B
  cost += 0.75 * (B % 2);

  //   Adding discounted C
  cost += 0.75 * Math.floor(C / 4);

  //   Adding full price C
  cost += 0.25 * (C % 4);

  return cost;
}

module.exports = checkout;

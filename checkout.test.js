const checkout = require("./checkout");

test("Without discount", () => {
  expect(checkout(["C", "C", "C"])).toBe(0.75);
  expect(checkout(["A", "A", "C"])).toBe(1.25);
});

test("With one discount", () => {
  expect(checkout(["B", "B", "B"])).toBe(2.0);
  expect(checkout(["C", "C", "C", "C"])).toBe(0.75);
});

test("With both discounts", () => {
  expect(checkout(["B", "B", "C", "C", "C", "C"])).toBe(2.0);
});

// Note: currently not working because function checkout doesn't exist yet

// Test case 1 (no discount): ['C', ‘C', 'C'] => 0.75
// Test case 2 (no discount): ['A', ‘A', 'C'] => 1.25
// Test case 3 (2 for 1.25 discount applied): ['B', ‘B', 'B'] => 2.00
// Test case 4 (buy 3 get one free applied): ['C', C', ‘C', 'C'] => 0.75
// Test case 5 (2 for 1.25 discount AND buy 3 get one free applied): ['B', ‘B', 'C', C', ‘C', 'C'] = 2.00

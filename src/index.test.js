import Calculator, { capitalize, reverse, calculator } from "./index.js";
// capitalize tests
test("Capitalizing the first letter", () => {
  expect(capitalize("hi mom")).toBe("Hi mom");
});

test("First letter stays the same if capitalized", () => {
  expect(capitalize("Hi mom")).toBe("Hi mom");
});

test("The func doesn't do anything without an appropriate input", () => {
  expect(capitalize("12334354#$%")).toBe("invalid input");
});

test("Capitalizing the first letter", () => {
  expect(capitalize("test")).toBe("Test");
});
// reverse a str tests
test("reverse a sentence", () => {
  expect(reverse("hi mom")).toBe("mom ih");
});

test("reverse a num", () => {
  expect(reverse("12345")).toBe("54321");
});

test("reverse a word", () => {
  expect(reverse("test")).toBe("tset");
});
// calculator tests
test("subtract", () => {
  const calculator = new Calculator();
  expect(calculator.subtract(13, 4)).toBe(9);
});

test("add", () => {
  const calculator = new Calculator();
  expect(calculator.add(2, 2)).toBe(4);
});

test("multiply", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("divide", () => {
  const calculator = new Calculator();
  expect(calculator.divide(9, 3)).toBe(3);
});

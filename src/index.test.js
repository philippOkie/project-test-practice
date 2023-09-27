import { capitalize } from "./index.js";

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

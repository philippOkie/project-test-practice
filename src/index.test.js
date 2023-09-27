import { capitalize } from "./index.js";

test("Capitalizing the first letter", () => {
  expect(capitalize("hi mom").toBe("Hi mom"));
});

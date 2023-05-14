const sum = require("./sum");

test("add 2 numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

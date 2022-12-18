const each = require("jest-each").default;

describe("absolute parameterized tests", () => {
  each([
    [1, 1],
    [-1, 1],
    [0, 0],
  ]).it("when the input is '%s'", (input, expected) => {
    expect(ex.absolute(input)).toBe(expected);
  });
});

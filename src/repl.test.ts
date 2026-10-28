import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
   {
    input: "PIKACHU",
    expected: ["pikachu"],
  },
  {
    input: "  Charmander   FIRE  ",
    expected: ["charmander", "fire"],
  },
  {
    input: "",
    expected: [],
  },
  {
  input: "Pikachu\tBulbasaur\nCharmander",
  expected: ["pikachu", "bulbasaur", "charmander"],
},
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected.length);

    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
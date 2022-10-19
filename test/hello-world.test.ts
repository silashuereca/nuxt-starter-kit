import { test, expect } from "vitest";
import { helloWorld } from "../src/utils/common";

test("print Hello World", () => {
  expect(helloWorld()).toBe("Hello World");
});

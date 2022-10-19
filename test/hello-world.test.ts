import { test, expect } from "vitest";
import { helloWorld } from "../utils/common";

test("print Hello World", () => {
  expect(helloWorld()).toBe("Hello World");
});

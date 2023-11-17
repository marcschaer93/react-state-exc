// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom

// import "@testing-library/jest-dom/extend-expect";

// import { expect, afterEach } from "vitest";
// import { cleanup } from "@testing-library/react";
// import matchers from "@testing-library/jest-dom/matchers";

// // Break with that line
// //
// // expect.extend(matchers);

// afterEach(() => {
//   cleanup();
// });

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$ THIS WORKS
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

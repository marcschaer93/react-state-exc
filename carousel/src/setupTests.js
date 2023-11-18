// Had to change configuration because I migrated create-app to vite & vitest

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$ THIS WORKS for Vitest
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

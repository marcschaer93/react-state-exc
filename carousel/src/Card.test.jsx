import { render } from "@testing-library/react";
import Card from "./Card";
import { expect } from "vitest";

// Mock Card Data
const testCard = [
  { caption: "Foto with a test 1", src: "testFoto1" },
  { caption: "Foto with a test 2", src: "testFoto2" },
];
// smoke Test
it("should render", () => {
  <Card
    caption={testCard.caption}
    src={testCard.src}
    currNum={0 + 1}
    totalNum={2}
  />;
});

// snapshot Test
it("should match snapshot", () => {
  const { asFragment } = render(
    <Card
      caption={testCard.caption}
      src={testCard.src}
      currNum={0 + 1}
      totalNum={2}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

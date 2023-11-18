import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel.jsx";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

// const carouselPhotos = TEST_IMAGES;
const carouselTitle = "TEST-TITLE";

// Smoke Test
it("renders without crashing", () => {
  render(<Carousel photos={TEST_IMAGES} title={"images for testing"} />);
});

// Snapshot Test
it("matches snapshot", () => {
  const { asFragment } = render(
    <Carousel photos={TEST_IMAGES} title={"images for testing"} />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("if second picture in carousel, leftArrow should be visible and move backward", () => {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  // Move forward to the second picture by clicking the right arrow
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // Check if the left arrow is present when the second image is displayed
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  const secondImage = container.querySelector('img[alt="testing image 2"]');

  // Assert that the left arrow should be visible when the second image is displayed
  expect(leftArrow).toBeInTheDocument();

  // Simulate clicking the left arrow to move backward
  fireEvent.click(leftArrow);

  // Validate if the first image is displayed after moving backward from the second image
  const firstImage = container.querySelector('img[alt="testing image 1"]');
  expect(firstImage).toBeInTheDocument();
});

it("if last picture in carousel, there is no rightArrow visible", () => {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  // Move to the last picture in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");

  // Click the right arrow twice to navigate to the last picture
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // Check if the last image is present
  const lastImage = container.querySelector('img[alt="testing image 3"]');
  expect(lastImage).toBeInTheDocument();

  // Ensure the left arrow is present at the last picture
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  expect(leftArrow).toBeInTheDocument();

  // Ensure the right arrow is not present at the last picture
  if (lastImage) {
    expect(rightArrow).not.toBeInTheDocument();
  } else {
    expect(rightArrow).toBeInTheDocument();
  }
});

it("if first picture in carousel, there is no leftArrow visible", () => {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  // Check if the left arrow is not present when the first image is displayed
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  const firstImage = container.querySelector('img[alt="testing image 1"]');

  // Assert that the left arrow should not be visible when the first image is displayed
  if (firstImage) {
    expect(leftArrow).not.toBeInTheDocument();
  } else {
    // If first image is not found, it implies the left arrow should be present
    expect(leftArrow).toBeInTheDocument();
  }
});

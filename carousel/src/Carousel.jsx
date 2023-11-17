import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx((prevCardIdx) => (prevCardIdx + 1) % total);
  }

  // const goBackward = () => {
  //   if (currCardIdx === 0) {
  //     setCurrCardIdx(total - 1);
  //   } else {
  //     setCurrCardIdx((prevCardIdx) => prevCardIdx - 1);
  //   }
  // };

  // Same as goBackward above, but harder to understand with modulo
  //
  const goBackward = () => {
    setCurrCardIdx((prevCardIdx) => (prevCardIdx - 1 + total) % total);
  };

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i className="bi bi-arrow-left-circle" onClick={goBackward} />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i className="bi bi-arrow-right-circle" onClick={goForward} />
      </div>
    </div>
  );
}

export default Carousel;

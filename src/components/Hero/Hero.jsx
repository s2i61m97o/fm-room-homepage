import {useState} from "react";
import data from "../../assets/heroInfo.js";
import ScrollBtn from "../ScrollBtn/ScrollBtn.jsx";
import arrowIcon from "../../assets/images/icon-arrow.svg";

import "./Hero.scss";

export default function Main({useScreenSize, screenBreaks}) {
  const [slideNumber, setSlideNumber] = useState(0);

  const imageSrc = data[slideNumber].img;
  const heroTitle = data[slideNumber].title;
  const heroText = data[slideNumber].text;

  function scrollNext() {
    setSlideNumber((prev) => (prev === 2 ? 0 : prev + 1));
  }
  function scrollPrev() {
    setSlideNumber((prev) => (prev === 0 ? 2 : prev - 1));
  }

  return (
    <section className="hero">
      <div className="image-container">
        <img
          className="hero-img"
          src={
            useScreenSize() > screenBreaks.tabletUp
              ? imageSrc.desktop
              : imageSrc.mobile
          }
          alt={imageSrc.alt}
        />
        <ScrollBtn
          scrollNext={() => scrollNext()}
          scrollPrev={() => scrollPrev()}
        />
      </div>
      <section className="hero-text">
        <h1>{heroTitle}</h1>
        <p>{heroText}</p>
        <button>
          shop now <img src={arrowIcon} />
        </button>
      </section>
    </section>
  );
}

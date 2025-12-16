import {useState} from "react";
import clsx from "clsx";
import data from "../../assets/heroInfo.js";
import ScrollBtn from "../ScrollBtn/ScrollBtn.jsx";
import arrowIcon from "../../assets/images/icon-arrow.svg";

import "./Hero.scss";

export default function Main({useScreenSize, screenBreaks}) {
  const [slideNumber, setSlideNumber] = useState(0);

  const imageSrc = data[slideNumber].img;
  const heroTitle = data[slideNumber].title;
  const heroText = data[slideNumber].text;

  const screenWidth = useScreenSize();

  function scrollNext() {
    setSlideNumber((prev) => (prev === 2 ? 0 : prev + 1));
  }
  function scrollPrev() {
    setSlideNumber((prev) => (prev === 0 ? 2 : prev - 1));
  }

  const imgOneClass = clsx(
    "hero-img",
    "img-one",
    slideNumber !== 0 && "slide-left"
  );
  const imgTwoClass = clsx(
    "hero-img",
    "img-two",
    slideNumber !== 1 && "slide-up"
  );
  const imgThreeClass = clsx(
    "hero-img",
    "img-three",
    slideNumber !== 2 && "slide-left"
  );
  const textOneClass = clsx(
    "hero-text",
    "text-one",
    slideNumber !== 0
      ? screenWidth > 1199
        ? "slide-up"
        : "slide-left"
      : undefined
  );
  const textTwoClass = clsx(
    "hero-text",
    "text-two",
    slideNumber !== 1 && "slide-right"
  );
  const textThreeClass = clsx(
    "hero-text",
    "text-three",
    slideNumber !== 2
      ? screenWidth > 1199
        ? "slide-up"
        : "slide-left"
      : undefined
  );

  return (
    <section className="hero">
      <div className="image-container">
        {useScreenSize() > 1199 ? (
          <>
            <img
              className={imgOneClass}
              src={
                screenWidth > screenBreaks.tabletUp
                  ? data[0].img.desktop
                  : data[0].img.mobile
              }
              alt={data[0].img.alt}
            />
            <img
              className={imgTwoClass}
              src={
                screenWidth > screenBreaks.tabletUp
                  ? data[1].img.desktop
                  : data[1].img.mobile
              }
              alt={data[1].img.alt}
            />
            <img
              className={imgThreeClass}
              src={
                screenWidth > screenBreaks.tabletUp
                  ? data[2].img.desktop
                  : data[2].img.mobile
              }
              alt={data[2].img.alt}
            />
          </>
        ) : (
          <img
            className="hero-img"
            src={
              screenWidth > screenBreaks.tabletUp
                ? imageSrc.desktop
                : imageSrc.mobile
            }
            alt={imageSrc.alt}
          />
        )}
        <ScrollBtn
          scrollNext={() => scrollNext()}
          scrollPrev={() => scrollPrev()}
        />
      </div>
      <div className="text-container">
        {useScreenSize() > 1199 ? (
          <>
            <section className={textOneClass}>
              <h1>{data[0].title}</h1>
              <p>{data[0].text}</p>
              <button>
                shop now <img src={arrowIcon} />
              </button>
            </section>
            <section className={textTwoClass}>
              <h1>{data[1].title}</h1>
              <p>{data[1].text}</p>
              <button>
                shop now <img src={arrowIcon} />
              </button>
            </section>
            <section className={textThreeClass}>
              <h1>{data[2].title}</h1>
              <p>{data[2].text}</p>
              <button>
                shop now <img src={arrowIcon} />
              </button>
            </section>
          </>
        ) : (
          <section className="hero-text">
            <h1>{heroTitle}</h1>
            <p>{heroText}</p>
            <button>
              shop now <img src={arrowIcon} />
            </button>
          </section>
        )}
      </div>
    </section>
  );
}

import angleLeft from "/src/assets/images/icon-angle-left.svg";
import angleRight from "/src/assets/images/icon-angle-right.svg";
import "./ScrollBtn.scss";

export default function ScrollBtn({scrollPrev, scrollNext}) {
  return (
    <div className="carousel-btns">
      <button className="btn-prev" value="previous" onClick={ scrollPrev}>
        <img
          src={angleLeft}
          alt="left arrow"
          aria-label="previous hero information"
        />
      </button>
      <button className="btn-next" value="next" onClick={scrollNext}>
        <img
          src={angleRight}
          alt="right arrow"
          aria-label="next hero information"
        />
      </button>
    </div>
  );
}

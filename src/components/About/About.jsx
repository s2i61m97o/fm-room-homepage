import aboutDarkImg from "/images/image-about-dark.jpg";
import aboutLightImg from "/images/image-about-light.jpg";
import "./About.scss"

export default function About() {
  return (
    <section className="about">
      <img
        src={aboutDarkImg}
        alt="dark themed coffee table and chairs"
        className="about-img"
      />
      <article className="about-info dark">
        <h2>about our furniture</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </article>
      <img src={aboutLightImg} alt="single white chair" className="about-img light" />
    </section>
  );
}

// import { useState } from 'react'
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About.jsx";
import useScreenSize from "./useScreenSize.js";

import "./App.css";

function App() {
  const screenBreaks = {
    tabletUp: 600,
    desktopUp: 900,
  };

  return (
    <>
      <Nav />
      <main>
        <Hero useScreenSize={useScreenSize} screenBreaks={screenBreaks} />
        <About />
      </main>
    </>
  );
}

export default App;

import { useState } from "react";
import SearchIcon from "./SearchIcon"
import HeroImage from "../assets/hero-banner.jpeg"
import { useRef } from 'react';
import VisibleInView from './VisibleInView';
function HeroSection() {
    let boxRef = useRef(null);
    let isVisible = VisibleInView(boxRef);
    if (isVisible)
        document.documentElement.style.setProperty("--main-bg" , "rgb(255, 255, 255)")
    return (
<>
<section ref={boxRef} className="initial-scroll-trigger scroll-trigger" style={{height: "1px" , position: "absolute" , top: "0" , background: "red"}}></section>
<section className="hero-section">
    
<img src={HeroImage} alt="" srcset="" />
</section>
<section className="hero-section-bottom">
<h1 >Discover Art made by hand</h1>
   <section className="globe">
  <div className="globe-content">
    <div className="curve curve-left" aria-hidden="true" />
    <div className="curve curve-right" aria-hidden="true" />

    <h2>
      Browse paintings, sculpture and murals — every piece hand-made by its artist.
    </h2>

    <section className="discover-art-container">
        <input type="search" placeholder="Search by Artist or Brand"  className="-custom-search-icon--style-1" />
        <button>
            {SearchIcon()}
        </button>
    </section>
    <section className={isVisible ? "suggested-tags suggested-tags--disable" : "suggested-tags"}>
        <h1 className="suggested-tag">Suggested</h1>
        <a href="" className="suggested-tag">Abstract</a>
        <a href="" className="suggested-tag">Contemporary</a>
        <a href="" className="suggested-tag">Landscape</a>
        <a href="" className="suggested-tag">Creative Landscape</a>
        <a href="" className="suggested-tag">Meditative</a>
    </section>
  </div>
</section>
</section>

</>
    );
}
export default HeroSection;
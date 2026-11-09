import { useState } from "react";
import SearchIcon from "./SearchIcon"

function HeroSection() {
    return (
<>
<section className="hero-section">

</section>
<section className="discover-art">
    <h1>Discover art made by hand</h1>
    <h2>Browse paintings, sculpture and murals — <br /> every piece hand-made by its artist.</h2>
    <section className="discover-art-input">
        <input className="-custom-search-icon--style-1" type="search" placeholder="Search by Artist or Brand" name="" id="" />
        <button>
            <SearchIcon />
        </button>
    </section>
    <section className="suggested-tags">
        <h1>Suggested</h1>
        <a href="" className="suggested-tag">Abstract</a>
        <a href="" className="suggested-tag">Contemporary</a>
        <a href="" className="suggested-tag">Landscape</a>
        <a href="" className="suggested-tag">Creative Landscape</a>
        <a href="" className="suggested-tag">Meditative</a>
    </section>
</section>
</>
    );
}
export default HeroSection;
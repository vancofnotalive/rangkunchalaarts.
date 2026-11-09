import { useRef, useState } from "react";
import VisibleInView from "./VisibleInView";
import SetPageBg from "../hooks/SetPageBackground"
function CraftSection() {
    let boxRef1 = useRef(null);
    let isVisible2 = VisibleInView(boxRef1)
if (isVisible2)
     SetPageBg("rgb(180, 141, 56)")
    else 
        SetPageBg()
    
    return (<>

    <section className="craft-section" >
        <section ref={boxRef1} className="initial-scroll-trigger scroll-trigger" style={{height: "3svh" , position: "absolute" , top: "0" , background: "transparent"}}></section>
        <section className="craft-section-icon-head">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 48C0 21.5 21.5 0 48 0l96 0c26.5 0 48 21.5 48 48l0 368c0 53-43 96-96 96S0 469 0 416L0 48zM240 409.6l0-271.5 48.1-48.1c18.7-18.7 49.1-18.7 67.9 0l67.9 67.9c18.7 18.7 18.7 49.1 0 67.9L240 409.6zM205.5 512l192-192 66.6 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-258.5 0zM80 64c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L80 64zM64 208l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>        </section>
        <main>
<h1 className="craft-heading" >
    Let’s craft your
        statement piece 
        
</h1>
<h2 className="craft-sub-heading">
    Rangkunchala
        Art Gallery is a multidisciplinary art studio presenting curated collections of paintings, works on paper, and
        mixed media across contemporary and traditional idioms.
</h2>
<section className="craft-data-container">
    
    <section className="craft-data">
        <h1><span>1,397</span></h1>
        <h2>WORKS IN THE  COLLECTION</h2>
    </section>
    <section className="craft-data">
        <h1><span>111</span></h1>
        <h2>ARTISTS REPRESENTED</h2>
    </section>
    

    <section className="craft-data">
        <h1><span>12+</span></h1>
        <h2>Years of curatorial practice

</h2>
    </section>
</section>

<section className="craft-connect-container">

<button className="craft-connect">
    <span>CONNECT WITH THE GALLERY</span>
    <div>
        
    </div>
</button>
</section>
        </main>
    </section>
    </>)
    
}
export default CraftSection
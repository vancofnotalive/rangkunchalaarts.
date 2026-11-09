import { useEffect, useRef } from "react";
import useVisibleInView from "./VisibleInView";
function Section6() {
let artSolRef = useRef(null);
let isArtSolVisible = useVisibleInView(artSolRef);
if (isArtSolVisible)
    document.documentElement.style.setProperty("--main-bg" , "rgb(255 , 255, 255)")
    return (<>
    <section className="art-sol-parent">
<section ref={artSolRef} className="scroll-trigger" style={{height: "1svh" , position: "absolute" , top: "0"  }}></section>
    
    <section className="art-solution-heading">
        <h1>CANVAS COLLECTION</h1>
        <h2>All art solution under  <span>one roof</span></h2>
    </section>
    <section className="main-art-solution-container">

    <section className="art-solution-container">

    
    <a href="" className="art-solution" style={{marginTop: "5svh"}}>
        <section className="head">

        <section className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM272 224c8.4 0 16.1 4.4 20.5 11.5l88 144c4.5 7.4 4.7 16.7 .5 24.3S368.7 416 360 416L88 416c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8l56-80c4.5-6.4 11.8-10.2 19.7-10.2s15.2 3.8 19.7 10.2l26.4 37.8 61.4-100.5c4.4-7.1 12.1-11.5 20.5-11.5z"/></svg>
        </section>
        <h1>Collect</h1>
        </section>
        <p>
            Invest in curated contemporary art
              of long-term value, supported by art banking and advisory.
        </p>
        <a href="" className="link"><span>
            Explore Artowrks</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg> </a>
    </a>
    </section>
    <section className="art-solution-container">

    
    <a href="" className="art-solution diff">
        <section className="head">

        <section className="icon">
          <svg className="diff" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 21h18"></path>
                <path d="M5 21V8l7-5 7 5v13"></path>
                <rect x="9.5" y="11" width="5" height="6" rx=".5"></rect>
              </svg>
        </section>
        <h1>Curate</h1>
        </section>
        <p>
            Transform your space with expert
              curation, in collaboration with architects and designers.
        </p>
        <a href="" className="link"><span>
            Talk to an advisor
              </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg> </a>
    </a>
    </section>
    <section className="art-solution-container">

    
    <a href="" className="art-solution ">
        <section className="head">

        <section className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256c0 .9 0 1.8 0 2.7-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48 0 3.4 .4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5 .1-7 .2-10.6 .2-141.4 0-256-114.6-256-256S114.6 0 256 0 512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
        </section>
        <h1>Customize</h1>
        </section>
        <p>
            Bespoke paintings, murals and
              artifacts, tailored to your style and your space.
        </p>
        <a href="" className="link"><span>
            Commission a work
              
              </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg> </a>
    </a>
    </section>
    <section className="art-sol-footer">
    <span>Art
          Consulting •</span>
          <span>

           Art Banking
           •
          </span>
          <span>
             Art Investment
•
          
          </span>
          <span>

             Paintings 
             •
          </span>
          <span>

              Murals
              •
          </span>
          <span>

               Sculptures
               •
          </span>
          <span>

           Terracotta
          </span>
    </section>
    </section>
    </section>
    </>)

}
export default Section6
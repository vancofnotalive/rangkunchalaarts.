import { useRef, useState } from "react";
import artOne from "../assets/art-piece.jpg"

import art2 from "../assets/art-piece2.jpeg"
import useVisibleInView from "./VisibleInView";
function Section3() {
    let valueRef = useRef(null)
    let isValueVisible = useVisibleInView(valueRef)
    if (isValueVisible)
        document.documentElement.style.setProperty("--main-bg" , "rgb(252, 249, 240)")
    return (
        <>
        <section className="difference">
            <section ref={valueRef} className="initial-scroll-trigger scroll-trigger" style={{height: "1svh" , position: "absolute" , top: "0" , }}></section>
            <section className="difference-fix"></section>
            <h1 className="heading">The Value of a <span>Singular Piece </span></h1>
            <h1 className="heading-2">
                At Rangkunchala, every
            painting, mural and sculpture is completely hand-made — art that turns a house into a gallery.
            </h1>
            
        </section>
        <section className="art-piece" style={{paddingTop: "2svh"}}>
                <section className="head">
                    <img src={artOne} alt="" srcset="" />
                </section>
                <h1>UNIQUELY YOURS</h1>
                <p>
                Every
              Rangkunchala work is one of a kind — hand-painted by its artist, it exists nowhere else in the world.
            </p>
            </section>
        <section className="art-piece" style={{borderBottom: "0" , paddingTop: "5svh"}}>
                <section className="head">
                    <img src={art2} alt="" srcset="" />
                </section>
                <h1>TRANSFORM YOUR <br /> SPACE</h1>
            <p>
                From canvas to
              feature wall — our murals and installations turn homes, offices and hotels into immersive experiences.
            </p>
            </section>
        
        </>
    );
}
export default Section3
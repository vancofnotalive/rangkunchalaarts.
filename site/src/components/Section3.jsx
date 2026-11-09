import { useState } from "react";
import artOne from "../assets/art-piece.jpg"
import art2 from "../assets/art-piece2.jpeg"
function Section3() {
    return (
        <>
        <section className="pieces-showcase">

        <h1>THE RANGKUNCHALA DIFFERENCE</h1>
        <h2>The Value of a Singular <br /> Piece</h2>
        <p>At Rangkunchala, every
            painting, mural and sculpture is completely hand-made — art that turns a house into a gallery.</p>
        </section>
        <section className="art-piece">
        <section className="img" >
            <img src={artOne} alt="" srcset="" />
        </section>
            <h1>UNIQUELY YOURS</h1>
            <p>
                Every
              Rangkunchala work is one of a kind — hand-painted by its artist, it exists nowhere else in the world.
            </p>
        </section>
        <section className="art-piece">
        <section className="img" >
            <img src={art2} style={{minWidth: "150%"}} alt="" srcset="" />
        </section>
            <h1>TRANSFORM YOUR SPACE</h1>
            <p>
                From canvas to
              feature wall — our murals and installations turn homes, offices and hotels into immersive experiences.
            </p>
        </section>
        </>
    );
}
export default Section3
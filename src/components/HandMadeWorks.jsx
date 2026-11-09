import art1 from "../assets/hand-art-1.webp"
import art2 from "../assets/hand-art-2.webp"
import art3 from "../assets/hand-art-3.webp"
import art4 from "../assets/hand-art-4.webp"
import ArtPiece  from "./HandMadeArt"
import ReadMore from "./ReadMore"
import { useState } from "react";
function HandMadeWorks() {
    let [buttonState , setButtonState] = useState(false);
    return (<>
    <h1 className="hand-made-heading">
        The Collection of   
        <span> Handmade </span> <br /> Works 
    </h1>
<section className="hand-made-works">


              <ArtPiece
  image={art1}
  title="Untitled"
  details="Abhijeet Ghawale · Semi-Abstract · 34 W x 30 H inches"
  price={40000}
  paddingTop="0svh"
/>
<ArtPiece
  image={art2}
  title="Untitled"
  details="Abhijeet Ghawale · Semi-Abstract · 47 W x 40 H inches"
  price={76000}
  paddingTop="7svh"
/>
     
<ArtPiece
  image={art3}
  title="Untitled"
  details="Abhijeet Ghawale · Semi-Abstract · 42 W x 39 H inches"
  price={76000}
  paddingTop="7svh"
/>
     
    
<ArtPiece
  image={art4}
  title="Untitled"
  details="Abhijeet Ghawale · Semi-Abstract · 38 W x 34 H inches"
  price={40000}
  paddingTop="7svh"
/>
     
    
<section className="more-art-btn">
                    <button>BROWSE THE FULL COLLECTION 
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>

                    </button>
                </section>
                    </section>
                    
    </>)

}
export default HandMadeWorks
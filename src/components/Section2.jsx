import { useState } from "react";
import thumbnailOne from "../assets/BP_4.min.webp"
import sculpturesThumbnail from "../assets/sculptures.jpeg"
import muralsThumbnail from "../assets/murals.jpg"
import artifactThumbnail from "../assets/artifactthumbnail.webp"
function Section2() {
    return (
        <section className="gallery-peak">
           <a href="" className="link">
            <img src={thumbnailOne} alt="" />
           <div className="cover">
            <h1>Paintings</h1>
           </div>
           </a>
           <section className="row">
<section className="column" style={{width: "calc(50% - 0.5svh)"}}>
           <a href="" className="link">
            <img src={muralsThumbnail} alt="" />
           <div className="cover">
            <h1>Murals</h1>
           </div>
           </a>
           <a href="" className="link">
            <img src={artifactThumbnail} alt="" />
           <div className="cover">
            <h1>Artifacts</h1>
           </div>
           </a>
</section>
           <a href="" className="link" style={{width: "calc(50% - 0.5svh)" , height: "40svh"}}>
            <img src={sculpturesThumbnail} alt="" />
           <div className="cover">
            <h1>Sculptures</h1>
           </div>
           </a>
           </section>

        </section>
    )
}
export default Section2
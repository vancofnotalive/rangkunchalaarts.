import { useState } from "react";
import thumbnailOne from "../assets/BP_4.min.webp"
import sculpturesThumbnail from "../assets/sculptures.jpeg"
import muralsThumbnail from "../assets/murals.jpg"
import artifactThumbnail from "../assets/artifactthumbnail.webp"
function Section2() {
    return (
        <section className="gallery-peak">
            <a href="" className="gallery">
                <img src={thumbnailOne} alt="" loading="lazy" />
                <div className="overlay">
                    <h1>Paintings</h1>
                </div>
            </a>
            <a href="" className="gallery">
                <img src={sculpturesThumbnail} loading="lazy" alt="" />
                <div className="overlay">
                    <h1>Sculptures</h1>
                </div>
            </a>
            <a href="" className="gallery">
                <img src={muralsThumbnail} loading="lazy" alt="" />
                <div className="overlay">
                    <h1>Murals</h1>
                </div>
            </a>
            <a href="" className="gallery">
                <img src={artifactThumbnail} loading="lazy" alt="" />
                <div className="overlay">
                    <h1>Artifacts</h1>
                </div>
            </a>
        </section>
    )
}
export default Section2
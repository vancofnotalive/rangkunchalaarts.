import projectOneImg from "../assets/project-statue.jpeg"
import projectTwoImg from "../assets/project-p8.jpg"
import project3Img from "../assets/project-p9.jpg"
import project4Img from "../assets/project-p10.jpg"
import project5Img from "../assets/project-p11.s2.webp"
import project6Img from "../assets/project-p13.jpg"
import { useEffect, useRef } from "react";
import useVisibleInView from "./VisibleInView";
function Section7() {

let commissionRef = useRef(null);
let isCommissionVisible = useVisibleInView(commissionRef); 
if (isCommissionVisible)
    document.documentElement.style.setProperty("--main-bg" , "rgb(252, 249, 240)")
return (<>
    <section className="projects-commission">

    <h1 className="projects-heading">
        <section ref={commissionRef} className="scroll-trigger" style={{height: "1svh" , position: "absolute" , top: "10svh" , width: "10svw"  }}></section>
        Our projects, made  to <br /> <span>
commission
            </span>
    </h1>
    <section className="art-piece" style={{paddingTop: "4svh"}}>
                    <section className="head" style={{width: "80%" , marginLeft: "10%"}}>
                        <img src={projectOneImg} alt="" srcset="" loading="lazy" />
                    </section>
                    <h1 style={{width: "80%" , marginLeft: "10%"}}>Heritage Figure</h1>
                    <p style={{width: "80%" , marginLeft: "10%"}}>
                    Tivolli Hills, Bangalore · 
                     FRP (Fibre Reinforced Plastic) · 10 ft in height
                </p>
                </section>
    <section className="art-piece" style={{paddingTop: "4svh"}}>
                    <section className="head" >
                        <img src={projectTwoImg} alt="" srcset="" />
                    </section>
                    <h1>Classical Figures</h1>
                    <p>
                    Tivolli Hills, Bangalore · FRP (Fibre Reinforced Plastic) · 10 ft &amp; 11 ft in height
                </p>
                </section>
    <section className="art-piece" style={{paddingTop: "4svh"}}>
                    <section className="head">
                        <img src={project3Img} alt="" srcset="" loading="lazy" />
                    </section>
                    <h1>Classical Figures</h1>
                    <p>
                    Tivolli Hills, Bangalore · FRP (Fibre Reinforced Plastic) · 10 ft &amp; 11 ft in height
                </p>
                </section>
    <section className="art-piece" style={{paddingTop: "4svh"}}>
                    <section className="head">
                        <img src={project4Img} alt="" srcset="" loading="lazy" />
                    </section>
                    <h1>Dratrutvya & Ethishree</h1>
                    <p>
                    Go Green Nursery, Panvel · FRP with custom finish · 7 ft each
                </p>
                </section>
    <section className="art-piece" style={{paddingTop: "4svh"}}>
                    <section className="head">
                        <img src={project5Img} alt="" srcset="" loading="lazy" />
                    </section>
                    <h1>Panchmahabutha</h1>
                    <p>
                    Go Green Nursery, Panvel · FRP (Fibre Reinforced Plastic) · 9 ft in height
                </p>
                </section>
    <section className="art-piece last" style={{paddingTop: "4svh"}}>
                    <section className="head">
                        <img src={project6Img} alt="" srcset="" loading="lazy" />
                    </section>
                    <h1>Meditation</h1>
                    <p style={{marginBottom: "5svh"}}>
    Ladnun, Rajasthan · Stainless Steel · 7 ft height · 5 ft width
                </p>
                </section>
                <section className="more-art-btn">
                    <button>VIEW ALL PROJECTS 
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>

                    </button>
                </section>
    </section>
    </>)
}
export default Section7
import { useState } from "react";
import crowArt from "../assets/crow-art.jpg"
import crowArt2 from "../assets/crow-art2.jpg"
import crowArt3 from "../assets/crow-art3.jpg"
import crowArt4 from "../assets/crow-art4.jpg"
import crowArt5 from "../assets/crow-art5.jpg"
import crowArt6 from "../assets/crow-art6.jpg"
import crowArt7 from "../assets/crow-art7.jpg"
import crowArt8 from "../assets/crow-art8.jpg"
function Section5() {
    let zIndex = 99;
    return (<>
    <section className="season-pick-heading">
        
        <h1> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288.2 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 62.1-15-15c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l49 49 0 70.6-61.2-35.3-17.9-66.9c-3.4-12.8-16.6-20.4-29.4-17S95.3 98 98.7 110.8l5.5 20.5-53.7-31C35.2 91.5 15.6 96.7 6.8 112s-3.6 34.9 11.7 43.7l53.7 31-20.5 5.5c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l66.9-17.9 61.2 35.3-61.2 35.3-66.9-17.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l20.5 5.5-53.7 31C3.2 365.1-2 384.7 6.8 400s28.4 20.6 43.7 11.7l53.7-31-5.5 20.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l17.9-66.9 61.2-35.3 0 70.6-49 49c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l15-15 0 62.1c0 17.7 14.3 32 32 32s32-14.3 32-32l0-62.1 15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-49-49 0-70.6 61.2 35.3 17.9 66.9c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-5.5-20.5 53.7 31c15.3 8.8 34.9 3.6 43.7-11.7s3.6-34.9-11.7-43.7l-53.7-31 20.5-5.5c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-66.9 17.9-61.2-35.3 61.2-35.3 66.9 17.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-20.5-5.5 53.7-31c15.3-8.8 20.6-28.4 11.7-43.7s-28.4-20.5-43.7-11.7l-53.7 31 5.5-20.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-17.9 66.9-61.2 35.3 0-70.6 49-49c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-15 15 0-62.1z"/></svg>    
            <span>Season's picks</span>
            
        </h1>
    <div></div>    
    </section>
    <section className="season-arts">

    
    <section className="art-piece" style={{marginTop: "0svh" , zIndex: `+${zIndex}`}}>
            <section className="head" >
                <img loading="lazy" src={crowArt} style={{width: "100%"}} alt="" srcset="" />
            </section>
                <h1>Crow series 5</h1>
                <p>
                    Mahananda Sagare · Contemporary · 24 W x 24 H inches
                </p>
                <h2>₹<span>1,04,000</span></h2>
            </section>
    
    <section className="art-piece" style={{marginTop: "0svh"  , zIndex: `${zIndex -= 1}`}}>
            <section className="head" >
                <img loading="lazy" src={crowArt2} style={{width: "100%"}} alt="" srcset="" />
            </section>
                <h1>Crow series 6</h1>
                <p>
                    Mahananda Sagare · Contemporary · 24 W x 24 H inches
                </p>
                <h2>₹<span>1,04,000</span></h2>
            </section>
    <section className="art-piece" style={{marginTop: "2svh" , zIndex: `${zIndex -= 1}`}}>
            <section className="head" >
                <img loading="lazy" src={crowArt3} style={{width: "100%"}} alt="" srcset="" />
            </section>
                <h1>Crow series 7</h1>
                <p>
                    Mahananda Sagare · Contemporary · 24 W x 24 H inches
                </p>
                <h2>₹<span>1,04,000</span></h2>
            </section>
    <section className="art-piece" style={{marginTop: "2svh" , zIndex: `${zIndex -= 1}`}}>
            <section className="head" >
                <img loading="lazy" src={crowArt4} style={{width: "100%"}} alt="" srcset="" />
            </section>
                <h1>Crow series 8</h1>
                <p>
                    Mahananda Sagare · Contemporary · 24 W x 24 H inches
                </p>
                <h2>₹<span>1,04,000</span></h2>
            </section>
    <section className="art-piece last" style={{marginTop: "2svh" , zIndex: `${zIndex -= 1}`}}>
            <section className="head" >
                <img loading="lazy" src={crowArt5} style={{width: "100%"}} alt="" srcset="" />
            </section>
                <h1>Crow series 9</h1>
                <p>
                    Mahananda Sagare · Contemporary · 24 W x 24 H inches
                </p>
                <h2>₹<span>1,04,000</span></h2>
            </section>
    <section className="more-btn more-btn-real">
                <button>
                    View all Arts
                </button>
            </section>
    <section className="more-btn" >
                <button style={{display: "none"}}>
                    
                </button>
            </section>
            
 


            </section>
    </>);
}
export default Section5
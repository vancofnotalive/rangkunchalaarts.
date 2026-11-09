import { useRef, useState } from "react";
import VisibleInView from "./VisibleInView";
import SetPageBg from "../hooks/SetPageBackground"
function FooterSection() {
    let footerRef = useRef(null);
    let footerEndRef = useRef(null);
    let isFooterVisible = VisibleInView(footerRef)
    let isFooterEndVisible = VisibleInView(footerEndRef)

    if (isFooterVisible) 
        document.documentElement.style.setProperty("--main-bg" , "rgb(252, 249, 240)")
    
    if (isFooterEndVisible) 
        document.documentElement.style.setProperty("--main-bg" , "rgb(255, 255, 255)")
    
    return (<>
    <section className="footer-container" >

    
 <section className="footer" 
 >
    <section ref={footerRef} className="initial-scroll-trigger scroll-trigger" style={{height: "3svh" , position: "absolute" , top: "0" }}></section>
    <section className="spacer" id="heading"></section>
<h1 className="connect-heading">
    Be <span>first</span> to see new works
</h1>
<h2 className="connect-sub-heading">
    Occasional letters when new works arrive — no noise.
</h2>
<section className="connect-email">
    <input type="email" placeholder="Email" name="" id="" />
    <button>Subscribe</button>
</section>

 </section>
 <section className="footer-end">
    <section ref={footerEndRef} className="initial-scroll-trigger scroll-trigger" style={{height: "3svh" , position: "absolute" , top: "15svh"}}></section>
    <section className="spacer"></section>
    <section className="logo">

    </section>
    <h1 className="about" style={{marginTop: "3svh"}}>
        A Mumbai art & design studio, est. 2013 — paintings, bespoke sculptures, murals and custom installations.
    </h1>
    <h1 className="about" style={{marginTop: "2svh"}}>
        We also craft terracotta jewellery and unique home décor.
    </h1>
    <h1 className="about" style={{marginTop: "2svh"}}>
        706, Solus · Hiranandani Estate, Mumbai
    </h1>
<section className="footer-part-container">


<section className="footer-part">
    <h1>VISIT</h1>
    <a href="">Home</a>
    <a href="">Artworks</a>
    <a href="">Out Projects</a>
    <a href="">About us</a>
</section>
<section className="footer-part">
    <h1>CARE</h1>
    <a href="">Terms & conditions</a>
    <a href="">Refund policy</a>
    <a href="">Privacy policy</a>
    <a href="">Track an order</a>
</section>
<section className="footer-part">
    <h1>CONTACT</h1>
    <a href="">+91 98925 94535</a>
    <a href="">info@rangkunchalaarts.com</a>
    <a href="">Instagram</a>
    <a href="">Facebook</a>
    <a href="">Youtube</a>
</section>
</section>

<section className="footer-last">
    ©2026 Rangkunchala Art Gallery. All rights reserved.
</section>
 </section>
 </section>
    </>)
}
export default FooterSection

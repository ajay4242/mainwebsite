import { useEffect } from "react";
import Herosection from "../agencyasset/markup/component/herosection";
import Touch from "../agencyasset/markup/component/touch";
import Choseus from "../agencyasset/markup/component/choseus";
import Header1 from "../agencyasset/markup/Layout/Header1";
import Footer1 from "../agencyasset/markup/Layout/Footer1";
import AboutUs2 from "../element/aboutUs-2";
import Blog2 from "../element/blog-2";
import Clients2 from "../element/clients-2";
import Counter2 from "../element/counter2";
import OurServices2 from "../element/our-services-2";
import Pricing2 from "../element/pricing-2";
import Projects2 from "../element/Projects-2";
import Businesssertvice from "../element/businessservice";
import Officeservice from "../element/officeservice";
import Homeautomationservice from "../element/homeautomationservice";
import Slider2 from "../element/slider-2";
import Testimonial2 from "../element/testimonial-2";
import Footer2 from "./../layout/footer-2";
import Header2 from "./../layout/header-2";
// import "../css/skin/skin-1.css";

function Index2() {
 
  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
      {/* <Header1 /> */}
        <Herosection />
        <OurServices2 />
        <AboutUs2 />
        <Counter2 />
        <Businesssertvice/>
        <Officeservice/>
        <Homeautomationservice/>
        <Choseus/>
        {/* <Projects2 />
        <Pricing2 /> */}
        {/* <Testimonial2 /> */}
        {/* <Blog2 /> */}
        <Clients2 />
        
        <Touch/>
      </div>
      <Footer2/>
    </>
  );
}

export default Index2;

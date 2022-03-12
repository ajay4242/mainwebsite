import React, { Component } from "react";
import HomeOwlSlider from "../element/HomeOwlSlider";
import ImgCarouselContent from "../element/ImgCarouselContent";
// import '../css/plugins.module.css';
// import '../css/style.module.css';
// import '../css/templete.module.css';
// import '../css/skin/skin-1.module.css';

class Herosection extends Component {
  render() {
    return (
      <div className="page-content bg-white">
        {/*  Slider Banner */}
        <div className="owl-slider-banner main-slider">
          <HomeOwlSlider />
          {/*  Service   */}
          <div className="service-box-slide">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ImgCarouselContent />
                </div>
              </div>
            </div>
          </div>
          {/*  Service End  */}
        </div>
        {/*  Slider Banner */}
      </div>
    );
  }
}
export default Herosection;

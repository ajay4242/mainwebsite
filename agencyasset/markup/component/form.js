import React, { Component } from "react";
import FormStyle from "./../Element/FormStyle";

//Images
import bgimg3 from "./../../images/background/bg1.jpg";

class Homepage extends Component {
  render() {
    return (
      <div className="page-wraper">
        <div className="page-content bg-white">
          {/*  Slider Banner */}
          {/*  Slider Banner */}
          <div className="content-block">
            {/* <!-- About Us --> */}
            {/* <!-- About Us End --> */}
            {/* <!-- Our Services --> */}
            {/* <!-- Our Services --> */}
            {/* <!-- Why Chose Us --> */}
            {/* <!-- Why Chose Us End --> */}
            {/* <!-- Our Portfolio --> */}
            {/* <!-- Our Portfolio END --> */}
            {/* <!-- Testimonials --> */}
            {/* <!-- Testimonials END --> */}
            {/* <!-- Get in touch --> */}
            <div
              className="section-full overlay-primary-dark bg-img-fix"
              style={{ backgroundImage: "url(" + bgimg3 + ")" }}
            >
              <FormStyle />
            </div>
            {/* <!-- Get in touch --> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;

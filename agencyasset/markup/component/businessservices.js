import React, { Component } from "react";
import Businessserviceslider from "../../../element/businessserviceslider";


class Businessservices extends Component {
  componentDidMount() {}

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
            <div className="section-full content-inner-2">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h4 className="text-gray-dark m-b10">Our Services</h4>
                  <h2 className="box-title m-tb0">
                  Services for Business Control<span className="bg-primary"></span>
                  </h2>
                  <p>
                  To help our associates grow, innovate, and exceed their business objectives, we create digital products and online experiences based on user expectations and data.
                  </p>
                </div>
              </div>
              <div className="development-box">
                <div className="container">
                  <Businessserviceslider />
                </div>
              </div>
            </div>
            {/* <!-- Our Services --> */}
            {/* <!-- Why Chose Us --> */}
            {/* <!-- Why Chose Us End --> */}
            {/* <!-- Our Portfolio --> */}
            {/* <!-- Our Portfolio END --> */}
            {/* <!-- Testimonials --> */}
            {/* <!-- Testimonials END --> */}
            {/* <!-- Get in touch --> */}
            {/* <!-- Get in touch --> */}
          </div>
        </div>
     </div>
    );
  }
}
export default Businessservices;

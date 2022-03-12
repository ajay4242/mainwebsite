import React, { Component } from "react";
import HomeTab from "./../Element/HomeTab";
import Counter from "./../Element/Counter";

//Images
import bgimg from "./../../images/background/bg1.jpg";


class Homepage extends Component {
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
            {/* <!-- Our Services --> */}
            {/* <!-- Why Chose Us --> */}
            <div
              className="section-full content-inner-1 overlay-primary choseus-tabs  bg-img-fix"
              style={{ backgroundImage: "url(" + bgimg + ")" }}
            >
              <div className="container">
                <div className="section-head text-white text-center">
                  <h2 className="box-title m-tb0">
                    Why Chose Us<span className="bg-primary"></span>
                  </h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over
                  </p>
                </div>
              </div>
              <HomeTab />
              <div className="choses-info text-white">
                <Counter />
              </div>
            </div>
            {/* <!-- Why Chose Us End --> */}
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
export default Homepage;

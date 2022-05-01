import { useState } from 'react';
import Slider from "react-slick";


function TestimonialSlider() {
    const [asd, setAsd] = useState();
    const settings = {
        dots:true,
        arrows:false,
        centerMode:true,
        slidesToShow:3,
        dots:false,
        infinite:true,
        slidesToScroll:1,
        autoplay:true,
		responsive: [
			
			{
			  breakpoint: 1320,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
		]	
	};
const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div
          className="owl-prev"
          onClick={() => asd.slickPrev()}
        >
          <i className="fa fa-arrow-left"></i>
        </div>
        <div
          className="owl-next"
          onClick={() => asd.slickNext()}
        >
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
    return (
        <>
        <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
            <Slider
                ref={c => setAsd(c)}
                {...settings} 
                
            >
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
					
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “They take a collaborative approach to working with clients, and they react quickly to urgent deadlines. We're looking forward to a long, working relationship with them as Sport Elevation grows”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                Aman Rajput
                                </strong>
                                <span className="testimonial-position">
                            
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Techkite's ability to not only understand the requirements of a given brief but to exceed expectations makes them an ideal choice for anybody wanting to engage with clients/supporters.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Rohit Sharma
                                </strong>
                                <span className="testimonial-position">
                                    
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “We quickly developed a positive relationship with techkite's family and I sincerely value the skill and expertise that they possess as a team - it would seem nothing is impossible”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic7.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                  Payal Malik  
                                </strong>
                                <span className="testimonial-position">
                                    
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Their work is reliable and they are great at understanding us as a customer, especially when they helped us to rebrand and develop new promotional material”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic1.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                Anuj Singh
                                </strong>
                                <span className="testimonial-position">
                                    
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            {renderArrows()}
            </div>
        </>
    );
}

export default TestimonialSlider;

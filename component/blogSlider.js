import Link from 'next/link';
import { useState } from 'react';
import Slider from "react-slick";

function BlogSlider() {
    const [asd, setAsd] = useState();
    const settings = {
        dots: false,
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
        draggable: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed:5000,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				
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
            <div className="blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary" style={{"position":"relative"}}>
                <Slider ref={c => setAsd(c)}
                {...settings} 
                >
                    <div
                        className="item wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay="0.2s"
                    >
                        <div className="dlab-blog style-1 bg-white text-center">
                            <div className="dlab-media">
                            <Link href="blog-details-1"><a>                                   <img
                                        src="images/blog/default/thum1.jpg"
                                        alt=""
                                    />
                                </a></Link>
                            </div>
                            <div className="dlab-info">
                                <h5 className="dlab-title">
                                <Link href="blog-details-1"><a>
                                The Increasing Importance of Web Accessibility.
                                        </a></Link>
                                </h5>
                                <p className="m-b0">
                                When businesses look into website accessibility, they
                      usually investigate their front-end development or the
                      visible part of a website design...
                            </p>
                                <div className="dlab-meta meta-bottom">
                                    <ul>
                                        <li className="post-date">
                                            <i className="flaticon-clock m-r10"></i>7
                                        March, 2022
                                    </li>
                                        <li className="post-comment">
                                            <a href="javascript:void(0);">
                                                <i className="flaticon-speech-bubble"></i>
                                                <span>15</span>
                                            </a>
                                        </li>
                                        <li className="post-share">
                                            <i className="flaticon-share"></i>
                                            <ul>
                                                <li>
                                                    <a
                                                        className="fa fa-facebook"
                                                        href="https://www.facebook.com/"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-twitter"
                                                        href="https://twitter.com/login?lang=en"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-linkedin"
                                                        href="https://www.linkedin.com/login"
                                                    ></a>
                                                </li>
                                            </ul>
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
                        <div className="dlab-blog style-1 bg-white text-center">
                            <div className="dlab-media">
                            <Link href="blog-details-1"><a>
                                    <img
                                        src="images/blog/default/thum2.jpg"
                                        alt=""
                                    />
                                </a></Link>
                            </div>
                            <div className="dlab-info">
                                <h5 className="dlab-title">
                                    <Link href="blog-details-2"><a>
                                    Benefits of a smart office solution.
                                        </a></Link>
                                </h5>
                                <p className="m-b0">
                                The smart office is far from a one-trick pony. Quite contrarily, moving to a smarter office will have a positive impact ...
                            </p>
                                <div className="dlab-meta meta-bottom">
                                    <ul>
                                        <li className="post-date">
                                            <i className="flaticon-clock m-r10"></i>1
                                        March, 20222
                                    </li>
                                        <li className="post-comment">
                                            <a href="javascript:void(0);">
                                                <i className="flaticon-speech-bubble"></i>
                                                <span>15</span>
                                            </a>
                                        </li>
                                        <li className="post-share">
                                            <i className="flaticon-share"></i>
                                            <ul>
                                                <li>
                                                    <a
                                                        className="fa fa-facebook"
                                                        href="https://www.facebook.com/"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-twitter"
                                                        href="https://twitter.com/login?lang=en"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-linkedin"
                                                        href="https://www.linkedin.com/login"
                                                    ></a>
                                                </li>
                                            </ul>
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
                        <div className="dlab-blog style-1 bg-white text-center">
                            <div className="dlab-media">
                            <Link href="blog-details-1"><a>
                                    <img
                                        src="images/blog/default/thum1.jpg"
                                        alt=""
                                    />
                                </a></Link>
                            </div>
                            <div className="dlab-info">
                                <h5 className="dlab-title">
                                <Link href="blog-details-1"><a>
                                The Increasing Importance of Web Accessibility.
                                        </a></Link>
                                </h5>
                                <p className="m-b0">
                                When businesses look into website accessibility, they
                      usually investigate their front-end development or the
                      visible part of a website design....
                            </p>
                                <div className="dlab-meta meta-bottom">
                                    <ul>
                                        <li className="post-date">
                                            <i className="flaticon-clock m-r10"></i>7
                                        March, 2020
                                    </li>
                                        <li className="post-comment">
                                            <a href="javascript:void(0);">
                                                <i className="flaticon-speech-bubble"></i>
                                                <span>15</span>
                                            </a>
                                        </li>
                                        <li className="post-share">
                                            <i className="flaticon-share"></i>
                                            <ul>
                                                <li>
                                                    <a
                                                        className="fa fa-facebook"
                                                        href="https://www.facebook.com/"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-twitter"
                                                        href="https://twitter.com/login?lang=en"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-linkedin"
                                                        href="https://www.linkedin.com/login"
                                                    ></a>
                                                </li>
                                            </ul>
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
                        <div className="dlab-blog style-1 bg-white text-center">
                            <div className="dlab-media">
                            <Link href="blog-details-3"><a>
                                    <img
                                        src="images/blog/blog-3/blog-3.jpg"
                                        alt=""
                                    />
                                </a></Link>
                            </div>
                            <div className="dlab-info">
                                <h5 className="dlab-title">
                                <Link href="blog-details-3"><a>
                                Why Smarter Homes are the Future..
                                        </a></Link>
                                </h5>
                                <p className="m-b0">
                                Technology has a vast influence on the way things are
                      being done and humans have been constantly adapting to it...
                            </p>
                                <div className="dlab-meta meta-bottom">
                                    <ul>
                                        <li className="post-date">
                                            <i className="flaticon-clock m-r10"></i>7 February, 2022
                                    </li>
                                        <li className="post-comment">
                                            <a href="javascript:void(0);">
                                                <i className="flaticon-speech-bubble"></i>
                                                <span>15</span>
                                            </a>
                                        </li>
                                        <li className="post-share">
                                            <i className="flaticon-share"></i>
                                            <ul>
                                                <li>
                                                    <a
                                                        className="fa fa-facebook"
                                                        href="https://www.facebook.com/"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-twitter"
                                                        href="https://twitter.com/login?lang=en"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-linkedin"
                                                        href="https://www.linkedin.com/login"
                                                    ></a>
                                                </li>
                                            </ul>
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

export default BlogSlider;

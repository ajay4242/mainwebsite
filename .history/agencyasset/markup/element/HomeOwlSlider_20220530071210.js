import React, { Component } from 'react';
import img from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";

// import Slider1 from '../images/main-slider/slide1.jpg';
// import Slider2 from '../images/main-slider/slide2.jpg';
// import Slider3 from '../images/main-slider/slide3.jpg';


function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className="owl-nav">
			<div className="owl-next la la-angle-right" onClick={onClick} />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="owl-nav">
			<div className=" owl-prev la la-angle-left" onClick={onClick} style={{ zIndex: 1 }} />
		</div>
	);
}

class HomeOwlSlider extends Component {

	render() {
		var settings = {
			arrows: true,
			dots: true,
			slidesToShow: 1,
			infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,

					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 1,

					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,

					}
				}
			]
		};
		return (

			<Slider className="owl-slider owl-carousel owl-theme owl-none" {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img"><img src="images/main-slider/slide1.jpg" className="w-100" alt="" /></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">Cantrol your  businesss with Techkite and boost productivity.</h2>
								<p>We have more then 100 Decentralize-Apps to manage your Home, Office and Business. Our all D-Apps provide a advance Intelligen Tchnology with embeded AI and Machine-learning.</p>
								<Link href="contact" >
									<a className="site-button m-r10  white button-lg rounded-xl gradient shadow">Get Started</a>
								</Link>
								<Link href="https://www.business.techkite.org" >
									<a className="site-button outline outline-2 button-lg rounded-xl">How It Work</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src="images/main-slider/slide2.jpg" className="w-100" alt="" /></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">Regulate your office with Techkite and accelerate capacity.</h2>
								<p>We have more then 100 Decentralize-Apps to manage your Home, Office and Business. Our all D-Apps provide a advance Intelligen Tchnology with embeded AI and Machine-learning</p>
								<Link href="/" >
									<a className="site-button m-r10 white button-lg rounded-xl gradient shadow">Get Started</a>
								</Link>
								<Link href="https://www.office.techkite.org" >
									<a className="site-button outline outline-2 button-lg rounded-xl ">How It Work</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src="images/main-slider/slide3.jpg" className="w-100" alt="" /></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">Automate your  Home With Openkite And Facilitate the Lives</h2>
								<p>We have more then 200 Decentralize-Apps to manage your Home, Office and Business. Our all D-Apps provide a advance Intelligen Tchnology with embeded AI and Machine-learning.</p>
								<Link href="/" >
									<a className="site-button m-r10 white button-lg rounded-xl gradient shadow">Get Started</a>
								</Link>
								<Link href="https://www.home.techkite.org" >
									<a className="site-button outline outline-2 button-lg rounded-xl">How It Work</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Slider>
		)

	}

}

export default HomeOwlSlider;
// We have more then 100 Decentralize-Apps to manage your Home ,Office , Business</br>Our all D-Apps provide a advance Intelligen Tchnology with embeded AI and Machine-learning
// Automate your  HOME With <strong><i>Openkite.</i></strong> And Facilitate the Lives
// Cantrol your  businesss with Techkite and boost productivity
// Aegulate your OFFICE with techkite and accelerate capacity 

{/* <Link href="/" >
<a className="site-button m-r10 white button-lg">Get Started</a>
</Link>
<Link href="/" >
<a  className="site-button outline outline-2 button-lg">How It Work</a>
</Link> */}
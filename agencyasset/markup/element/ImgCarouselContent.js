import React, {Component} from 'react';
import Slider from "react-slick";


const contentBlog =[
	{icons: <i className="flaticon-operation" />, title: 'Automation', para: 'Automate daily tasks',},
	{icons: <i className="flaticon-rocket-ship" />, title: 'Cloudservice', para: 'Fill all your cloud need',},
	{icons: <i className="flaticon-internet" />, title: 'Cybersecurity', para: 'Secure your data',},
	{icons: <i className="flaticon-marketing" />, title: 'Marketing', para: 'Grow your business',},
	{icons: <i className="flaticon-search" />, title: 'SEO', para: 'Rank you on google',},
	{icons: <i className="flaticon-computer" />, title: 'Media', para: 'Print & DIgital media',},
	{icons: <i className="flaticon-developement" />, title: 'Developement', para: 'Web & Mobile app',},
	
]

class ImgCarouselContent extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,	
			speed: 3000,
			navSpeed: 3000,	
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<>
				<Slider className="img-carousel-content owl-carousel text-center text-white owl-none " {...settings}>
				{contentBlog.map((item, index)=>(
					<div className="item p-3" key={index}>
						<div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
							<div className="icon-content">
								<h5 className="dlab-tilte">
									<span className="icon-sm">{item.icons}</span> 
									{item.title}
								</h5>
								<p>{item.para}</p>
							</div>
						</div>
					</div>
				))}	
				</Slider>
			</>
		)
	}
	
}

export default ImgCarouselContent;
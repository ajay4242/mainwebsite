import Link from "next/link";

function AboutUs_2() {
    return (
      <>
        {/* <!-- About us --> */}
		<section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="images/about/pic1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">ABOUT US</h6>
							<h2 className="title m-b20">We Are Crative People With Big Dreams To Build Your Life Better</h2>
							<p>Our Vision is to make daily life tasks smooth and simple with the help AI base advance technology. Access to cutting-edge, 21st century technology allows our team to conduct the most rigorous research available. .</p>
						</div>
						<ul className="list-check primary m-b30">
							<li>we loves what we do.</li>
							<li>We’re best cost change-makers, in a complex world..</li>
							<li>We empower our team and put people above all.</li>
							<li>We drivem experiences for brands with purpose.</li>
						</ul>
						<Link href="about-us-2"><a className="btn btn-primary rounded-xl gradient">Learn More</a></Link>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default AboutUs_2;
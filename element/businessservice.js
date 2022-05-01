import {useState} from 'react';

function Businesssertvice() {
    const [open, setOpen] = useState("p2")
    return (
      <>
        {/* <!-- Service --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row icon-wraper-1">
					<div className="col-lg-4 col-md-6">
						<div className="section-head style-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
							<h6 className="sub-title text-primary bgl-primary m-b15">OUR SERVICES</h6>
							<h2 className="title m-t10">our Services For Business Cantrol</h2>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p1" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-office"></i>
								</a>  */}
								<a href="https://business.techkite.org/services/" className="icon-cell">
								      <img src="icon/business/strategic.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Strategy & Research</h4>
								<p>All of our solutions start with market research. And all of our work is designed to improve and work with the business operations. It means that we are always attempting new things and developing new ones by focusing on a creative vision.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-paper-plane"></i>
								</a>  */}
								<a href="https://business.techkite.org/services/" className="icon-cell">
								      <img src="icon/business/01.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
								
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">ERP Development</h4>
								<p> Get an Artificial-intelligence-based customizable, suitable fully-integrated ERP solution to Revise and optimize your business processes, and reduce your time and effort with our ERP solution.<br></br><br></br></p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p3" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-confetti"></i>
								</a>  */}
								<a href="https://business.techkite.org/services/" className="icon-cell">
								      <img src="icon/business/04.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Web Solution</h4>
								<p>Get an awesome-looking website/app for your business. We assist Startups, Mid-Size, and Enterprise organizations in getting their digital products-completed effectively, on time, and within budget.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p4" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-line-graph"></i>
								</a>  */}
								<a href="https://business.techkite.org/services/" className="icon-cell">
								      <img src="icon/business/09.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">SEO & Marketing</h4>
								<p>Techkite is committed to offering 360˚ digital marketing services focused on getting results that drive you to attain a reputed market position and achieve many more milestones.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p5" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-promotion"></i>
								</a>  */}
								<a href="https://business.techkite.org/services/" className="icon-cell">
								      <img src="icon/business/06.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Print And Digital Media </h4>
								<p>GET creative graphic designs and premium print design services, reach into new markets, expand your lead generation activities and improve your brand recognition.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Businesssertvice;
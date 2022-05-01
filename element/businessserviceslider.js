import { useState } from "react";

function AllServices2() {
	const [open, setOpen] = useState("p2")
	return (
		<>
		
		{/* <!-- Service --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
						<div className={`${open === "p1" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius bgl-primary"> 
							    <a href="https://business.techkite.org/services/" className="icon-cell">
								   <img src="icon/business/01.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-website"></i>
								</a>  */}
							</div>
							<a href="https://business.techkite.org/services/">
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">ERP Software Development</h4>
								{/* <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p> */}
							</div>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<a href="https://business.techkite.org/services/" className="icon-cell">
								     <img src="icon/business/02.png" style={{ width: '50px', height:'50px' }} alt=""/>	
								</a> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-website"></i>
								</a>  */}
							</div>
							<a href="https://business.techkite.org/services/">
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">CRM Software Development</h4>
								{/* <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p> */}
							</div>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className={`${open === "p3" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius bgl-primary"> 
							    <a href="https://business.techkite.org/services/" className="icon-cell">
								     <img src="icon/business/03.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-pie-charts"></i>
								</a>  */}
							</div>
							<a href="https://business.techkite.org/services/">
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">E-Commerce Development</h4>
								{/* <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p> */}
							</div>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className={`${open === "p4" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx-sm radius bgl-primary"> 
							    <a href="https://business.techkite.org/services/" className="icon-cell">
								    <img src="icon/business/04.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-dollar"></i>
								</a>  */}
							</div>
							<a href="https://business.techkite.org/services/">
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Website <br></br>Developments</h4>
								{/* <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p> */}
							</div>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
						<div className={`${open === "p5" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx-sm radius bgl-primary"> 
							   <a href="https://business.techkite.org/services/" className="icon-cell">
							           <img src="icon/business/05.png" style={{ width: '50px', height:'50px' }} alt=""/>	
								</a> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-line-graph"></i>
								</a>  */}
							</div>
							<a href="https://business.techkite.org/services/">
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Mobile App <br></br> Development</h4>
								{/* <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p> */}
							</div>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p6" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-sm radius bgl-primary"> 
							    <a href="https://business.techkite.org/services/" className="icon-cell">
								          <img src="icon/business/06.png" style={{ width: '50px', height:'50px' }} alt=""/>	
								</a> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
							</div>
							<a href="https://business.techkite.org/services/">
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Graphic <br></br>Design</h4>
								{/* <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p> */}
							</div>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p7" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-sm radius bgl-primary"> 
							    <a href="https://business.techkite.org/services/" className="icon-cell">
								    <img src="icon/business/07.png" style={{ width: '50px', height:'50px' }} alt=""/>	
								</a> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
							</div>
							<a href="https://business.techkite.org/services/">
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Digital<br></br>Advertising</h4>
								{/* <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p> */}
							</div>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p8" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-sm radius bgl-primary"> 
							    <a href="https://business.techkite.org/services/" className="icon-cell">
								       <img src="icon/business/08.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
							</div>
							<a href="https://business.techkite.org/services/">
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Social Media Management</h4>
								{/* <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p> */}
							</div>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p9" ? "icon-bx-wraper style-3 box-hover m-b30 active" : "icon-bx-wraper style-3 box-hover m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-sm radius bgl-primary"> 
							    <a href="https://business.techkite.org/services/" className="icon-cell">
								      <img src="icon/business/09.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
							</div>
							<a href="https://business.techkite.org/services/">
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">SEO<br></br>SMO</h4>
								{/* <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis venenatis.</p> */}
							</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default AllServices2;
// ERP Software
// CRM Software
// E-Commerce Development
// Website Developments
// Mobile App Development
// Graphic Design
// Digital Advertising
// Social Media Management
// SEOSMO
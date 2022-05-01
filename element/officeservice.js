import {useState} from 'react';

function Officeservice() {
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
							<h2 className="title m-t10">our Services For Office Management</h2>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p1" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-coding"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								      <img src="icon/office/1.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Digital Workplace</h4>
								<p>Get a digital workspace that you can personalize and customize. Manage your online tools, websites, documents, and files from a single, easy-to-use space. Save you time, and start a day with productivity.<br></br><br></br></p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-pie-charts"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								      <img src="icon/office/united.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Secure Content Collaboration</h4>
								<p>Share and collaborate on documents, send and receive emails, manage your calendar, and conduct video conversations without worrying about privacy violations..<br></br><br></br></p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p3" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="glyph-icon flaticon-sketch"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								      <img src="icon/office/folders.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Document Management</h4>
								<p>Get powerful online office suite with collaborative editing, which supports all major document, spreadsheet and presentation file formats and works in all modern browsers.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p4" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-line-graph"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								      <img src="icon/office/data-synchronization.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Secure File Share & Sync</h4>
								<p>Get easy access to their files, photos, and documents to work and can share and collaborate with team members, customers, and partners..</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p5" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-promotion"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								      <img src="icon/office/01.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Project Management </h4>
								<p>The comprehensive project management tool allows you to manage and invoice projects. Keep track of how much money you spend and what time you spend on projects., and charge your customers accordingly. Provide the ability to delegate tasks to many staff members and track time logged by a project member.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Officeservice;
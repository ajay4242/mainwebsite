import { useState } from "react";

function AllServices() {
	const [open, setOpen] = useState("p2")
	return (
		<>
			{/* <!-- Service --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
					<div className={`${open === "p1" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-md radius bg-yellow shadow-yellow"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-office"></i>
								</a>  */}
								  <a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/01.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Project <br></br>Managemen</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className={`${open === "p2" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-md radius bg-red shadow-red"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-website"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/02.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Project<br></br> Roadmap</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className={`${open === "p3" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-md radius bg-green shadow-green"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-pie-charts"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/03.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Account<br></br> Planning</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className={`${open === "p4" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx-md radius bg-skyblue shadow-skyblue"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-dollar"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/04.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Accounting and <br></br>Bookkeeping</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
						<div className={`${open === "p5" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx-md radius bg-orange shadow-orange"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-line-graph"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/05.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title"> Business Process<br></br> Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p6" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/06.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Invoice <br></br>Creation</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p7" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/07.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Estimates<br></br> Creation</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p8" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/08.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title"> Proposals<br></br> Creation</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p9" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/09.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Lead<br></br> Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p10" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/10.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title"> HR (Human Resources)<br></br> Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p11" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/11.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title"> HR (Human Resources)<br></br>Payroll</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p12" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/12.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title"> HR (Human Resources)<br></br> Records</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p13" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/13.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Staff Outsourcing &<br></br> Resources Booking</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p14" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/14.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Timesheets and<br></br> Leave Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p15" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/15.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title"> Staff Tasks<br></br> Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p16" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/16.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Record <br></br>Expenses</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p17" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/17.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Record<br></br> Payments</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p18" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/18.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Awesome Support<br></br> System</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p19" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/19.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Contracts <br></br>Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p20" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/20.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Send Surveys To<br></br> Leads And Customers</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p21" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/21.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Calendar <br></br> Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p22" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/22.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Newsfeed <br></br> Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p23" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/23.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Goals <br></br>Tracking</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p24" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/24.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Simple Reports<br></br> Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p25" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/25.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Equipment<br></br> Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p26" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/26.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title"> Manufacturing<br></br> Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p27" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/27.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Supplier <br></br>Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p28" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/28.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Inventory <br></br>Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p29" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/29.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Purchase <br></br>Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p30" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/30.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Recruitment <br></br>Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p31" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/31.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Products and<br></br> services</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p32" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/32.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Appointment<br></br> Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p33" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								{/* <a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a>  */}
								<a href="https://office.techkite.org/services/" className="icon-cell">
								        <img src="icon/office/33.png" style={{ width: '60px', height:'60px' }} alt=""/>	
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Assets <br></br>Management</h4>
								{/* <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default AllServices;
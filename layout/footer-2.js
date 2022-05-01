
import Link from "next/link";
function Footer2() {
  return (
    <>
    {/* <!-- Footer --> */}
    <footer className="site-footer style-2" id="footer" style={{"backgroundImage":"url(images/background/bg4.png)"}}>
		<div className="container">
			<div className="dlab-subscribe style-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<h2 className="title">Subscribe To Our Newsletter For Latest Update</h2>
					</div>
					<div className="col-lg-5">
						<form className="dzSubscribe" action="script/mailchamp.php" method="post">
							<div className="dzSubscribeMsg"></div>
							<div className="form-group">
								<div className="input-group">
									<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email Address"/>
									<div className="input-group-addon">
										<button name="submit" value="Submit" type="submit" className="btn btn-primary gradient fa fa-paper-plane-o"></button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-top">
            <div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<div className="footer-logo">
								<a href="/"><img src="images/logo-techkite.png" alt=""/></a> 
							</div>
							<div className="widget widget_getintuch">
								<ul>
									<li>
									     <i  className="ti-mobile"></i>
										<span style={{ marginLeft: '50px' }}>+91 9627424139<br/>+91 9627424139</span> 
									</li>
									<li>
										<i className="fa fa-envelope gradient"></i> 
										<span style={{ marginLeft: '50px' }}>info@techkite.org <br/>help@techkite.org</span>
									</li>
									<li>
									<i className="ti-location-pin"></i>
										<span style={{ marginLeft: '50px' }}>Tangroli Noorpur ,Dist Bijnor (Utter Prdesh), INDIA</span>
									</li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our links</h5>
							<ul>
								<li><a href="https://office.techkite.org/">Home</a></li>
								<li><a href="https://office.techkite.org/about/">About Us</a></li>
								<li><a href="https://office.techkite.org/services/">Services</a></li>
								<li><a href="https://office.techkite.org/blog/">Blog</a></li>
								<li><a href="https://office.techkite.org/quote/">Quote</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our Services</h5>
							<ul>
								<li><a href="https://home.techkite.org/">Home Automation</a></li>
								<li><a href="https://office.techkite.org/">Office Management</a></li>
								<li><a href="https://business.techkite.org/">Business Control</a></li>
								<li><a href="https://office.techkite.org/services/">Ofice Services</a></li>
								<li><a href="https://business.techkite.org/services/">Business Services</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services">
						   <h5 className="footer-title">Other links</h5>
							<ul>
								<li><a href="https://office.techkite.org/contact-us/">Contect For Office</a></li>
								<li><a href="https://business.techkite.org/contact-us/">Contect For Business </a></li>
								<li><a href="https://home.techkite.org/contact-us/">Contect For Home</a></li>
								<li><a href="https://techkite.org/">Terms & Conditions</a></li>
								<li><a href="https://techkite.org/">Support </a></li>
							</ul>
						</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7 text-left"> 
						<span className="copyright-text">Copyright © 2021 <a href="https://techkite.org/" target="_blank">Techkite</a>. All rights reserved.</span> 
					</div>
					<div className="col-lg-6 col-md-5 text-right"> 
						<div >
							{/* <ul>
								<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
								<li><a className="fa fa-instagram" href="https://www.instagram.com/"></a></li>
								<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
							</ul> */}
							   <ul className="list-inline m-a0">
                                            <li><Link href="/" className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link href="/" className="site-button google-plus circle mr-1"><i className="fa fa-google-plus"></i></Link></li>
                                            <li><Link href="/" className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
                                            <li><Link href="/" className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></Link></li>
                                            <li><Link href="/" className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
                                        </ul>
						</div>
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --></footer> */}
    </>
  )
}

export default Footer2;
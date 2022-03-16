import Link from 'next/link';
import { useState } from 'react';

function Header2() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
        <>
            <header className="site-header mo-left header-transparent">
                {/* <div className="container">
                    <div className="top-bar">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li>
                                        <i className="la la-envelope"></i>{" "}
                                        info@example.com
                                    </li>
                                    <li>
                                        <i className="la la-phone-volume"></i> +91
                                        987-654-3210
                                    </li>
                                </ul>
                            </div>
                            <div className="dlab-topbar-right">
                                <ul className="dlab-social-icon">
                                    <li>
                                        <a
                                            className="fa fa-facebook"
                                            href="https://en-gb.facebook.com/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-instagram"
                                            href="https://www.instagram.com/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-twitter"
                                            href="https://twitter.com/login?lang=en"
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                  <div className="top-bar">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="dlab-topbar-left">
                  <ul>
                    <li>
                      <i className="flaticon-phone-call m-r5"></i>+919627424139
                    </li>
                    <li><i className="ti-location-pin m-r5"></i> </li>
                  </ul>
                </div>
                <div className="dlab-topbar-right">
                  <ul>
                    <li><i className="ti-skype m-r5"></i> Agency.software</li>
                    <li>
                      <i className="ti-email m-r5"></i> info@techkite.org
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
                {/* <!-- Main Header --> */}
                <div style={{ marginTop: '-25px' }} className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link href="/">
                                    <a>
                                        <img className="custom-logo-white" src="images/logo-techkite.png" alt="" />
                                        <img className="custom-logo" src="images/logo-techkite.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${
                                    show ? "open" : ""
                                }`}
                                onClick={() => setShow(!show)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                <Link href="getaquote">
                                        <a className="btn btn-primary btn-corner  gradient ">Get A Quote</a>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={`header-nav navbar-collapse collapse justify-content-end ${
                                    show ? "show" : ""
                                }`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header">
                                    <Link href="/">
                                        <a>
                                            <img src="images/logo-techkite.png" alt="" />
                                        </a>
                                    </Link>
                                </div>

                                <ul style={{ marginTop: '13px' }} className="nav ajay navbar-nav navbar">
                                    <li
                                        className={`${
                                            open === "about" ? "open" : ""
                                        }`}
                                    >
                                        <a onClick={() => setOpen("about")}>
                                        <span className="ti-home"></span>
                                            <i className="fa fa-chevron-down"></i>
                                        </a>
                                        <ul className="sub-menu">
											<li><Link href="/about-us-2"><a>Business</a></Link></li>
											<li><Link href="/faq-2"><a>Office</a></Link></li>
											<li><Link href="/pricing-table-2"><a>Home</a></Link></li>
                                        </ul>
                                    </li>
                                    
									<li><Link href="/services"><a>Services</a></Link></li>
									<li><Link href="/blog"><a>Blog</a></Link></li>
									<li><Link href="/about"><a>About</a></Link></li>
									<li><Link href="/contact"><a>contact</a></Link></li>
									
                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>
                                        <Link href="https://en-gb.facebook.com/">
                                            <a className="fa fa-facebook"></a>
                                        </Link>
                                        <Link href="https://twitter.com/login?lang=en">
                                            <a className="fa fa-twitter"></a>
                                        </Link>
                                        <Link href="https://www.linkedin.com/login">
                                            <a className="fa fa-linkedin"></a>
                                        </Link>
                                        <Link href="https://www.instagram.com/">
                                            <a className="fa fa-instagram"></a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    );
}

export default Header2;

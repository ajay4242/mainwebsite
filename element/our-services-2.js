import { useState } from "react";
import Link from "next/dist/client/link";

function OurServices2() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Services --> */}
      <section
        className="content-inner-2"
        style={{
          backgroundImage: "url(images/background/bg2.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head style-3 mb-4">
                <h6 className="sub-title text-primary bgl-primary m-b15">
                  WHAT WE PROVIDE
                </h6>
                <h2 className="title">
                  Simplify life with the power of artificial intelligence and machine learning
                </h2>
              </div>
              <p>
                Handle your Business, Office, Houshold task from anywhere any
                time.
                <br />
                We improve your quality of life with artificial intelligence and machine learning embedded decentralized apps.
              </p>
              <p className="m-b30">
                Automate your processes now with our solution.Faster processes and shorter client wait times – that's the brilliance of AI-powered automation.Use AI for insight into content and processes. Prioritize tasks to make better decisions.
              </p>
            </div>
            <div className="col-lg-7">
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active"
                    : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx-sm radius">
                  {/* <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-idea"></i>
                  </a> */}
                  <a href="https://business.techkite.org/" className="icon-cell">
								      <img src="icon/about/growth.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
                </div>
                <div className="wraper-effect"></div>
                <Link href="https://www.business.techkite.org">
                  <a style={{ color: "black" }}>
                    <div className="icon-content">
                      <h4 className="dlab-title m-b15">Business Scale Up</h4>
                      <p>
                        We forge digital products and online experiences rooted in user expectations and data to ultimately help our partners grow, innovate, and exceed their business objectives.
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight active"
                    : "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx-sm radius">
                  {/* <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-coding"></i>
                  </a> */}
                  <a href="https://office.techkite.org/" className="icon-cell">
								      <img src="icon/about/office-desk.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <Link href="https://www.office.techkite.org">
                    <a style={{ color: "black" }}>
                      <h4 className="dlab-title m-b15">Office Management</h4>
                      <p>
                      Revise and optimize your Office work processes, and reduce your time and effort with our cross-functional solution.
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active"
                    : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-sm radius">
                  {/* <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-rocket"></i>
                  </a> */}
                  <a href="https://home.techkite.org/" className="icon-cell">
								      <img src="icon/about/home.png" style={{ width: '50px', height:'50px' }} alt=""/>
								</a>
                </div>
                <div className="wraper-effect"></div>
                <Link href="https://www.home.techkite.org">
                  <a style={{ color: "black" }}>
                    <div className="icon-content">
                      <h4 className="dlab-title m-b15">Home Automaction</h4>
                      <p>
                      We provide Sustainable energy solutions for your home. And allows you to operate, schedule, and monitor your appliances from anywhere.
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices2;

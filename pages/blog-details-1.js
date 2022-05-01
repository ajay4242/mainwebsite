import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";
import Link from "next/link";
import Head from 'next/head';

function BlogDetails2() {
  return (
    <>
    <Head>
        <title>The Increasing Importance of Web Accessibility</title>
        {/* <meta property="og:title" content="My page title" key="title" /> */}
      </Head>
      <Header2 />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>The Increasing Importance of Web Accessibility</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Blog Large --> */}
        <section
          className="content-inner bg-img-fix"
          style={{
            backgroundImage: "url(images/background/bg2.png)",
            backgroundSize: "contain",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                {/* <!-- blog start --> */}
                <div className="dlab-blog blog-single style-2">
                  <div className="dlab-media rounded-md shadow">
                    <img src="images/blog/default/thum1.jpg" alt="" />
                  </div>
                  <div className="dlab-meta m-t30">
                    <ul>
                      <li className="post-date">
                        <i className="flaticon-clock m-r10"></i>7 March, 2022
                      </li>
                      <li className="post-author">
                        <i className="flaticon-user m-r10"></i>Aryan Tomer
                      </li>
                      <li className="post-comment">
                        <a href="javascript:void(0);">
                          <i className="flaticon-speech-bubble"></i>
                          <span>15</span>
                        </a>
                      </li>
                      <li className="post-share">
                        <i className="flaticon-share"></i>
                        <ul>
                          <li>
                            <a
                              className="fa fa-facebook"
                              href="https://www.facebook.com/"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="fa fa-twitter"
                              href="https://ads.twitter.com/login"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="fa fa-linkedin"
                              href="https://www.linkedin.com/login"
                            ></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <h4 className="dlab-title">
                    The Increasing Importance of Web Accessibility.
                  </h4>
                  <div className="dlab-post-text">
                    <p>
                      Today, web accessibility is key to creating a more
                      inclusive society by eliminating barriers that restrict a
                      person's access to jobs, housing, civic participation and
                      much more.
                    </p>
                    <p>
                      The truth of the matter is that web accessibility often
                      goes unnoticed which makes it more difficult for people
                      with disabilities (1 out of 5 Americans and 1 out of 6 EU
                      citizens) to gain equal access to the online world and its
                      rich bounty of resources.
                    </p>
                    <blockquote className="blockquote style-2">
                      <h4 className="blockquote-content">
                        Web accessibility or digital accessibility is the
                        ability for an app, website, or software to be
                        accessible to people who have a disability that
                        affecting their vision, hearing, cognition, and/or motor
                        functions.
                      </h4>
                    </blockquote>
                    <p>
                      To help people with disabilities, there are several kinds
                      of assistive technology tools (software and hardware) that
                      make it easier to navigate a website and interact with its
                      content. Some examples of these tools include screen
                      readers, alternative keyboards and/or trackpads, screen
                      magnifiers, eye tracking tools, and more.
                    </p>
                    <h4 className="m-b30">
                      Why Web Accessibility is Important?
                    </h4>
                    <img
                      className="alignleft rounded-md shadow"
                      width="300"
                      src="images/blog/blog-grid/pic1.jpg"
                      alt=""
                    />
                    <p>
                      Web accessibility is not only ethical but also a sound
                      business practice as well as a legal obligation.
                      <br />
                      Economically, ignoring the disabled community means
                      ignoring millions of potential customers with billions in
                      purchasing power. In the India alone, the purchasing power
                      of assistive-technology Internet users is worth more than
                      $135 billion.
                    </p>
                    <p>
                      In many places, web accessibility protected under various
                      laws. In the U.S., the Workforce Rehabilitation Act of
                      1973 requires that all “electronic and information
                      technology developed, procured, maintained, or used by the
                      federal government be accessible to people with
                      disabilities
                    </p>
                    <p>
                      Also, the Twenty-First Century Communications and Video
                      Accessibility Act requires that advanced communications
                      services and products to be accessible by people with
                      disabilities. Although many European states have their own
                      national laws outlining the protections for web
                      accessibility, the European Union too protects digital
                      accessibility under the European Charter of Fundamental
                      Rights. As a result, web accessibility is an important
                      requirement that all need to meet.
                    </p>
                    <h4 className="m-b30">ACCESSIBILITY BENEFITS</h4>
                    <p>
                      Users benefit greatly from designs that are easier to see.
                      A clean and clear visual presentation helps everyone make
                      sense of your information and the functionality of a
                      webspace. Besides assisting impaired users, accessibility
                      guidelines are also helpful in other situations.
                    </p>
                    <p>
                      Web accessibility is a great SEO booster. It helps
                      Google’s algorithms understand your content. After all,
                      Google is often referred to as “the largest blind user on
                      the internet”.
                      <br />
                      Optimizing your accessibility keeps your information lean
                      and fast loading. This will benefit users surfing on their
                      phones that have turned images off and visitors looking to
                      save bandwidth.
                      <br />
                      Optimizing user accessibility also benefits non-native
                      English speakers. By simplifying the language and message
                      of your webspace you make the information easier to
                      understand by foreign visitors.
                    </p>
                  </div>
                  <div className="dlab-meta meta-bottom border-top">
                    <div className="post-tags">
                      Tags:
                      <a href="javascript:void(0);">#Child </a> ,
                      <a href="javascript:void(0);">#Eduction </a> ,
                      <a href="javascript:void(0);">#Money </a> ,
                      <a href="javascript:void(0);">#Resturent </a>
                    </div>
                    <div className="dlab-social-icon primary-light">
                      <ul>
                        <li>
                          <a
                            className="fa fa-facebook"
                            href="https://www.facebook.com/"
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
                            href="https://ads.twitter.com/login"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row extra-blog style-2">
                  <div className="col-lg-12 m-b30">
                    <h2 className="blog-title">Related Blogs</h2>
                    <div className="dlab-separator style-1"></div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="dlab-blog style-1 m-b30">
                      <div className="dlab-info">
                        <div className="dlab-meta">
                          <ul>
                            <li className="post-date">
                              <i className="flaticon-clock m-r10"></i>5 March,
                              2022
                            </li>
                            <li className="post-comment">
                              <a href="javascript:void(0);">
                                <i className="flaticon-speech-bubble"></i>
                                <span>15</span>
                              </a>
                            </li>
                            <li className="post-share">
                              <i className="flaticon-share"></i>
                              <ul>
                                <li>
                                  <a
                                    className="fa fa-facebook"
                                    href="https://www.facebook.com/"
                                  ></a>
                                </li>
                                <li>
                                  <a
                                    className="fa fa-twitter"
                                    href="https://ads.twitter.com/login"
                                  ></a>
                                </li>
                                <li>
                                  <a
                                    className="fa fa-linkedin"
                                    href="https://in.linkedin.com/"
                                  ></a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <h5 className="dlab-title">
                          <a href="/blog-details-1">
                            The Increasing Importance of Web Accessibility
                          </a>
                        </h5>
                        <p className="m-b0">
                          Today, web accessibility is key to creating a more
                          inclusive society by eliminating barriers that
                          restrict a person's and much more.
                        </p>
                      </div>
                      <div className="dlab-media">
                        <a href="/blog-details-2">
                          <img src="images/blog/blog-grid/pic1.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="dlab-blog style-1 m-b30">
                      <div className="dlab-info">
                        <div className="dlab-meta">
                          <ul>
                            <li className="post-date">
                              <i className="flaticon-clock m-r10"></i>7 March,
                              2020
                            </li>
                            <li className="post-comment">
                              <a href="javascript:void(0);">
                                <i className="flaticon-speech-bubble"></i>
                                <span>15</span>
                              </a>
                            </li>
                            <li className="post-share">
                              <i className="flaticon-share"></i>
                              <ul>
                                <li>
                                  <a
                                    className="fa fa-facebook"
                                    href="https://www.facebook.com/"
                                  ></a>
                                </li>
                                <li>
                                  <a
                                    className="fa fa-twitter"
                                    href="https://ads.twitter.com/login"
                                  ></a>
                                </li>
                                <li>
                                  <a
                                    className="fa fa-linkedin"
                                    href="https://in.linkedin.com/"
                                  ></a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <h5 className="dlab-title">
                          <a href="/blog-details-2">
                          Benefits of a smart office solution
                          </a>
                        </h5>
                        <p className="m-b0">
                        The smart office is far from a one-trick pony. Quite
                      contrarily, moving to a smarter office will have a
                      positive impact on several different areas
                        </p>
                      </div>
                      <div className="dlab-media">
                        <a href="/blog-details-2">
                          <img src="images/blog/blog-grid/pic2.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="dlab-blog style-1 m-b30">
                      <div className="dlab-info">
                        <div className="dlab-meta">
                          <ul>
                            <li className="post-date">
                              <i className="flaticon-clock m-r10"></i>7 February,
                              2022
                            </li>
                            <li className="post-comment">
                              <a href="javascript:void(0);">
                                <i className="flaticon-speech-bubble"></i>
                                <span>15</span>
                              </a>
                            </li>
                            <li className="post-share">
                              <i className="flaticon-share"></i>
                              <ul>
                                <li>
                                  <a
                                    className="fa fa-facebook"
                                    href="https://www.facebook.com/"
                                  ></a>
                                </li>
                                <li>
                                  <a
                                    className="fa fa-twitter"
                                    href="https://ads.twitter.com/login"
                                  ></a>
                                </li>
                                <li>
                                  <a
                                    className="fa fa-linkedin"
                                    href="https://in.linkedin.com/"
                                  ></a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <h5 className="dlab-title">
                        <a href="/blog-details-3">
                          Why Smarter Homes are the Future.
                          </a>
                        </h5>
                        <p className="m-b0">
                        Technology has a vast influence on the way things are
                      being done and humans have been constantly adapting to it.
                        </p>
                      </div>
                      <div className="dlab-media">
                        <img src="images/blog/blog-3/blog-3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer2 />
    </>
  );
}

export default BlogDetails2;

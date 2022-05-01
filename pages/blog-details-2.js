import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";
import Link from "next/link";
import Head from 'next/head';

function BlogDetails2() {
  return (
    <>
     <Head>
        <title>Benefits of a smart office solution</title>
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
              <h1>Benefits of a smart office solution</h1>
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
                    <img src="images/blog/default/thum2.jpg" alt="" />
                  </div>
                  <div className="dlab-meta m-t30">
                    <ul>
                      <li className="post-date">
                        <i className="flaticon-clock m-r10"></i>1 March, 2022
                      </li>
                      <li className="post-author">
                        <i className="flaticon-user m-r10"></i>Sorabh Kumar
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
                    Benefits of a smart office solution
                  </h4>
                  <div className="dlab-post-text">
                    <p>
                      The smart office is far from a one-trick pony. Quite
                      contrarily, moving to a smarter office will have a
                      positive impact on several different areas of the
                      organization in various ways.
                    </p>
                    <img
                      className="alignleft rounded-md shadow"
                      width="300"
                      src="images/blog/blog-grid/pic1.jpg"
                      alt=""
                    />
                    <h4 className="m-b30">Improve collaboration</h4>
                    <p>
                    In today’s knowledge economy, collaboration is of ever increasing importance. When people and ideas interact, new ideas are formed. Collaboration provides a fertile ground for innovation.
                    </p>
                    Smart office solutions like Senion at Work makes it easier for employees to meet up and find space for impromptu meetings. An organization where collaboration is encouraged is more likely to tap into the creativity and ingenuity of its workforce.
                    <p>
                      To help people with disabilities, there are several kinds
                      of assistive technology tools (software and hardware) that
                      make it easier to navigate a website and interact with its
                      content. Some examples of these tools include screen
                      readers, alternative keyboards and/or trackpads, screen
                      magnifiers, eye tracking tools, and more.
                    </p>
                    <h4 className="m-b30">Boost productivity</h4>
                    <p>One of the most popular reasons for implementing a smart office solution is to improve the productivity of the organization. It’s really quite simple: for example, by making it easier to carry out menial tasks like finding and booking meeting rooms, less time and frustration is spent on non-work.</p>
                    <p> According to our research, 39% of office workers spend as much as 60 minutes every week searching for available desks, conference rooms, or colleagues. In a large office, and over time, just this issue can accumulate to large resources being wasted. Hours that could have been put to better use: more time for meaningful work, or simply giving the time back to employees for a less stressful day.</p>
                    <h4 className="m-b30">
                    Better use of office space
                    </h4>
                    <p>Professionals in Corporate Real Estate and Facility management are always trying to provide the best possible work environment for employees. One of the most common problems is the lack of space. Smart office solutions can help unlock more space by optimizing the use of space.</p>
                    <p>
                    As an example, almost 30 percent of booked meeting rooms end up unused – what is sometimes referred to as ‘no-shows’. By identifying no-shows, and even better predicting potential no-shows, smart office solutions like Senion at Work can eliminate no-shows and as a result free up space.
                    </p>
                    <h4 className="m-b30">Actionable utilization insights</h4>
                    <p>How a workplace is intended to be, and how it is actually used are two different things. Understanding which rooms or office configurations are most popular, and conversely the least popular, is the first step to improving the workplace.</p>
                    <p>Shall we split some of the larger conference rooms to smaller two-person rooms? Shall we refurbish this office landscape to another lounge area? Questions like these are easier to answer if you have solid data to back up your decisions.</p>
                    <h4 className="m-b30">Attract and retain employees</h4>
                    <p>Attract and retain employees</p>
                    <p>With the ubiquity of smartphones and computers, professionals today expect a lot more from their workplace than before. Today’s workforce is used to working with the latest tech and tools to get work done and this doesn’t stop when they walk in through the office doors.</p>
                    <p>A situation where employees feel bogged down in a 20th century workplace with pre-historic ways of doing things is a sure way to scare away new recruits and current staff. By providing modern smart office solutions, companies can provide an employee experience that helps attract and retain employees.</p>
                    <h4 className="m-b30">Improve the wellbeing of staff</h4>
                    <p>As mentioned above, one of the main benefits of smart office solutions is to take physical and cognitive load off of the employees. When staff don’t need to sweat the small stuff, they have more time to concentrate on the bigger, more important things.</p>
                    <p>It’s not about working harder, it’s about working smarter – getting more done with less stress, and less effort.</p>
                 
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
                          <Link href="/blog-details-2">
                          <a>
                          Benefits of a smart office solution
                          </a>
                          </Link>
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
                              <i className="flaticon-clock m-r10"></i>7
                              February, 2022
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
                          being done and humans have been constantly adapting to
                          it.
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

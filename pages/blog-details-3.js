import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";
import Link from "next/link";
import Head from "next/head";

function BlogDetails2() {
  return (
    <>
      <Head>
        <title>Why Smarter Homes are the Future</title>
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
              <h1>Why Smarter Homes are the Future</h1>
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
                    <img src="images/blog/blog-3/blog-3.jpg" alt="" />
                  </div>
                  <div className="dlab-meta m-t30">
                    <ul>
                      <li className="post-date">
                        <i className="flaticon-clock m-r10"></i>7 February, 2022
                      </li>
                      <li className="post-author">
                        <i className="flaticon-user m-r10"></i>Prabhas Singh
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
                    Why Smarter Homes are the Future…
                  </h4>
                  <div className="dlab-post-text">
                    <p>
                      Technology has a vast influence on the way things are
                      being done and humans have been constantly adapting to it.
                      The ‘Internet of Things’ or IoT, has been making waves and
                      it does come with quite a lot of jargon. It connects
                      machine to machine through networks. To put it in simple
                      terms IoT is simply connecting new devices to the internet
                      just like computers. But how does it affect the way we
                      live?Your alarm rings. Drapes are opened; coffee pot
                      starts brewing your espresso. In the meanwhile, five
                      minutes before your alarm went off, the water heater is
                      turned on so that there is hot water in the shower. When
                      you step into the kitchen, based on the items available,
                      your refrigerator suggests the breakfast you can prepare
                      and reminds you of the eggs you need to buy. TVs and
                      lights in every room turn off once you leave the house.
                      This is the kind of smart homes we are looking at in India
                      in the not too distant future.
                    </p>

                    <blockquote className="blockquote style-2">
                      <h4 className="blockquote-content">
                        Home Automation is a Way of Life
                      </h4>
                    </blockquote>
                    <p>
                      According to Gartner, there will be over 20.5 billion
                      connected ‘things’ by 2020, these connected devices are
                      taking home automation to an entirely new level. Imagine
                      coffee pots talking to mobile phones and sensors
                      connecting with air conditioning devices. We can almost
                      connect any imaginable device to the internet for a
                      seamless experience. Automation driven by IoT is not only
                      going to make our lives easier, comfortable and convenient
                      but also conserve energy and save costs. Imagine
                      optimizing air conditioning levels on a scorching summer
                      day or the lights and your favorite music being turned off
                      as soon as you go to sleep
                    </p>
                    <h4 className="m-b30">Watch Out: Anytime, Anywhere</h4>
                    <img
                      className="alignleft rounded-md shadow"
                      width="300"
                      src="images/blog/blog-grid/pic1.jpg"
                      alt=""
                    />
                    <p>
                      Automation is not a fancy fad but the ability to control
                      electricity consumption and save on costs if deployed
                      intelligently. It also provides an innovative way to keep
                      your home secure. For instance, by way of smart motion
                      sensors, you can check on your little ones or the elderly
                      at home from miles away, when triggered you can directly
                      receive a video on your device. By setting your
                      preferences, you can watch your kids, be informed when the
                      door is unlocked or when there is maintenance work
                      required. You will have a seamless control of all aspects
                      of your residence with a flick of the switch.
                    </p>

                    <h4 className="m-b30">Smart but secure</h4>
                    <p>
                      Smart but secure But while homes are smart they also need
                      to be kept secure. One of the biggest threats for smart
                      devices today is internet hackers. Therefore, as a user of
                      this technology you need to constantly change the
                      passwords on your devices, have your software updated and
                      make sure that the ID of each device is changed post
                      purchase. Constant software update patches should be
                      installed to prevent vulnerability
                    </p>
                    <h4 className="m-b30">Sit back and relax.</h4>
                    <p>
                      A smart home gives you the convenience of controlling and
                      automating every device and appliance at home, it takes
                      care of your safety and security needs and conserves
                      energy and saves cost. In the very near future, we will
                      live in apartments equipped and controlled completely by
                      smart devices just like the homes in the popular 1960s
                      animated sitcom – ‘The Jetsons’. Today real estate
                      developers are investing and implementing in the
                      infrastructure to equip the homes of the future.
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
                <div className="row clear" id="comment-list">
                  <div className="col-lg-6">
                    <div className="comments-area style-2" id="comments">
                      <h2 className="comments-title">8 Comments</h2>
                      <div className="dlab-separator style-1"></div>
                      <div className="clearfix m-t30">
                        {/* <!-- comment list END --> */}
                        <ol className="comment-list">
                          <li className="comment">
                            <div className="comment-body">
                              <div className="comment-author vcard">
                                <img
                                  className="avatar photo"
                                  src="images/testimonials/pic1.jpg"
                                  alt=""
                                />
                                <cite className="fn">Celesto Anderson</cite>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore magna aliqua.
                              </p>
                              <div className="reply">
                                <a
                                  href="javascript:void(0);"
                                  className="comment-reply-link"
                                >
                                  <i className="fa fa-reply"></i>Reply
                                </a>
                              </div>
                            </div>
                            <ol className="children">
                              <li className="comment odd parent">
                                <div className="comment-body">
                                  <div className="comment-author vcard">
                                    <img
                                      className="avatar photo"
                                      src="images/testimonials/pic2.jpg"
                                      alt=""
                                    />
                                    <cite className="fn">Jake Johnson</cite>
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor.
                                  </p>
                                  <div className="reply">
                                    <a
                                      href="javascript:void(0);"
                                      className="comment-reply-link"
                                    >
                                      <i className="fa fa-reply"></i>Reply
                                    </a>
                                  </div>
                                </div>
                                {/* <!-- list END --> */}
                              </li>
                            </ol>
                            {/* <!-- list END --> */}
                          </li>
                          <li className="comment">
                            <div className="comment-body">
                              <div className="comment-author vcard">
                                <img
                                  className="avatar photo"
                                  src="images/testimonials/pic1.jpg"
                                  alt=""
                                />
                                <cite className="fn">John Doe</cite>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore magna aliqua.
                              </p>
                              <div className="reply">
                                <a
                                  href="javascript:void(0);"
                                  className="comment-reply-link"
                                >
                                  <i className="fa fa-reply"></i>Reply
                                </a>
                              </div>
                            </div>
                          </li>
                        </ol>
                        {/* <!-- comment list END --> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {/* <!-- Form --> */}
                    <div className="comment-respond style-2" id="respond">
                      <h2 className="comment-reply-title" id="reply-title">
                        Leave a Reply
                        <small>
                          <a
                            style={{ display: "none" }}
                            href="javascript:void(0);"
                            id="cancel-comment-reply-link"
                            rel="nofollow"
                          >
                            Cancel reply
                          </a>
                        </small>
                      </h2>
                      <div className="dlab-separator style-1 m-b30"></div>
                      <form
                        className="comment-form m-t30"
                        id="commentform"
                        method="post"
                      >
                        <p className="comment-form-author">
                          <label for="author">
                            Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            name="Author"
                            placeholder="Author"
                            id="author"
                          />
                        </p>
                        <p className="comment-form-email">
                          <label for="email">
                            Email <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            id="email"
                          />
                        </p>
                        <p className="comment-form-url">
                          <label for="url">Website</label>
                          <input
                            type="text"
                            placeholder="Website"
                            name="url"
                            id="url"
                          />
                        </p>
                        <p className="comment-form-comment">
                          <label for="comment">Comment</label>
                          <textarea
                            rows="8"
                            name="comment"
                            placeholder="Comment"
                            id="comment"
                          ></textarea>
                        </p>
                        <p className="form-submit">
                          <input
                            type="submit"
                            value="Submit Now"
                            className="submit btn btn-primary gradient rounded-xl"
                            id="submit"
                            name="submit"
                          />
                        </p>
                      </form>
                    </div>
                    {/* <!-- Form --> */}
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

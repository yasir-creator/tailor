import React, { Component } from "react";
import { Link } from "react-router-dom";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <div>
          {/*************************************
				Inner Page Banner Start
		**************************************/}
          <div className="tg-innerpagebanner">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <ol className="tg-breadcrumb">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="tg-active">contact us</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/*************************************
				Inner Page Banner End
		**************************************/}
          {/*************************************
				Main Start
		**************************************/}
          <main id="tg-main" className="tg-main tg-haslayout tg-paddingzero">
            {/*************************************
					Tailor Online Start
			**************************************/}
            <section className="tg-sectionspace tg-haslayout">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
                    <div className="tg-sectionhead">
                      <div className="tg-heading">
                        <h2>Team Behind Tailor Online</h2>
                      </div>
                      <div className="tg-description">
                        <p>
                          Consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore etaiate dolore magna aliqua. Ut
                          enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip exea commodo
                          consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tg-shortcode tg-tailoronline">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div id="tg-locationmap" className="tg-locationmap" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                      <form className="tg-themeform tg-formcontactus">
                        <fieldset>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="yourname"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              placeholder="Phone"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              name="message"
                              placeholder="Message"
                              defaultValue={""}
                            />
                          </div>
                          <button type="submit" className="tg-btn">
                            send now
                          </button>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*************************************
					Tailor Online End
			**************************************/}
            {/*************************************
					Newsletter Start
			**************************************/}
            <section className="tg-sectionspace tg-bglight tg-haslayout">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form className="tg-themeform tg-formnewsletter">
                      <fieldset>
                        <div className="tg-formtitle">
                          <h3>
                            <span>Get Latest Updates &amp; Info</span>Signup For
                            Newsletter!
                          </h3>
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter Your Email Here"
                          />
                          <button type="button" className="tg-btn">
                            Signup Now
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/*************************************
					Newsletter End
			**************************************/}
            {/*************************************
					Trusted Start
			**************************************/}
            <section className="tg-sectionspace tg-haslayout">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
                    <div className="tg-sectionhead">
                      <div className="tg-heading">
                        <h2>Trusted By Many</h2>
                      </div>
                      <div className="tg-description">
                        <p>
                          Consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore etaiate dolore magna aliqua. Ut
                          enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip exea commodo
                          consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-13">
                    <ul className="tg-brands">
                      <li className="tg-brand">
                        <figure>
                          <Link to="#">
                            <img
                              src="images/brands/img-01.png"
                              alt="image description"
                            />
                          </Link>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <Link to="#">
                            <img
                              src="images/brands/img-02.png"
                              alt="image description"
                            />
                          </Link>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <Link to="#">
                            <img
                              src="images/brands/img-03.png"
                              alt="image description"
                            />
                          </Link>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <Link to="#">
                            <img
                              src="images/brands/img-04.png"
                              alt="image description"
                            />
                          </Link>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <Link to="#">
                            <img
                              src="images/brands/img-05.png"
                              alt="image description"
                            />
                          </Link>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <Link to="#">
                            <img
                              src="images/brands/img-06.png"
                              alt="image description"
                            />
                          </Link>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <Link to="#">
                            <img
                              src="images/brands/img-07.png"
                              alt="image description"
                            />
                          </Link>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <Link to="#">
                            <img
                              src="images/brands/img-08.png"
                              alt="image description"
                            />
                          </Link>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/*************************************
					Trusted End
			**************************************/}
          </main>
          {/*************************************
				Main End
		**************************************/}
        </div>
      </div>
    );
  }
}

export default ContactUs;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Statistics from "../layout/Statistics";

class About extends Component {
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
                    <li className="tg-active">about</li>
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
                  <div className="tg-shortcode tg-tailoronline">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 tg-verticalmiddle">
                      <div className="tg-shortcodetext">
                        <div className="tg-heading">
                          <h2>Hi! We’re Tailor Online</h2>
                        </div>
                        <div className="tg-description">
                          <p>
                            Consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore etaiate dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit
                            inchieach voluptate velit esse cillum dolore eu
                            fugiat.
                          </p>
                          <p>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum. Sed ut perspiciatis unde omnis iste natus
                            error sitateu voluptatem accusantium doloremque
                            laudantium.
                          </p>
                        </div>
                        <div className="tg-btns">
                          <Link className="tg-btn" to="#" target="_blank">
                            Start Customizing
                          </Link>
                          <Link className="tg-btn" to="howitwork">
                            Video Tutorial
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 tg-verticalmiddle">
                      <div className="tg-shortcodeimg tg-shortcodemultiimgs">
                        <figure>
                          <img
                            src="images/img-01.jpg"
                            alt="image description"
                          />
                        </figure>
                        <figure>
                          <img
                            src="images/img-02.jpg"
                            alt="image description"
                          />
                        </figure>
                        <figure>
                          <img
                            src="images/img-03.jpg"
                            alt="image description"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*************************************
					Tailor Online End
			**************************************/}
            {/*************************************
					Statastic Start
			**************************************/}

            <Statistics />
            {/*************************************
					Statastic End
			**************************************/}
            {/*************************************
					Team Members Start
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

                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="card-deck">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src="images/team/img-01.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h3>
                            <a href="#">Benedict Duque</a>
                          </h3>
                          <h4>
                            <a href="#">Manager, CEO</a>
                          </h4>
                          <div className="row d-flex justify-content-center">
                            <ul className="tg-socialicons ">
                              <li className="tg-facebook">
                                <a
                                  href="https://www.facebook.com/"
                                  target="_blank"
                                >
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li className="tg-twitter">
                                <a href="https://twitter.com/" target="_blank">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                              <li className="tg-linkedin">
                                <a
                                  href="https://www.linkedin.com/feed/"
                                  target="_blank"
                                >
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                              <li className="tg-googleplus">
                                <a
                                  href="https://www.google.com/"
                                  target="_blank"
                                >
                                  <i className="fa fa-google-plus" />
                                </a>
                              </li>
                              <li className="tg-rss">
                                <a href="https://rss.com/" target="_blank">
                                  <i className="fa fa-rss" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <img
                          className="card-img-top"
                          src="images/team/img-02.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h3>
                            <a href="#">Benedict Duque</a>
                          </h3>
                          <h4>
                            <a href="#">Manager, CEO</a>
                          </h4>
                          <div className="row d-flex justify-content-center">
                            <ul className="tg-socialicons ">
                              <li className="tg-facebook">
                                <a
                                  href="https://www.facebook.com/"
                                  target="_blank"
                                >
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li className="tg-twitter">
                                <a href="https://twitter.com/" target="_blank">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                              <li className="tg-linkedin">
                                <a
                                  href="https://www.linkedin.com/feed/"
                                  target="_blank"
                                >
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                              <li className="tg-googleplus">
                                <a
                                  href="https://www.google.com/"
                                  target="_blank"
                                >
                                  <i className="fa fa-google-plus" />
                                </a>
                              </li>
                              <li className="tg-rss">
                                <a href="https://rss.com/" target="_blank">
                                  <i className="fa fa-rss" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <img
                          className="card-img-top"
                          src="images/team/img-03.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h3>
                            <a href="#">Benedict Duque</a>
                          </h3>
                          <h4>
                            <a href="#">Manager, CEO</a>
                          </h4>
                          <div className="row d-flex justify-content-center">
                            <ul className="tg-socialicons ">
                              <li className="tg-facebook">
                                <a
                                  href="https://www.facebook.com/"
                                  target="_blank"
                                >
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li className="tg-twitter">
                                <a href="https://twitter.com/" target="_blank">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                              <li className="tg-linkedin">
                                <a
                                  href="https://www.linkedin.com/feed/"
                                  target="_blank"
                                >
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                              <li className="tg-googleplus">
                                <a
                                  href="https://www.google.com/"
                                  target="_blank"
                                >
                                  <i className="fa fa-google-plus" />
                                </a>
                              </li>
                              <li className="tg-rss">
                                <a href="https://rss.com/" target="_blank">
                                  <i className="fa fa-rss" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <img
                          className="card-img-top"
                          src="images/team/img-04.jpg"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h3>
                            <a href="#">Benedict Duque</a>
                          </h3>
                          <h4>
                            <a href="#">Manager, CEO</a>
                          </h4>
                          <div className="row d-flex justify-content-center">
                            <ul className="tg-socialicons ">
                              <li className="tg-facebook">
                                <a
                                  href="https://www.facebook.com/"
                                  target="_blank"
                                >
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li className="tg-twitter">
                                <a href="https://twitter.com/" target="_blank">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                              <li className="tg-linkedin">
                                <a
                                  href="https://www.linkedin.com/feed/"
                                  target="_blank"
                                >
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                              <li className="tg-googleplus">
                                <a
                                  href="https://www.google.com/"
                                  target="_blank"
                                >
                                  <i className="fa fa-google-plus" />
                                </a>
                              </li>
                              <li className="tg-rss">
                                <a href="https://rss.com/" target="_blank">
                                  <i className="fa fa-rss" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
                          <a href="javascript:void(0);">
                            <img
                              src="images/brands/img-01.png"
                              alt="image description"
                            />
                          </a>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <a href="javascript:void(0);">
                            <img
                              src="images/brands/img-02.png"
                              alt="image description"
                            />
                          </a>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <a href="javascript:void(0);">
                            <img
                              src="images/brands/img-03.png"
                              alt="image description"
                            />
                          </a>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <a href="javascript:void(0);">
                            <img
                              src="images/brands/img-04.png"
                              alt="image description"
                            />
                          </a>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <a href="javascript:void(0);">
                            <img
                              src="images/brands/img-05.png"
                              alt="image description"
                            />
                          </a>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <a href="javascript:void(0);">
                            <img
                              src="images/brands/img-06.png"
                              alt="image description"
                            />
                          </a>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <a href="javascript:void(0);">
                            <img
                              src="images/brands/img-07.png"
                              alt="image description"
                            />
                          </a>
                        </figure>
                      </li>
                      <li className="tg-brand">
                        <figure>
                          <a href="javascript:void(0);">
                            <img
                              src="images/brands/img-08.png"
                              alt="image description"
                            />
                          </a>
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

export default About;

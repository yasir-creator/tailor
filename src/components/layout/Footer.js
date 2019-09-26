import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        {/*************************************
				Footer Start
		**************************************/}
        <footer id="tg-footer" className="tg-footer tg-haslayout">
          <div className="tg-footerinfo">
            <div className="container">
              <div className="row">
                <div className="tg-threecolumns">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div className="tg-column">
                      <strong className="tg-logo">
                        <a href="#">
                          <img src="images/logo.png" alt="image description" />
                        </a>
                      </strong>
                      <div className="tg-description">
                        <p>
                          Consectetur adipisicing elit sed doi eiusmod empor
                          incididunt utnalo labore doloregna aliqua mianiem
                          aliquip commodo consequat.
                        </p>
                      </div>
                      <ul className="tg-contactinfo">
                        <li>
                          <i className="icon-phone-handset" />
                          <span>0800 - 1234 - 562 - 6</span>
                        </li>
                        <li>
                          <i className="icon-printer" />
                          <span>+4 1234 5678 - 9</span>
                        </li>
                        <li>
                          <i className="icon-heart-pulse" />
                          <span>
                            <a href="mailto:support@domain.com">
                              support@domain.com
                            </a>
                          </span>
                        </li>
                        <li>
                          <i className="icon-pushpin" />
                          <address>
                            795 South Park Avenue, Door 640 pushpin Wonland, CA
                            94107, Australia
                          </address>
                        </li>
                      </ul>
                      <ul className="tg-socialicons">
                        <li className="tg-facebook">
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            style={{
                              textDecoration: "none"
                            }}
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="tg-twitter">
                          <a
                            href="https://twitter.com/"
                            target="_blank"
                            style={{
                              textDecoration: "none"
                            }}
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="tg-linkedin">
                          <a
                            href="https://www.linkedin.com/feed/"
                            target="_blank"
                            style={{
                              textDecoration: "none"
                            }}
                          >
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                        <li className="tg-googleplus">
                          <a
                            href="https://www.google.com/"
                            target="_blank"
                            style={{
                              textDecoration: "none"
                            }}
                          >
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li className="tg-rss">
                          <a
                            href="https://rss.com/"
                            target="_blank"
                            style={{
                              textDecoration: "none"
                            }}
                          >
                            <i className="fa fa-rss" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div className="tg-column">
                      <div className="tg-widget tg-widgetusefulllinks">
                        <div className="tg-widgettitle">
                          <h3>Useful Links</h3>
                        </div>
                        <div className="tg-widgetcontent">
                          <ul className="tg-usefulllinks tg-liststyledot">
                            <li>
                              <Link to="#">Consectetur adipisicing</Link>
                            </li>
                            <li>
                              <Link to="#">Exercitation ullamco</Link>
                            </li>
                            <li>
                              <Link to="#">Sed do eiusmod</Link>
                            </li>
                            <li>
                              <Link to="#">Laboris nisi ut aliquip</Link>
                            </li>
                            <li>
                              <Link to="#">Tempor incididunt</Link>
                            </li>
                            <li>
                              <Link to="#">Commodo consequat</Link>
                            </li>
                            <li>
                              <Link to="#">Labore et dolore magna</Link>
                            </li>
                            <li>
                              <Link to="#">Ta ta ta papoii</Link>
                            </li>
                            <li>
                              <Link to="#">Lokato pokinata</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tg-widget tg-widgetbusinesshours">
                        <div className="tg-widgettitle">
                          <h3>Business Hours</h3>
                        </div>
                        <div className="tg-widgetcontent">
                          <div className="tg-description">
                            <p>
                              Consectetur adipisicing elit sed doi eiusod empor
                              incidint quistans aliquip commodo consequat.
                            </p>
                          </div>
                          <ul className="tg-timinginfo">
                            <li>
                              <span>Monday - Friday: </span>
                              <span>09:00am to 05:00pm</span>
                            </li>
                            <li>
                              <span>Saturday: </span>
                              <span>09:00am to 02:00pm</span>
                            </li>
                            <li>
                              <span>Sunday: </span>
                              <span>Closed</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div className="tg-column">
                      <div className="tg-widget">
                        <div className="tg-widgettitle">
                          <h3>Signup Newsletter</h3>
                        </div>
                        <div className="tg-widgetcontent">
                          <form className="tg-themeform tg-formsignupnewsletter">
                            <fieldset>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="firstname"
                                  placeholder="First Name"
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="lastname"
                                  placeholder="last Name"
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  placeholder="Enter Your Email Here*"
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <button type="submit" className="tg-btn">
                                  signup
                                </button>
                              </div>
                            </fieldset>
                          </form>
                          <div className="tg-noticearea">
                            <span className="tg-noticeicon">
                              <i className="icon-bullhorn" />
                            </span>
                            <h4>We Don’t Scam!</h4>
                            <p>
                              Consectetur adipisicing elit sed doi eiusod empor
                              incidint.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tg-footerbar">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <span className="tg-copyright">
                    2017 All Rights Reserved © Tailor Online
                  </span>
                  <nav className="tg-addnav">
                    <ul>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="howitwork.html">How It Works</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*************************************
				Footer End
		**************************************/}
      </div>
    );
  }
}

export default Footer;

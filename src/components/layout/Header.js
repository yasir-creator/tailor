import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";

class Header extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    console.log("in logout");
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div className="tg-topbar">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ul className="tg-addressinfo">
                <li>
                  <i className="icon-map-marker" />
                  <address>14 Tottenham Court Road, Manchester</address>
                </li>
                <li>
                  <i className="icon-clock" />
                  <time dateTime="2016-10-10">Mon - Sat 9:00 - 17:00</time>
                </li>
                <li>
                  <i className="icon-phone-handset" />
                  <span>+4 1234 567890</span>
                </li>
              </ul>
              <ul className="tg-socialicons">
                <li className="tg-facebook">
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="tg-twitter">
                  <a href="https://twitter.com/" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="tg-linkedin">
                  <a href="https://www.linkedin.com/feed/" target="_blank">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li className="tg-googleplus">
                  <a href="https://www.google.com/" target="_blank">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li className="tg-rss">
                  <a href="https://rss.com/" target="_blank">
                    <i className="fa fa-rss" />
                  </a>
                </li>
                <form className="form-inline my-2 my-lg-0 ">
                  <a
                    href="#"
                    onClick={this.onLogoutClick}
                    className="btn btn-outline-light btn-lg mr-2 "
                    style={{ backgroundColor: "gray" }}
                  >
                    <img
                      className="rounded-circle"
                      src={user.avatar}
                      alt={user.name}
                      style={{ width: "25px", marginRight: "5px" }}
                    />{" "}
                    Logout
                  </a>
                </form>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

    const guestLinks = (
      <div className="tg-topbar">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ul className="tg-addressinfo">
                <li>
                  <i className="icon-map-marker" />
                  <address>14 Tottenham Court Road, Manchester</address>
                </li>
                <li>
                  <i className="icon-clock" />
                  <time dateTime="2016-10-10">Mon - Sat 9:00 - 17:00</time>
                </li>
                <li>
                  <i className="icon-phone-handset" />
                  <span>+4 1234 567890</span>
                </li>
              </ul>
              <ul className="tg-socialicons">
                <li className="tg-facebook">
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="tg-twitter">
                  <a href="https://twitter.com/" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="tg-linkedin">
                  <a href="https://www.linkedin.com/feed/" target="_blank">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li className="tg-googleplus">
                  <a href="https://www.google.com/" target="_blank">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li className="tg-rss">
                  <a href="https://rss.com/" target="_blank">
                    <i className="fa fa-rss" />
                  </a>
                </li>
                <form className="form-inline my-2 my-lg-0 ">
                  <button
                    className="btn btn-outline-light btn-lg mr-2 "
                    type="submit"
                    style={{ backgroundColor: "gray" }}
                  >
                    <Link
                      rel="stylesheet"
                      to="/register"
                      style={{
                        color: "white"
                      }}
                    >
                      {" "}
                      Sign Up{" "}
                    </Link>
                  </button>
                  <button
                    className="btn btn-outline-light btn-lg mr-2 "
                    type="submit"
                    style={{ backgroundColor: "gray" }}
                  >
                    <Link
                      rel="stylesheet"
                      to="/login"
                      style={{
                        color: "white"
                      }}
                    >
                      Login
                    </Link>
                  </button>
                </form>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {/*************************************
 Header Start
 **************************************/}
        <header id="tg-header" className="tg-header tg-haslayout">
          {isAuthenticated ? authLinks : guestLinks}
          <div className="tg-logonav">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <strong className="tg-logo">
                    <a href="/">
                      <img src="images/logo.png" alt="company logo here" />
                    </a>
                  </strong>
                  <div className="tg-navigationarea">
                    <nav id="tg-nav" className="tg-nav">
                      <div className="navbar-header">
                        <button
                          type="button"
                          className="navbar-toggle collapsed"
                          data-toggle="collapse"
                          data-target="#tg-navigation"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                        </button>
                      </div>
                      <div
                        id="tg-navigation"
                        className="collapse navbar-collapse tg-navigation"
                      >
                        <ul>
                          <li className=" current-menu-item">
                            <Link to="/">HOME</Link>
                          </li>
                          <li>
                            <Link to="/shirt">Shirts</Link>
                          </li>
                          <li>
                            <Link to="/blazers">Blazers</Link>
                          </li>
                          <li>
                            <Link to="/pants">Pants</Link>
                          </li>
                          <li>
                            <Link to="/howitwork">How It Works</Link>
                          </li>
                          <li>
                            <Link to="/contactus">Contact</Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="#">
                              <i className="fa fa-ellipsis-h" />
                            </Link>
                            <ul className="sub-menu">
                              <li className="menu-item-has-children">
                                <Link to="#">shop</Link>
                                <ul className="sub-menu">
                                  <li>
                                    <Link to="shop">shop</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                <Link to="#">blog</Link>
                                <ul className="sub-menu">
                                  <li>
                                    <Link to="newsgrid">blog grid</Link>
                                  </li>
                                  <li>
                                    <Link to="newslist">blog list</Link>
                                  </li>
                                  <li>
                                    <Link to="newsdetail">blog detail</Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="about">About</Link>
                              </li>
                              <li>
                                <Link to="404">404</Link>
                              </li>
                              <li>
                                <Link to="comingsoon">coming soon</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <Link
                      className="tg-btn tg-btnstartcustomizing"
                      to="#"
                      target="_blank"
                    >
                      <span>new</span>Start Customizing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*************************************
        Header End
  ************************************/}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);

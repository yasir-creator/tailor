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
                  <i
                    className="icon-map-marker"
                    style={{
                      marginTop: 15
                    }}
                  />
                  <address
                    style={{
                      marginTop: 15
                    }}
                  >
                    14 Tottenham Court Road, Manchester
                  </address>
                </li>
                <li>
                  <i
                    className="icon-clock"
                    style={{
                      marginTop: 15
                    }}
                  />
                  <time
                    dateTime="2016-10-10"
                    style={{
                      marginTop: 15
                    }}
                  >
                    Mon - Sat 9:00 - 17:00
                  </time>
                </li>
                <li>
                  <i
                    className="icon-phone-handset"
                    style={{
                      marginTop: 15
                    }}
                  />
                  <span
                    style={{
                      marginTop: 15
                    }}
                  >
                    +4 1234 567890
                  </span>
                </li>
              </ul>
              <ul className="tg-socialicons">
                <li className="tg-facebook">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    style={{
                      marginTop: 15,
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
                      marginTop: 15,
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
                      marginTop: 15,
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
                      marginTop: 15,
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
                      marginTop: 15,
                      textDecoration: "none"
                    }}
                  >
                    <i className="fa fa-rss" />
                  </a>
                </li>

                <button
                  onClick={this.onLogoutClick}
                  className="tg-btn mr-3 rounded"
                  style={{
                    textDecoration: "none",
                    marginTop: 10
                  }}
                >
                  <img
                    className="rounded-circle"
                    src={user.avatar}
                    // alt={user.name}
                    style={{ width: "25px", marginRight: "5px" }}
                  />{" "}
                  Logout
                </button>

                <Link
                  to="/addtocart"
                  className="tg-btn  rounded"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    marginTop: 10
                  }}
                >
                  <i className="fas fa-shopping-cart mr-2" /> Cart
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

    const guestLinks = (
      <div className="tg-topbar">
        <div className="tg-container">
          <div className="tg-row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ul className="tg-addressinfo">
                <li>
                  <i
                    className="icon-map-marker"
                    style={{
                      marginTop: 15
                    }}
                  />
                  <address
                    style={{
                      marginTop: 15
                    }}
                  >
                    14 Tottenham Court Road, Manchester
                  </address>
                </li>
                <li>
                  <i
                    className="icon-clock"
                    style={{
                      marginTop: 15
                    }}
                  />
                  <time
                    dateTime="2016-10-10"
                    style={{
                      marginTop: 15
                    }}
                  >
                    Mon - Sat 9:00 - 17:00
                  </time>
                </li>
                <li>
                  <i
                    className="icon-phone-handset"
                    style={{
                      marginTop: 15
                    }}
                  />
                  <span
                    style={{
                      marginTop: 15
                    }}
                  >
                    +4 1234 567890
                  </span>
                </li>
              </ul>
              <ul className="tg-socialicons">
                <li className="tg-facebook">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      marginTop: 15
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
                      textDecoration: "none",
                      marginTop: 15
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
                      textDecoration: "none",
                      marginTop: 15
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
                      textDecoration: "none",
                      marginTop: 15
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
                      textDecoration: "none",
                      marginTop: 15
                    }}
                  >
                    <i className="fa fa-rss" />
                  </a>
                </li>
                {/* <form className="form-inline my-2 my-lg-0 "> */}
                <button
                  className="tg-btn rounded "
                  type="submit"
                  style={{
                    marginTop: 10
                  }}
                >
                  <Link
                    to="/register"
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}
                  >
                    {" "}
                    Sign Up{" "}
                  </Link>
                </button>
                <button
                  className="tg-btn rounded "
                  type="submit"
                  style={{
                    marginTop: 10
                  }}
                >
                  <Link
                    to="/login"
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}
                  >
                    Login
                  </Link>
                </button>
                <Link
                  className="tg-btn rounded "
                  to="/addtocart"
                  style={{
                    textDecoration: "none",
                    marginTop: 10
                  }}
                >
                  <i className="fas fa-shopping-cart mr-2" />
                  Cart
                </Link>
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
                            <Link
                              to="/"
                              style={{
                                textDecoration: "none"
                              }}
                            >
                              HOME
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shirt"
                              style={{
                                textDecoration: "none"
                              }}
                            >
                              Shirts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/blazers"
                              style={{
                                textDecoration: "none"
                              }}
                            >
                              Blazers
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/pants"
                              style={{
                                textDecoration: "none"
                              }}
                            >
                              Pants
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/howitwork"
                              style={{
                                textDecoration: "none"
                              }}
                            >
                              How It Works
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/contactus"
                              style={{
                                textDecoration: "none"
                              }}
                            >
                              Contact
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link
                              to="#"
                              style={{
                                textDecoration: "none"
                              }}
                            >
                              <i className="fa fa-ellipsis-h" />
                            </Link>
                            <ul className="sub-menu">
                              <li
                              // className="menu-item-has-children"
                              >
                                <Link
                                  to="shop"
                                  style={{
                                    textDecoration: "none"
                                  }}
                                >
                                  shop
                                </Link>
                                {/* <ul className="sub-menu">
                                  <li>
                                    <Link
                                      to="shop"
                                      style={{
                                        textDecoration: "none"
                                      }}
                                    >
                                      shop
                                    </Link>
                                  </li>
                                </ul> */}
                              </li>
                              <li
                              // className="menu-item-has-children"
                              >
                                <Link
                                  to="newsgrid"
                                  style={{
                                    textDecoration: "none"
                                  }}
                                >
                                  blog
                                </Link>
                                {/* <ul className="sub-menu">
                                  <li>
                                    <Link
                                      to="newsgrid"
                                      style={{
                                        textDecoration: "none"
                                      }}
                                    >
                                      blog grid
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="newslist"
                                      style={{
                                        textDecoration: "none"
                                      }}
                                    >
                                      blog list
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="newsdetail"
                                      style={{
                                        textDecoration: "none"
                                      }}
                                    >
                                      blog detail
                                    </Link>
                                  </li>
                                </ul> */}
                              </li>
                              <li>
                                <Link
                                  to="about"
                                  style={{
                                    textDecoration: "none"
                                  }}
                                >
                                  About
                                </Link>
                              </li>
                              {/* <li>
                                <Link
                                  to="404"
                                  style={{
                                    textDecoration: "none"
                                  }}
                                >
                                  404
                                </Link>
                              </li> */}
                              <li>
                                <Link
                                  to="comingsoon"
                                  style={{
                                    textDecoration: "none"
                                  }}
                                >
                                  coming soon
                                </Link>
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
                      style={{
                        textDecoration: "none"
                      }}
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

import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductCategories extends Component {
  render() {
    return (
      <div>
        {/*************************************
					Product Categories Start
			**************************************/}
        <section className="tg-sectionspace tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
                <div className="tg-sectionhead">
                  <div className="tg-heading">
                    <h2>Product Categories</h2>
                  </div>
                  <div className="tg-description">
                    <p>
                      Consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore etaiate dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip exea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tg-shortcode tg-adinpanel">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="tg-productbanner">
                    <figure>
                      <img src="images/img-14.jpg" alt="image description" />
                      <figcaption>
                        <h2 data-new="new">
                          Design Your Suit<span>Online</span>
                        </h2>
                        <Link className="tg-btn" to="#" target="_blank">
                          Start Customizing
                        </Link>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="row">
                    <div className="tg-categories">
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="tg-category">
                          <figure>
                            <a href="#">
                              <img
                                src="images/products/img-10.jpg"
                                alt="image description"
                              />
                            </a>
                            <figcaption>
                              <h3>
                                01.
                                <span>
                                  <Link to="#">Blazers</Link>
                                </span>
                              </h3>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="tg-category">
                          <figure>
                            <a href="#">
                              <img
                                src="images/products/img-11.jpg"
                                alt="image description"
                              />
                            </a>
                            <figcaption>
                              <h3>
                                02.
                                <span>
                                  <Link to="#">Blazers</Link>
                                </span>
                              </h3>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="tg-category">
                          <figure>
                            <a href="#">
                              <img
                                src="images/products/img-12.jpg"
                                alt="image description"
                              />
                            </a>
                            <figcaption>
                              <h3>
                                03.
                                <span>
                                  <Link to="#">Blazers</Link>
                                </span>
                              </h3>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="tg-category">
                          <figure>
                            <a href="#">
                              <img
                                src="images/products/img-13.jpg"
                                alt="image description"
                              />
                            </a>
                            <figcaption>
                              <h3>
                                04.
                                <span>
                                  <Link to="#">Blazers</Link>
                                </span>
                              </h3>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Product Categories End
			**************************************/}
      </div>
    );
  }
}

export default ProductCategories;

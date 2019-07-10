import React, { Component } from "react";
import { Link } from "react-router-dom";

class FeaturedProducts extends Component {
  render() {
    return (
      <div>
        {/*************************************
					Featured Products Start
			**************************************/}
        <section className="tg-sectionspace tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
                <div className="tg-sectionhead">
                  <div className="tg-heading">
                    <h2>Featured Products</h2>
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

              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="tg-product">
                    <figure className="tg-productimg">
                      <img
                        src="images/products/img-01.jpg"
                        alt="image description"
                      />
                      <figcaption>
                        <div className="tg-hoverimglink">
                          <img
                            src="images/products/img-10.png"
                            alt="image description"
                          />
                          <Link to="shopdetail">
                            <span>View Detail</span>
                            <i className="fa fa-angle-right" />
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                    <div className="tg-productcontent">
                      <div className="tg-producttitle">
                        <h3>
                          <Link to="shopdetail">Fabric Title Here</Link>
                        </h3>
                      </div>
                      <div className="tg-rating">
                        <span className="tg-stars">
                          <span />
                        </span>
                      </div>
                      <div className="tg-price">
                        <h4>
                          <Link to="#">$330</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="tg-product">
                    <figure className="tg-productimg">
                      <img
                        src="images/products/img-02.jpg"
                        alt="image description"
                      />
                      <figcaption>
                        <div className="tg-hoverimglink">
                          <img
                            src="images/products/img-10.png"
                            alt="image description"
                          />
                          <Link to="shopdetail">
                            <span>View Detail</span>
                            <i className="fa fa-angle-right" />
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                    <div className="tg-productcontent">
                      <div className="tg-producttitle">
                        <h3>
                          <Link to="shopdetail">Fabric Title Here</Link>
                        </h3>
                      </div>
                      <div className="tg-rating">
                        <span className="tg-stars">
                          <span />
                        </span>
                      </div>
                      <div className="tg-price">
                        <h4>
                          <Link to="#">$330</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="tg-product">
                    <figure className="tg-productimg">
                      <img
                        src="images/products/img-03.jpg"
                        alt="image description"
                      />
                      <figcaption>
                        <div className="tg-hoverimglink">
                          <img
                            src="images/products/img-10.png"
                            alt="image description"
                          />
                          <Link to="shopdetail">
                            <span>View Detail</span>
                            <i className="fa fa-angle-right" />
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                    <div className="tg-productcontent">
                      <div className="tg-producttitle">
                        <h3>
                          <Link to="shopdetail">Fabric Title Here</Link>
                        </h3>
                      </div>
                      <div className="tg-rating">
                        <span className="tg-stars">
                          <span />
                        </span>
                      </div>
                      <div className="tg-price">
                        <h4>
                          <Link to="#">$330</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="tg-product">
                    <figure className="tg-productimg">
                      <img
                        src="images/products/img-04.jpg"
                        alt="image description"
                      />
                      <figcaption>
                        <div className="tg-hoverimglink">
                          <img
                            src="images/products/img-10.png"
                            alt="image description"
                          />
                          <Link to="shopdetail">
                            <span>View Detail</span>
                            <i className="fa fa-angle-right" />
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                    <div className="tg-productcontent">
                      <div className="tg-producttitle">
                        <h3>
                          <Link to="shopdetail">Fabric Title Here</Link>
                        </h3>
                      </div>
                      <div className="tg-rating">
                        <span className="tg-stars">
                          <span />
                        </span>
                      </div>
                      <div className="tg-price">
                        <h4>
                          <Link to="#">$330</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Featured Products End
			**************************************/}
      </div>
    );
  }
}

export default FeaturedProducts;

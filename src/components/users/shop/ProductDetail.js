import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import ItemSlider from "./ItemSlider";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import CommingSoon from "../CommingSoon";
// import { POINT_CONVERSION_COMPRESSED } from "constants";

class ProductDetail extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { pro } = this.props.location.state;
    if (pro === null || pro === undefined) {
      this.props.history.push("/shop");
    }
  }

  handleClick = product => {
    var arraydata = JSON.parse(localStorage.getItem("Cart"));
    if (arraydata) {
      const foundIndex = arraydata.findIndex(pro => pro._id === product._id);
      if (foundIndex > 0 || foundIndex === 0) {
        arraydata[foundIndex].qty = arraydata[foundIndex].qty + 1;
      } else {
        product.qty = 1;
        arraydata.push(product);
      }
    } else {
      arraydata = [];
      product.qty = 1;
      arraydata.push(product);
    }

    localStorage.setItem("Cart", JSON.stringify(arraydata));
    console.log("ArrayDataHere", product);
  };

  render() {
    const { pro } = this.props.location.state;
    // if (pro === null || pro === undefined) {
    //   this.props.history.push("/shop");
    // }
    let i = 0;
    // console.log(pro.photoUrl[0]);
    let murshad;
    murshad = pro.photoUrl[0].split(","[0]);
    console.log(murshad);
    let slider;
    if (murshad === null || murshad === undefined) {
      murshad = "loading";
    } else {
      if (murshad.length > 0) {
        slider = murshad.map(ya => (
          <div key={++i}>
            <img src={ya} />
          </div>
        ));
      } else {
        slider = "loading";
      }
    }

    // let yasir;

    // if (pro === null || pro === undefined) {
    //   yasir = "loading";
    // } else {
    //   if (pro.length > 0) {
    //     yasir = pro.photoUrl.map(pro => (
    //       <div>
    //         <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
    //           <Carousel>
    //             <div>
    //               <img src={pro.photoUrl} />
    //             </div>
    //           </Carousel>
    //         </div>
    //       </div>
    //     ));
    //   }
    // }

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
                      <Link
                        to="/"
                        style={{
                          textDecoration: "none"
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="shirt"
                        style={{
                          textDecoration: "none"
                        }}
                      >
                        product
                      </Link>
                    </li>
                    <li className="tg-active">Detail</li>
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
          <main id="tg-main" className="tg-main tg-haslayout">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div id="tg-content" className="tg-content">
                    <div className="tg-product tg-productdetail">
                      <div className="tg-productbox">
                        {/* <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                          <Carousel>
                            <div>
                              <img src={pro.photoUrl[0].split(",")[0]} />
                            </div>
                          </Carousel>
                        </div> */}
                        {/* </div> */}
                        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                          <Carousel showStatus={false}>{slider}</Carousel>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-7 col-lg-8">
                          <div className="tg-producttextbox">
                            <div className="tg-producttextboxhead">
                              <div className="tg-leftbox">
                                <h1>{pro.name}</h1>
                                <span className="tg-stars">
                                  <span />
                                </span>
                              </div>
                              <div className="tg-rightbox">
                                <span>{pro.price}</span>
                                <span>Available In Stock</span>
                              </div>
                            </div>
                            <div className="tg-description">
                              <p>
                                Consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore etaiatiea dolore
                                magna aliqua aseenim adiat minim veniam, quis
                                nostrud exercitation ullaceo laboris nisi ut
                                aliquip ex ea commodo consequat aute irure dolor
                                ina reprehenderit inchieach voluptate velit esse
                                cillum dolore eu fugiat cepteur sint occaecat
                                cupidatat non proident sunt in culpa quista
                                officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                            <div className="tg-producttextboxfoot">
                              {/* <button onClick={() => this.handleClick(pro)}>
                                Add To Cart
                              </button> */}
                              <button
                                className="tg-btn"
                                onClick={() => this.handleClick(pro)}
                              >
                                Add To Cart
                              </button>
                              <Link
                                className="tg-btn"
                                to="/addtocart"
                                target="_blank"
                                style={{
                                  textDecoration: "none"
                                }}
                              >
                                Start Customizing
                              </Link>
                              <div className="tg-productshare">
                                <span>Share:</span>
                                <ul className="tg-socialicons">
                                  <li className="tg-facebook">
                                    <a
                                      href="https://www.facebook.com/"
                                      target="_blank"
                                    >
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                  </li>
                                  <li className="tg-twitter">
                                    <a
                                      href="https://twitter.com/"
                                      target="_blank"
                                    >
                                      <i className="fab fa-twitter" />
                                    </a>
                                  </li>
                                  <li className="tg-linkedin">
                                    <a
                                      href="https://www.linkedin.com/feed/"
                                      target="_blank"
                                    >
                                      <i className="fab fa-linkedin" />
                                    </a>
                                  </li>
                                  <li className="tg-googleplus">
                                    <a
                                      href="https://www.google.com/"
                                      target="_blank"
                                    >
                                      <i className="fab fa-google-plus-g" />
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
                      <div className="tg-producttabs">
                        <ul className="tg-producttabnav" role="tablist">
                          <li role="presentation" className="active">
                            <a
                              href="#tg-deescription"
                              role="tab"
                              data-toggle="tab"
                            >
                              Description
                            </a>
                          </li>
                          <li role="presentation">
                            <a href="#tg-reviews" role="tab" data-toggle="tab">
                              Reviews
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content tg-tabcontent">
                          <div
                            role="tabpanel"
                            className="tab-pane fade in active"
                            id="tg-deescription"
                          >
                            <figure className="tg-alignleft">
                              <img
                                src="images/products/img-16.jpg"
                                alt="image description"
                              />
                            </figure>
                            <div className="tg-description">
                              <p>
                                Consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore etaiatiea dolore
                                magna aliqua aseenim adiat minim veniam, quis
                                nostrud exercitation ullaceoate laboris nisi ut
                                aliquip ex eaommodo consequat aute irure dolor
                                ina reprehenderit inchieach voluptate velit esse
                                cillum dolore eufugiat aeur sint occaecat
                                cupidatate non proident sunt in culpa quista.
                              </p>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sitateu voluptatem accusantium doloremque
                                laudantium totam rem aperiam, eaque ipsa quae ab
                                illo inventore veritatiset quasi architecto
                                beatae vitae dicta sunt explicabo lokiatana
                                poketona shonua.
                              </p>
                              <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non
                                numquam eius modita tempora incidunt ut labore
                                et dolore magnam aliquam quaerat voluptatem.
                              </p>
                            </div>
                          </div>
                          <div
                            role="tabpanel"
                            className="tab-pane fade"
                            id="tg-reviews"
                          >
                            <figure className="tg-alignright">
                              <img
                                src="images/products/img-16.jpg"
                                alt="image description"
                              />
                            </figure>
                            <div className="tg-description">
                              <p>
                                Consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore etaiatiea dolore
                                magna aliqua aseenim adiat minim veniam, quis
                                nostrud exercitation ullaceoate laboris nisi ut
                                aliquip ex eaommodo consequat aute irure dolor
                                ina reprehenderit inchieach voluptate velit esse
                                cillum dolore eufugiat aeur sint occaecat
                                cupidatate non proident sunt in culpa quista.
                              </p>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sitateu voluptatem accusantium doloremque
                                laudantium totam rem aperiam, eaque ipsa quae ab
                                illo inventore veritatiset quasi architecto
                                beatae vitae dicta sunt explicabo lokiatana
                                poketona shonua.
                              </p>
                              <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non
                                numquam eius modita tempora incidunt ut labore
                                et dolore magnam aliquam quaerat voluptatem.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="tg-relatedproducts">
                      <h2>Related Products</h2>
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                          <div className="tg-product">
                            <figure className="tg-productimg">
                              <img
                                src={pro.photoUrl[0].split(",")[0]}
                                alt="image description"
                              />
                              <figcaption>
                                <div className="tg-hoverimglink">
                                  <img
                                    src="images/products/img-10.png"
                                    alt="image description"
                                  />
                                  <Link
                                    to={{
                                      pathname: "/shopdetail",
                                      state: { pro: pro }
                                    }}
                                  >
                                    <span>View Detail</span>
                                    <i className="fa fa-angle-right" />
                                  </Link>
                                </div>
                              </figcaption>
                            </figure>
                            <div className="tg-productcontent">
                              <div className="tg-producttitle">
                                <h3>
                                  <Link to="shopdetail">{pro.name}</Link>
                                </h3>
                              </div>
                              <div className="tg-rating">
                                <span className="tg-stars">
                                  <span />
                                </span>
                              </div>
                              <div className="tg-price">
                                <h4>
                                  <a href="#">{pro.price}</a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                          <div className="tg-product">
                            <figure className="tg-productimg">
                              <img
                                src={pro.photoUrl[0].split(",")[1]}
                                alt="image description"
                              />
                              <figcaption>
                                <div className="tg-hoverimglink">
                                  <img
                                    src="images/products/img-10.png"
                                    alt="image description"
                                  />
                                  <Link
                                    to={{
                                      pathname: "/shopdetail",
                                      state: { pro: pro }
                                    }}
                                  >
                                    <span>View Detail</span>
                                    <i className="fa fa-angle-right" />
                                  </Link>
                                </div>
                              </figcaption>
                            </figure>
                            <div className="tg-productcontent">
                              <div className="tg-producttitle">
                                <h3>
                                  <Link to="shopdetail">{pro.name}</Link>
                                </h3>
                              </div>
                              <div className="tg-rating">
                                <span className="tg-stars">
                                  <span />
                                </span>
                              </div>
                              <div className="tg-price">
                                <h4>
                                  <a href="#">{pro.price}</a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                          <div className="tg-product">
                            <figure className="tg-productimg">
                              <img
                                src={pro.photoUrl[0].split(",")[2]}
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
                                  <Link to="shopdetail">{pro.name}</Link>
                                </h3>
                              </div>
                              <div className="tg-rating">
                                <span className="tg-stars">
                                  <span />
                                </span>
                              </div>
                              <div className="tg-price">
                                <h4>
                                  <a href="#">{pro.price}</a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                          <div className="tg-product">
                            <figure className="tg-productimg">
                              <img
                                src={pro.photoUrl[0].split(",")[3]}
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
                                  <a href="#">$330</a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/*************************************
				Main End
		**************************************/}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({

// })

export default ProductDetail;

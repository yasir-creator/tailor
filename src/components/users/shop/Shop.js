import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { shopUser } from "../../../actions/shopAction";

class Shop extends Component {
  componentDidMount() {
    this.props.shopUser();
  }

  render() {
    const { userproduct } = this.props.heavyshop;
    let i = 0;
    let yasir;
    console.log(userproduct);

    if (userproduct === null || userproduct === undefined) {
      yasir = "Loading";
    } else {
      if (userproduct.length > 0) {
        yasir = userproduct.map(pro => (
          <div key={++i} className="tg-products tg-productgrid">
            {" "}
            {/* <div > */}{" "}
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
              <div className="tg-product">
                <figure className="tg-productimg">
                  <img
                    src={pro.photoUrl[0].split(",")[0]}
                    alt="image description"
                  />
                  <figcaption>
                    <div className="tg-hoverimglink">
                      <img
                        src={pro.photoUrl[0].split(",")[1]}
                        alt="image description"
                        style={{
                          height: 200
                        }}
                      />
                      <Link
                        to={{
                          pathname: "/shopdetail",
                          state: { pro: pro }
                        }}
                      >
                        <span
                          style={{
                            color: "white",
                            fontSize: 15
                          }}
                        >
                          View Detail
                        </span>
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
                      <Link to="#">{pro.price}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          // </div>
        ));
      }
    }

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
                    <li className="tg-active">shop</li>
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
                <div id="tg-twocolumns" className="tg-twocolumns">
                  <div className="col-xs-12 col-sm-8 col-md-7 col-lg-9 pull-right">
                    <div className="row">
                      <div id="tg-content" className="tg-content">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="tg-pagehead">
                            <h2>Suit Collections</h2>
                            <div className="tg-description">
                              <p>
                                Consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt utnalo labore dolore magna
                                aliqua minim veniaam quis nostrud exercitation
                                ullamco laboris nisi ut aliquip commodo
                                consequat auis autetatio irure dolor in
                                reprderit voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur sint occaecat cupidatat
                                non proident.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="tg-products tg-productgrid">
                          <div class="container">
                            <div
                              className="row"
                              style={{
                                float: "none"
                              }}
                            >
                              {" "}
                              {yasir}
                            </div>
                          </div>
                        </div>

                        {/* <div className="tg-products tg-productgrid">
                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
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
                                    <Link to="shopdetail">
                                      Fabric Title Here
                                    </Link>
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
                        </div> */}

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <nav className="tg-pagination">
                            <ul>
                              <li className="tg-prevpage">
                                <Link to="#">
                                  <i className="fa fa-angle-left" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">1</Link>
                              </li>
                              <li>
                                <Link to="#">2</Link>
                              </li>
                              <li>
                                <Link to="#">3</Link>
                              </li>
                              <li>
                                <Link to="#">4</Link>
                              </li>
                              <li className="tg-active">
                                <Link to="#">5</Link>
                              </li>
                              <li>...</li>
                              <li>
                                <Link to="#">10</Link>
                              </li>
                              <li className="tg-nextpage">
                                <Link to="#">
                                  <i className="fa fa-angle-right" />
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-4 col-md-5 col-lg-3 pull-left">
                    <aside id="tg-sidebar" className="tg-sidebar">
                      <form className="tg-themeform tg-formrefinesearch">
                        <fieldset>
                          <div className="tg-widget tg-themeformsearch">
                            <input
                              type="search"
                              className="form-control"
                              name="searchhere"
                              placeholder="Search Here"
                            />
                            <button type="submit">
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </fieldset>
                        <fieldset>
                          <h4>Fabric</h4>
                          <span className="tg-radio">
                            <input
                              type="radio"
                              id="allfabric"
                              name="fabric"
                              defaultValue="All"
                              defaultChecked
                            />
                            <label htmlFor="allfabric">
                              <span>All</span>
                              <span>(256)</span>
                            </label>
                          </span>
                          <span className="tg-radio">
                            <input
                              type="radio"
                              id="basketweave"
                              name="fabric"
                              defaultValue="Basket weave"
                            />
                            <label htmlFor="basketweave">
                              <span>Basket weave</span>
                              <span>(521)</span>
                            </label>
                          </span>
                          <span className="tg-radio">
                            <input
                              type="radio"
                              id="batik"
                              name="fabric"
                              defaultValue="Batik"
                            />
                            <label htmlFor="batik">
                              <span>Batik</span>
                              <span>(314)</span>
                            </label>
                          </span>
                          <span className="tg-radio">
                            <input
                              type="radio"
                              id="bedfordcord"
                              name="fabric"
                              defaultValue="Bedford cord"
                            />
                            <label htmlFor="bedfordcord">
                              <span>Bedford cord</span>
                              <span>(65)</span>
                            </label>
                          </span>
                          <span className="tg-radio">
                            <input
                              type="radio"
                              id="broadcloth"
                              name="fabric"
                              defaultValue="Broadcloth"
                            />
                            <label htmlFor="broadcloth">
                              <span>Broadcloth</span>
                              <span>(127)</span>
                            </label>
                          </span>
                          <span className="tg-radio">
                            <input
                              type="radio"
                              id="canvas"
                              name="fabric"
                              defaultValue="Canvas"
                            />
                            <label htmlFor="canvas">
                              <span>Canvas</span>
                              <span>(621)</span>
                            </label>
                          </span>
                        </fieldset>
                        <fieldset>
                          <h4>Color</h4>
                          <span className="tg-checkbox">
                            <input
                              type="checkbox"
                              id="allcolor"
                              name="availability"
                              defaultValue="Any"
                              defaultChecked
                            />
                            <label htmlFor="allcolor">
                              <span>All</span>
                              <span>(256)</span>
                            </label>
                          </span>
                          <span className="tg-checkbox">
                            <input
                              type="checkbox"
                              id="charcoal"
                              name="availability"
                              defaultValue="Charcoal"
                            />
                            <label htmlFor="charcoal">
                              <span>Charcoal</span>
                              <span>(521)</span>
                            </label>
                          </span>
                          <span className="tg-checkbox">
                            <input
                              type="checkbox"
                              id="cream"
                              name="availability"
                              defaultValue="Cream"
                            />
                            <label htmlFor="cream">
                              <span>Cream</span>
                              <span>(314)</span>
                            </label>
                          </span>
                          <span className="tg-checkbox">
                            <input
                              type="checkbox"
                              id="navy"
                              name="availability"
                              defaultValue="Navy"
                            />
                            <label htmlFor="navy">
                              <span>Navy</span>
                              <span>(65)</span>
                            </label>
                          </span>
                          <span className="tg-checkbox">
                            <input
                              type="checkbox"
                              id="blue"
                              name="availability"
                              defaultValue="Blue"
                            />
                            <label htmlFor="blue">
                              <span>Blue</span>
                              <span>(127)</span>
                            </label>
                          </span>
                        </fieldset>
                        <fieldset>
                          <h4>Price</h4>
                          <div className="tg-amountbox">
                            <span>Price Range: </span>
                            <input
                              type="text"
                              id="tg-consultationfeeamount"
                              readOnly
                            />
                          </div>
                          <div className="tg-padding">
                            <div
                              id="tg-consultationfeerangeslider"
                              className="tg-consultationfeerangeslider tg-themerangeslider"
                            />
                          </div>
                        </fieldset>
                        <fieldset>
                          <h4>Brand</h4>
                          <span className="tg-checkbox">
                            <input
                              type="checkbox"
                              id="allbrands"
                              name="brand"
                              defaultValue="all"
                              defaultChecked
                            />
                            <label htmlFor="allbrands">
                              <span>All</span>
                              <span>(256)</span>
                            </label>
                          </span>
                          <span className="tg-checkbox">
                            <input
                              type="checkbox"
                              id="male"
                              name="brand"
                              defaultValue="consectetur"
                            />
                            <label htmlFor="male">
                              <span>Consectetur</span>
                              <span>(521)</span>
                            </label>
                          </span>
                          <span className="tg-checkbox">
                            <input
                              type="checkbox"
                              id="adipiscivelit"
                              name="brand"
                              defaultValue="Adipisci Velit"
                            />
                            <label htmlFor="adipiscivelit">
                              <span>Adipisci Velit</span>
                              <span>(314)</span>
                            </label>
                          </span>
                          <span className="tg-checkbox">
                            <input
                              type="checkbox"
                              id="numquameiusmodi"
                              name="brand"
                              defaultValue="Numquam Eius Modi"
                            />
                            <label htmlFor="numquameiusmodi">
                              <span>Numquam Eius Modi</span>
                              <span>(65)</span>
                            </label>
                          </span>
                          <span className="tg-checkbox">
                            <input
                              type="checkbox"
                              id="temporaincidunt"
                              name="brand"
                              defaultValue="Tempora Incidunt"
                            />
                            <label htmlFor="temporaincidunt">
                              <span>Tempora Incidunt</span>
                              <span>(127)</span>
                            </label>
                          </span>
                          <span className="tg-checkbox">
                            <input
                              type="checkbox"
                              id="laboreetdolore"
                              name="brand"
                              defaultValue="Labore Et Dolore"
                            />
                            <label htmlFor="laboreetdolore">
                              <span>Labore Et Dolore</span>
                              <span>(621)</span>
                            </label>
                          </span>
                        </fieldset>
                      </form>
                      <div className="tg-advertisement">
                        <Link to="#">
                          <img
                            src="images/adds/img-01.jpg"
                            alt="image description"
                          />
                        </Link>
                      </div>
                    </aside>
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

const mapStateToProps = state => ({
  heavyshop: state.shop
});

export default connect(
  mapStateToProps,
  { shopUser }
)(Shop);

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error404 extends Component {
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
                    <li className="tg-active">404</li>
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
                    <div className="tg-404error">
                      <figure className="tg-errorimg">
                        <img src="images/404.png" alt="image description" />
                      </figure>
                      <div className="tg-errorcontent">
                        <h2>Oooops!</h2>
                        <div className="tg-description">
                          <p>Something Went Wrong With The Link :(</p>
                        </div>
                        <form className="tg-themeform tg-formsearch">
                          <fieldset>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Enter Your Email Here"
                            />
                            <button type="button" className="tg-btn">
                              Search
                            </button>
                          </fieldset>
                        </form>
                        <span className="tg-gobackhome">
                          OR You Can Go Back To <Link to="/">Main Page</Link>
                        </span>
                      </div>
                    </div>
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

export default Error404;

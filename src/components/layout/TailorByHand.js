import React, { Component } from "react";
import { Link } from "react-router-dom";

class TailorByHand extends Component {
  render() {
    return (
      <div>
        {/*************************************
					Tailor Your Hand Start
			**************************************/}
        <section className="tg-bglight tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="tg-shortcode tg-adinpanel">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 tg-verticalmiddle">
                  <div className="tg-shortcodeimg">
                    <figure>
                      <img src="images/img-09.png" alt="image description" />
                    </figure>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 tg-verticalmiddle">
                  <div className="tg-shortcodetext">
                    <div className="tg-heading">
                      <h2>Tailor In Your Hand</h2>
                    </div>
                    <div className="tg-description">
                      <p>
                        Consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore etaiatiea dolore magna aliqua
                        aseenim ad minim veniam, quis nostrud exercitation
                        ullaceo laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p>
                        Duis aute irure dolor in reprehenderit inchieach
                        voluptate velit esse cillum dolore eu fugiat cepteur
                        sint occaecat cupidatat non proident.
                      </p>
                    </div>
                    <ul className="tg-apps">
                      <li>
                        <a href="#">
                          <i className="fab fa-android" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-windows" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-apple" />
                        </a>
                      </li>
                    </ul>
                    <div className="tg-btns">
                      <Link className="tg-btn" to="#" target="_blank">
                        View Screenshots
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Tailor Your Hand End
			**************************************/}
      </div>
    );
  }
}

export default TailorByHand;

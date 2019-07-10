import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserMeasurment extends Component {
  render() {
    return (
      <div>
        {/*************************************
					Measurments Start
			**************************************/}
        <section className="tg-bglight tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="tg-shortcode tg-userfriendlymeasurments">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 tg-verticalmiddle">
                  <div className="tg-shortcodetext">
                    <div className="tg-heading">
                      <h2>User Friendly Measurments</h2>
                    </div>
                    <div className="tg-description">
                      <p>
                        Consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore etaiate dolore magna aliqua. Ut
                        enim ad minim veniam quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
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
                  <div className="tg-shortcodeimg">
                    <figure>
                      <img src="images/img-04.png" alt="image description" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Measurments End
			**************************************/}
      </div>
    );
  }
}

export default UserMeasurment;

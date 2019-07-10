import React, { Component } from "react";
import { Link } from "react-router-dom";

class TailorOnline extends Component {
  render() {
    return (
      <div>
        {/*************************************
					Tailor Online Start
			**************************************/}
        <section className="tg-sectionspace tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="tg-shortcode tg-tailoronline">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 tg-verticalmiddle">
                  <div className="tg-shortcodetext">
                    <div className="tg-heading">
                      <h2>Hi! We’re Tailor Online</h2>
                    </div>
                    <div className="tg-description">
                      <p>
                        Consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore etaiate dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit inchieach voluptate
                        velit esse cillum dolore eu fugiat.
                      </p>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sitateu
                        voluptatem accusantium doloremque laudantium.
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
                  <div className="tg-shortcodeimg tg-shortcodemultiimgs">
                    <figure>
                      <img src="images/img-01.jpg" alt="image description" />
                    </figure>
                    <figure>
                      <img src="images/img-02.jpg" alt="image description" />
                    </figure>
                    <figure>
                      <img src="images/img-03.jpg" alt="image description" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Tailor Online End
			**************************************/}
      </div>
    );
  }
}

export default TailorOnline;

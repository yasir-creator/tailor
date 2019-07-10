import React, { Component } from "react";
import { Link } from "react-router-dom";

class CallAction extends Component {
  render() {
    return (
      <div>
        {/*************************************
					Call to Action Start
			**************************************/}
        <section className="tg-sectionspace tg-bglight tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="tg-calltoaction">
                  <h2>Like Our Theme?</h2>
                  <h3>The Best Online Tailor Theme, Buy Now!</h3>
                  <Link to="#" className="tg-btn" target="_blank">
                    buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Call to Action End
			**************************************/}
      </div>
    );
  }
}

export default CallAction;

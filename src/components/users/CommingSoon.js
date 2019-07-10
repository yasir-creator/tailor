import React, { Component } from "react";
// import { url } from "inspector";

class CommingSoon extends Component {
  render() {
    return (
      <div>
        {/*************************************
				Main Start
    **************************************/}
        <div id="tg-wrapper" class="tg-wrapper tg-haslayout">
          <main
            id="tg-main"
            className="tg-main tg-haslayout tg-paddingzero"
            style={{
              backgroundImage: "url(images/bgcomingsoon.jpg)"
            }}
          >
            {/*************************************
					Comingsoon Start
			**************************************/}
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="tg-comingsooncontent">
                    <strong className="tg-logo">
                      <img src="images/logo.png" alt="image description" />
                    </strong>
                    <h2>Stay Tuned!</h2>
                    <h3>We’re Launching Very Soon</h3>
                    <div className="tg-commingsooncounter">
                      <div className="tg-counterbox">
                        <div id="tg-days" className="tg-counter" />
                      </div>
                      <div className="tg-counterbox">
                        <div id="tg-hours" className="tg-counter" />
                      </div>
                      <div className="tg-counterbox">
                        <div id="tg-minutes" className="tg-counter" />
                      </div>
                      <div className="tg-counterbox">
                        <div id="tg-seconds" className="tg-counter" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*************************************
					Comingsoon End
			**************************************/}
          </main>
          {/*************************************
				Main End
		**************************************/}
        </div>
      </div>
    );
  }
}

export default CommingSoon;

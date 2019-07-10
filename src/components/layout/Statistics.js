import React, { Component } from "react";

class Statistics extends Component {
  render() {
    return (
      <div>
        {/*************************************
					Statastic Start
			**************************************/}
        <section className="tg-sectionspace tg-bglight tg-haslayout">
          <div className="container">
            <div className="row">
              <div id="tg-statastics" className="tg-shortcode tg-statastics">
                <div className="tg-statastic">
                  <span className="tg-statasticicon">
                    <i className="icon-Icon_11" />
                  </span>
                  <h2>
                    <span
                      data-from={0}
                      data-to={598}
                      data-speed={8000}
                      data-refresh-interval={50}
                    >
                      598
                    </span>
                  </h2>
                  <h3>Happy Customers</h3>
                </div>
                <div className="tg-statastic">
                  <span className="tg-statasticicon">
                    <i className="icon-Icon_19" />
                  </span>
                  <h2>
                    <span
                      data-from={0}
                      data-to={1240}
                      data-speed={8000}
                      data-refresh-interval={50}
                    >
                      1240
                    </span>
                  </h2>
                  <h3>Location Pinned</h3>
                </div>
                <div className="tg-statastic">
                  <span className="tg-statasticicon">
                    <i className="icon-Icon_08" />
                  </span>
                  <h2>
                    <span
                      data-from={0}
                      data-to={2300}
                      data-speed={8000}
                      data-refresh-interval={50}
                    >
                      2300
                    </span>
                  </h2>
                  <h3>Suits Sketched</h3>
                </div>
                <div className="tg-statastic">
                  <span className="tg-statasticicon">
                    <i className="icon-Icon_18" />
                  </span>
                  <h2>
                    <span
                      data-from={0}
                      data-to={3650}
                      data-speed={8000}
                      data-refresh-interval={50}
                    >
                      3650
                    </span>
                  </h2>
                  <h3>Good Relation Built</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Statastic End
			**************************************/}
      </div>
    );
  }
}

export default Statistics;

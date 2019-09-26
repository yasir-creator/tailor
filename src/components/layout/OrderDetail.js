import React, { Component } from "react";
// import "./orderdetail.css";

class OrderDetail extends Component {
  render() {
    return (
      <div>
        <div
          className="card"
          // style={{
          //   marginTop: 20
          // }}
        >
          <h5
            className="card-header"
            style={{
              fontSize: 20,
              backgroundColor: "black",
              color: "white"
            }}
          >
            Product:
          </h5>
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                fontSize: 30
              }}
            >
              Business Wear
            </h5>
            <p
              className="card-text"
              style={{
                fontSize: 15
              }}
            >
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <h5>
              {" "}
              Size: <div className="btn btn-lg btn-primary rounded" />
            </h5>

            <div className="btn btn-lg btn-primary rounded" />
            <div className="btn btn-lg btn-primary rounded" />
          </div>
        </div>

        {/* <div
          className="container"
          style={{
            marginTop: 220,
            marginBottom: 10
          }}
        >
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="card mt-20">
                <div class="col-xs-12 col-sm-6 col-md-7 col-lg-8">
                <div
                  className="card-header"
                  style={{
                    alignItems: "left"
                  }}
                >
                  Featured
                </div>
                <div className="card-body">
                  <h5
                    className="card-title font-weight-bold"
                    style={{
                      fontSize: 25
                    }}
                  >
                    Business Wear
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontSize: 13
                    }}
                  >
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <h5>
                    Price:
                    <span />
                  </h5>
                  <h5>
                    Category:
                    <span />
                  </h5>
                  <h5>
                    Size:{" "}
                    <div
                      className="btn btn-primary rounded"
                      style={{
                        width: 50,
                        height: 30
                      }}
                    />
                    <span />
                  </h5>
                  <h5>
                    Quantity:{" "}
                    <div
                      className="btn btn-primary rounded"
                      style={{
                        width: 50,
                        height: 30
                      }}
                    />
                    <span />
                  </h5>
                  <h5>
                    Color:{" "}
                    <div
                      className="btn btn-primary rounded"
                      style={{
                        width: 50,
                        height: 30
                      }}
                    />
                    <span />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    );
  }
}

export default OrderDetail;

import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardnum: "",
      expiry: "",
      cvv: "",
      name: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const cardinfo = {
      cardnum: this.state.cardnum,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
      name: this.state.name
    };

    localStorage.setItem("Payment Detail", JSON.stringify(cardinfo));
    console.log("Successfully Paid", cardinfo);
    this.props.history.push("/orderdetails");
  };
  render() {
    return (
      <div>
        <div
          className="container"
          style={{
            marginTop: 220,
            marginBottom: 10
          }}
        >
          <div className="row">
            <div className="col-xs-12 col-md-4 col-md-offset-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="row">
                    <h3
                      className="text-center"
                      style={{
                        marginLeft: 95
                      }}
                    >
                      Payment Details
                    </h3>
                    <img
                      className="img-responsive cc-img"
                      src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"
                    />
                  </div>
                </div>
                <div className="panel-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="form-group">
                          <label
                            style={{
                              fontSize: 15
                            }}
                          >
                            CARD NUMBER
                          </label>
                          <div className="input-group">
                            <input
                              type="number"
                              name="cardnum"
                              className="form-control rounded"
                              value={this.state.cardnum}
                              placeholder="Valid Card Number"
                              onChange={this.onChange}
                              required
                            />
                            {/* <span className="input-group-addon rounded">
                              <span className="fa fa-credit-card" />
                            </span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-7 col-md-7">
                        <div className="form-group">
                          <label
                            style={{
                              fontSize: 15
                            }}
                          >
                            <span
                              className="hidden-xs"
                              style={{
                                fontSize: 15
                              }}
                            >
                              EXPIRATION
                            </span>
                            <span
                              className="visible-xs-inline"
                              style={{
                                fontSize: 15
                              }}
                            >
                              EXP
                            </span>{" "}
                            DATE
                          </label>
                          <input
                            type="date"
                            name="expiry"
                            className="form-control rounded"
                            value={this.state.expiry}
                            placeholder="DD / MM / YY"
                            onChange={this.onChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xs-5 col-md-5 pull-right">
                        <div className="form-group">
                          <label
                            style={{
                              fontSize: 15
                            }}
                          >
                            CVV
                          </label>
                          <input
                            type="number"
                            name="cvv"
                            className="form-control rounded"
                            value={this.state.cvv}
                            placeholder="CVV"
                            onChange={this.onChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="form-group">
                          <label
                            style={{
                              fontSize: 15
                            }}
                          >
                            CARD OWNER
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control rounded"
                            value={this.state.name}
                            placeholder="Card Owner Name"
                            onChange={this.onChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="panel-footer">
                      <div className="row">
                        <div className="col-xs-12">
                          <button
                            type="submit"
                            className="tg-btn  btn-lg btn-block rounded"
                          >
                            {/* <Link
                          to="/orderdetail"
                          style={{
                            color: "white",
                            textDecoration: "none"
                          }}
                        > */}{" "}
                            Process payment
                            {/* </Link> */}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;

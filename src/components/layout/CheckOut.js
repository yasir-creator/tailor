import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
// import { GET_ERRORS } from "../../actions/types";
// import { connect } from "net";

class CheckOut extends Component {
  state = {
    address: "",
    country: "",
    city: "",
    zip: "",
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault(); 

    const info = {
      address: this.state.address,
      country: this.state.country,
      city: this.state.city,
      zip: this.state.zip
    };

    localStorage.setItem("Info", JSON.stringify(info));
    console.log("INFO DATA", info);
    this.props.history.push("/payment");
  };

  render() {
    // const { errors } = this.state;
    return (
      <div>
        <div
          className="container "
          style={{
            backgroundColor: "gray",
            marginTop: 220,
            marginBottom: 10
          }}
        >
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label
                htmlFor="inputAddress"
                style={{
                  fontSize: 20
                }}
              >
                Address
              </label>
              <input
                name="address"
                type="text"
                className="form-control rounded"
                // {classnames("form-control rounded", {
                //   "is-invalid": errors.address
                // })}
                id="inputAddress"
                value={this.state.address}
                placeholder="Address Here"
                onChange={this.onChange}
                required
              />
              {/* {errors.address && (
                <div className="invalid-feedback">{errors.address}</div>
              )} */}
            </div>

            <div className="form">
              <div className="form-group col-md-6">
                <label
                  htmlFor="inputCity"
                  style={{
                    fontSize: 20
                  }}
                >
                  Country
                </label>
                <input
                  name="country"
                  type="text"
                  className="form-control rounded"
                  // {classnames("form-control rounded", {
                  //   "is-invalid": errors.country
                  // })}
                  id="inputCity"
                  value={this.state.country}
                  placeholder="Country"
                  onChange={this.onChange}
                  required
                />
                {/* {errors.address && (
                  <div className="invalid-feedback">{errors.country}</div>
                )} */}
              </div>
              <div className="form-group col-md-4">
                <label
                  htmlFor="inputState"
                  style={{
                    fontSize: 20
                  }}
                >
                  City
                </label>
                <select
                  name="city"
                  id="inputState"
                  className="form-control rounded"
                  // {classnames("form-control rounded", {
                  //   "is-invalid": errors.city
                  // })}
                  value={this.state.city}
                  onChange={this.onChange}
                  required
                  style={{
                    height: 40,
                    fontSize: "small"
                  }}
                  required
                >
                  {/* {errors.address && (
                    <div className="invalid-feedback">{errors.city}</div>
                  )} */}
                  <option selected>Select City</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                  <option>Faisalabad</option>
                  <option>Rawalpindi</option>
                  <option>Multan</option>
                  <option>Hyderabad</option>
                  <option>Gujranwala</option>
                  <option>Peshawar</option>
                  <option>Rahim Yar Khan</option>
                  <option>Quetta</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label
                  htmlFor="inputZip"
                  style={{
                    fontSize: 20
                  }}
                >
                  Zip
                </label>
                <input
                  type="number"
                  name="zip"
                  className="form-control rounded"
                  // {classnames("form-control rounded", {
                  //   "is-invalid": errors.zip
                  // })}
                  id="inputZip"
                  value={this.state.zip}
                  placeholder="Zip code"
                  onChange={this.onChange}
                  style={{
                    height: 40,
                    fontSize: "small"
                  }}
                />
                {/* {errors.address && (
                  <div className="invalid-feedback">{errors.zip}</div>
                )} */}
              </div>
            </div>

            <button
              type="submit"
              className="tg-btn   mb-2 rounded"
              style={{
                marginRight: 80
              }}
            >
              {" "}
              Check me out
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckOut;

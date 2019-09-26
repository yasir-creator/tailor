import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class MyOrders extends Component {
  state = {
    orderdata: null
  };

  // componentDidMount() {
  //   let orderdata = JSON.parse(localStorage.getItem(""));
  // }
  render() {
    return (
      <div>
        <div className="container">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th
                  scope="col"
                  style={{
                    fontSize: 15
                  }}
                >
                  #
                </th>
                <th
                  scope="col"
                  style={{
                    fontSize: 15
                  }}
                >
                  Ordered On
                </th>
                <th
                  scope="col"
                  style={{
                    fontSize: 15
                  }}
                >
                  Status
                </th>
                <th
                  scope="col"
                  style={{
                    fontSize: 15
                  }}
                >
                  Total
                </th>
                <th
                  scope="col"
                  style={{
                    fontSize: 15
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td> Time</td>
                <td>Active</td>
                <td>$123</td>
                <td>
                  <button className="btn btn-primary btn-lg rounded">
                    <Link
                      to="/orderdetail"
                      style={{
                        color: "white",
                        textDecoration: "none"
                      }}
                    >
                      Detail
                    </Link>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

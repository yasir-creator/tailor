import React, { Component } from "react";
import { Link } from "react-router-dom";

class orderDetails extends Component {
  state = {
    arraydata: null,
    address: "",
    price: ""
  };

  componentDidMount() {
    let arraydata = JSON.parse(localStorage.getItem("Cart"));
    this.setState({ arraydata: arraydata });

    console.log("Retrieved Object from localstorage: ", arraydata);

    let address = JSON.parse(localStorage.getItem("Info"));
    this.setState({ address: address });
    console.log("Got it", address);
  }
  render() {
    const { arraydata } = this.state;
    const { address } = this.state;

    console.log(this.state);
    let cartitems;

    var totalPrice = 0;

    console.log(this.state);
    if (arraydata === null || arraydata === undefined) {
      cartitems = <h1>loading</h1>;
    } else {
      if (this.state.arraydata.length > 0) {
        console.log("khgjkhgiashgkhakhkahkahaihfkashfkhfkdfhk");
        cartitems = arraydata.map(
          arraydata => (
            (totalPrice = arraydata.price + totalPrice),
            (
              <tr>
                <td
                  style={{
                    fontSize: 15,
                    width: 500
                  }}
                >
                  {arraydata.name}
                </td>
                <td
                  style={{
                    width: 150
                  }}
                >
                  {" "}
                  <img
                    style={{
                      height: 50,
                      width: 50
                    }}
                    src={arraydata.photoUrl[0].split(",")[0]}
                    className="card-img-top"
                    alt="Card image cap"
                  />
                </td>
                <td
                  style={{
                    fontSize: 15,
                    width: 10
                  }}
                >
                  {arraydata.qty}
                </td>

                <td
                  style={{
                    fontSize: 15,
                    width: 90
                  }}
                >
                  ${arraydata.price}
                </td>
              </tr>
            )
          )
        );
      } else {
        cartitems = <h2>Nothing</h2>;
      }
    }

    return (
      <div>
        <div className="container">
          <h1 className="heading font-weight-bold">Complete Order</h1>
          <table className="table">
            <thead className="thead-dark">
              <tr
                style={{
                  height: 50
                }}
              >
                <th
                  scope="col"
                  style={{
                    fontSize: 15
                  }}
                >
                  Name
                </th>
                <th
                  scope="col"
                  style={{
                    fontSize: 15
                  }}
                >
                  Picture
                </th>
                <th
                  scope="col"
                  style={{
                    fontSize: 15
                  }}
                >
                  Quantity
                </th>

                <th
                  scope="col"
                  style={{
                    fontSize: 15
                  }}
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody>{cartitems}</tbody>
            <tfoot>
              <tr>
                <td
                  colspan="3"
                  className="font-weight-bold"
                  style={{
                    fontSize: 20
                  }}
                >
                  TOTAL
                </td>
                <td
                  style={{
                    color: "green",
                    fontSize: 20
                  }}
                >
                  ${totalPrice}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div
          style={{
            marginRight: 800
          }}
        >
          {" "}
          {address.address} {address.city} {address.zip} {address.country}
        </div>

        <button className="tg-btn mb-5">
          <Link
            to="/myorder"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Place Order
          </Link>
        </button>
      </div>
    );
  }
}

export default orderDetails;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddToCart extends Component {
  state = {
    arraydata: null,
    price: ""
  };

  componentDidMount() {
    // console.log(arraydata);
    let arraydata = JSON.parse(localStorage.getItem("Cart"));
    this.setState({ arraydata: arraydata });

    console.log("Retrieved Object from localstorage: ", arraydata);
  }

  // onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // handleClick = product => {
  //   console.log("hello", product);
  //   var arraydata = JSON.parse(localStorage.getItem("Cart"));
  // e.preventDefault();
  // const user = {
  //   name: this.state.name,
  //   phone: this.state.phone
  // };

  render() {
    const { arraydata } = this.state;
    let a;

    var totalPrice = 0;

    console.log(this.state);
    if (arraydata === null || arraydata === undefined) {
      a = <h1>loading</h1>;
    } else {
      if (this.state.arraydata.length > 0) {
        console.log("khgjkhgiashgkhakhkahkahaihfkashfkhfkdfhk");
        a = arraydata.map(
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
        a = <h2>Nothing</h2>;
      }
    }
    return (
      <div>
        <div className="container">
          <h1 className="heading font-weight-bold">Your Selected Items</h1>
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
            <tbody>{a}</tbody>
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

        <button className="tg-btn mb-5">
          <Link
            to="/checkout"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Check Out
          </Link>
        </button>
      </div>
    );
  }
}

export default AddToCart;

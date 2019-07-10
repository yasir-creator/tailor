import React, { Component } from "react";

class AddToCart extends Component {
  state = {
    arraydata: null
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
    console.log(this.state);
    if (arraydata === null || arraydata === undefined) {
      a = <h1>loading</h1>;
    } else {
      if (this.state.arraydata.length > 0) {
        console.log("khgjkhgiashgkhakhkahkahaihfkashfkhfkdfhk");
        a = arraydata.map(arraydata => (
          <div
            key={arraydata._id}
            className="card-deck "
            style={{
              padding: 5,
              justifyContent: "center",
              margin: "auto"
            }}
          >
            <div
              className="card "
              // style={{
              // marginBottom: 10

              // }}
            >
              <img
                style={{
                  height: 300,
                  width: 300
                }}
                src={arraydata.photoUrl[0].split(",")[0]}
                className="card-img-top"
                alt="Card image cap"
              />
              <div
                className="card-body"
                // style={{
                //   height: 100
                // }}
              >
                <h5 className="card-title">{arraydata.name}</h5>
                <p className="card-text">{arraydata.price}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        ));
      } else {
        a = <h2>Nothing</h2>;
      }
    }
    return (
      <div className="container">
        <h1 className="heading">Your Selected Items</h1>
        <div className="row">{a}</div>
      </div>
    );
  }
}

export default AddToCart;

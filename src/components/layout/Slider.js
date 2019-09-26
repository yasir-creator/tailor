import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          stopOnHover={false}
          infiniteLoop={true}
        >
          <div>
            <img
              className="d-block w-100"
              src="images/slider/banner1.png"
              alt="First slide"
            />
          </div>
          <div>
            <img
              className="d-block w-100"
              src="images/slider/banner4.jpg"
              alt="second slide"
            />
          </div>
          <div>
            <img
              className="d-block w-100"
              src="images/slider/banner5.jpg"
              alt="Third slide"
            />
          </div>
          <div>
            <img
              className="d-block w-100"
              src="images/bgcomingsoon3.jpg"
              alt="Third slide"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Slider;

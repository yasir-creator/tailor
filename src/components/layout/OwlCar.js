import React, { Component } from "react";

import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel2";
// import "../src/owl.theme.default.css";
// import "./style.css";

class OwlCar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [
        <div key={1} className="item">
          <img src="/images/ban2.jpg" />
        </div>,
        <div key={2} className="item">
          <img src="/images/banner-2.png" />
        </div>,
        <div key={3} className="item">
          <img src="/images/banner4.jpg" />
        </div>
        // <div key={4} className="item">
        //   <img src="/images/banner5.jpg" />
        // </div>
        // <div key={5} className="item">
        //   <img src="/images/homepage.jpg" />
        // </div>
        // <div key={6} className="item">
        //   <img src="/images/main_slider1-1.jpg" />
        // </div>
      ],

      itemNo: 1,
      loop: false,
      nav: false,
      rewind: true,
      autoplay: true
    };
  }

  startPlay() {
    this.setState({
      autoplay: true
    });
  }

  stopPlay() {
    this.setState({
      autoplay: false
    });
  }

  addItem() {
    let items = this.state.items;
    let newItem = (
      <div key={this.state.items.length + 1} className="item">
        <img src="/images/adeel-cover.jpg" />
      </div>
    );
    items.push(newItem);
    this.setState({ items });
  }

  newOptions() {
    this.setState({
      nav: true // Show next and prev buttons
    });
  }

  render() {
    const options = {
      items: this.state.itemNo,
      loop: this.state.loop,
      nav: this.state.nav,
      rewind: this.state.rewind,
      autoplay: this.state.autoplay
    };

    const events = {
      onDragged: function(event) {
        console.log("onDragged: " + event.type);
      },
      onChanged: function(event) {
        console.log("onChanged: " + event.type);
      },
      onTranslate: function(event) {
        console.log("onTranslate: " + event.type);
      }
    };

    return (
      <div>
        <OwlCarousel ref="car" options={options} events={events}>
          {this.state.items}
        </OwlCarousel>

        <button onClick={() => this.refs.car.prev()}>prev</button>

        <button onClick={() => this.refs.car.next()}>next</button>

        <button onClick={() => this.refs.car.goTo(0)}>goTo</button>

        <button onClick={this.startPlay.bind(this)}>play</button>

        <button onClick={this.stopPlay.bind(this)}>stop</button>

        <button onClick={this.addItem.bind(this)}>Add New</button>

        <button onClick={this.newOptions.bind(this)}>New Options</button>
      </div>
    );
  }
}
export default OwlCar;

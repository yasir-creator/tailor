import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Slider from "./Slider";
import TeamMembers from "./TeamMembers";
import NewsArticle from "./NewsArticle";
import FeaturedProducts from "./FeaturedProducts";
import TailorOnline from "./TailorOnline";
import Statistics from "./Statistics";
import UserMeasurment from "./UserMeasurment";
import ProductCategories from "./ProductCategories";
import TailorByHand from "./TailorByHand";
import CallAction from "./CallAction";
// import { isAbsolute } from "path";

class Home extends Component {
  render() {
    return (
      <div id="tg-wrapper" className="tg-wrapper tg-haslayout">
        {/* <h2>my app</h2> */}
        {/*************************************
          Home Slider Start
      **************************************/}

        <Slider />

        {/*************************************
          Home Slider End
      **************************************/}
        {/*************************************
          Main Start
      **************************************/}
        <main id="tg-main" className="tg-main tg-haslayout">
          {/*************************************
					Tailor Online Start
			**************************************/}
          <TailorOnline />
          {/*************************************
					Tailor Online End
			**************************************/}
          {/*************************************
					Statastic Start
			**************************************/}
          <Statistics />
          {/*************************************
					Statastic End
			**************************************/}
          {/*************************************
					Featured Products Start
			**************************************/}
          <FeaturedProducts />
          {/*************************************
					Featured Products End
			**************************************/}
          {/*************************************
					Measurments Start
			**************************************/}
          <UserMeasurment />
          {/*************************************
					Measurments End
			**************************************/}
          {/*************************************
					Product Categories Start
			**************************************/}
          <ProductCategories />
          {/*************************************
					Product Categories End
			**************************************/}
          {/*************************************
					Tailor Your Hand Start
			**************************************/}
          <TailorByHand />
          {/*************************************
					Tailor Your Hand End
			**************************************/}
          {/*************************************
					Team Members Start
      **************************************/}
          <TeamMembers />
          {/*************************************
					Team Members End
			**************************************/}
          {/*************************************
					Call to Action Start
			**************************************/}
          <CallAction />
          {/*************************************
					Call to Action End
			**************************************/}
          {/*************************************
					Latest News Start
			**************************************/}
          <NewsArticle />
          {/*************************************
					Latest News End
			**************************************/}
        </main>
        {/*************************************
          Main End
      **************************************/}
      </div>
    );
  }
}

export default Home;

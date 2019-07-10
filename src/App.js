import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import { Provider } from "react-redux";

import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

// import logo from "./logo.svg";

import Home from "./components/layout/Home";
import Header from "./components/layout/Header";
import Slider from "./components/layout/Slider";
import AddToCart from "./components/layout/AddToCart";
import TailorOnline from "./components/layout/TailorOnline";
import Statistics from "./components/layout/Statistics";
import UserMeasurment from "./components/layout/UserMeasurment";
import ProductCategories from "./components/layout/ProductCategories";
import TailorByHand from "./components/layout/TailorByHand";
import TeamMembers from "./components/layout/TeamMembers";
import CallAction from "./components/layout/CallAction";
import NewsArticle from "./components/layout/NewsArticle";
import FeaturedProducts from "./components/layout/FeaturedProducts";
import Footer from "./components/layout/Footer";
import Register from "./components/layout/Register";
import Login from "./components/layout/Login";
import Shirt from "./components/catagories/Shirt";
import Blazers from "./components/catagories/Blazers";
import Pants from "./components/catagories/Pants";
import HowitWorks from "./components/catagories/HowitWorks";
import ContactUs from "./components/catagories/ContactUs";
import Shop from "./components/users/shop/Shop";
import ProductDetail from "./components/users/shop/ProductDetail";
import BlogGrid from "./components/users/blog/BlogGrid";
import BlogDetail from "./components/users/blog/BlogDetail";
import BlogList from "./components/users/blog/BlogList";
import About from "./components/users/About";
import Error404 from "./components/users/Error404";
import CommingSoon from "./components/users/CommingSoon";

import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //  Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user an isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current profile
    // Redirect to login
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/slider" component={Slider} />
          <Route exact path="/onlinetailor" component={TailorOnline} />
          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/usermeasurment" component={UserMeasurment} />
          <Route
            exact
            path="/productcategories"
            component={ProductCategories}
          />
          <Route exact path="/tailorbyhand" component={TailorByHand} />
          <Route exact path="/callaction" component={CallAction} />
          <Route exact path="/team" component={TeamMembers} />
          <Route exact path="/newsarticle" component={NewsArticle} />
          <Route exact path="/featureproducts" component={FeaturedProducts} />
          <Route exact path="/" component={Home} />
          <Switch>
            <PrivateRoute exact path="/shirt" component={Shirt} />
            <PrivateRoute exact path="/blazers" component={Blazers} />
            <PrivateRoute exact path="/pants" component={Pants} />
          </Switch>
          <Route exact path="/howitwork" component={HowitWorks} />
          <Route exact path="/contactus" component={ContactUs} />
          <Switch>
            <PrivateRoute exact path="/shop" component={Shop} />
            <PrivateRoute exact path="/shopdetail" component={ProductDetail} />
          </Switch>

          <Switch>
            <PrivateRoute exact path="/newsgrid" component={BlogGrid} />
            <PrivateRoute exact path="/newsdetail" component={BlogDetail} />
            <PrivateRoute exact path="/newslist" component={BlogList} />
          </Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/404" component={Error404} />
          <Route exact path="/comingsoon" component={CommingSoon} />

          <Route exact path="/addtocart" component={AddToCart} />

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

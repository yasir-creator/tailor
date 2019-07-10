import axios from "axios";
import { GET_ERRORS, GET_SHOP_PRODUCTS } from "../actions/types";

// Get shop products
export const shopUser = () => dispatch => {
  axios
    .get("http://198.245.53.50:3000/api/universal/shop/products")
    .then(res => {
      // console.log(res);
      dispatch({
        type: GET_SHOP_PRODUCTS,
        payload: res.data
      });
    })
    .catch(e =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    );
};

// Set shop product
export const getShopProduct = decoded => {
  console.log("yeah got it", decoded);
  return {
    type: GET_SHOP_PRODUCTS,
    payload: decoded
  };
};
